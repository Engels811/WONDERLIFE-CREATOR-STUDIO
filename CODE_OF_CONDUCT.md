# WonderLife Code of Conduct


## 🚫 Nicht erlaubt
- Belästigung oder Diskriminierung
- Unangemessener Sprachgebrauch
- Spam, Trolling oder destruktives Verhalten


## 📩 Verstöße melden
Bitte direkt an: **support@wonderlife.network**


---


// ==========================
// 🐞 ISSUE TEMPLATES
// ==========================
// Create folder: .github/ISSUE_TEMPLATE/


// .github/ISSUE_TEMPLATE/bug_report.md
---
name: "🐞 Bug Report"
about: Fehler melden
---
**Beschreibung des Fehlers:**


**Schritte zum Reproduzieren:**
1. …
2. …


**Erwartetes Verhalten:**


**Screenshots:**


**System:**
- Browser:
- OS:


// .github/ISSUE_TEMPLATE/feature_request.md
---
name: "✨ Feature Request"
about: Neue Funktionen vorschlagen
---
**Welche Funktion wünschst du dir?**


**Warum ist sie wichtig?**


**Design-Vorschlag (optional):**


---


// ==========================
// ⚙ GitHub Actions — CI/CD Workflow
// ==========================
// File: .github/workflows/deploy.yml


name: Deploy to Vercel


on:
push:
branches:
- main


jobs:
deploy:
runs-on: ubuntu-latest
steps:
- name: Checkout code
uses: actions/checkout@v3


- name: Install Node
uses: actions/setup-node@v3
with:
node-version: 18


- name: Install dependencies
run: npm install


- name: Build project
run: npm run build


- name: Deploy to Vercel
uses: amondnet/vercel-action@v20
with:
vercel-token: ${{ secrets.VERCEL_TOKEN }}
vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
working-directory: ./
