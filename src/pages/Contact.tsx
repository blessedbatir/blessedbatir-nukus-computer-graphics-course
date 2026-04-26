import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Instagram, Facebook } from 'lucide-react';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(9, { message: "Enter a valid phone number" }),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().min(10, { message: "Tell us a bit about your goal" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'registrations'), {
        ...data,
        courseId: 'computer-graphics-main',
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'registrations');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Map Placeholder */}
      <section className="h-64 md:h-96 w-full bg-gray-200 relative grayscale px-4">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
                <MapPin className="w-10 h-10 md:w-12 h-12 text-blue-600 mx-auto animate-bounce" />
                <p className="font-bold text-gray-900">{t('contact.address')}</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">Visit us at our central campus for personal consultation.</p>
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-4 -mt-12 md:mt-[-4rem] relative z-10">
        <div className="bg-white rounded-[2rem] md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-slate-900 p-8 md:p-12 text-white space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight">{t('contact.title')}</h2>
              <p className="text-slate-400 text-sm md:text-base">Our team is ready to help you choose the right path for your digital career.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">{t('contact.phone')}</p>
                  <p className="font-bold text-base md:text-lg">+998 93 095 77 78</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold text-base md:text-lg">blessedbatir@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Chat</p>
              <div className="flex gap-4">
                <a href="https://t.me/BlessedBatyr" className="p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all"><Send className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-8 md:p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-16 h-16 md:w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 md:w-10 h-10" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold">Successfully Sent!</h2>
                    <p className="text-gray-500 text-sm md:text-base">{t('contact.success')}</p>
                </div>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('contact.form_name')}</label>
                    <input 
                      {...register('fullName')}
                      placeholder="Azamat Allanazarov" 
                      className={cn(
                        "w-full bg-slate-50 border px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-sm",
                        errors.fullName ? "border-red-300" : "border-slate-100"
                      )}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('contact.form_phone')}</label>
                    <input 
                      {...register('phone')}
                      placeholder="+998" 
                      className={cn(
                        "w-full bg-slate-50 border px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-sm",
                        errors.phone ? "border-red-300" : "border-slate-100"
                      )}
                    />
                    {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address (Optional)</label>
                    <input 
                      {...register('email')}
                      placeholder="blessedbatir@gmail.com" 
                      className="w-full bg-slate-50 border border-slate-100 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-sm"
                    />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Your Goals</label>
                  <textarea 
                    {...register('message')}
                    rows={4} 
                    placeholder="Tell us what you want to achieve..." 
                    className={cn(
                      "w-full bg-slate-50 border px-6 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none font-medium text-sm",
                      errors.message ? "border-red-300" : "border-slate-100"
                    )}
                  />
                  {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
                </div>

                <Button size="lg" className="w-full py-4 md:py-5 rounded-2xl md:rounded-3xl text-xs md:text-sm tracking-widest uppercase font-black" disabled={loading}>
                  {loading ? 'Sending Request...' : t('hero.cta')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
