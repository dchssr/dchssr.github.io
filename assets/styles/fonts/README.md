---
layout: "default"
---

# Typefaces

## Adding

Adding a new typeface involves:
1. Making a new folder (lowercase, [kebab style][1]) where the files
   themselves are kept.
```
my-typeface/
my-typeface.css
```
2. Make a stylesheet for the typeface itself.
``` css
@font-face {
    font-family: "My Typeface";
    src: url("my-typeface/MyTypeface.woff") format("woff"),
      /* url("my-typeface/MyTypeface.woff") format("woff2"); */
}
```

Include bold, italic, and bold-italic variations if possible.
[Do not use EOT files][2].
Prefer WOFF over WOFF2 (the world needs less Googlization).
Keep WOFF2 files committed, however, if WOFF becomes irrelevant
enough to be removed from the mainstream browsers.

[1]: https://stackoverflow.com/a/17820138
[2]: https://stackoverflow.com/a/36110385



