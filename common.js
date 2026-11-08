// ===== EDIT THESE (anon key is public by design; protected by RLS. NEVER put the service_role key here) =====
const CFG = { url: 'https://gvjuucnibuxvrgobiawi.supabase.co', key: 'sb_publishable_SQe7d1X-_X4-S6eHyvdHVg_jIUTnCkk', phone: '+963 934 239 105', email: 'info@orbit-travel.com' };

const T = {
en: {
  brand:'ORBIT', sub:'TRAVEL & TOURISM', home:'Home', hero_t:'Your Journey Begins With Us', hero_s:'Find your next destination with Orbit Travel & Tourism.',
  form_t:'Request a flight', form_s:'Tell us where you want to go. We will contact you with the best options.',
  name:'Full name', phone:'Phone number', from:'Departing from (city / airport)', to:'Destination (city / airport)', date:'Departure date',
  day:'Day', month:'Month', year:'Year', time:'Preferred departure time', msg:'Additional message (optional)', submit:'SUBMIT FLIGHT REQUEST', sending:'Sending…',
  ok:'Your flight request has been received. We will contact you shortly.', e_req:'Please complete all required fields correctly.', e_date:'Choose a valid departure date that is not in the past.',
  e_dup:'This request was already submitted. Please wait before sending another.', e_net:'We could not send your request. Check your connection and try again.',
  foot:'All rights reserved.', staff:'Staff login',
  inbox:'Inbox', unread:'Unread messages', read:'Read messages', archived:'Archived messages', email:'Email', password:'Password', login:'Sign in', logout:'Sign out',
  login_t:'Admin sign in', e_login:'Incorrect email or password.', e_auth:'This account is not authorized as an administrator.', empty:'No messages here.', pick:'Select a message to read it.',
  mark_read:'Mark as read', mark_unread:'Mark as unread', archive:'Archive', unarchive:'Move to inbox', del:'Delete', confirm_del:'Delete this request permanently?',
  mute:'Mute sound', unmute:'Unmute sound', enable:'Enable alerts', enabled:'Alerts on', call:'Call customer', received:'Received', route:'Route', back:'Back',
  new_req:'New flight request', details:'Flight request', setup:'Add your Supabase URL and anon key in common.js.', loading:'Loading…'
},
ar: {
  brand:'أوربت', sub:'للسفر والسياحة', home:'الرئيسية', hero_t:'رحلتك تبدأ معنا', hero_s:'اكتشف وجهتك القادمة مع أوربت للسفر والسياحة.',
  form_t:'اطلب رحلتك', form_s:'أخبرنا إلى أين تريد السفر وسنتواصل معك بأفضل الخيارات.',
  name:'الاسم الكامل', phone:'رقم الهاتف', from:'مدينة / مطار المغادرة', to:'مدينة / مطار الوصول', date:'تاريخ المغادرة',
  day:'اليوم', month:'الشهر', year:'السنة', time:'وقت المغادرة المفضل', msg:'رسالة إضافية (اختياري)', submit:'إرسال طلب الرحلة', sending:'جارٍ الإرسال…',
  ok:'تم استلام طلب رحلتك. سنتواصل معك قريبًا.', e_req:'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.', e_date:'اختر تاريخ مغادرة صحيحًا غير منقضٍ.',
  e_dup:'تم إرسال هذا الطلب مسبقًا. يرجى الانتظار قبل إرسال طلب آخر.', e_net:'تعذّر إرسال طلبك. تحقق من الاتصال وحاول مرة أخرى.',
  foot:'جميع الحقوق محفوظة.', staff:'دخول الموظفين',
  inbox:'البريد الوارد', unread:'الرسائل غير المقروءة', read:'الرسائل المقروءة', archived:'الرسائل المؤرشفة', email:'البريد الإلكتروني', password:'كلمة المرور', login:'تسجيل الدخول', logout:'تسجيل الخروج',
  login_t:'دخول المسؤول', e_login:'البريد الإلكتروني أو كلمة المرور غير صحيحة.', e_auth:'هذا الحساب غير مصرّح له كمسؤول.', empty:'لا توجد رسائل هنا.', pick:'اختر رسالة لقراءتها.',
  mark_read:'تحديد كمقروءة', mark_unread:'تحديد كغير مقروءة', archive:'أرشفة', unarchive:'نقل إلى الوارد', del:'حذف', confirm_del:'هل تريد حذف هذا الطلب نهائيًا؟',
  mute:'كتم الصوت', unmute:'تشغيل الصوت', enable:'تفعيل التنبيهات', enabled:'التنبيهات مفعّلة', call:'اتصل بالعميل', received:'وصل في', route:'المسار', back:'رجوع',
  new_req:'طلب رحلة جديد', details:'طلب الرحلة', setup:'أضف رابط Supabase والمفتاح العام في common.js.', loading:'جارٍ التحميل…'
}};

let lang = (new URLSearchParams(location.search).get('lang')) || localStorage.getItem('orbit_lang') || 'en';
if (!T[lang]) lang = 'en';
const t = k => T[lang][k] ?? k;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const loc = () => lang === 'ar' ? 'ar-u-ca-gregory' : 'en-GB';

const LOGO = `<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="none" stroke="#c9a24b" stroke-width="2"/><ellipse cx="24" cy="24" rx="21" ry="8.5" fill="none" stroke="#e6c775" stroke-width="1.6" transform="rotate(-28 24 24)"/><path fill="#fff" transform="translate(11.5 11.5) scale(.52) rotate(45 12 12)" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/><circle cx="41" cy="14" r="2.4" fill="#c9a24b"/></svg>`;

function applyLang() {
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach(e => e.textContent = t(e.dataset.i));
  document.querySelectorAll('[data-ph]').forEach(e => e.placeholder = t(e.dataset.ph));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  document.querySelectorAll('[data-logo]').forEach(e => e.innerHTML = LOGO + `<span>${t('brand')}<small>${t('sub')}</small></span>`);
  document.querySelectorAll('[data-link]').forEach(a => a.href = a.dataset.link + '?lang=' + lang);
  document.dispatchEvent(new Event('langchange'));
}
function setLang(l) { lang = l; localStorage.setItem('orbit_lang', l); applyLang(); }
document.addEventListener('click', e => { const b = e.target.closest('[data-lang]'); if (b) setLang(b.dataset.lang); });
const configured = () => !CFG.url.includes('YOUR-PROJECT');
document.addEventListener('DOMContentLoaded', () => { localStorage.setItem('orbit_lang', lang); applyLang(); });
