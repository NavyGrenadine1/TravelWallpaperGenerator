/* ========================================
   TRAVEL WALLPAPER GENERATOR
   Main JavaScript File
   ======================================== */

// ========================================
// CURRENCY DATA
// ========================================

// ============================================
// DEVICE CONFIGURATIONS
// ============================================
// Each device has specific dimensions and a scaling factor
// Scaling factor = how much to multiply base font sizes/spacing
// Base design is iPhone (factor: 1.0)

const DEVICE_CONFIGS = {
    iphone: {
        name: 'iPhone 13/14/15 Pro',
        width: 1170,
        height: 2532,
        scaleFactor: 1.0  // Base design
    },
    samsung: {
        name: 'Samsung Galaxy S/Ultra',
        width: 1440,
        height: 3200,
        scaleFactor: 1.264  // 3200 / 2532 = 1.264
    },
    pixel: {
        name: 'Google Pixel',
        width: 1080,
        height: 2400,
        scaleFactor: 0.948  // 2400 / 2532 = 0.948
    }
};

// Predefined amounts for each currency (destination currency amounts)
const CURRENCY_AMOUNTS = {
    EUR: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    GBP: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    USD: [1, 2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500],
    CAD: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    AUD: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    JPY: [100, 300, 500, 1000, 1500, 2000, 3000, 5000, 7000, 10000, 12000, 15000, 20000, 25000, 30000],
    THB: [10, 20, 50, 100, 150, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 7500],
    MXN: [10, 20, 50, 100, 150, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 7500],
    INR: [10, 20, 50, 100, 200, 300, 500, 1000, 1500, 2000, 2500, 3500, 5000, 7500, 10000],
    CNY: [5, 10, 20, 30, 50, 75, 100, 200, 300, 500, 750, 1000, 1500, 2000, 3000],
    KRW: [1000, 2000, 5000, 10000, 15000, 20000, 30000, 50000, 70000, 100000, 150000, 200000, 250000, 300000, 500000],
    SAR: [5, 10, 20, 30, 50, 75, 100, 150, 200, 250, 300, 400, 500, 750, 1000],
    AED: [5, 10, 20, 30, 50, 75, 100, 150, 200, 250, 300, 400, 500, 750, 1000],
    CHF: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    PLN: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    NZD: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    NOK: [10, 20, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000],
    SEK: [10, 20, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000],
    HKD: [10, 20, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000],
    BRL: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    TRY: [10, 20, 50, 100, 150, 250, 500, 750, 1000, 1500, 2000, 3000, 5000, 7500, 10000],
    ZAR: [10, 20, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000],
    VND: [10000, 20000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 5000000, 10000000],
    IDR: [10000, 20000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 5000000, 10000000],
    KHR: [1000, 5000, 10000, 20000, 40000, 80000, 100000, 200000, 400000, 800000, 1000000, 1500000, 2000000, 4000000, 8000000],
    PHP: [10, 20, 50, 100, 200, 300, 500, 1000, 1500, 2000, 3000, 5000, 7500, 10000, 15000],
    MYR: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    LKR: [100, 200, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 150000],
    ARS: [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 150000, 200000, 300000, 500000, 1000000],
    CLP: [1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000],
    COP: [1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000],
    ILS: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    JOD: [1, 2, 5, 10, 15, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750],
    EGP: [10, 20, 50, 100, 200, 300, 500, 1000, 1500, 2000, 3000, 5000, 7500, 10000, 15000],
    MAD: [10, 20, 50, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000, 7500],
    ISK: [100, 200, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 150000],
    DKK: [10, 20, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000],
    CZK: [20, 50, 100, 200, 300, 500, 1000, 1500, 2000, 3000, 5000, 7500, 10000, 15000, 20000],
    HUF: [500, 1000, 2000, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 150000, 200000, 300000, 500000],
    RON: [10, 20, 50, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 5000, 7500],
    BGN: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    RSD: [100, 200, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 150000],
    PEN: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    UYU: [50, 100, 200, 500, 1000, 1500, 2000, 3000, 5000, 7500, 10000, 15000, 20000, 30000, 50000],
    BBD: [2, 5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500],
    JMD: [100, 200, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 150000],
    TTD: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    FJD: [2, 5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500]
};

// Common phrases for each currency/country (with phonetic pronunciations where helpful)
const COUNTRY_PHRASES = {
    // EUROZONE COUNTRIES (14 countries using EUR)
    'EUR-FR': { 
        hello: 'Bonjour (bon-ZHOOR)', 
        thankYou: 'Merci (mehr-SEE)', 
        please: 'S\'il vous plaît (seel voo PLEH)',
        howMuch: 'Combien? (kom-bee-AN)',
        excuse: 'Excusez-moi (ex-kew-zay-MWAH)'
    },
    'EUR-ES': { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto cuesta? (KWAN-toh KWEHS-tah)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    'EUR-IT': { 
        hello: 'Ciao (chow)', 
        thankYou: 'Grazie (GRAH-tsee-eh)', 
        please: 'Per favore (pehr fah-VOH-reh)',
        howMuch: 'Quanto costa? (KWAN-toh KOH-stah)',
        excuse: 'Scusi (SKOO-zee)'
    },
    'EUR-DE': { 
        hello: 'Guten Tag (GOO-ten tahg)', 
        thankYou: 'Danke (DAHN-keh)', 
        please: 'Bitte (BIT-teh)',
        howMuch: 'Wie viel kostet das? (vee feel KOS-tet dahs)',
        excuse: 'Entschuldigung (ent-SHOOL-dee-goong)'
    },
    'EUR-NL': { 
        hello: 'Hallo (HAH-loh)', 
        thankYou: 'Dank je (dahnk yeh)', 
        please: 'Alsjeblieft (AHL-syeh-bleeft)',
        howMuch: 'Hoeveel kost het? (HOO-vehl kost het)',
        excuse: 'Excuseer (ex-kew-ZAIR)'
    },
    'EUR-PT': { 
        hello: 'Olá (oh-LAH)', 
        thankYou: 'Obrigado/a (oh-bree-GAH-doh)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: 'Quanto custa? (KWAN-toh KOOS-tah)',
        excuse: 'Com licença (kohm lee-SEN-sah)'
    },
    'EUR-GR': { 
        hello: 'Yassas (YAH-sahs)', 
        thankYou: 'Efharisto (ef-hah-ree-STOH)', 
        please: 'Parakalo (pah-rah-kah-LOH)',
        howMuch: 'Poso kani? (POH-soh KAH-nee)',
        excuse: 'Signomi (see-GNOH-mee)'
    },
    'EUR-BE-FR': { 
        hello: 'Bonjour (bon-ZHOOR)', 
        thankYou: 'Merci (mehr-SEE)', 
        please: 'S\'il vous plaît (seel voo PLEH)',
        howMuch: 'Combien? (kom-bee-AN)',
        excuse: 'Excusez-moi (ex-kew-zay-MWAH)'
    },
    'EUR-BE-NL': { 
        hello: 'Hallo (HAH-loh)', 
        thankYou: 'Dank u (dahnk oo)', 
        please: 'Alstublieft (AHL-stew-bleeft)',
        howMuch: 'Hoeveel kost het? (HOO-vehl kost het)',
        excuse: 'Excuseer (ex-kew-ZAIR)'
    },
    'EUR-AT': { 
        hello: 'Grüß Gott (groos got)', 
        thankYou: 'Danke (DAHN-keh)', 
        please: 'Bitte (BIT-teh)',
        howMuch: 'Wie viel kostet das? (vee feel KOS-tet dahs)',
        excuse: 'Entschuldigung (ent-SHOOL-dee-goong)'
    },
    'EUR-IE': { 
        hello: 'Hello', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    'EUR-FI': { 
        hello: 'Hei (hay)', 
        thankYou: 'Kiitos (KEE-tos)', 
        please: 'Ole hyvä (OH-leh HEW-vah)',
        howMuch: 'Paljonko se maksaa? (PAHL-yohn-koh seh MAHK-sah)',
        excuse: 'Anteeksi (AHN-teek-see)'
    },
    'EUR-SK': { 
        hello: 'Ahoj (AH-hoy)', 
        thankYou: 'Ďakujem (JAH-koo-yem)', 
        please: 'Prosím (PROH-seem)',
        howMuch: 'Koľko to stojí? (KOHL-koh toh STOY-ee)',
        excuse: 'Prepáčte (preh-PACH-teh)'
    },
    'EUR-SI': { 
        hello: 'Zdravo (ZDRAH-voh)', 
        thankYou: 'Hvala (HVAH-lah)', 
        please: 'Prosim (PROH-seem)',
        howMuch: 'Koliko stane? (koh-LEE-koh STAH-neh)',
        excuse: 'Oprostite (oh-proh-STEE-teh)'
    },
    'EUR-LT': { 
        hello: 'Labas (LAH-bahs)', 
        thankYou: 'Ačiū (ah-CHOO)', 
        please: 'Prašau (prah-SHOW)',
        howMuch: 'Kiek kainuoja? (kyehk kai-NOO-yah)',
        excuse: 'Atsiprašau (aht-see-prah-SHOW)'
    },
    
    // NON-EURO CURRENCIES
    GBP: { 
        hello: 'Hello', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    USD: { 
        hello: 'Hello', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    CAD: { 
        hello: 'Hello', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    AUD: { 
        hello: 'Hello', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    JPY: { 
        hello: 'Konnichiwa (kohn-nee-chee-wah)', 
        thankYou: 'Arigato (ah-ree-gah-toh)', 
        please: 'Onegaishimasu (oh-neh-guy-shee-mas)',
        howMuch: 'Ikura desu ka? (ee-koo-rah des kah)',
        excuse: 'Sumimasen (soo-mee-mah-sen)'
    },
    THB: { 
        hello: 'Sawasdee (sah-wah-dee)', 
        thankYou: 'Khop khun (kop koon)', 
        please: 'Karuna (gah-roo-nah)',
        howMuch: 'Tao rai? (tao rye)',
        excuse: 'Khor thot (kor-tot)'
    },
    MXN: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto cuesta? (KWAN-toh KWEHS-tah)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    INR: { 
        hello: 'Namaste (nah-mah-stay)', 
        thankYou: 'Dhanyavaad (dhan-yah-vahd)', 
        please: 'Kripya (krip-yah)',
        howMuch: 'Kitna hai? (kit-nah hay)',
        excuse: 'Maaf kijiye (mahf kee-jee-yeh)'
    },
    CNY: { 
        hello: 'Ni hao (nee how)', 
        thankYou: 'Xie xie (sheh-sheh)', 
        please: 'Qing (ching)',
        howMuch: 'Duo shao qian? (dwor shaow chyen)',
        excuse: 'Dui bu qi (dway boo chee)'
    },
    KRW: { 
        hello: 'Annyeonghaseyo (ahn-yong-hah-say-yo)', 
        thankYou: 'Gamsahamnida (gahm-sah-hahm-nee-dah)', 
        please: 'Butakamnida (boo-tahk-ahm-nee-dah)',
        howMuch: 'Eolma-yeyo? (uhl-mah-yeh-yo)',
        excuse: 'Joesonghamnida (jweh-song-hahm-nee-dah)'
    },
    SAR: { 
        hello: 'Marhaba (mar-hah-bah)', 
        thankYou: 'Shukran (shook-rahn)', 
        please: 'Min fadlak (min fad-lahk)',
        howMuch: 'Bikam? (bee-kahm)',
        excuse: 'Afwan (ahf-wahn)'
    },
    AED: { 
        hello: 'Marhaba (mar-hah-bah)', 
        thankYou: 'Shukran (shook-rahn)', 
        please: 'Min fadlak (min fad-lahk)',
        howMuch: 'Bikam? (bee-kahm)',
        excuse: 'Afwan (ahf-wahn)'
    },
    'CHF-DE': { 
        hello: 'Grüezi (GROO-et-see)', 
        thankYou: 'Danke (DAHN-keh)', 
        please: 'Bitte (BIT-teh)',
        howMuch: 'Wie viel? (vee feel)',
        excuse: 'Entschuldigung (ent-SHOOL-dee-goong)'
    },
    'CHF-FR': { 
        hello: 'Bonjour (bon-ZHOOR)', 
        thankYou: 'Merci (mehr-SEE)', 
        please: 'S\'il vous plaît (seel voo PLEH)',
        howMuch: 'Combien? (kom-bee-AN)',
        excuse: 'Excusez-moi (ex-kew-zay-MWAH)'
    },
    'CHF-IT': { 
        hello: 'Buongiorno (bwohn-JOR-noh)', 
        thankYou: 'Grazie (GRAH-tsee-eh)', 
        please: 'Per favore (pehr fah-VOH-reh)',
        howMuch: 'Quanto costa? (KWAN-toh KOH-stah)',
        excuse: 'Scusi (SKOO-zee)'
    },
    PLN: { 
        hello: 'Cześć (cheshch)', 
        thankYou: 'Dziękuję (jen-KOO-yeh)', 
        please: 'Proszę (PRO-sheh)',
        howMuch: 'Ile to kosztuje? (EE-leh toh kosh-TOO-yeh)',
        excuse: 'Przepraszam (psheh-PRAH-shahm)'
    },
    NZD: { 
        hello: 'Kia ora (kee-ah OR-ah)', 
        thankYou: 'Thank you', 
        please: 'Please',
        howMuch: 'How much?',
        excuse: 'Excuse me'
    },
    NOK: { 
        hello: 'Hei (hay)', 
        thankYou: 'Takk (tahk)', 
        please: 'Vær så snill (vair soh snil)',
        howMuch: 'Hvor mye? (voor MEE-eh)',
        excuse: 'Unnskyld (OON-sheel)'
    },
    SEK: { 
        hello: 'Hej (hey)', 
        thankYou: 'Tack (tahk)', 
        please: 'Tack (tahk)',
        howMuch: 'Hur mycket? (hoor MICK-et)',
        excuse: 'Ursäkta (oor-SHEK-tah)'
    },
    HKD: { 
        hello: 'Nei hou (nay ho)', 
        thankYou: 'Mh goi (mm-goy)', 
        please: 'Mh goi (mm-goy)',
        howMuch: 'Geidou chin? (gay-doh cheen)',
        excuse: 'Deui mh jyuh (doy mm joo)'
    },
    BRL: { 
        hello: 'Olá (oh-LAH)', 
        thankYou: 'Obrigado/a (oh-bree-GAH-doh)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: 'Quanto custa? (KWAN-toh KOOS-tah)',
        excuse: 'Com licença (kohm lee-SEN-sah)'
    },
    TRY: { 
        hello: 'Merhaba (mehr-hah-BAH)', 
        thankYou: 'Teşekkür ederim (teh-shek-KOOR eh-deh-REEM)', 
        please: 'Lütfen (LEWT-fen)',
        howMuch: 'Ne kadar? (neh kah-DAHR)',
        excuse: 'Affedersiniz (ahf-feh-dehr-see-NEEZ)'
    },
    ZAR: { 
        hello: 'Sawubona (sah-woo-BOH-nah)', 
        thankYou: 'Ngiyabonga (ng-yah-BONG-ah)', 
        please: 'Ngiyacela (ng-yah-CHEH-lah)',
        howMuch: 'Malini? (mah-LEE-nee)',
        excuse: 'Uxolo (oo-SHOH-loh)'
    },
    VND: { 
        hello: 'Xin chào (sin chow)', 
        thankYou: 'Cảm ơn (gahm uhn)', 
        please: 'Làm ơn (lahm uhn)',
        howMuch: 'Bao nhiêu? (bow nyew)',
        excuse: 'Xin lỗi (sin loy)'
    },
    IDR: { 
        hello: 'Halo (HAH-loh)', 
        thankYou: 'Terima kasih (teh-REE-mah KAH-see)', 
        please: 'Tolong (TOH-long)',
        howMuch: 'Berapa harganya? (beh-RAH-pah har-GAHN-yah)',
        excuse: 'Permisi (pehr-MEE-see)'
    },
    KHR: { 
        hello: 'Sua s\'dei (soo-ah s-DAY)', 
        thankYou: 'Orkun (aw-KOON)', 
        please: 'Suom (soo-OHM)',
        howMuch: 'Tlay ponman? (tlay PON-mahn)',
        excuse: 'Som toh (sohm toh)'
    },
    PHP: { 
        hello: 'Kumusta (koo-MOOS-tah)', 
        thankYou: 'Salamat (sah-lah-MAHT)', 
        please: 'Paki (pah-KEE)',
        howMuch: 'Magkano? (mahg-KAH-noh)',
        excuse: 'Paumanhin (pow-mahn-HEEN)'
    },
    MYR: { 
        hello: 'Hai (high)', 
        thankYou: 'Terima kasih (teh-REE-mah KAH-see)', 
        please: 'Tolong (TOH-long)',
        howMuch: 'Berapa harga? (beh-RAH-pah HAR-gah)',
        excuse: 'Maaf (mah-AHF)'
    },
    LKR: { 
        hello: 'Ayubowan (ah-yu-BOH-wahn)', 
        thankYou: 'Sthuthiyi (stoo-tee-YEE)', 
        please: 'Karunakara (kah-roo-nah-KAH-rah)',
        howMuch: 'Kiyada? (kee-YAH-dah)',
        excuse: 'Samavenna (sah-mah-VEHN-nah)'
    },
    ARS: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto cuesta? (KWAN-toh KWEHS-tah)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    CLP: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto vale? (KWAN-toh VAH-leh)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    COP: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto cuesta? (KWAN-toh KWEHS-tah)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    ILS: { 
        hello: 'Shalom (shah-LOHM)', 
        thankYou: 'Toda (toh-DAH)', 
        please: 'Bevakasha (beh-vah-kah-SHAH)',
        howMuch: 'Kama ze ole? (KAH-mah zeh oh-LEH)',
        excuse: 'Slicha (slee-KHAH)'
    },
    JOD: { 
        hello: 'Marhaba (mar-HAH-bah)', 
        thankYou: 'Shukran (shook-RAHN)', 
        please: 'Min fadlak (min FAHD-lahk)',
        howMuch: 'Bikam? (bee-KAHM)',
        excuse: 'Afwan (ahf-WAHN)'
    },
    EGP: { 
        hello: 'Ahlan (AH-lahn)', 
        thankYou: 'Shukran (shook-RAHN)', 
        please: 'Min fadlak (min FAHD-lahk)',
        howMuch: 'Bikam? (bee-KAHM)',
        excuse: 'Aasif (AH-seef)'
    },
    MAD: { 
        hello: 'Salam (sah-LAHM)', 
        thankYou: 'Shukran (shook-RAHN)', 
        please: 'Afak (AH-fahk)',
        howMuch: 'Bshal? (beh-SHAHL)',
        excuse: 'Smahli (smah-LEE)'
    },
    ISK: { 
        hello: 'Halló (HAH-loh)', 
        thankYou: 'Takk (tahk)', 
        please: 'Gjörðu svo vel (GYUR-thu svoh vehl)',
        howMuch: 'Hvað kostar? (kvahth KOST-ar)',
        excuse: 'Afsakið (AHF-sah-kith)'
    },
    DKK: { 
        hello: 'Hej (high)', 
        thankYou: 'Tak (tahk)', 
        please: 'Vær så venlig (vair soh VEN-lee)',
        howMuch: 'Hvor meget? (vor MY-et)',
        excuse: 'Undskyld (OON-skoold)'
    },
    CZK: { 
        hello: 'Ahoj (AH-hoy)', 
        thankYou: 'Děkuji (DYEH-koo-yee)', 
        please: 'Prosím (PROH-seem)',
        howMuch: 'Kolik to stojí? (KOH-lik toh STOH-yee)',
        excuse: 'Promiňte (PROH-meen-teh)'
    },
    HUF: { 
        hello: 'Szia (SEE-ah)', 
        thankYou: 'Köszönöm (KUR-sur-nurm)', 
        please: 'Kérem (KAY-rem)',
        howMuch: 'Mennyibe kerül? (MEN-yee-beh KEH-rewl)',
        excuse: 'Elnézést (EL-nay-zayst)'
    },
    RON: { 
        hello: 'Bună (BOO-nuh)', 
        thankYou: 'Mulțumesc (mool-tsoo-MESK)', 
        please: 'Vă rog (vuh rohg)',
        howMuch: 'Cât costă? (kuht KOS-tuh)',
        excuse: 'Scuzați-mă (skoo-ZATS-muh)'
    },
    BGN: { 
        hello: 'Zdravei (ZDRAH-vay)', 
        thankYou: 'Blagodarya (blah-goh-DAR-yah)', 
        please: 'Molya (MOL-yah)',
        howMuch: 'Kolko struva? (KOHL-koh STROO-vah)',
        excuse: 'Izvinete (eez-vee-NEH-teh)'
    },
    RSD: { 
        hello: 'Zdravo (ZDRAH-voh)', 
        thankYou: 'Hvala (HVAH-lah)', 
        please: 'Molim (MOH-leem)',
        howMuch: 'Koliko košta? (KOH-lee-koh KOHSH-tah)',
        excuse: 'Izvinite (eez-vee-NEE-teh)'
    },
    PEN: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto cuesta? (KWAN-toh KWEHS-tah)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    UYU: { 
        hello: 'Hola (OH-lah)', 
        thankYou: 'Gracias (GRAH-see-ahs)', 
        please: 'Por favor (por fah-VOR)',
        howMuch: '¿Cuánto sale? (KWAN-toh SAH-leh)',
        excuse: 'Disculpe (dees-KOOL-peh)'
    },
    BBD: { 
        hello: 'Hello (heh-LOH)', 
        thankYou: 'Thank you (tank yoo)', 
        please: 'Please (pleez)',
        howMuch: 'How much? (how much)',
        excuse: 'Excuse me (ex-KYOOZ mee)'
    },
    JMD: { 
        hello: 'Wah gwaan (wah GWAHN)', 
        thankYou: 'Big up (big UP)', 
        please: 'Please (pleez)',
        howMuch: 'How much dat? (how much dat)',
        excuse: 'Excuse me (ex-KYOOZ mee)'
    },
    TTD: { 
        hello: 'Hello (heh-LOH)', 
        thankYou: 'Thank you (tank yoo)', 
        please: 'Please (pleez)',
        howMuch: 'How much? (how much)',
        excuse: 'Excuse me (ex-KYOOZ mee)'
    },
    FJD: { 
        hello: 'Bula (BOO-lah)', 
        thankYou: 'Vinaka (vee-NAH-kah)', 
        please: 'Yalo vinaka (YAH-loh vee-NAH-kah)',
        howMuch: 'E vica? (eh VEE-thah)',
        excuse: 'Tulou (too-LOH)'
    }
};

// Background colors/gradients for each country
const COUNTRY_BACKGROUNDS = {
    // EUROZONE COUNTRIES - all share the same EUR gradient or can be customized
    EUR: { 
        name: 'European Blue',
        gradient: ['#1e3a8a', '#3b82f6', '#60a5fa']
    },
    'EUR-FR': { 
        name: 'French Blue',
        gradient: ['#1e3a8a', '#3b82f6', '#60a5fa']
    },
    'EUR-ES': { 
        name: 'Spanish Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    'EUR-IT': { 
        name: 'Italian Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    'EUR-DE': { 
        name: 'German Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    'EUR-NL': { 
        name: 'Dutch Orange',
        gradient: ['#c2410c', '#ea580c', '#f97316']
    },
    'EUR-PT': { 
        name: 'Portuguese Green',
        gradient: ['#065f46', '#059669', '#10b981']
    },
    'EUR-GR': { 
        name: 'Greek Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    'EUR-BE-FR': { 
        name: 'Belgian Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    'EUR-BE-NL': { 
        name: 'Belgian Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    'EUR-AT': { 
        name: 'Austrian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    'EUR-IE': { 
        name: 'Irish Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    'EUR-FI': { 
        name: 'Finnish Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    'EUR-SK': { 
        name: 'Slovak Blue',
        gradient: ['#1e3a8a', '#2563eb', '#3b82f6']
    },
    'EUR-SI': { 
        name: 'Slovenian Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    },
    'EUR-LT': { 
        name: 'Lithuanian Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    
    // NON-EURO CURRENCIES
    GBP: { 
        name: 'British Red',
        gradient: ['#7f1d1d', '#991b1b', '#dc2626']
    },
    USD: { 
        name: 'American Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    CAD: { 
        name: 'Canadian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    AUD: { 
        name: 'Outback Orange',
        gradient: ['#b45309', '#d97706', '#f59e0b']
    },
    JPY: { 
        name: 'Japanese Red',
        gradient: ['#be123c', '#e11d48', '#f43f5e']
    },
    THB: { 
        name: 'Thai Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    },
    MXN: { 
        name: 'Mexican Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    INR: { 
        name: 'Indian Saffron',
        gradient: ['#c2410c', '#ea580c', '#f97316']
    },
    CNY: { 
        name: 'Chinese Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    KRW: { 
        name: 'Korean Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    SAR: { 
        name: 'Saudi Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    AED: { 
        name: 'UAE Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    'CHF-DE': { 
        name: 'Swiss Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    'CHF-FR': { 
        name: 'Swiss Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    'CHF-IT': { 
        name: 'Swiss Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    PLN: { 
        name: 'Polish Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    NZD: { 
        name: 'Kiwi Green',
        gradient: ['#065f46', '#059669', '#10b981']
    },
    NOK: { 
        name: 'Norwegian Blue',
        gradient: ['#1e3a8a', '#2563eb', '#3b82f6']
    },
    SEK: { 
        name: 'Swedish Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    HKD: { 
        name: 'Hong Kong Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    BRL: { 
        name: 'Brazilian Green',
        gradient: ['#15803d', '#16a34a', '#22c55e']
    },
    TRY: { 
        name: 'Turkish Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    ZAR: { 
        name: 'African Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    VND: { 
        name: 'Vietnamese Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    IDR: { 
        name: 'Indonesian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    KHR: { 
        name: 'Cambodian Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    PHP: { 
        name: 'Philippine Blue',
        gradient: ['#1e3a8a', '#2563eb', '#3b82f6']
    },
    MYR: { 
        name: 'Malaysian Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    LKR: { 
        name: 'Sri Lankan Orange',
        gradient: ['#c2410c', '#ea580c', '#f97316']
    },
    ARS: { 
        name: 'Argentine Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    },
    CLP: { 
        name: 'Chilean Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    COP: { 
        name: 'Colombian Yellow',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    ILS: { 
        name: 'Israeli Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    JOD: { 
        name: 'Jordanian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    EGP: { 
        name: 'Egyptian Gold',
        gradient: ['#a16207', '#ca8a04', '#eab308']
    },
    MAD: { 
        name: 'Moroccan Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    ISK: { 
        name: 'Icelandic Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    },
    DKK: { 
        name: 'Danish Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    CZK: { 
        name: 'Czech Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    HUF: { 
        name: 'Hungarian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    RON: { 
        name: 'Romanian Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    BGN: { 
        name: 'Bulgarian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    RSD: { 
        name: 'Serbian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    PEN: { 
        name: 'Peruvian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    UYU: { 
        name: 'Uruguayan Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    },
    BBD: { 
        name: 'Barbadian Blue',
        gradient: ['#1e40af', '#3b82f6', '#60a5fa']
    },
    JMD: { 
        name: 'Jamaican Green',
        gradient: ['#065f46', '#059669', '#10b981']
    },
    TTD: { 
        name: 'Trinidadian Red',
        gradient: ['#991b1b', '#dc2626', '#ef4444']
    },
    FJD: { 
        name: 'Fijian Blue',
        gradient: ['#0c4a6e', '#0369a1', '#0284c7']
    }
};

// Additional background options for user choice
const CUSTOM_BACKGROUNDS = {
    'deep-ocean': {
        name: 'Deep Ocean',
        gradient: ['#0c4a6e', '#075985', '#0284c7']
    },
    'sunset': {
        name: 'Sunset',
        gradient: ['#7c2d12', '#ea580c', '#fb923c']
    },
    'forest': {
        name: 'Forest',
        gradient: ['#14532d', '#15803d', '#22c55e']
    },
    'purple-night': {
        name: 'Purple Night',
        gradient: ['#581c87', '#7e22ce', '#a855f7']
    },
    'slate': {
        name: 'Slate',
        gradient: ['#1e293b', '#334155', '#475569']
    },
    'rose': {
        name: 'Rose',
        gradient: ['#881337', '#be123c', '#fb7185']
    }
};

// ========================================
// DOM ELEMENTS
// ========================================

const form = document.getElementById('currencyForm');
const homeCurrencySelect = document.getElementById('homeCurrency');
const destCurrencySelect = document.getElementById('destCurrency');
const euroCountrySelect = document.getElementById('euroCountry');
const belgiumLanguageSelect = document.getElementById('belgiumLanguage');
const switzerlandLanguageSelect = document.getElementById('switzerlandLanguage');
const chfLanguageSelect = document.getElementById('chfLanguage');
const deviceTypeSelect = document.getElementById('deviceType');
const bgColorSelect = document.getElementById('bgColor');
const customBgFile = document.getElementById('customBgFile');
const clearImageBtn = document.getElementById('clearImageBtn');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');

// Premium feature controls
const customTitleInput = document.getElementById('customTitle');
const titleColorInput = document.getElementById('titleColor');
const textColorInput = document.getElementById('textColor');
const overlayDarknessInput = document.getElementById('overlayDarkness');
const darknessValueSpan = document.getElementById('darknessValue');
const conversionCountSelect = document.getElementById('conversionCount');
const showPhrasesCheckbox = document.getElementById('showPhrases');
const customFooterInput = document.getElementById('customFooter');
const footerColorInput = document.getElementById('footerColor');

const generateBtn = document.getElementById('generateBtn');
const loadingState = document.getElementById('loadingState');
const errorMessage = document.getElementById('errorMessage');
const canvas = document.getElementById('wallpaperCanvas');

const euroCountryGroup = document.getElementById('euroCountryGroup');
const belgiumLanguageGroup = document.getElementById('belgiumLanguageGroup');
const switzerlandLanguageGroup = document.getElementById('switzerlandLanguageGroup');
const chfLanguageGroup = document.getElementById('chfLanguageGroup');
const customBgGroup = document.getElementById('customBgGroup');

// Store uploaded custom image
let customBackgroundImage = null;

// ========================================
// EVENT LISTENERS
// ========================================

// Show/hide Euro country selector when EUR is selected
destCurrencySelect.addEventListener('change', (e) => {
    if (e.target.value === 'EUR') {
        euroCountryGroup.style.display = 'block';
    } else if (e.target.value === 'CHF') {
        euroCountryGroup.style.display = 'none';
        belgiumLanguageGroup.style.display = 'none';
        switzerlandLanguageGroup.style.display = 'none';
        chfLanguageGroup.style.display = 'block';
    } else {
        euroCountryGroup.style.display = 'none';
        belgiumLanguageGroup.style.display = 'none';
        switzerlandLanguageGroup.style.display = 'none';
        chfLanguageGroup.style.display = 'none';
    }
});

// Show/hide custom background upload when "Upload Custom Image" is selected
bgColorSelect.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
        customBgGroup.style.display = 'block';
    } else {
        customBgGroup.style.display = 'none';
        customBackgroundImage = null;
        imagePreview.style.display = 'none';
    }
});

// Update darkness value display
overlayDarknessInput.addEventListener('input', (e) => {
    darknessValueSpan.textContent = `${e.target.value}%`;
});

// Handle custom background image upload
customBgFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.match('image.*')) {
        showError('Please upload an image file (JPG, PNG, WebP)');
        customBgFile.value = '';
        return;
    }
    
    try {
        // Check file size and compress if needed
        let processedImage;
        const maxSizeBytes = 5 * 1024 * 1024; // 5MB
        
        if (file.size > maxSizeBytes) {
            // File is too large, compress it
            processedImage = await compressImage(file, maxSizeBytes);
        } else {
            // File is within limit, use as-is
            processedImage = await readImageFile(file);
        }
        
        // Store the processed image
        customBackgroundImage = new Image();
        customBackgroundImage.src = processedImage;
        
        // Show preview
        previewImg.src = processedImage;
        imagePreview.style.display = 'block';
        
    } catch (error) {
        showError('Failed to load image. Please try another file.');
        customBgFile.value = '';
    }
});

// Clear uploaded image
clearImageBtn.addEventListener('click', () => {
    customBackgroundImage = null;
    customBgFile.value = '';
    imagePreview.style.display = 'none';
    previewImg.src = '';
});

// Show/hide Belgium or Switzerland language selector based on Euro country
euroCountrySelect.addEventListener('change', (e) => {
    const country = e.target.value;
    
    if (country === 'BE') {
        belgiumLanguageGroup.style.display = 'block';
        switzerlandLanguageGroup.style.display = 'none';
    } else {
        belgiumLanguageGroup.style.display = 'none';
        switzerlandLanguageGroup.style.display = 'none';
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const homeCurrency = homeCurrencySelect.value;
    let destCurrency = destCurrencySelect.value;
    const bgColorChoice = bgColorSelect.value;
    
    // Validation
    if (!homeCurrency || !destCurrency) {
        showError('Please select both currencies');
        return;
    }
    
    // Handle EUR country selection
    if (destCurrency === 'EUR') {
        const euroCountry = euroCountrySelect.value;
        if (!euroCountry) {
            showError('Please select a Eurozone country');
            return;
        }
        
        // Handle Belgium language selection
        if (euroCountry === 'BE') {
            const belgiumLang = belgiumLanguageSelect.value;
            destCurrency = `EUR-BE-${belgiumLang}`;
        } else {
            destCurrency = `EUR-${euroCountry}`;
        }
    }
    
    // Handle CHF language selection
    if (destCurrency === 'CHF') {
        const chfLang = chfLanguageSelect.value;
        destCurrency = `CHF-${chfLang}`;
    }
    
    if (homeCurrency === destCurrency) {
        showError('Home and destination currencies must be different');
        return;
    }
    
    // Get selected device type
    const deviceType = deviceTypeSelect.value;
    
    // Generate wallpaper with all premium settings
    await generateWallpaper(
        homeCurrency, 
        destCurrency, 
        bgColorChoice, 
        customBackgroundImage,
        deviceType,  // Pass device type
        {
            customTitle: customTitleInput.value,
            titleColor: titleColorInput.value,
            textColor: textColorInput.value,
            overlayDarkness: parseInt(overlayDarknessInput.value),
            conversionCount: parseInt(conversionCountSelect.value),
            showPhrases: showPhrasesCheckbox.checked,
            customFooter: customFooterInput.value,
            footerColor: footerColorInput.value
        }
    );
});

// ========================================
// MAIN FUNCTIONS
// ========================================

/**
 * Fetch live exchange rate from API
 * Using exchangerate-api.com (free tier: 1500 requests/month)
 */
async function fetchExchangeRate(fromCurrency, toCurrency) {
    // Extract base currency from compound keys (e.g., 'EUR-FR' -> 'EUR', 'CHF-DE' -> 'CHF')
    const fromBase = fromCurrency.split('-')[0];
    const toBase = toCurrency.split('-')[0];
    
    const API_URL = `https://api.exchangerate-api.com/v4/latest/${fromBase}`;
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        
        const data = await response.json();
        return data.rates[toBase];
    } catch (error) {
        console.error('Exchange rate fetch error:', error);
        throw new Error('Could not fetch exchange rates. Please check your internet connection.');
    }
}

/**
 * Format currency amount with appropriate decimals
 */
function formatCurrency(amount, currency) {
    // No decimals for currencies typically shown as whole numbers
    if (['JPY', 'KRW', 'INR', 'HKD', 'TRY', 'VND', 'IDR', 'KHR', 'LKR', 'CLP', 'COP', 'ISK', 'HUF', 'CZK', 'RSD', 'JMD', 'UYU'].includes(currency)) {
        return Math.round(amount).toLocaleString('en-US');
    }
    
    // 2 decimals for most currencies
    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/**
 * Read image file as data URL
 */
function readImageFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Compress image to fit within size limit
 */
async function compressImage(file, maxSizeBytes) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const img = new Image();
            
            img.onload = () => {
                // Create canvas for compression
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Calculate scaling to reduce file size
                // Start with original dimensions, we'll reduce quality instead
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Try different quality levels until we're under the limit
                let quality = 0.9;
                let compressedDataUrl;
                
                const attemptCompression = () => {
                    compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                    
                    // Estimate file size (data URL is base64, so roughly 1.37x actual size)
                    const estimatedSize = (compressedDataUrl.length * 0.75);
                    
                    if (estimatedSize > maxSizeBytes && quality > 0.1) {
                        quality -= 0.1;
                        attemptCompression();
                    } else {
                        resolve(compressedDataUrl);
                    }
                };
                
                attemptCompression();
            };
            
            img.onerror = reject;
            img.src = e.target.result;
        };
        
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Show error message
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

/**
 * Main wallpaper generation function
 */
async function generateWallpaper(homeCurrency, destCurrency, bgColorChoice, customBgImage, deviceType, premiumSettings) {
    // Hide error, show loading
    errorMessage.style.display = 'none';
    loadingState.style.display = 'block';
    generateBtn.disabled = true;
    
    try {
        // Fetch live exchange rate
        const exchangeRate = await fetchExchangeRate(destCurrency, homeCurrency);
        
        // Get base currency for amounts lookup (e.g., 'EUR-FR' -> 'EUR')
        const destBase = destCurrency.split('-')[0];
        
        // Get predefined amounts for destination currency
        const allAmounts = CURRENCY_AMOUNTS[destBase];
        
        // Use only the requested number of conversions
        const destAmounts = allAmounts.slice(0, premiumSettings.conversionCount);
        
        // Calculate conversions
        const conversions = destAmounts.map(amount => ({
            dest: amount,
            home: amount * exchangeRate
        }));
        
        // Get phrases
        const phrases = COUNTRY_PHRASES[destCurrency];
        
        // Get background - custom image, custom color, or country default
        let background;
        if (customBgImage) {
            background = { type: 'image', image: customBgImage };
        } else if (bgColorChoice === 'auto') {
            background = COUNTRY_BACKGROUNDS[destCurrency] || COUNTRY_BACKGROUNDS[destBase];
        } else if (bgColorChoice === 'custom') {
            // Custom selected but no image uploaded - use default
            background = COUNTRY_BACKGROUNDS[destCurrency] || COUNTRY_BACKGROUNDS[destBase];
        } else {
            background = CUSTOM_BACKGROUNDS[bgColorChoice];
        }
        
        // Draw wallpaper on canvas
        await drawWallpaper({
            homeCurrency,
            destCurrency: destBase, // Use base currency for display
            conversions,
            phrases,
            background,
            deviceType,  // Pass device type to drawing function
            premiumSettings
        });
        
        // Download the wallpaper
        downloadWallpaper();
        
    } catch (error) {
        showError(error.message);
    } finally {
        loadingState.style.display = 'none';
        generateBtn.disabled = false;
    }
}

/**
 * Draw wallpaper on canvas
 * Now supports multiple device sizes with proportional scaling
 */
async function drawWallpaper(data) {
    const { homeCurrency, destCurrency, conversions, phrases, background, deviceType, premiumSettings } = data;
    
    // ============================================
    // DEVICE-SPECIFIC CONFIGURATION
    // ============================================
    // Get device configuration based on selection
    const deviceConfig = DEVICE_CONFIGS[deviceType];
    const width = deviceConfig.width;
    const height = deviceConfig.height;
    const scale = deviceConfig.scaleFactor;  // Used to scale all fonts and spacing
    
    // Extract premium settings with defaults
    const customTitle = premiumSettings.customTitle || 'Quick Travel Reference';
    const titleColor = premiumSettings.titleColor || '#ffffff';
    const textColor = premiumSettings.textColor || '#ffffff';
    const overlayDarkness = premiumSettings.overlayDarkness / 100 || 0.4; // Convert percentage to decimal
    const showPhrases = premiumSettings.showPhrases !== false; // Default true
    const customFooter = premiumSettings.customFooter || '';
    const footerColor = premiumSettings.footerColor || '#fcd34d';
    
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    
    // ========================================
    // BACKGROUND
    // ========================================
    
    if (background.type === 'image') {
        // Draw custom uploaded image
        // Calculate scaling to cover canvas while maintaining aspect ratio
        const imgAspect = background.image.width / background.image.height;
        const canvasAspect = width / height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (imgAspect > canvasAspect) {
            // Image is wider than canvas
            drawHeight = height;
            drawWidth = height * imgAspect;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Image is taller than canvas
            drawWidth = width;
            drawHeight = width / imgAspect;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        }
        
        ctx.drawImage(background.image, offsetX, offsetY, drawWidth, drawHeight);
        
        // Add semi-transparent overlay for text readability (custom darkness)
        ctx.fillStyle = `rgba(0, 0, 0, ${overlayDarkness})`;
        ctx.fillRect(0, 0, width, height);
    } else {
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, background.gradient[0]);
        gradient.addColorStop(0.5, background.gradient[1]);
        gradient.addColorStop(1, background.gradient[2]);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add subtle texture overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 2;
            ctx.fillRect(x, y, size, size);
        }
    }
    
    // ========================================
    // SAFE ZONES (Percentage-based, works for all devices)
    // ========================================
    
    // Avoid top 30% (clock/time) and bottom 20% (gesture bar)
    const safeTopMargin = height * 0.32;
    const safeBottomMargin = height * 0.82;
    const safeHeight = safeBottomMargin - safeTopMargin;
    
    // Padding scales with device (80px base × scale factor)
    const padding = Math.round(80 * scale);
    const contentWidth = width - (padding * 2);
    
    // ============================================
    // SCALED DIMENSIONS
    // ============================================
    // All font sizes and spacing scale proportionally with device
    // Base sizes are for iPhone (scale = 1.0)
    
    const titleFontSize = Math.round(64 * scale);
    const subtitleFontSize = Math.round(32 * scale);
    const currencyFontSize = Math.round(40 * scale);
    const phrasesTitleFontSize = Math.round(40 * scale);
    const phrasesFontSize = Math.round(32 * scale);
    const footerFontSize = Math.round(36 * scale);
    
    const rowHeight = Math.round(48 * scale);
    const phraseSpacing = Math.round(44 * scale);
    
    // Calculate actual content height for tight-fitting overlay
    // All dimensions now scale with device
    const titleSectionHeight = customTitle ? Math.round(150 * scale) : Math.round(50 * scale);
    const conversionRowHeight = rowHeight;
    const conversionsHeight = conversions.length * conversionRowHeight;
    const phrasesSectionHeight = showPhrases ? Math.round(290 * scale) : 0;
    const footerSectionHeight = customFooter ? Math.round(60 * scale) : 0;
    const totalContentHeight = titleSectionHeight + conversionsHeight + phrasesSectionHeight + footerSectionHeight;
    
    // ========================================
    // SEMI-TRANSPARENT OVERLAY
    // ========================================
    
    ctx.fillStyle = `rgba(0, 0, 0, ${overlayDarkness})`;
    ctx.fillRect(
        padding - 20,
        safeTopMargin - 20,
        contentWidth + 40,
        totalContentHeight + 40  // Tight fit to actual content
    );
    
    // ========================================
    // TITLE
    // ========================================
    
    let y = safeTopMargin + Math.round(40 * scale);
    
    if (customTitle) {
        ctx.fillStyle = titleColor;
        ctx.font = `bold ${titleFontSize}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(customTitle, width / 2, y);
        
        y += Math.round(30 * scale);
        
        ctx.font = `${subtitleFontSize}px Outfit, sans-serif`;
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.8;
        ctx.fillText(`${destCurrency} → ${homeCurrency}`, width / 2, y);
        ctx.globalAlpha = 1.0;
        
        y += Math.round(80 * scale);
    } else {
        // No title, just show currency pair smaller
        ctx.font = `${subtitleFontSize}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillStyle = textColor;
        ctx.fillText(`${destCurrency} → ${homeCurrency}`, width / 2, y);
        
        y += Math.round(60 * scale);
    }
    
    // ========================================
    // CURRENCY CONVERSIONS
    // ========================================
    
    ctx.textAlign = 'left';
    
    conversions.forEach((conversion, index) => {
        const destAmount = formatCurrency(conversion.dest, destCurrency);
        const homeAmount = formatCurrency(conversion.home, homeCurrency);
        
        // Alternating row background
        if (index % 2 === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(
                padding - Math.round(10 * scale), 
                y - Math.round(38 * scale), 
                contentWidth + Math.round(20 * scale), 
                rowHeight
            );
        }
        
        // Calculate center positions for tighter spacing (scaled)
        const columnGap = Math.round(100 * scale); // Gap between the two currency columns
        const leftColumnX = (width / 2) - columnGap; // Right-align left column
        const rightColumnX = (width / 2) + columnGap; // Left-align right column
        
        // Destination currency amount (right-aligned to center-left)
        ctx.fillStyle = textColor;
        ctx.font = `${currencyFontSize}px JetBrains Mono, monospace`;
        ctx.textAlign = 'right';
        ctx.fillText(`${destCurrency} ${destAmount}`, leftColumnX, y);
        
        // Arrow (centered)
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.5;
        ctx.textAlign = 'center';
        ctx.fillText('→', width / 2, y);
        ctx.globalAlpha = 1.0;
        
        // Home currency amount (left-aligned to center-right) - highlighted
        ctx.fillStyle = footerColor; // Use footer color for highlighted amounts
        ctx.textAlign = 'left';
        ctx.fillText(`${homeCurrency} ${homeAmount}`, rightColumnX, y);
        
        y += rowHeight;
    });
    
    y += Math.round(60 * scale);
    
    // ========================================
    // PHRASES SECTION (Optional)
    // ========================================
    
    if (showPhrases) {
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.9;
        ctx.font = `bold ${phrasesTitleFontSize}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('Essential Phrases', width / 2, y);
        ctx.globalAlpha = 1.0;
        
        y += Math.round(50 * scale);
        
        ctx.font = `${phrasesFontSize}px Outfit, sans-serif`;
        ctx.fillStyle = textColor;
        
        // Hello
        ctx.fillText(`Hello: ${phrases.hello}`, width / 2, y);
        y += phraseSpacing;
        
        // Thank you
        ctx.fillText(`Thank you: ${phrases.thankYou}`, width / 2, y);
        y += phraseSpacing;
        
        // Please
        ctx.fillText(`Please: ${phrases.please}`, width / 2, y);
        y += phraseSpacing;
        
        // How much?
        ctx.fillText(`How much?: ${phrases.howMuch}`, width / 2, y);
        y += phraseSpacing;
        
        // Excuse me
        ctx.fillText(`Excuse me: ${phrases.excuse}`, width / 2, y);
        
        y += Math.round(50 * scale);
    }
    
    // ========================================
    // CUSTOM FOOTER (Optional)
    // ========================================
    
    if (customFooter) {
        ctx.fillStyle = footerColor;
        ctx.font = `bold ${footerFontSize}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(customFooter, width / 2, y);
    }
}

/**
 * Download wallpaper as PNG
 */
function downloadWallpaper() {
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        const timestamp = new Date().toISOString().split('T')[0];
        link.download = `travel-wallpaper-${timestamp}.png`;
        link.href = url;
        
        link.click();
        
        // Cleanup
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// ========================================
// INITIALIZATION
// ========================================

// Set GBP as default home currency for Edward (UK-based)
window.addEventListener('DOMContentLoaded', () => {
    homeCurrencySelect.value = 'GBP';
});
