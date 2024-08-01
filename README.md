# SAIL Lab Github Page

This is the repository for the SAIL Lab Github Page. The page is hosted at [https://sail-virginia-tech-cs.github.io/](https://sail-virginia-tech-cs.github.io/).

Pages can be modified via either the local environment or directly on Github and pushed to the master branch to force an update. However, it is recommended to modify the page locally and test the changes before pushing to the master branch.

## How to run the page locally

The page is built using [Jekyll](https://jekyllrb.com/). To run the page locally, you will need to install Jekyll on your local machine. You can follow the instructions [here](https://jekyllrb.com/docs/installation/). Once you have Jekyll installed, you need to install the dependencies for the page. You can do so by running the following command in the root directory of the repository:

```bash
bundle install
```

Then, you can run the following command to build and serve the page locally:

```bash
bundle exec jekyll serve
```

You can then access the page at [http://localhost:4000/](http://localhost:4000/) or [http://127.0.0.1:4000](http://127.0.0.1:4000) depending on your system. You can modify the content of the page by modifying the corresponding markdown files. The page will be updated upon reload when you save the changes.

## Modifying Existing Pages

The modifiable content for regular users other than the developers are located in three directories:

- `_bibliography/`
- `_data/`
- `_pages/`

The home page is located in the root directory of the repository as `index.md`, while the majority of the rest of the content of the site is located in the `_pages` folder. Each page is a markdown file. You can modify the content of the page by modifying the corresponding markdown file. For example, to modify the content of the `projects` page, you can modify the `projects.md` file.

Some pages are built from templates, which leverages the power of [Liquid](https://shopify.github.io/liquid/). For example, the `lab_resources` page is built from the `lab_resources.md` file and the leverages the `feature_row` template. This template tasks data from the yaml frontmatter within `lab_resources.md` and turns it into the cards. Another example of this concept is in the `teaching` page, which also leverages the `feature_row` template to build the cards for each course.

`publications.md` leverages the [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar) plugin and creates a custom bibliography from the `_layouts/bib.html` template. The `_bibliography` folder contains the bibtex file with each publication. To add a new publication, you can add a new entry to the bibtex file. The new publication will be automatically added to the page. **Please pay attention to the bibtex record type (e.g. inproceedings, article, online, etc.) and field names as they are used to determine the citation style.**

## Pushing Updates

Once you are satisfied with the changes, you can push the changes to the master branch. The page will be automatically updated within a few minutes. If you are not a member of the SAIL Lab Github organization, you will need to fork the repository and submit a pull request to the master branch. The pull request will be reviewed by the maintainers of the repository before being merged into the master branch.
