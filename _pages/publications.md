---
layout: page
permalink: /publications/
title: publications
description: publications grouped into technical and ART & HCI research.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<section class="publication-category" aria-labelledby="tech-papers">
  <h2 id="tech-papers" class="publication-category-title">Tech Papers</h2>
  {% bibliography --query @*[paper_type=tech]* %}
</section>

<section class="publication-category" aria-labelledby="art-hci-papers">
  <h2 id="art-hci-papers" class="publication-category-title">ART &amp; HCI Papers</h2>
  {% bibliography --query @*[paper_type=art_hci]* %}
</section>

</div>
