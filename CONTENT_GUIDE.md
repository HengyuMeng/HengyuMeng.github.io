# Homepage content guide

The homepage now has three simple content interfaces: Experience, News, and Publications. Jekyll regenerates the homepage and list pages from these source files.

## 1. Experience (internships and visits)

Edit `_data/experiences.yml`. Add one YAML block for each experience. Items are displayed in file order, with the first item at the top.

```yml
- title: Institution Name
  period: Jun 2026 - Aug 2026
  position: Research Intern
  description: One sentence describing the team, project, or research topic.
  image: experience/institution-logo.png
  image_alt: Institution Name logo
  url: https://example.com
```

Fields:

- `title`: institution name; required and displayed as the bold first line.
- `period`: date range; required and displayed on the second line.
- `position`: role or visiting title; required and displayed on the second line.
- `description`: team, work, or research summary; required and displayed on the third line.
- `image`: path relative to `assets/img/`. Put logos in `assets/img/experience/` when possible. If omitted, the card displays the first character of `title`.
- `image_alt`: accessible description of the image; recommended.
- `url`: institution or lab URL; optional. When present, the title becomes a link.

The data file is intentionally empty now, so no placeholder information is published. Experience automatically appears between News and Selected Publications after the first real entry is added.

## 2. News

Continue adding Markdown entries under `_news/`. Homepage behavior is configured in `_pages/about.md`:

```yml
announcements:
  enabled: true
  scrollable: true
  limit: 10
```

- `scrollable: true`: adds a vertical scrollbar when there are more than three news items.
- `limit`: maximum number of homepage items. Leave it blank to include every item in `_news/`.

## 3. Publications

Edit `_bibliography/papers.bib`. Every paper needs a `paper_type` field:

```bibtex
@article{paper-id,
  title={Paper Title},
  author={...},
  year={2026},
  paper_type={tech},
  selected={true}
}
```

Fields:

- `paper_type={tech}`: places the paper under **Tech Papers**.
- `paper_type={art_hci}`: places the paper under **ART & HCI Papers**.
- `selected={true}`: also shows the paper under **Selected Publications** on the homepage.
- `selected={false}`, or no `selected` field: shows the paper only on the full Publications page.

A paper without `paper_type` will not appear in either category. Existing papers have an initial classification based on their research topic; change only `paper_type` if you want to move one.
