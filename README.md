# Siyue Ren Academic Homepage

This is a lightweight static academic homepage generated from `CV_2026_SiyueRen.pdf`. It is designed for GitHub Pages and uses plain HTML, CSS, and JavaScript.

## Structure

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/profile.jpg
│   └── files/cv.pdf
└── README.md
```

## Edit Checklist

- Add a real portrait at `assets/images/profile.jpg`. If it is missing, the page shows a built-in placeholder.
- Replace `#` links marked with `TODO` comments for Google Scholar, GitHub, LinkedIn, ORCID, paper URLs, code, and BibTeX.
- Update publication statuses when submitted work is accepted or published.
- Add talks, teaching, workshop organization, or invited presentations when available.

## Local Preview

Open `index.html` directly in a browser, or run a small static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

Push this folder to a GitHub repository and enable GitHub Pages from the repository settings. Use the repository root as the publishing source.
