# GreenH2O Website — Deploy Guide

Static marketing & investment-pitch site for GreenH2O / NUCLEUS.  
**Stack:** Plain HTML + CSS + vanilla JS | Google Apps Script → Google Sheets | Netlify hosting

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete single-page website |
| `google-apps-script.js` | Paste into Google Apps Script to power the form |
| `README.md` | This file |

---

## Step 1 — Set up Google Sheets (5 minutes)

### 1.1 Create the spreadsheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"GreenH2O Enquiries"**
3. Leave the first sheet empty — the script will create headers automatically on first submission

### 1.2 Open Apps Script
1. In the sheet, click **Extensions → Apps Script**
2. Delete all existing code in the editor
3. Open `google-apps-script.js` from this folder and paste the entire contents
4. *(Optional)* On line 22, set `NOTIFY_EMAIL` to your email address to receive a notification for each new enquiry:
   ```js
   const NOTIFY_EMAIL = 'you@yourdomain.com';
   ```
5. Click **Save** (Ctrl+S / Cmd+S)

### 1.3 Deploy as a Web App
1. Click **Deploy → New Deployment**
2. Click the gear icon next to "Type" and select **Web App**
3. Fill in:
   - **Description:** `GreenH2O Form v1`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Click **Deploy**
5. Authorise the app when prompted (click "Allow")
6. **Copy the Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### 1.4 Connect the form
1. Open `index.html` in any text editor
2. Find this line (near the bottom, in the `<script>` block):
   ```js
   const SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with your copied URL:
   ```js
   const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Save the file

### 1.5 Test it
1. Open `index.html` in your browser (double-click or drag into browser)
2. Scroll to "Register Your Interest" and submit the form
3. Check your Google Sheet — a new row should appear within a few seconds

---

## Step 2 — Deploy to Netlify (2 minutes)

Netlify gives you free hosting with HTTPS and a public URL instantly.

### Option A — Drag and Drop (fastest)
1. Go to [app.netlify.com](https://app.netlify.com) and sign up / log in (free)
2. On the dashboard, find the **"Drop a folder here"** zone
3. Drag the entire `greenh2o-site/` folder onto it
4. Netlify deploys instantly and gives you a URL like `https://amazing-name-abc123.netlify.app`
5. Done ✓

### Option B — GitHub + Auto-deploy (recommended for ongoing updates)
1. Push this folder to a GitHub repository
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Select your repository
4. Build command: *(leave empty)*  
   Publish directory: `.` (or the folder name)
5. Click **Deploy site**

Every time you push a change to GitHub, Netlify redeploys automatically.

### Custom Domain (optional)
In Netlify: **Domain settings → Add custom domain** — enter your domain and follow the DNS instructions.

---

## Step 3 — Update the form URL after re-deployment

> ⚠️ Important: If you ever re-deploy the Google Apps Script (e.g. to update the code), you get a **new URL**. You must update `SCRIPT_URL` in `index.html` and re-deploy to Netlify.

To avoid this, always select **"Manage Deployments"** and update an existing deployment rather than creating a new one.

---

## Managing Enquiries

All form submissions land in your Google Sheet with:
- Timestamp (Malaysia time)
- Full contact details
- Enquiry type (Fleet Operator / Investor / Distributor / etc.)
- Message

**Export:** File → Download → CSV to export to Excel or share with your team.

**Filter by type:** Use Google Sheets' filter feature to view only Investors, Fleet Operators, etc.

---

## Updating the Site

All content is in `index.html`. To make changes:
1. Open `index.html` in any text editor (Notepad++, VS Code, etc.)
2. Edit the text you want to change
3. Save and re-upload to Netlify (drag-drop again, or push to GitHub)

Key sections to update as you approach launch:
- **Hero badge:** Change "Pre-launch · Targeting 2028" to your current status
- **Stats strip:** Update numbers if certified figures change
- **Launch timeline:** Update when confirmed
- **Investors section disclaimer:** Review with your legal team before going live

---

## Support

For technical questions about this site, refer to:
- [Netlify Docs](https://docs.netlify.com)
- [Google Apps Script Docs](https://developers.google.com/apps-script)
