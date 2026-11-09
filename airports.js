// Covers the networks of: Turkish, Air Arabia, Kuwait Airways, Saudia, Qatar, Pegasus, EgyptAir, Emirates, Etihad, flydubai, flynas, Air France, Jazeera, Riyadh Air, SunExpress.
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
DIY|Diyarbakır|Diyarbakır Airport
VAN|Van|Ferit Melen
ASR|Kayseri|Erkilet
KYA|Konya|Konya Airport
SZF|Samsun|Çarşamba
SFQ|Şanlıurfa|GAP Airport
MQM|Mardin|Mardin Airport
MLX|Malatya|Erhaç
ERZ|Erzurum|Erzurum Airport
GZP|Alanya|Gazipaşa-Alanya
NAV|Cappadocia|Nevşehir Kapadokya
ADF|Adıyaman|Adıyaman Airport
EZS|Elazığ|Elazığ Airport
HAM|Hamburg|Hamburg Airport
STR|Stuttgart|Stuttgart Airport
CGN|Cologne|Cologne Bonn
NUE|Nuremberg|Nuremberg Airport
HAJ|Hannover|Hannover Airport
LEJ|Leipzig|Leipzig/Halle
DTM|Dortmund|Dortmund Airport
BRE|Bremen|Bremen Airport
FMO|Münster|Münster/Osnabrück
EIN|Eindhoven|Eindhoven Airport
RTM|Rotterdam|Rotterdam The Hague
BSL|Basel|EuroAirport
CRL|Brussels|Charleroi
LYS|Lyon|Saint-Exupéry
NCE|Nice|Côte d'Azur
MRS|Marseille|Provence
TLS|Toulouse|Blagnac
BOD|Bordeaux|Mérignac
STN|London|Stansted
LTN|London|Luton
BHX|Birmingham|Birmingham Airport
EDI|Edinburgh|Edinburgh Airport
VCE|Venice|Marco Polo
NAP|Naples|Capodichino
BLQ|Bologna|Guglielmo Marconi
AGP|Málaga|Costa del Sol
PMI|Palma|Palma de Mallorca
OPO|Porto|Francisco Sá Carneiro
BEG|Belgrade|Nikola Tesla
SJJ|Sarajevo|Sarajevo International
ZAG|Zagreb|Franjo Tuđman
TGD|Podgorica|Podgorica Airport
TIA|Tirana|Nënë Tereza
SKP|Skopje|Skopje Airport
LCA|Larnaca|Larnaca International
MLA|Malta|Malta International
SKG|Thessaloniki|Macedonia Airport
SVO|Moscow|Sheremetyevo
DME|Moscow|Domodedovo
LED|St Petersburg|Pulkovo
GYD|Baku|Heydar Aliyev
TBS|Tbilisi|Tbilisi International
BUS|Batumi|Batumi International
EVN|Yerevan|Zvartnots
ALA|Almaty|Almaty International
NQZ|Astana|Nursultan Nazarbayev
TAS|Tashkent|Islam Karimov
HKT|Phuket|Phuket International
TPE|Taipei|Taoyuan
KIX|Osaka|Kansai
SGN|Ho Chi Minh City|Tan Son Nhat
KTM|Kathmandu|Tribhuvan
CCU|Kolkata|Netaji Subhas Chandra Bose
AMD|Ahmedabad|Sardar Vallabhbhai Patel
JAI|Jaipur|Jaipur International
CCJ|Kozhikode|Calicut International
TRV|Thiruvananthapuram|Trivandrum International
LKO|Lucknow|Chaudhary Charan Singh
CGP|Chittagong|Shah Amanat
ZYL|Sylhet|Osmani International
MUX|Multan|Multan International
PEW|Peshawar|Bacha Khan
SKT|Sialkot|Sialkot International
LYP|Faisalabad|Faisalabad International
KBL|Kabul|Hamid Karzai
PER|Perth|Perth Airport
BNE|Brisbane|Brisbane Airport
AKL|Auckland|Auckland Airport
DAR|Dar es Salaam|Julius Nyerere
EBB|Entebbe|Entebbe International
ZNZ|Zanzibar|Abeid Amani Karume
MBA|Mombasa|Moi International
ABJ|Abidjan|Félix-Houphouët-Boigny
JIB|Djibouti|Ambouli|جيبوتي
MGQ|Mogadishu|Aden Adde|مقديشو
HGA|Hargeisa|Egal International|هرجيسا
PZU|Port Sudan|Port Sudan New International|بورتسودان
MJI|Tripoli|Mitiga International|طرابلس (معيتيقة)
TNG|Tangier|Ibn Battouta|طنجة
FEZ|Fez|Fès–Saïs|فاس
AGA|Agadir|Al Massira|أغادير
RBA|Rabat|Rabat–Salé|الرباط
NDR|Nador|Nador International|الناظور
SPX|Giza|Sphinx International|الجيزة
RMF|Marsa Alam|Marsa Alam International|مرسى علم
HMB|Sohag|Sohag International|سوهاج
ATZ|Assiut|Assiut Airport|أسيوط
KIK|Kirkuk|Kirkuk Airport|كركوك
ABT|Al-Baha|Al-Baha Domestic|الباحة
RAH|Rafha|Rafha Domestic|رفحاء
BOS|Boston|Logan
SFO|San Francisco|San Francisco International
SEA|Seattle|Seattle–Tacoma
ATL|Atlanta|Hartsfield–Jackson
IAH|Houston|George Bush Intercontinental
DFW|Dallas|Dallas/Fort Worth
MCO|Orlando|Orlando International
YVR|Vancouver|Vancouver International
EZE|Buenos Aires|Ezeiza
GIG|Rio de Janeiro|Galeão
`.trim().split('\n').map(l => {
  const [code, city, name, ar] = l.split('|');
  return { code, city, name, ar, v: `${city}${ar ? ' ' + ar : ''} – ${name} (${code})` };
});
const AIRPORTS = AP_DATA.map(x => x.v);
