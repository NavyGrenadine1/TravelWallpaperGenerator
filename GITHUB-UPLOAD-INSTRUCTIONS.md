# 🚀 HOW TO UPLOAD TO GITHUB

## STEP 1: WHAT FILES YOU NEED

You should have these files ready to upload:

1. **landing-page.html** - The main homepage (download this)
2. **index.html** - Your existing wallpaper generator app
3. **style.css** - Your existing CSS file
4. **script.js** - Your existing JavaScript file
5. **legal.html** - Legal/privacy page (download this)
6. **demo-screenshot.jpg** - That iPhone screenshot you showed me

---

## STEP 2: PREPARE YOUR SCREENSHOT

1. Find that iPhone screenshot you showed me (with Thai Baht conversions)
2. **Rename it to:** `demo-screenshot.jpg`
3. Make sure it's a .jpg file

---

## STEP 3: GO TO GITHUB

1. Go to https://github.com
2. Log in to your account
3. Go to your repository (the one you already created)

---

## STEP 4: UPLOAD FILES

### Option A: Upload One by One

1. Click **"Add file"** → **"Upload files"**
2. Drag these files in:
   - landing-page.html
   - legal.html
   - demo-screenshot.jpg
3. Scroll down, click **"Commit changes"**

Your existing files (index.html, style.css, script.js) should already be there from before!

### Option B: Upload All at Once

1. Put all 6 files in one folder
2. Click **"Add file"** → **"Upload files"**
3. Drag the whole folder in
4. Click **"Commit changes"**

---

## STEP 5: MAKE LANDING PAGE THE HOMEPAGE

By default, GitHub shows index.html as the homepage. We need to change this:

**TWO OPTIONS:**

### Option A: Rename Files (EASIEST)

1. In your repository, click on **index.html**
2. Click the **pencil icon** (edit)
3. Change the filename at the top from `index.html` to `app.html`
4. Scroll down, click "Commit changes"
5. Now click on **landing-page.html**
6. Click pencil icon
7. Change filename from `landing-page.html` to `index.html`
8. Commit changes

**Result:** Now landing-page is the homepage!

### Option B: Edit the Link (ALTERNATIVE)

Keep filenames as-is, but in landing-page.html:
1. Find the line: `<a href="index.html" class="app-link">`
2. Change it to: `<a href="app.html" class="app-link">`
3. Then rename landing-page.html to index.html

---

## STEP 6: UPDATE GOOGLE ANALYTICS (OPTIONAL)

If you want to track visitors:

1. Go to https://analytics.google.com
2. Create an account (free)
3. Get your Measurement ID (looks like: G-ABC123XYZ)
4. In GitHub, open **landing-page.html** (or index.html after renaming)
5. Click pencil icon to edit
6. Find `G-XXXXXXXXXX` (appears twice)
7. Replace both with your real ID
8. Save

---

## STEP 7: TEST IT!

1. Wait 1-2 minutes for GitHub to update
2. Go to your URL: `https://yourusername.github.io/repo-name/`
3. You should see the blue landing page!
4. Click "Create your wallpaper" button
5. Should take you to the generator

---

## 🐛 TROUBLESHOOTING

**"Landing page shows but generator link doesn't work"**
- Make sure you renamed index.html to app.html
- Or updated the link in landing-page.html

**"Still seeing the old generator as homepage"**
- Make sure landing-page.html is renamed to index.html
- Check you committed the changes
- Wait 2 minutes and try again

**"Demo screenshot doesn't show"**
- Make sure screenshot is named exactly: `demo-screenshot.jpg`
- Check it's in the root folder (not in a subfolder)

**"Nothing works"**
- Make sure ALL files are in the root folder
- Don't put them in subfolders
- Wait 2 minutes after uploading

---

## ✅ FINAL FILE STRUCTURE

Your repository should look like:

```
/
├── index.html (this is the landing page - renamed from landing-page.html)
├── app.html (this is the generator - renamed from index.html)
├── style.css
├── script.js
├── legal.html
├── demo-screenshot.jpg
├── README-SHARE.md
└── CHANGELOG.md
```

---

**THAT'S IT! Your website should now be live!** 🎉
