# Travel Wallpaper Generator

## Overview

This is a browser-based tool that generates custom mobile lockscreen wallpapers for international travelers. The wallpapers display live currency conversions and essential travel phrases in the local language with phonetic pronunciations.

## Purpose

When traveling abroad, constantly opening calculator or converter apps to check prices is inconvenient. This tool creates a wallpaper you can set as your phone's lockscreen, allowing you to quickly reference currency conversions and useful phrases at a glance.

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks or build tools required)
- Runs entirely in the browser (no server needed)
- Uses the HTML5 Canvas API to generate wallpaper images
- Fetches live exchange rates from ExchangeRate-API.com
- All image processing happens locally in the browser
- No photos are uploaded or stored anywhere
- Light blue color scheme for clean, modern appearance

## Features

### Currency Support
- 50 international currencies supported
- Alphabetically organized for easy selection
- Live exchange rate data fetched before each wallpaper generation
- Smart number formatting (some currencies display without decimals)

### Eurozone Countries
When selecting EUR as destination currency, you can choose from 14 specific countries:
- France, Spain, Italy, Germany, Netherlands, Portugal, Greece
- Belgium (with French or Dutch language options)
- Austria, Ireland, Finland, Slovakia, Slovenia, Lithuania

Each country provides phrases in the appropriate native language.

### Switzerland
When selecting CHF (Swiss Franc), you can choose from 3 languages:
- German, French, or Italian

### Device-Specific Sizes
The generator creates wallpapers optimized for three device types:
- iPhone (1170 × 2532 pixels)
- Samsung Galaxy (1440 × 3200 pixels)
- Google Pixel (1080 × 2400 pixels)

All fonts and spacing scale proportionally to maintain the same visual design across devices.

### Wallpaper Customization

**Title**
- Change the default "Quick Travel Reference" text
- Choose custom color
- Leave blank to remove the title entirely

**Text Colors**
- Customize main text color (conversions and phrases)
- Separate color picker for title

**Background**
- Auto mode uses country-themed gradient
- Six preset color themes available
- Upload your own photo (JPG, PNG, or WebP)
- Photos over 5MB are automatically compressed

**Overlay Darkness**
- Adjustable from 0% to 80%
- Controls the dark overlay that ensures text remains readable over photos

**Conversions**
- Choose 10 or 15 conversion amounts
- Amounts are pre-selected for practical spending (coffee to hotels)

**Phrases**
- Toggle the phrases section on or off
- Displays 5 essential phrases: Hello, Thank you, Please, How much?, Excuse me
- All phrases include phonetic pronunciations

**Footer**
- Optional custom text at bottom (for personal messages)
- Custom color picker

## File Structure

```
/
├── index.html          Main application page
├── style.css           All styling and design
├── script.js           Application logic and functionality
├── DOCUMENTATION.md    This file
└── CHANGELOG.md        Version history
```

## How to Use Locally

1. Download all files to a folder on your computer
2. Double-click index.html or right-click and select "Open with" your browser
3. The application will open in your default web browser
4. No internet connection is required except for fetching live exchange rates

## How to Deploy to GitHub Pages

### Initial Setup

1. Create a GitHub account at github.com (free)
2. Create a new repository
   - Click the green "New" button
   - Name it (e.g., "travel-wallpaper-generator")
   - Keep it Public
   - Check "Add a README file"
   - Click "Create repository"

### Upload Files

1. In your repository, click "Add file" then "Upload files"
2. Drag and drop all files (index.html, style.css, script.js, DOCUMENTATION.md, CHANGELOG.md)
3. Scroll down and click "Commit changes"

### Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Branch", change "None" to "main"
4. Click "Save"
5. Wait 1-2 minutes, then refresh the page
6. Your site URL will appear at the top (https://username.github.io/repo-name)

### Update PayPal Link

The app includes an optional PayPal donation link at the bottom. The link is already configured with a working PayPal.Me address.

If you want to change it to your own PayPal:

1. Sign up at https://www.paypal.me and create your link
2. In index.html, find the line with `paypal.me/EdwardMula1`
3. Replace `EdwardMula1` with your PayPal.Me username
4. Save and upload to GitHub

If you prefer not to accept donations, simply delete the entire "PayPal Support Section" from index.html (clearly marked with comments).

### Testing

1. Click the URL GitHub provides
2. Your application should load in the browser
3. Test generating a wallpaper
4. If it doesn't work immediately, wait another minute and try again

## How to Update Files

### On GitHub

1. Navigate to your repository
2. Click on the file you want to update
3. Click the pencil icon (top right)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait 30-60 seconds for changes to deploy

### Or Upload New Versions

1. Click "Add file" then "Upload files"
2. Upload the updated file
3. Confirm you want to replace the existing file
4. Click "Commit changes"

## Using the Application

### Step 1: Select Currencies

- Home Currency: The currency you normally use
- Destination Currency: The currency of the country you're visiting

If you select EUR or CHF, additional dropdowns will appear to choose the specific country or language.

### Step 2: Choose Device Type

Select your phone model:
- iPhone (default)
- Samsung Galaxy
- Google Pixel

This ensures the wallpaper fits your screen properly.

### Step 3: Customize Appearance

All customization options are available:
- Upload a photo or choose a color theme
- Adjust title, colors, and overlay darkness
- Choose number of conversions
- Toggle phrases on/off
- Add custom footer text

### Step 4: Generate

Click "Generate Wallpaper" and the app will:
1. Fetch the current exchange rate
2. Calculate all conversions
3. Draw the wallpaper on a canvas
4. Automatically download it as a PNG file

### Step 5: Set as Wallpaper

**iPhone:**
1. Open Photos app
2. Find the downloaded wallpaper
3. Tap the share icon
4. Select "Use as Wallpaper"
5. Choose "Lock Screen"
6. Position as "Fit to Screen"

**Android:**
1. Open Gallery or Photos app
2. Find the wallpaper
3. Tap menu (three dots)
4. Select "Set as wallpaper"
5. Choose "Lock screen"

## Technical Implementation Notes

### Safe Zones

The wallpaper layout accounts for system UI elements:
- Top 32% is avoided (clock and status bar)
- Bottom 18% is avoided (gesture bar)
- Content is centered in the safe middle area

These percentages work across all device sizes.

### Scaling System

All dimensions scale proportionally based on device height:
- Base design is iPhone (scale factor 1.0)
- Samsung: scale factor 1.264 (26.4% larger)
- Pixel: scale factor 0.948 (5.2% smaller)

Font sizes, padding, and spacing all multiply by the scale factor, ensuring consistent visual design across devices.

### Currency Formatting

Some currencies (JPY, KRW, IDR, VND, etc.) typically don't use decimal places. The application automatically formats these as whole numbers.

### Image Upload

When you upload a photo:
1. File is read locally in the browser
2. If over 5MB, it's compressed using canvas resampling
3. The processed image is stored in memory only
4. It's never sent to any server
5. Clearing the browser tab removes it completely

### Exchange Rate API

The application uses Frankfurter API, a free and open-source exchange rate service with no rate limits. The API provides daily currency data from the European Central Bank. No API key required.

## Color Scheme

The interface uses a light blue color scheme:
- Primary: Sky blue (#0284c7)
- Background: Light blue (#dbeafe)
- Borders: Soft blue (#bfdbfe)

This creates a clean, modern, travel-friendly aesthetic.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Safari
- Firefox

Requires JavaScript to be enabled.

## Privacy

- No data is collected
- No photos are stored or transmitted
- All processing happens locally in your browser
- The only external request is to fetch exchange rates

## Donations

This tool is completely free to use. If you find it helpful, there's an optional PayPal tip link at the bottom of the page. Donations are voluntary and appreciated but not required.

## Limitations

- Exchange rates are for reference only (verify with your bank before financial decisions)
- Exchange rates update once per day (via European Central Bank)
- Internet connection required only for fetching rates (not for using uploaded photos or generating wallpapers)
- Wallpapers are generated fresh each time (no saved templates)

## Troubleshooting

### "Exchange rate failed"
- Check your internet connection
- Wait an hour if API limit might be reached
- Try again

### "Wallpaper won't set on phone"
- Use "Fit to Screen" not "Fill Screen" when setting wallpaper
- Ensure the file downloaded properly (check Downloads folder)
- Try generating again

### "Custom photo won't upload"
- File must be under 5MB (or will auto-compress)
- Accepted formats: JPG, PNG, WebP
- Try a different image if one fails

### "App doesn't load"
- Ensure all three files (HTML, CSS, JS) are in the same folder
- Check that JavaScript is enabled in your browser
- Try a different browser

### "Conversions are cut off"
- Select the correct device type (iPhone/Samsung/Pixel)
- Use "Fit to Screen" when setting wallpaper
- If your phone model isn't listed, try each option to see which fits best

### "Gallery button opens camera on iPhone"
- Two separate buttons should appear: "From Gallery" and "Take Photo"
- Use "From Gallery" to access your photo library
- Use "Take Photo" to open the camera

## License

Free for personal use. Use only photos you own or have permission to use. Donations are optional and appreciated.

## Attribution

Currency data provided by Frankfurter API (European Central Bank data)
