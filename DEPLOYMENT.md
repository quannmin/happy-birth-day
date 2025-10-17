# 🚀 Deploy to GitHub Pages

Follow these steps to deploy your birthday website to GitHub Pages:

## Step 1: Update package.json

✅ Already done! But make sure to replace `YOUR_GITHUB_USERNAME` in `package.json` line 5 with your actual GitHub username.

Example:
```json
"homepage": "https://yourusername.github.io/happy-birth-day",
```

## Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Birthday website"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `happy-birth-day`
3. Set to **Public** (required for free GitHub Pages)
4. Do NOT initialize with README
5. Click "Create repository"

## Step 4: Connect Local Repository to GitHub

Replace `YOUR_GITHUB_USERNAME` with your actual username:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/happy-birth-day.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your production app
- Create a `gh-pages` branch
- Deploy to GitHub Pages automatically

## Step 6: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select branch: `gh-pages`
5. Click **Save**

## Step 7: Access Your Website

After 1-2 minutes, your website will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/happy-birth-day/
```

## 🔄 Update Your Website

Whenever you make changes:

```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

## ⚠️ Important Notes

- Make sure all your photos are in the `public/photos/` folder before deploying
- The music file `public/happy-birthday.mp3` should also be present
- All text is in Vietnamese UTF-8 encoding - already configured ✅
- The website is optimized for mobile (9:16 aspect ratio photos)

## 🎉 Your Birthday Surprise is Ready!

Once deployed, share the link with your girlfriend and make her day special! 💕

---

**Need help?** Check GitHub Pages documentation: https://pages.github.com/
