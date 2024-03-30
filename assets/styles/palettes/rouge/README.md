---
layout: "default"
---

# Rouge Palettes

Stylesheets here define colors for [Rouge] output.

## Stylesheets

* ∅

## Tokens

**Note:** This table is copied from the [<i>List of tokens</i>][1]
article on Rouge's wiki for additional reference should the original
article change/disappear.

([Wiki repo][2][^1] cloned <time datetime="2024-03-29">29 Mar 2024</time>,
commit `1f48643`)

[1]: https://github.com/rouge-ruby/rouge/wiki/List-of-tokens
[2]: https://github.com/rouge-ruby/rouge.wiki.git
[Rouge]: https://rouge.jneen.net/

| *Token name* | *Token shortname* | *Description* |
|--------------|-------------------|---------------|
| Text | | Any type of text data |
| Text.Whitespace | w | Specially highlighted whitespace |
| Error | err | Lexer errors |
| Other | x | Token for data not matched by a parser (e.g. HTML markup in PHP code) |
| Keyword | k | Any keyword |
| Keyword.Constant | kc | Keywords that are constants |
| Keyword.Declaration | kd | Keywords used for variable declaration (e.g. `var` in javascript) |
| Keyword.Namespace | kn | Keywords used for namespace declarations 
| Keyword.Pseudo | kp | Keywords that aren't really keywords |
| Keyword.Reserved | kr | Keywords which are reserved (such as `end` in Ruby) |
| Keyword.Type | kt | Keywords wich refer to a type id (such as `int` in C) |
| Name | n | Variable/function names |
| Name.Attribute | na | Attributes (in HTML for instance) |
| Name.Builtin | nb | Builtin names which are available in the global namespace |
| Name.Builtin.Pseudo | bp | Builtin names that are implicit (such as `self` in Ruby) |
| Name.Class | nc | For class declaration |
| Name.Constant | no | For constants |
| Name.Decorator | nd | For decorators in languages such as Python or Java |
| Name.Entity | ni | Token for entitites such as `&nbsp;` in HTML |
| Name.Exception | ne | Exceptions and errors (e.g. `ArgumentError` in Ruby) |
| Name.Function | nf | Function names |
| Name.Property | py | Token for properties |
| Name.Label | nl | For label names |
| Name.Namespace | nn | Token for namespaces  |
| Name.Other | nx | For other names |
| Name.Tag | nt | Tag mainly for markup such as XML or HTML |
| Name.Variable | nv | Token for variables |
| Name.Variable.Class | vc | Token for class variables (e.g. `@@var` in Ruby) |
| Name.Variable.Global | vg | For global variables (such as `$LOAD_PATH` in Ruby) |
| Name.Variable.Instance | vi | Token for instance variables (such as `@var` in Ruby) |
| Literal | l | Any literal (if not further defined) |
| Literal.Date | ld | Date literals |
| Literal.String | s | String literals |
| Literal.String.Backtick | sb | String enclosed in backticks |
| Literal.String.Char | sc | Token type for single characters |
| Literal.String.Doc | sd | Documentation strings (such as in Python) |
| Literal.String.Double | s2 | Double quoted strings |
| Literal.String.Escape | se | Escaped sequences in strings |
| Literal.String.Heredoc | sh | For "heredoc" strings (e.g. in Ruby) |
| Literal.String.Interpol | si | For interpoled part in strings (e.g. in Ruby) |
| Literal.String.Other | sx | Token type for any other strings (for example `%q{foo}` string constructs in Ruby) |
| Literal.String.Regex | sr | Regular expressions literals |
| Literal.String.Single | s1 | Single quoted strings |
| Literal.String.Symbol | ss | Symbols (such as `:foo` in Ruby) |
| Literal.Number | m | Any number literal (if not further defined) |
| Literal.Number.Float | mf | Float numbers |
| Literal.Number.Hex | mh | Hexadecimal numbers |
| Literal.Number.Integer | mi | Integer literals |
| Literal.Number.Integer.Long | il | Long interger literals |
| Literal.Number.Oct | mo | Octal literals |
| Literal.Number.Hex | mx | Hexadecimal literals |
| Literal.Number.Bin | mb | Binary literals |
| Operator | o | Operators (commonly `+`, `-`, `/`, `*`) |
| Operator.Word | ow | Word operators (e.g. `and`)  |
| Punctuation | p | Punctuation which is not an operator |
| Comment | c | Single ligne comments |
| Comment.Multiline | cm | Mutliline comments |
| Comment.Preproc | cp | Preprocessor comments such as `<% %>` in ERb |
| Comment.Single | c1 | Comments that end at the end of the line |
| Comment.Special | cs | Special data in comments such as `@license` in Javadoc |
| Generic | g | Unstyled token |
| Generic.Deleted | gd | Token value as deleted |
| Generic.Emph | ge | Token value as emphasized |
| Generic.Error | gr | Token value as an error message |
| Generic.Heading | gh | Token value as a headline |
| Generic.Inserted | gi | Token value as inserted |
| Generic.Output | go | Marked as a program output |
| Generic.Prompt | gp | Marked as a command prompt |
| Generic.Strong | gs | Mark the token value as bold (for rst lexer) |
| Generic.Subheading | gu | Marked as a subheadline |
| Generic.Traceback | gt | Mark the token as a part of an error traceback |
| Generic.Lineno | gl | Line numbers |

---

[^1]: Use `git clone`. Web interface shows a 404 page.
