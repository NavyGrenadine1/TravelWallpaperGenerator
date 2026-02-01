[README.md](https://github.com/user-attachments/files/24991154/README.md)
# Travel Wallpaper Generator

A simple browser tool for creating custom phone wallpapers with currency conversions and travel phrases. Never fumble with calculator apps again while traveling.

## What It Does

This tool generates a mobile lockscreen wallpaper that shows live currency conversions and essential phrases for your destination. Instead of constantly opening converter apps while abroad, just glance at your phone's lockscreen to see how much things cost in your currency.

## Features

**50 Currencies Supported**
From AED to ZAR, with all major travel destinations covered. The list includes specific options for Eurozone countries (14 different countries with native languages) and Switzerland (3 language options).

**Device-Specific Sizing**
Creates wallpapers optimized for iPhone, Samsung Galaxy, or Google Pixel. The layout automatically scales to maintain proper proportions across different screen sizes.

**Full Customization**
- Upload your own photos as backgrounds
- Customize colors for title, text, and footer
- Adjust overlay darkness (0-80%)
- Choose 10 or 15 conversion amounts
- Toggle phrases section on/off
- Add personal footer text

**Live Exchange Rates**
Fetches current rates before generating each wallpaper. Uses ExchangeRate-API.com for up-to-date data.

**Local Phrases with Pronunciation**
Each destination includes 5 essential phrases: Hello, Thank you, Please, How much?, and Excuse me. All include phonetic pronunciations so you can actually say them.

## How to Use

### Running Locally

1. Download the three core files (index.html, style.css, script.js)
2. Put them in the same folder
3. Double-click index.html to open in your browser

No installation or setup required. Works completely offline except for fetching exchange rates.

### Deploying to GitHub Pages

1. Create a GitHub account (free)
2. Create a new public repository
3. Upload the three core files
4. Go to Settings, then Pages
5. Select "main" branch and save
6. Your site will be live in 1-2 minutes

The URL will be: https://yourusername.github.io/repository-name

### Creating a Wallpaper

1. Select your home currency
2. Select destination currency
3. Choose your phone type (iPhone, Samsung, or Pixel)
4. Customize appearance if desired
5. Click "Generate Wallpaper"

The PNG downloads automatically. Set it as your lockscreen and you're ready to travel.

## Technical Details

Built with vanilla HTML, CSS, and JavaScript. No frameworks or build process needed. Uses the Canvas API to draw wallpapers client-side. All image processing happens in your browser, nothing is uploaded or stored anywhere.

The layout uses safe zones to avoid system UI elements like the clock and gesture bar. Fonts and spacing scale proportionally across device sizes to maintain consistent visual design.

## Browser Support

Works on Chrome, Safari, Firefox, and Edge. Requires JavaScript enabled.

## Privacy

No data collection. Photos are processed locally and never leave your browser. The only external request is fetching exchange rates from the API.

## Files

- index.html: Main application
- style.css: All styling
- script.js: Application logic
- DOCUMENTATION.md: Complete usage guide
- CHANGELOG.md: Version history

## Notes

Exchange rates are for reference only. Always verify with your bank before making financial decisions. The free API tier allows 1,500 requests per month.

If you find this useful, there's an optional PayPal tip link at the bottom of the page.

## License

Free for personal use. Use only photos you own or have permission to use.
