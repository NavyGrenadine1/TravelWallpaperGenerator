# 🌍 Travel Wallpaper Generator

Generate custom mobile lockscreen wallpapers with live currency conversions and travel phrases. Never fumble with converter apps again—just glance at your phone!

---

## 🚀 **Quick Start (For Testing)**

### **Option 1: Test Locally (Easiest)**

1. **Download all files** to a folder on your computer
2. **Double-click `index.html`**
3. That's it! Your browser opens the app

**OR**

1. **Right-click `index.html`**
2. Choose "Open with" → Your browser (Chrome, Safari, Firefox, etc.)

### **Option 2: Test on Your Phone**

**Upload to Netlify Drop (Free, 30 seconds):**

1. Go to https://app.netlify.com/drop
2. Drag the **entire folder** into the browser window
3. Netlify gives you a URL (like `https://amazing-name-123.netlify.app`)
4. Open that URL on your phone
5. Test it! Generate a wallpaper and set it as your lockscreen

---

## 📱 **How to Use**

### **Step 1: Select Your Currencies**
- **Home Currency:** Where you're from (e.g., GBP)
- **Destination:** Where you're going (e.g., EUR - Euro)
- If you pick EUR, you'll get a second dropdown to choose the country (France, Spain, etc.)

### **Step 2: Choose Device (Optional)**
- iPhone (default)
- Samsung Galaxy
- Google Pixel

### **Step 3: Customize (Optional)**
All these features are unlocked for testing:

- **Custom Title:** Change "Quick Travel Reference" or remove it
- **Text Colors:** Pick any color for title, text, footer
- **Background:** 
  - Country default (auto)
  - 6 color themes
  - **Upload your own photo** (wedding pic, family photo, etc.)
- **Overlay Darkness:** Slider to make background more/less visible
- **Number of Conversions:** 10 or 15
- **Phrases:** Toggle on/off
- **Custom Footer:** Add personal message (e.g., "Our Honeymoon 2026")

### **Step 4: Generate**
Click "Generate Wallpaper" → Downloads automatically as PNG

### **Step 5: Set as Wallpaper**

**iPhone:**
1. Open Photos app
2. Find downloaded wallpaper
3. Tap share icon → "Use as Wallpaper"
4. Choose "Lock Screen"
5. Position as "Fit to Screen" (important!)

**Android:**
1. Open Gallery/Photos
2. Find wallpaper
3. Tap menu (3 dots) → "Set as wallpaper"
4. Choose "Lock screen"

---

## ✨ **Features**

### **Core Features:**
- ✅ **50 currencies** from AED to ZAR (alphabetical)
- ✅ **3 device sizes** (iPhone, Samsung, Pixel)
- ✅ **Live exchange rates** (updates before each generation)
- ✅ **15 smart conversion amounts** (coffee to hotels)
- ✅ **5 essential phrases** with phonetic pronunciations
- ✅ **14 Eurozone countries** with native languages
- ✅ **Switzerland:** Choose German, French, or Italian

### **Customization:**
- ✅ Custom title text + color
- ✅ Custom text colors
- ✅ Upload your own photo as background
- ✅ Adjustable overlay darkness (0-80%)
- ✅ Toggle phrases on/off
- ✅ Custom footer text + color
- ✅ 10 or 15 conversions
- ✅ 6 preset color themes

### **Design:**
- ✅ Mobile-optimized (1170×2532 iPhone, 1440×3200 Samsung, 1080×2400 Pixel)
- ✅ Safe zones (avoids clock and gesture bar)
- ✅ High contrast, easy to read
- ✅ Aviation-inspired theme
- ✅ One-click download

---

## 🌍 **Supported Destinations (50)**

**Top Destinations:**
- 🇪🇺 Europe (19 currencies including 14 Eurozone countries)
- 🇯🇵 Asia (12 currencies)
- 🇲🇽 Americas (11 currencies)
- 🇦🇪 Middle East (4 currencies)
- 🇿🇦 Africa (3 currencies)
- 🇫🇯 Pacific/Caribbean (4 currencies)

**Full list:** AED, ARS, AUD, BBD, BGN, BRL, CAD, CHF, CLP, CNY, COP, CZK, DKK, EGP, EUR, FJD, GBP, HKD, HUF, IDR, ILS, INR, ISK, JMD, JOD, JPY, KHR, KRW, LKR, MAD, MXN, MYR, NOK, NZD, PEN, PHP, PLN, RON, RSD, SAR, SEK, THB, TRY, TTD, USD, UYU, VND, ZAR

---

## 📂 **Files Included**

```
travel-wallpaper-generator/
├── index.html          (Main app - open this!)
├── style.css           (Design/styling)
├── script.js           (All the logic)
├── README.md           (This file)
└── CHANGELOG.md        (Version history)
```

**No installation needed. No server needed. Just open index.html!**

---

## 🎨 **Examples of What You Can Make**

**Honeymoon Trip:**
- Upload wedding photo as background
- EUR → GBP conversions
- Custom title: "Sarah & John's Paris Trip"
- Footer: "♥ May 2026"

**Backpacking Southeast Asia:**
- Thai Baht → GBP
- 15 conversions (10 baht to 7,500 baht)
- Thai phrases with pronunciations
- Sunset color theme

**Business Trip:**
- USD → JPY
- No title (minimalist)
- No phrases (conversions only)
- Dark overlay (60%)

**Family Vacation:**
- Upload family photo
- USD → EUR
- Custom footer: "Disney Paris 2026!"

---

## 💡 **Tips for Best Results**

### **Custom Photos:**
- **Portrait orientation** works best
- **High contrast photos** (so text is readable)
- Adjust overlay darkness if photo is too bright
- Max 5MB (auto-compressed if larger)

### **Wallpaper Setup:**
- Use "Fit to Screen" not "Fill Screen"
- This ensures conversions don't get cut off
- Safe zones keep content away from clock/gesture bar

### **Currency Amounts:**
- Amounts are pre-selected for practical spending
- EUR: 2-750 (coffee to hotel)
- JPY: 100-30,000 (scaled for yen pricing)
- VND: 10,000-10,000,000 (Vietnamese dong scale)

---

## 🔧 **Technical Details**

**For developers:**
- Pure HTML/CSS/JavaScript (no frameworks)
- No build process required
- Canvas API for wallpaper generation
- ExchangeRate-API.com for live rates (free tier: 1500/month)
- Google Fonts CDN for typography
- Client-side image compression (<5MB)

**Browser Requirements:**
- Any modern browser (Chrome, Safari, Firefox, Edge)
- JavaScript enabled
- Canvas API support (99% of browsers)

---

## 📋 **Deployment Options**

### **1. Netlify (Recommended)**
- Drag folder to https://app.netlify.com/drop
- Free forever
- Get shareable URL
- ~30 seconds

### **2. GitHub Pages**
- Create GitHub repo
- Upload files
- Enable Pages in settings
- Free, custom domain option

### **3. Vercel**
- Similar to Netlify
- Free tier
- Auto-deployment from Git

### **4. Local Only**
- Just keep the folder
- Open index.html when needed
- No internet required (except for exchange rates)

---

## 🐛 **Troubleshooting**

**"Exchange rate failed"**
- Check internet connection
- API might be rate-limited (wait 1 hour)
- Try again

**"Wallpaper downloaded but won't set"**
- Make sure you select "Fit to Screen" not "Fill"
- Check photo format is PNG
- Try downloading again

**"Custom photo won't upload"**
- File must be under 5MB
- Accept: JPG, PNG, WebP
- Try compressing the image first

**"Conversions are cut off on my phone"**
- Your phone might have different dimensions
- Use the device selector (iPhone/Samsung/Pixel)
- Or contact me to add your specific model

**"App doesn't load"**
- Make sure all 3 files are in same folder
- Try different browser
- Check JavaScript is enabled

---

## 📧 **Feedback & Support**

**Found a bug?** Let me know!
**Want a feature?** Tell me what you need!
**Wrong exchange rate?** Rates come from ExchangeRate-API.com
**Wrong translation?** Happy to fix—let me know which phrase!

---

## 🔮 **Coming Soon (Maybe)**

Thinking about adding:
- [ ] More currencies (requests welcome!)
- [ ] Edit phrases yourself
- [ ] Dark mode wallpapers
- [ ] Save favorite settings

---

## 📜 **Legal Stuff**

- Exchange rates are for reference only
- Not responsible for financial decisions
- Use photos you own or have permission to use
- Free to use for personal travel

---

## 🎉 **Have Fun!**

This tool is meant to make travel easier and less stressful. No more fumbling with converter apps while someone waits for you to pay!

Generate a wallpaper, test it on a trip, and let me know how it goes.

**Pro tip:** Generate a fresh wallpaper before each trip with updated exchange rates!

---

**Made with ❤️ for travelers who hate doing mental math**
