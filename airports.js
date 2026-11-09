// Format: IATA|City|Airport|Arabic city (optional). Customers can still type any other airport freely.
const AP_DATA = `
DAM|Damascus|Damascus International|دمشق
ALP|Aleppo|Aleppo International|حلب
LTK|Latakia|Bassel Al-Assad International|اللاذقية
DEZ|Deir ez-Zor|Deir ez-Zor Airport|دير الزور
KAC|Qamishli|Qamishli Airport|القامشلي
AMM|Amman|Queen Alia International|عمّان
ADJ|Amman|Amman Civil (Marka)|عمّان
AQJ|Aqaba|King Hussein International|العقبة
BEY|Beirut|Rafic Hariri International|بيروت
RUH|Riyadh|King Khalid International|الرياض
JED|Jeddah|King Abdulaziz International|جدة
DMM|Dammam|King Fahd International|الدمام
MED|Medina|Prince Mohammad bin Abdulaziz|المدينة المنورة
TIF|Taif|Taif International|الطائف
AHB|Abha|Abha International|أبها
TUU|Tabuk|Prince Sultan bin Abdulaziz|تبوك
GIZ|Jazan|King Abdullah bin Abdulaziz|جازان
ELQ|Buraydah|Prince Naif bin Abdulaziz (Qassim)|بريدة
YNB|Yanbu|Prince Abdulmohsen bin Abdulaziz|ينبع
HAS|Hail|Hail Regional|حائل
AJF|Sakaka|Al-Jouf Domestic|سكاكا
EAM|Najran|Najran Domestic|نجران
ULH|AlUla|Prince Abdulmajeed bin Abdulaziz|العُلا
BHH|Bisha|Bisha Domestic|بيشة
HOF|Al-Ahsa|Al-Ahsa International|الأحساء
DXB|Dubai|Dubai International|دبي
DWC|Dubai|Al Maktoum International|دبي
AUH|Abu Dhabi|Zayed International|أبوظبي
SHJ|Sharjah|Sharjah International|الشارقة
RKT|Ras Al Khaimah|Ras Al Khaimah International|رأس الخيمة
AAN|Al Ain|Al Ain International|العين
KWI|Kuwait City|Kuwait International|الكويت
DOH|Doha|Hamad International|الدوحة
BAH|Manama|Bahrain International|المنامة
MCT|Muscat|Muscat International|مسقط
SLL|Salalah|Salalah Airport|صلالة
SOH|Sohar|Sohar Airport|صحار
BGW|Baghdad|Baghdad International|بغداد
BSR|Basra|Basra International|البصرة
EBL|Erbil|Erbil International|أربيل
ISU|Sulaymaniyah|Sulaymaniyah International|السليمانية
NJF|Najaf|Al Najaf International|النجف
SAH|Sanaa|Sanaa International|صنعاء
ADE|Aden|Aden International|عدن
CAI|Cairo|Cairo International|القاهرة
HBE|Alexandria|Borg El Arab|الإسكندرية
SSH|Sharm El Sheikh|Sharm El Sheikh International|شرم الشيخ
HRG|Hurghada|Hurghada International|الغردقة
LXR|Luxor|Luxor International|الأقصر
ASW|Aswan|Aswan International|أسوان
KRT|Khartoum|Khartoum International|الخرطوم
TIP|Tripoli|Tripoli International|طرابلس
BEN|Benghazi|Benina International|بنغازي
TUN|Tunis|Tunis–Carthage|تونس
ALG|Algiers|Houari Boumediene|الجزائر
CMN|Casablanca|Mohammed V International|الدار البيضاء
RAK|Marrakech|Marrakesh Menara|مراكش
IST|Istanbul|Istanbul Airport
SAW|Istanbul|Sabiha Gökçen International
ESB|Ankara|Esenboğa International
AYT|Antalya|Antalya Airport
ADB|Izmir|Adnan Menderes
GZT|Gaziantep|Gaziantep Oğuzeli
ADA|Adana|Adana Şakirpaşa
HTY|Hatay|Hatay Airport
DLM|Dalaman|Dalaman Airport
BJV|Bodrum|Milas–Bodrum
TZX|Trabzon|Trabzon Airport
IKA|Tehran|Imam Khomeini International
THR|Tehran|Mehrabad International
MHD|Mashhad|Mashhad International
KHI|Karachi|Jinnah International
LHE|Lahore|Allama Iqbal International
ISB|Islamabad|Islamabad International
DEL|Delhi|Indira Gandhi International
BOM|Mumbai|Chhatrapati Shivaji Maharaj
BLR|Bengaluru|Kempegowda International
HYD|Hyderabad|Rajiv Gandhi International
MAA|Chennai|Chennai International
COK|Kochi|Cochin International
DAC|Dhaka|Hazrat Shahjalal International
CMB|Colombo|Bandaranaike International
MLE|Malé|Velana International
SIN|Singapore|Changi
KUL|Kuala Lumpur|Kuala Lumpur International
BKK|Bangkok|Suvarnabhumi
HKG|Hong Kong|Hong Kong International
NRT|Tokyo|Narita International
HND|Tokyo|Haneda
ICN|Seoul|Incheon International
PEK|Beijing|Capital International
PVG|Shanghai|Pudong International
CAN|Guangzhou|Baiyun International
MNL|Manila|Ninoy Aquino International
CGK|Jakarta|Soekarno–Hatta
DPS|Bali|Ngurah Rai International
SYD|Sydney|Kingsford Smith
MEL|Melbourne|Tullamarine
LHR|London|Heathrow
LGW|London|Gatwick
MAN|Manchester|Manchester Airport
DUB|Dublin|Dublin Airport
CDG|Paris|Charles de Gaulle
ORY|Paris|Orly
FRA|Frankfurt|Frankfurt Airport
MUC|Munich|Munich Airport
BER|Berlin|Brandenburg
DUS|Düsseldorf|Düsseldorf Airport
AMS|Amsterdam|Schiphol
BRU|Brussels|Brussels Airport
MAD|Madrid|Barajas
BCN|Barcelona|El Prat
LIS|Lisbon|Humberto Delgado
FCO|Rome|Fiumicino
MXP|Milan|Malpensa
ZRH|Zurich|Zurich Airport
GVA|Geneva|Geneva Airport
VIE|Vienna|Vienna International
ATH|Athens|Eleftherios Venizelos
CPH|Copenhagen|Kastrup
ARN|Stockholm|Arlanda
OSL|Oslo|Gardermoen
HEL|Helsinki|Helsinki-Vantaa
WAW|Warsaw|Chopin
PRG|Prague|Václav Havel
BUD|Budapest|Ferenc Liszt
SOF|Sofia|Sofia Airport
OTP|Bucharest|Henri Coandă
JFK|New York|John F. Kennedy
EWR|New York|Newark Liberty
LAX|Los Angeles|Los Angeles International
ORD|Chicago|O'Hare
MIA|Miami|Miami International
IAD|Washington|Dulles
YYZ|Toronto|Pearson
YUL|Montreal|Trudeau
MEX|Mexico City|Benito Juárez
GRU|São Paulo|Guarulhos
NBO|Nairobi|Jomo Kenyatta
ADD|Addis Ababa|Bole International
JNB|Johannesburg|O. R. Tambo
CPT|Cape Town|Cape Town International
LOS|Lagos|Murtala Muhammed
ACC|Accra|Kotoka International
DKR|Dakar|Blaise Diagne
`.trim().split('\n').map(l => {
  const [code, city, name, ar] = l.split('|');
  return { code, city, name, ar, v: `${city}${ar ? ' ' + ar : ''} – ${name} (${code})` };
});
const AIRPORTS = AP_DATA.map(x => x.v);
