## Styled Components

**Styled Components is a library enables React component to be styled via the common CSS syntax**

[Material UI](https://material-ui.com/) uses a CSS-in-JavaScript tool (called [JSS](https://cssinjs.org/)) under the hood. It exposes a built-in `withStyles()` method (as part of `@material-ui/core`) for overriding default [Material UI](https://material-ui.com) styling. At the same time, [Material UI](https://material-ui.com) is upfront about the fact that Material UI is [completely interoperable with other CSS in JavaScript tooling](https://material-ui.com/guides/interoperability/). This project has (due to [Material UI](https://material-ui.com/)'s support for interoperability) opted to use a [Styled Components](https://www.styled-components.com) instead of the built-in Material UI [JSS](https://cssinjs.org/) hooks for the following reasons:

- [Styled Components](https://www.styled-components.com) has a massive online community compared to [JSS](https://cssinjs.org/).
- [Styled Components](https://www.styled-components.com) can be written in the regular CSS syntax (via [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)).
- [Stylelint](https://stylelint.io/) can be used to lint [Styled Components](https://www.styled-components.com) styling.
- [Styled Components](https://www.styled-components.com) supports [Sass](https://sass-lang.com/) logic out of the box.
- [Styled Components](https://www.styled-components.com) supports global [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) out of the box. 

### Conventions

**The following conventions are to be applied when using Styled Component in this project:**

**Consistency**: For the sake of consistency and readability, all styling should be done via [Styled Components](https://www.styled-components.com) (even if not override default [Material UI](https://material-ui.com/) styling). 

**Simplicity**: Although [Styled Components](https://www.styled-components.com) contains a [ThemeProvider component](https://www.styled-components.com/docs/advanced), it is recommended that this not be used since it impacts CSS readability with little benefit since most of the theming is already handled by [Material UI](https://material-ui.com/).

**Specificity**: If you are overriding existing [Material UI](https://material-ui.com/) styles you need to increase the [CSS-specificity of the overriding styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Avoid using `!important` in favour of a built-in [Styled Components specificity operator](https://material-ui.com/guides/interoperability/#controlling-priority) (`&&`). 

**Going Deeper**: If you wish to Style a [Material UI](https://material-ui.com/) element not exposed via the Material UI root API of the component, please use a combination of the `classes` [Material UI](https://material-ui.com/) attribute and [Styled Components](https://www.styled-components.com) nesting. This is further explained in the [Material UI Documentation](https://material-ui.com/guides/interoperability/#deeper-elements).