# Homepage content guide

The homepage has four simple content interfaces: Experience, News, Exhibitions, and Publications. Jekyll regenerates the homepage and list pages from these source files.

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

Experience appears between News and Selected Publications whenever `_data/experiences.yml` contains at least one entry.

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

## 3. Exhibitions

Edit `_data/exhibitions.yml`. Put artwork images under `assets/img/exhibition/`.

```yml
- title: Artwork or Exhibition Title
  artists: Hengyu Meng, Collaborator Name
  venue: Exhibition or Festival Name
  period: Jul 2026
  description: A concise description of the artwork, medium, or concept.
  image: exhibition/artwork-title.jpg
  image_alt: Artwork title shown at the exhibition
  highlight: Interactive Installation
  website: https://example.com
  video: https://example.com/video
  catalog: https://example.com/catalog.pdf
  selected: true
```

Fields:

- `title`: artwork or exhibition name; required.
- `artists`: artist and collaborator names.
- `venue`: exhibition, festival, gallery, or institution.
- `period`: exhibition date or date range.
- `description`: short summary of the medium, concept, or presentation.
- `image`: path relative to `assets/img/`; use `assets/img/exhibition/` for artwork images.
- `image_alt`: accessible image description; recommended.
- `highlight`: optional Morandi-colored distinction such as `Interactive Installation`.
- `website`, `video`, and `catalog`: optional external links.
- `selected: true`: displays the entry on both the homepage and `/exhibitions/`.
- `selected: false`: displays the entry only on `/exhibitions/`.

Entries are displayed in file order. Until the first real entry is added, the section shows a short ?will be added soon? message without placeholder artwork.

## 4. Publications

Edit `_bibliography/papers.bib`. Every paper needs a `paper_type` field:

```bibtex
@article{paper-id,
  title={Paper Title},
  author={...},
  year={2026},
  paper_type={tech},
  selected={true},
  oral={true},
  award_name={Best Paper Honorable Mention Award}
}
```

Fields:

- `paper_type={tech}`: places the paper under **Technology**.
- `paper_type={art_hci}`: places the paper under **ART & HCI**.
- `selected={true}`: also shows the paper under **Selected Publications** on the homepage.
- `selected={false}`, or no `selected` field: shows the paper only on the full Publications page.
- `oral={true}`: displays a rounded **Oral** badge after the venue.
- `award_name={...}`: displays the complete award name in a rounded highlighted badge.
- `highlight={...}`: optional free-form badge for another distinction, such as an invited presentation.

A paper without `paper_type` will not appear in either category. Existing papers have an initial classification based on their research topic; change only `paper_type` if you want to move one.
