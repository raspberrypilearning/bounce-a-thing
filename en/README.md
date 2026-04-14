# Project Structure

`bounce-a-thing` is set up as a five-step Raspberry Pi HTML project with matching starter and complete editor builds.

```plaintext
en/
├── code/
│   ├── bounce-a-thing-complete/
│   │   ├── index.html
│   │   ├── main.js
│   │   ├── project_config.yml
│   │   └── style.css
│   └── bounce-a-thing-starter/
│       ├── index.html
│       ├── main.js
│       ├── project_config.yml
│       └── style.css
├── images/
│   ├── banner.svg
│   ├── step_1_output.svg
│   ├── step_2_output.svg
│   ├── step_3_output.svg
│   ├── step_4_output.svg
│   └── step_5_output.svg
├── resources/
│   └── .keep
├── solutions/
│   └── .keep
├── landing.md
├── meta.yml
├── step_1.md
├── step_2.md
├── step_3.md
├── step_4.md
└── step_5.md
```

## Notes

- `code/` contains the two editor projects. Both are HTML projects that load `p5` and share the same page layout and styling.
- `images/` contains the hero image plus step output illustrations referenced in the markdown.
- `landing.md` provides the opening “What you will make” section and the editor embed.
- `meta.yml` defines the publishing metadata and the five tutorial step titles.
- `resources/` and `solutions/` are present so the repository shape stays consistent with other Raspberry Pi project repos such as `stop-a-thing`.
