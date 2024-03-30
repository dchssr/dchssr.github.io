---
layout: "default"
---

# Palettes

The overall look-and-feel of the site.
I might look into more configurability as an exercise on the frontend.

## List of Palette Stylesheets

<dl>
  <dt><a href="./modus-operandi.css">Modus Operandi</a></dt>
  <dd>
    Based on the
	<a href="https://protesilaos.com/emacs/modus-themes-colors">Emacs theme</a>.
  </dd>
</dl>

## Naming Scheme

1. First of all, all variables go into a `:root` declaration.
``` css
:root {
    --my--color: #0f0f0f;
}
```
2. Prefix the style with two hyphens (`--`) and the name.
   Use a single hyphen (`-`) if the name of the palette
   is two words or more.
``` css
/* From a palette named "dave", my default.
 * Demonstrates single-word namespace (dave)
 * and multi-word namespaces (modus-operandi). */
--dave-color: var(--modus-operandi--fg-main);
```
3. After the palette/namespace, add two more hyphens (`--`).
4. Finally, the name of the color.
   Hyphenate names of multiple words.
   If adapting a palette from somewhere else, try to keep the names
   the same as the original.
   Use names that describe the color
   Avoid semantic names (those with purpose, eg. `tab-bar`) if possible.
   
   The exception is if there is a list of colors in a palette that also
   use colors as something unique (eg. `--modus-operandi--bg-changed`).

### Good Names

* `--modus-operandi--fg-main`
* `--dave--shadow` (Purposeful but stil based on color)
* `--dave--accent-1` (Customizable)

### Bad Names

* `--modus-operandi--date-holiday` (Semantic)
* `--dave--email-header` (Component-driven)
* `--modus-operandi--rainbow-1` (Not helpful)

## Semantic Names

Semantic names are closer to a variable than a color.
Names like `--dave--background-color` would qualify.
Use on components or higher-level palettes.

If a color needs to be derived from another,
use the [`color-mix()`][1] function in CSS.

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
