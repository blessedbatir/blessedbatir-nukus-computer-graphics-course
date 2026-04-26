import { useState } from 'react';
import { auth, db } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { collection, query, getDocs, orderBy, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import { LayoutDashboard, Users as UsersIcon, FileText, Settings as SettingsIcon, LogOut, ShieldCheck, Search, Trash2, Eye, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [user, setUser] = useState(auth.currentUser);
  const [isAdmin, setIsAdmin] = useState(false);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'registrations' | 'posts' | 'settings'>('registrations');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (u) => {
      setUser(u);
      if (u && u.email === 'blessedbatir@gmail.com') {
        setIsAdmin(true); 
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (isAdmin && activeTab === 'registrations') {
      const q = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
      const unsub = onSnapshot(q, (snapshot) => {
        setRegistrations(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return unsub;
    }
  }, [isAdmin, activeTab]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Set custom parameters to force account selection and avoid some popup hanging issues
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        alert('Popup blocked by your browser. Please allow popups for this site to sign in.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.warn('Popup request cancelled by user or another request.');
      } else {
        console.error("Login Error:", error.message);
      }
    }
  };

  const handleDeleteRegistration = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      try {
        const { deleteDoc, doc } = await import('firebase/firestore');
        await deleteDoc(doc(db, 'registrations', id));
      } catch (error) {
        console.error("Error deleting registration:", error);
      }
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) return <div className="h-screen flex items-center justify-center font-bold text-blue-600">Loading Dashboard...</div>;

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center space-y-8 border border-gray-100">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Admin Portal</h1>
            <p className="text-gray-500">Secure access for educational administrators of Nukus Graphics Center.</p>
          </div>
          <div className="space-y-3">
            <Button size="lg" className="w-full" onClick={handleLogin}>Sign in as Administrator</Button>
            <Link to="/" className="block">
              <Button variant="outline" size="lg" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center space-y-6 border border-gray-100">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
            <p className="text-gray-500">You are logged in as <span className="font-bold">{user.email}</span>, but you do not have administrative privileges.</p>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full" onClick={handleLogout}>Sign Out and Try Another Account</Button>
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 hidden lg:flex flex-col p-8 space-y-8">
        <div className="flex flex-col space-y-4 pb-6 border-b border-gray-100">
          <Link to="/" className="flex items-center text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest group">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Site
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <span className="font-bold text-xl uppercase tracking-tighter">CMS v1.0</span>
          </div>
        </div>
        <nav className="flex-grow space-y-2">
          <SidebarItem active={activeTab === 'registrations'} icon={UsersIcon} label="Enrollments" onClick={() => setActiveTab('registrations')} />
          <SidebarItem active={activeTab === 'posts'} icon={FileText} label="Blog Manager" onClick={() => setActiveTab('posts')} />
          <SidebarItem active={activeTab === 'settings'} icon={SettingsIcon} label="Site Settings" onClick={() => setActiveTab('settings')} />
        </nav>
        <button onClick={handleLogout} className="flex items-center space-x-3 text-red-500 font-bold hover:bg-red-50 p-4 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-auto">
        <header className="flex justify-between items-end mb-12">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="lg:hidden flex items-center text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest group mb-2">
              <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Site
            </Link>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 capitalize">{activeTab}</h2>
              <p className="text-gray-500">Manage your website content and user data.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <img src={user.photoURL || ''} className="w-8 h-8 rounded-full" alt="Admin" />
            <span className="font-bold text-sm text-gray-700">{user.displayName}</span>
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'registrations' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
                <div className="flex justify-between mb-8">
                  <div className="relative w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input type="text" placeholder="Filter names..." className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm" />
                  </div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{registrations.length} Total</div>
                </div>
                
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">
                      <th className="pb-4">Full Name</th>
                      <th className="pb-4">Phone</th>
                      <th className="pb-4">Course</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map(reg => (
                      <tr key={reg.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                        <td className="py-4 font-bold text-gray-900">{reg.fullName}</td>
                        <td className="py-4 text-gray-600">{reg.phone}</td>
                        <td className="py-4"><span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{reg.courseId}</span></td>
                        <td className="py-4 text-xs text-gray-400">{reg.createdAt?.toDate().toLocaleDateString() || 'Pending...'}</td>
                        <td className="py-4 text-right space-x-2">
                           <button className="p-2 text-gray-300 hover:text-blue-600 transition-colors"><Eye className="w-4 h-4" /></button>
                           <button 
                             onClick={() => handleDeleteRegistration(reg.id)}
                             className="p-2 text-gray-300 hover:text-red-600 transition-colors"
                           >
                             <Trash2 className="w-4 h-4" />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'posts' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-16 text-center space-y-4">
                <FileText className="w-16 h-16 text-gray-200 mx-auto" />
                <h3 className="text-xl font-bold">Blog Manager</h3>
                <p className="text-gray-500 max-w-sm mx-auto">Click "Create New" to start writing a new blog post for the Nukus Graphics audience.</p>
                <Button>Create New Post</Button>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8 max-w-2xl">
                <h3 className="text-xl font-bold mb-8">Global Site Customization</h3>
                <div className="space-y-6">
                  {[
                    { label: "Site Primary Color", type: "color", value: "#2563eb" },
                    { label: "Hero Headline", type: "text", value: "Master Computer Graphics in Nukus" },
                    { label: "Contact Phone", type: "tel", value: "+998 93 095 77 78" }
                  ].map(s => (
                    <div key={s.label} className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">{s.label}</label>
                      <input type={s.type} defaultValue={s.value} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  ))}
                  <Button className="w-full">Save Configuration</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ active, icon: Icon, label, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center space-x-3 p-4 rounded-2xl transition-all font-bold text-sm",
        active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
