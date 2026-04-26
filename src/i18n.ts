import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        courses: 'Courses',
        portfolio: 'Portfolio',
        features: 'Features',
        blog: 'Blog',
        contact: 'Contact',
        enroll: 'Enroll Now'
      },
      hero: {
        title: 'Master Computer Graphics in Nukus',
        subtitle: 'From Beginner to Professional in 8 Weeks. Hands-on learning with industry mentors.',
        cta: 'Enroll Now',
        syllabus: 'View Syllabus',
        batch_info: 'Enrollment Open for Autumn 2026',
        modules_title: 'Modules You\'ll Master'
      },
      stats: {
        duration: '8 Weeks',
        duration_label: 'Duration',
        level: 'Beginner Friendly',
        level_label: 'Level',
        focus: 'Practical Skills',
        focus_label: 'Practical'
      },
      home: {
        testimonial_quote: '"This course in Nukus changed my career path. Now I work as a remote UI Designer for a tech hub!"',
        testimonial_author: 'Azamat Allanazarov',
        testimonial_year: 'Class of 2025',
        highlights: {
          h1_title: '8 Weeks Intensive',
          h1_desc: 'Short duration, high impact curriculum designed for rapid skill acquisition.',
          h2_title: 'Expert Mentorship',
          h2_desc: 'Learn directly from professional designers currently working in the industry.',
          h3_title: 'Project Based',
          h3_desc: 'No boring lectures. Build 5+ real-world projects for your professional portfolio.'
        }
      },
      about_page: {
        title: 'About Our Academy',
        subtitle: 'Leading digital arts education in the Republic of Karakalpakstan since 2019.',
        mission_title: 'Our Mission',
        mission_desc: 'To provide accessible, high-quality computer graphics training to the youth of Nukus, equipping them with universal digital skills that transcend geographic boundaries.',
        vision_title: 'Our Vision',
        vision_desc: 'To become the central hub for creative technology in Karakalpakstan, fostering a community of world-class digital designers and artists.',
        why_title: 'Why Choose Us in Nukus?',
        why_subtitle: 'We understand the local landscape and the global demand for creative talent.',
        feature1_title: 'Central Location',
        feature1_desc: 'Easily accessible campus in the heart of Nukus with modern computer labs.',
        feature2_title: 'Local Community',
        feature2_desc: 'Network with peers from Karakalpakstan and build collaborative projects together.',
        feature3_title: 'Native Support',
        feature3_desc: 'Training available in local languages to ensure deep understanding of complex concepts.'
      },
      courses_page: {
        title: 'Computer Graphics Mastery',
        subtitle: 'A comprehensive 8-week program designed to take you from absolute beginner to a professional designer with a robust portfolio.',
        batch: 'Next Batch: May 15',
        seats: 'Limited to 15 Seats',
        curriculum_title: 'The Curriculum',
        curriculum_subtitle: 'A structured path to professional competence.',
        total_hours: 'Total: 48 Hours Live Training',
        investment_title: 'Investment in your Future',
        investment_subtitle: 'We offer flexible payment options and group discounts for students in Nukus.',
        reg_fee: 'Registration Fee',
        reg_fee_desc: 'Includes all software access & materials',
        cert_title: 'Certificate of Completion',
        cert_desc: 'Internationally recognized digital credentials',
        access: 'Full 8-Week Access',
        price: 'Call for Price',
        installments: 'Flexible installments available',
        apply: 'Apply to Batch',
        modules: {
          m1: 'Module 1',
          m1_title: 'Foundations of Visual Design',
          m2: 'Module 2',
          m2_title: 'Adobe Creative Suite',
          m3: 'Module 3',
          m3_title: 'UI/UX & Branding',
          m4: 'Module 4',
          m4_title: '3D Animation & Final Project',
          topics: {
            m1: ["Color Theory", "Typography", "Composition", "Design Thinking"],
            m2: ["Photoshop", "Illustrator", "Project: Logo Design"],
            m3: ["UI/UX Basics", "Design Systems", "Brand Guidelines"],
            m4: ["Intro to Blender", "Basic Modeling", "Portfolio Presentation"]
          }
        }
      },
      features_page: {
        title: 'Our Learning Ecosystem',
        subtitle: 'We don\'t just teach software; we build careers. Our platform is designed to give you a complete professional edge.',
        highlights: {
          h1_title: 'Practical Assignments',
          h1_desc: 'Every module ends with a project. Build stuff, don\'t just watch videos.',
          h2_title: 'Certification',
          h2_desc: 'Get a verified certificate of completion recognized by local and international firms.',
          h3_title: 'Mentorship',
          h3_desc: 'One-on-one reviews of your work every week by industrial professionals.',
          h4_title: 'Job Support',
          h4_desc: 'We help you prepare your CV, portfolio, and connect you with hiring partners in Nukus and beyond.',
          h5_title: 'Lifetime Access',
          h5_desc: 'Revisit course materials and our student community anytime, even after graduation.',
          h6_title: 'Client Readiness',
          h6_desc: 'Learn how to handle freelance clients, contracts, and project management.'
        },
        banner_title: 'Ready to join your first professional studio?',
        banner_subtitle: 'Our alumni are working at some of the best design houses. You could be next.'
      },
      contact: {
        title: 'Get in Touch',
        phone: 'Phone',
        address: 'Nukus, Republic of Karakalpakstan',
        form_name: 'Full Name',
        form_phone: 'Phone Number',
        form_submit: 'Send Message',
        success: 'Thank you! We will contact you soon.'
      },
      portfolio_page: {
        title: 'Student Showcase',
        subtitle: 'Exploring the creative boundaries of our students in Nukus. Each project represents hours of dedicated learning and practical application.',
        categories: {
          all: 'All',
          design: 'Design',
          branding: 'Branding',
          three_d: '3D',
          social: 'Social Media'
        },
        project_by: 'By'
      },
      blog_page: {
        title: 'Design Insights',
        subtitle: 'Articles, tutorials, and news from our center.',
        search: 'Search articles...',
        read_more: 'Read Article',
        tags: {
          community: 'Community',
          tutorials: 'Tutorials',
          theory: 'Theory'
        }
      },
      footer: {
        rights: 'All rights reserved.',
        academy_name: 'Computer Graphics Nukus'
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Biz haqimizda',
        courses: 'Kurslar',
        portfolio: 'Portfolio',
        features: 'Afzalliklar',
        blog: 'Blog',
        contact: 'Aloqa',
        enroll: 'Roʻyxatdan oʻtish'
      },
      hero: {
        title: 'Nukusda Kompyuter Grafikasini Oʻrganing',
        subtitle: '8 haftada boshlangʻichdan professionalgacha. Amaliy tajriba va mentorlik.',
        cta: 'Roʻyxatdan oʻtish',
        syllabus: 'Dasturni koʻrish',
        batch_info: '2026-yil kuzgi qabul ochiq',
        modules_title: 'Siz oʻrganadigan modullar'
      },
      stats: {
        duration: '8 Hafta',
        duration_label: 'Davomiyligi',
        level: 'Boshlanuvchilar uchun',
        level_label: 'Daraja',
        focus: 'Amaliy koʻnikmalar',
        focus_label: 'Amaliyot'
      },
      home: {
        testimonial_quote: '"Nukusdagi ushbu kurs hayotimni oʻzgartirdi. Hozirda men yirik texnoparkda masofaviy UI dizayner boʻlib ishlayapman!"',
        testimonial_author: 'Azamat Allanazarov',
        testimonial_year: '2025-yil bitiruvchisi',
        highlights: {
          h1_title: '8 haftalik intensiv',
          h1_desc: 'Qisqa muddatli, ammo yuqori natijali oʻquv dasturi.',
          h2_title: 'Ekspert mentorlik',
          h2_desc: 'Soha mutaxassislaridan bevosita oʻrganing.',
          h3_title: 'Loyiha asosida',
          h3_desc: 'Nazariyadan koʻra amaliyotga koʻproq eʼtibor qaratamiz.'
        }
      },
      about_page: {
        title: 'Akademiyamiz haqida',
        subtitle: '2019-yildan buyon Qoraqalpogʻiston Respublikasida raqamli sanʼat boʻyicha yetakchi taʼlim.',
        mission_title: 'Bizning vazifamiz',
        mission_desc: 'Nukus yoshlariga qulay va yuqori sifatli kompyuter grafikasi boʻyicha treninglar taqdim etish.',
        vision_title: 'Bizning maqsadimiz',
        vision_desc: 'Qoraqalpogʻistondagi ijodiy texnologiyalarning markaziga aylanish.',
        why_title: 'Nima uchun bizni tanlashadi?',
        why_subtitle: 'Biz mahalliy sharoitni va global talabni yaxshi tushunamiz.',
        feature1_title: 'Markaziy joylashuv',
        feature1_desc: 'Nukus markazidagi zamonaviy kompyuter laboratoriyalariga ega kampus.',
        feature2_title: 'Mahalliy hamjamiyat',
        feature2_desc: 'Qoraqalpogʻistonlik tengdoshlar bilan muloqot va hamkorlikdagi loyihalar.',
        feature3_title: 'Ona tilida qoʻllab-quvvatlash',
        feature3_desc: 'Murakkab tushunchalarni chuqur oʻrganish uchun mahalliy tillarda oʻqitiladi.'
      },
      courses_page: {
        title: 'Kompyuter grafikasi mahorati',
        subtitle: 'Sizni noldan professional dizayner darajasiga olib chiqadigan 8 haftalik dastur.',
        batch: 'Keyingi guruh: 15-may',
        seats: 'Faqat 15 ta joy',
        curriculum_title: 'Oʻquv dasturi',
        curriculum_subtitle: 'Professional mahoratga eltuvchi yoʻl.',
        total_hours: 'Jami: 48 soatlik jonli trening',
        investment_title: 'Kelajagingizga sarmoya',
        investment_subtitle: 'Biz moslashuvchan toʻlov usullarini taklif etamiz.',
        reg_fee: 'Roʻyxatdan oʻtish toʻlovi',
        reg_fee_desc: 'Barcha dasturlar va materiallarni oʻz ichiga oladi',
        cert_title: 'Tugatish sertifikati',
        cert_desc: 'Xalqaro miqyosda tan olingan raqamli hujjat',
        access: '8 haftalik toʻliq kirish',
        price: 'Narxni bilish uchun qoʻngʻiroq qiling',
        installments: 'Boʻlib toʻlash imkoniyati mavjud',
        apply: 'Guruhga qoʻshilish',
        modules: {
          m1: '1-modul',
          m1_title: 'Vizual dizayn asoslari',
          m2: '2-modul',
          m2_title: 'Adobe Creative Suite',
          m3: '3-modul',
          m3_title: 'UI/UX va Brending',
          m4: '4-modul',
          m4_title: '3D animatsiya va yakuniy loyiha',
          topics: {
            m1: ["Ranglar nazariyasi", "Tipografika", "Kompozitsiya", "Dizayn tafakkuri"],
            m2: ["Photoshop", "Illustrator", "Loyiha: Logo dizayni"],
            m3: ["UI/UX asoslari", "Dizayn tizimlari", "Brend qoidalari"],
            m4: ["Blender dasturiga kirish", "3D modellashtirish", "Portfolio taqdimoti"]
          }
        }
      },
      features_page: {
        title: 'Bizning taʼlim ekotizimimiz',
        subtitle: 'Biz nafaqat dasturlarni oʻrgatamiz, balki karyera quramiz.',
        highlights: {
          h1_title: 'Amaliy vazifalar',
          h1_desc: 'Har bir modul loyiha bilan yakunlanadi. Shunchaki koʻrmang, yarating.',
          h2_title: 'Sertifikatlash',
          h2_desc: 'Xalqaro firmalar tomonidan tan olingan sertifikatga ega boʻling.',
          h3_title: 'Mentorlik',
          h3_desc: 'Har hafta mutaxassislar tomonidan ishingiz tahlil qilinadi.',
          h4_title: 'Ishga joylashishda yordam',
          h4_desc: 'Biz rezyume va portfolio tayyorlashda yordam beramiz.',
          h5_title: 'Umrbod kirish',
          h5_desc: 'Kurs materiallaridan istalgan vaqtda foydalaning.',
          h6_title: 'Mijozlar bilan ishlash',
          h6_desc: 'Frilans va loyihalarni boshqarishni oʻrganing.'
        },
        banner_title: 'Professional studiyaga qoʻshilishga tayyormisiz?',
        banner_subtitle: 'Bizning bitiruvchilar eng yaxshi studiyalarda ishlamoqda.'
      },
      contact: {
        title: 'Biz bilan bogʻlaning',
        phone: 'Telefon',
        address: 'Nukus shahri, Qoraqalpogʻiston Respublikasi',
        form_name: 'Ism-sharifingiz',
        form_phone: 'Telefon raqamingiz',
        form_submit: 'Xabarni yuborish',
        success: 'Rahmat! Tez orada siz bilan bogʻlanamiz.'
      },
      portfolio_page: {
        title: 'Talabalar ishlari',
        subtitle: 'Bizning Nukusdagi talabalarimizning ijodiy qobiliyatlari. Har bir loyiha fidokorona oʻrganish natijasidir.',
        categories: {
          all: 'Barchasi',
          design: 'Dizayn',
          branding: 'Brending',
          three_d: '3D',
          social: 'Ijtimoiy tarmoqlar'
        },
        project_by: 'Muallif'
      },
      blog_page: {
        title: 'Dizayn olami',
        subtitle: 'Markazimizdan maqolalar, darsliklar va yangiliklar.',
        search: 'Maqolalarni izlash...',
        read_more: 'Batafsil oʻqish',
        tags: {
          community: 'Hamjamiyat',
          tutorials: 'Darsliklar',
          theory: 'Nazariya'
        }
      },
      footer: {
        rights: 'Barcha huquqlar himoyalangan.',
        academy_name: 'Kompyuter Grafikasi Nukus'
      }
    }
  },
  kaa: {
    translation: {
      nav: {
        home: 'Bas bet',
        about: 'Biz haqqımızda',
        courses: 'Kurslar',
        portfolio: 'Portfolio',
        features: 'Abzallıqlar',
        blog: 'Blog',
        contact: 'Baylanıs',
        enroll: 'Dizimnen ótiw'
      },
      hero: {
        title: 'Nókiste Kompyuter Grafikasın Úyreniń',
        subtitle: '8 háptede baslawshıdan professionalǵa shekem. Ámeliy tájiriybe hám mentorlıq.',
        cta: 'Dizimnen ótiw',
        syllabus: 'Dastúrdi kóriw',
        batch_info: '2026-jıl gúzgi qabıllaw ashıq',
        modules_title: 'Siz úyrenetuǵın modullar'
      },
      stats: {
        duration: '8 hápte',
        duration_label: 'Dawamlılıǵı',
        level: 'Baslawshılar ushın',
        level_label: 'Dáreje',
        focus: 'Ámeliy kónlikpeler',
        focus_label: 'Ámeliyat'
      },
      home: {
        testimonial_quote: '"Nókistegi bul kurs kerekli mamanlıqtı iyelewine járdem berdi. Házirde men UI dızayner bolıp isleyapman!"',
        testimonial_author: 'Azamat Allanazarov',
        testimonial_year: '2025-jıl pitkeriwshisi',
        highlights: {
          h1_title: '8 háptelik intensiv',
          h1_desc: 'Qısqa múddetli, biraq joqarı nátiyjeli oqıw dastúri.',
          h2_title: 'Ekspert mentorlıq',
          h2_desc: 'Sabaqlardı qánigelerden úyreniń.',
          h3_title: 'Joybar tiykarında',
          h3_desc: 'Hár bir sabaqta jańa joybar ústinde isleyiz.'
        }
      },
      about_page: {
        title: 'Akademiyamız haqqında',
        subtitle: '2019-jıldan baslap Qaraqalpaqstan Respublikasında tsifrlı kórkem óner boyınsha jetekshi bilimlendiriw.',
        mission_title: 'Bizdiń maqsetimiz',
        mission_desc: 'Nókis jaslarına qolaylı hám joqarı sapalı kompyuter grafikası boyınsha treningler beriw.',
        vision_title: 'Bizdiń keleshegimiz',
        vision_desc: 'Qaraqalpaqstandaǵı kreatıv texnologiyalardıń orayı bolıw.',
        why_title: 'Nókiste nı nege bizdi tańlaysız?',
        why_subtitle: 'Biz jergilikli sharayatı hám global talaptı jaqsı túsinemiz.',
        feature1_title: 'Oraylıq jaylasıw',
        feature1_desc: 'Nókis orayındaǵı zamanagóy kompyuter laboratoriyalarına iye kampus.',
        feature2_title: 'Jergilikli jámiyet',
        feature2_desc: 'Qaraqalpaqstanlı jaslar menen baylanıs hám birgeliktegi joybarlar.',
        feature3_title: 'Ona tilinde járdem',
        feature3_desc: 'Tárbiya jergilikli tillerde de alıp barıladı.'
      },
      courses_page: {
        title: 'Kompyuter grafikası sheberligi',
        subtitle: 'Sizdi nolden professional dızayn dárjejesine alıp shıǵatuǵın 8 háptelik dastúr.',
        batch: 'Keyingi guruh: 15-may',
        seats: 'Faqat 15 orın',
        curriculum_title: 'Oqıw dastúri',
        curriculum_subtitle: 'Professional sheberlikke aparatuǵın jol.',
        total_hours: 'Jámi: 48 saatlıq tiri trening',
        investment_title: 'Keleshegińizge investitsiya',
        investment_subtitle: 'Biz hár túrli tólew usılların usınamız.',
        reg_fee: 'Dizimnen ótiw tólmi',
        reg_fee_desc: 'Barlıq baǵdarlamalar hám materiallar kiredi',
        cert_title: 'Sertifikat',
        cert_desc: 'Xalıqaralyq dárejede tán alınǵan hújjet',
        access: '8 háptelik tolıq kırıw',
        price: 'Bahası ushın qońıraw etiń',
        installments: 'Bólip tólew imkaniyatı bar',
        apply: 'Dizimge jazılıw',
        modules: {
          m1: '1-modul',
          m1_title: 'Vizual dızayn tiykarları',
          m2: '2-modul',
          m2_title: 'Adobe Creative Suite',
          m3: '3-modul',
          m3_title: 'UI/UX hám Brending',
          m4: '4-modul',
          m4_title: '3D animatsiya hám juwmaqlawshı joybar',
          topics: {
            m1: ["Reńler teoriyası", "Tipografika", "Kompozitsiya", "Dizayn pikirlew"],
            m2: ["Photoshop", "Illustrator", "Joybar: Logo dızayn"],
            m3: ["UI/UX tiykarları", "Dizayn sistemaları", "Brend qaǵıydaları"],
            m4: ["Blenderǵa kırıw", "Model tayarlaw", "Portfolio tańlawı"]
          }
        }
      },
      features_page: {
        title: 'Bizdiń oqıtıw sistemamız',
        subtitle: 'Biz tek kónlikpeler emes, bálki karyera quramız.',
        highlights: {
          h1_title: 'Ámeliy tapsırmalar',
          h1_desc: 'Hár bir modul joybar menen juwmaqlanadı.',
          h2_title: 'Sertifikatlaw',
          h2_desc: 'Tán alınǵan sertifikatqa iye bolıń.',
          h3_title: 'Mentorlıq',
          h3_desc: 'Hár hápte qánigeler tárepinen islerińiz kórip shıǵıladı.',
          h4_title: 'Jumısqa kirisiw járdemi',
          h4_desc: 'Biz rezyume hám portfolio tayarlawda járdem beremiz.',
          h5_title: 'Ómirlik ruqsat',
          h5_desc: 'Materiallardan qálegendey waqıtta paydalanıń.',
          h6_title: 'Mijozlar menen islesiw',
          h6_desc: 'Frilans hám joybarlardı basqarıwdı úyreniń.'
        },
        banner_title: 'Professional studıyaǵa qosılıwǵa tayyorsız ba?',
        banner_subtitle: 'Bizdiń pitkeriwshiler jaqsı studıyalarda islemekte.'
      },
      contact: {
        title: 'Biz benen baylanıs',
        phone: 'Telefon',
        address: 'Nókis qalası, Qaraqalpaqstan Respublikası',
        form_name: 'Atı-jónińiz',
        form_phone: 'Telefon nomerińiz',
        form_submit: 'Xabardı jiberiw',
        success: 'Raxmet! Biz siz benen jaqın arada baylanısamız.'
      },
      portfolio_page: {
        title: 'Studentler jumısları',
        subtitle: 'Bizdiń Nókistegi studentlerimizdiń kreatıv kónlikpeleri. Hár bir joybar úlken oqıw miyneti nátiyjesi.',
        categories: {
          all: 'Barlıǵı',
          design: 'Dızayn',
          branding: 'Brending',
          three_d: '3D',
          social: 'Sociallıq tarmaqlar'
        },
        project_by: 'Muallifi'
      },
      blog_page: {
        title: 'Dızayn álemi',
        subtitle: 'Orayımızdan maqolalar, sabaqlıqlar hám jańalıqlar.',
        search: 'Maqolalardı izlew...',
        read_more: 'Sabaqtı oqıw',
        tags: {
          community: 'Jámiyet',
          tutorials: 'Sabaqlıqlar',
          theory: 'Teoriya'
        }
      },
      footer: {
        rights: 'Barlıq huqıqlar qorǵalǵan.',
        academy_name: 'Kompyuter Grafikası Nókis'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        courses: 'Курсы',
        portfolio: 'Портфолио',
        features: 'Особенности',
        blog: 'Блог',
        contact: 'Контакты',
        enroll: 'Записаться'
      },
      hero: {
        title: 'Освойте компьютерную графику в Нукусе',
        subtitle: 'От новичка до профессионала за 8 недель. Практическое обучение с менторами.',
        cta: 'Записаться',
        syllabus: 'Программа обучения',
        batch_info: 'Открыт набор на осень 2026',
        modules_title: 'Модули, которые вы освоите'
      },
      stats: {
        duration: '8 недель',
        duration_label: 'Длительность',
        level: 'Для новичков',
        level_label: 'Уровень',
        focus: 'Практические навыки',
        focus_label: 'Практика'
      },
      home: {
        testimonial_quote: '"Этот курс в Нукусе изменил мою карьеру. Теперь я работаю удаленным UI-дизайнером!"',
        testimonial_author: 'Азамат Алланазаров',
        testimonial_year: 'Выпуск 2025',
        highlights: {
          h1_title: '8 недель интенсива',
          h1_desc: 'Короткая, но насыщенная программа для быстрого входа в профессию.',
          h2_title: 'Экспертное менторство',
          h2_desc: 'Учитесь напрямую у профи, работающих в индустрии.',
          h3_title: 'Проектное обучение',
          h3_desc: 'Никаких скучных лекций. Создайте 5+ проектов для портфолио.'
        }
      },
      about_page: {
        title: 'О нашей академии',
        subtitle: 'Лидер в обучении цифровому искусству в Республике Каракалпакстан с 2019 года.',
        mission_title: 'Наша миссия',
        mission_desc: 'Предоставить доступное и качественное обучение компьютерной графике молодежи Нукуса.',
        vision_title: 'Наше видение',
        vision_desc: 'Стать центральным хабом креативных технологий в Каракалпакстане.',
        why_title: 'Почему выбирают нас?',
        why_subtitle: 'Мы понимаем местный контекст и глобальный спрос.',
        feature1_title: 'Центральное расположение',
        feature1_desc: 'Кампус в центре Нукуса с современными лабораториями.',
        feature2_title: 'Местное сообщество',
        feature2_desc: 'Нетворкинг со сверстниками и совместные проекты.',
        feature3_title: 'Поддержка на родном языке',
        feature3_desc: 'Обучение доступно на местных языках для глубокого понимания.'
      },
      courses_page: {
        title: 'Мастерство компьютерной графики',
        subtitle: 'Комплексная 8-недельная программа, которая превратит новичка в профи.',
        batch: 'Следующий поток: 15 мая',
        seats: 'Осталось 15 мест',
        curriculum_title: 'Учебный план',
        curriculum_subtitle: 'Структурированный путь к профессионализму.',
        total_hours: 'Всего: 48 часов живого обучения',
        investment_title: 'Инвестиция в будущее',
        investment_subtitle: 'Гибкие варианты оплаты и скидки для студентов.',
        reg_fee: 'Регистрационный взнос',
        reg_fee_desc: 'Включает доступ к ПО и все материалы',
        cert_title: 'Сертификат об окончании',
        cert_desc: 'Международно признанные цифровые учетные данные',
        access: 'Полный 8-недельный доступ',
        price: 'Позвоните для уточнения цены',
        installments: 'Доступна рассрочка',
        apply: 'Записаться в поток',
        modules: {
          m1: 'Модуль 1',
          m1_title: 'Основы визуального дизайна',
          m2: 'Модуль 2',
          m2_title: 'Adobe Creative Suite',
          m3: 'Модуль 3',
          m3_title: 'UI/UX и Брендинг',
          m4: 'Модуль 4',
          m4_title: '3D анимация и итоговый проект',
          topics: {
            m1: ["Теория цвета", "Типографика", "Композиция", "Дизайн-мышление"],
            m2: ["Photoshop", "Illustrator", "Проект: Дизайн логотипа"],
            m3: ["Основы UI/UX", "Дизайн-системы", "Брендбук"],
            m4: ["Введение в Blender", "3D моделирование", "Презентация портфолио"]
          }
        }
      },
      features_page: {
        title: 'Наша образовательная экосистема',
        subtitle: 'Мы не просто учим софту, мы строим карьеру.',
        highlights: {
          h1_title: 'Практические задания',
          h1_desc: 'Каждый модуль заканчивается проектом. Создавайте, а не просто смотрите.',
          h2_title: 'Сертификация',
          h2_desc: 'Получите верифицированный сертификат.',
          h3_title: 'Менторство',
          h3_desc: 'Еженедельный разбор работ экспертами индустрии.',
          h4_title: 'Поддержка карьеры',
          h4_desc: 'Помогаем с резюме, портфолио и трудоустройством.',
          h5_title: 'Пожизненный доступ',
          h5_desc: 'Материалы курса доступны всегда.',
          h6_title: 'Готовность к работе с клиентами',
          h6_desc: 'Узнайте, как работать на фрилансе и управлять проектами.'
        },
        banner_title: 'Готовы присоединиться к профессиональной студии?',
        banner_subtitle: 'Наши выпускники работают в лучших дизайн-хаусах.'
      },
      contact: {
        title: 'Свяжитесь с нами',
        phone: 'Телефон',
        address: 'г. Нукус, Республика Каракалпакстан',
        form_name: 'Ваше имя',
        form_phone: 'Ваш номер телефона',
        form_submit: 'Отправить сообщение',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время.'
      },
      portfolio_page: {
        title: 'Галерея работ',
        subtitle: 'Творческие достижения наших студентов в Нукусе. Каждый проект — это результат интенсивного обучения.',
        categories: {
          all: 'Все',
          design: 'Дизайн',
          branding: 'Брендинг',
          three_d: '3D',
          social: 'Соцсети'
        },
        project_by: 'Автор'
      },
      blog_page: {
        title: 'Блог о дизайне',
        subtitle: 'Статьи, туториалы и новости нашего центра.',
        search: 'Поиск статей...',
        read_more: 'Читать статью',
        tags: {
          community: 'Сообщество',
          tutorials: 'Обучение',
          theory: 'Теория'
        }
      },
      footer: {
        rights: 'Все права защищены.',
        academy_name: 'Компьютерная Графика Нукус'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
