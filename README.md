# andrealati.github.io

Personal academic website: one static page served by GitHub Pages, with no build step and no libraries.

## Files

- `index.html`: page structure, bio and contact links
- `data/papers.js`: **the list of papers**. Edit the `papers` array to add, remove or update a paper (the fields are documented at the top of the file). The page draws itself from this list.
- `css/style.css`: all styling. Colours (light and dark) are defined at the top.
- `js/site.js`: light/dark toggle and nav highlighting
- `docs/`: CV and working-paper PDFs
- `img/profile.jpg`: portrait (resized to ~480px; the originals are `profile_pic*.jpg`)

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

Originally adapted from Jacopo Perego's academic template (itself based on Start Bootstrap's Grayscale theme, Apache 2.0).
