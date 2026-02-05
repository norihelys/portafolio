# Editing site content (JSON)

Non-technical editors can update site copy by editing the JSON files in `src/data/`.

- `services.json`: Services page content in Spanish (`es`) and English (`en`).
- `projects.json`: Work/Projects listings, with Featured and Recent sections in both languages.

General tips:
- Keep quotes `"` escaped inside JSON strings (e.g., `\"quoted text\"`).
- Do not remove required keys like `title`, `sections`, `items`, `featured`, `recent`.
- You can reorder items in arrays to change display order.

After saving, rebuild the site to see changes.
