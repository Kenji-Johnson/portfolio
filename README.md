# Simple Hello World Website

This is a minimal static "Hello, World!" website for quick local preview and use in your portfolio.

Files:

- `index.html` — The main page
- `styles.css` — Simple styling
- `script.js` — Tiny JS interaction (change the text & show an alert)

How to run locally:

1) Open directly in the browser (quickest)

   - Double-click `index.html` or open it in your browser.

2) Run a simple HTTP server with Python (recommended if you interact with JS).

```bash
# Python 3
python3 -m http.server 8000
# Then open http://localhost:8000
```

3) Use Node.js `http-server` if you prefer Node tools (install it once):

```bash
npm install -g http-server
http-server -p 8000
# Then open http://localhost:8000
```

4) NPM "start" script (uses Python behind the scenes) — run this from the project root:

```bash
npm start
```

Notes:
- The site is intentionally minimal and is a good starting point for a portfolio page or static site demo.
- You can add more pages or assets under a `public/` or `site/` folder and point a simple server there.

Enjoy! 👋


Deployment (GitHub Pages)

- This repository includes a GitHub Actions workflow that automatically deploys the root of `main` to the `gh-pages` branch on every push.
- After a push to `main`, the site will be published to GitHub Pages at:

  https://Kenji-Johnson.github.io/portfolio

  If you don't see it immediately, wait a minute for the deployment action to finish and the site to be available. You can view workflow logs under the Actions tab in the repository, or check the `gh-pages` branch in the repo.


> Deployment re-run requested.