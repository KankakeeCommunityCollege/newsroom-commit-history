# Newsroom Archiving Process
#### *Documentation for the process of archiving newsroom posts.*
---
## Part 1
#### *Copying the static html post pages into the `archive/` directory.*
---

In a typical jekyll site, the jekyll project's site is built into the `_site/` directory
```
.
├── _drafts/
├── _includes/
├── _layouts/
├── _posts/
├── _site/
├── _archive/
├── assets/
|   |── css/
|   |── img/
|   |── js/
|   └── scss/
├── _config.yml
├── archive.html
└── index.html
```

---
Inside the `_site/` dir, posts are built out into a `year/month/day/post.md` folder structure:
```
./_site/
|   |── 2018/
|   |   |── 11/
|   |   |   └── 26/*.md
|   |   |   └── 30/*.md
|   |   └── 12/
|   |       └── 11/*.md
|   |       └── 17/*.md
|   |       └── 20/*.md
|   └── 2019/
|       └── 1/
|           |── 6/*.md
|           └── 11/*.md
```

First copy the entire `year/month/day/post.md` folder structure into newsroom's `archive/` dir.  Any items and folders in a jekyll project that are not the default jekyll dir structure, or not included in the `_config.yml` file get copied, as-is, into the `_site/` dir.

Instead of jekyll processing and iterating over all the old posts, it can instead copy it like any other asset.  Grabbing the posts out of the `_site/` dir gives us the built-out static html pages, ready for web-display, in a "pretty permalink" directory style.

---
## Part 2
#### *Copy the generated archive list*
---

```html
./archive.html

{% comment %}
<div class="row">
    <div class="col">
          {% for post in site.posts %}
          {% assign currentDate = post.date | date: "%Y" %}
          {% if currentDate != myDate %}
              {% unless forloop.first %}</ul>{% endunless %}
              <h2>{{ currentDate }}</h2>
              <ul class="archive__list">
              {% assign myDate = currentDate %}
          {% endif %}
          <li><a href="{{ post.url }}" class="archive__link-item"><span class="archive__post-meta">{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
          {% if forloop.last %}</ul>{% endif %}
      {% endfor %}
    </div>
  </div>
  {% endcomment %}
```
