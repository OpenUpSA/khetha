---
name: propsCheck
menu: Helpers
---

# propsCheck

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

**A helper function to check prop types of non-react functions.**

## Notes

In addition to the default export also exports `PropTypes` itself as a named export.

Make sure to run `propsCheck` as the first expression in your function since you will have the passed props argument object available and are able to log any errors before an error is thrown from another expression in the function.

## Props

|Property|Type|Required|Default|Description|
|---|---|---|---|---|
|check|function|true||Pass a function that has a `propTypes` propety attached to it.|
|props|object|true||The props object that you want to compare against the `propTypes` schema|

## Demos

### Basic

```
import propsCheck, { PropTypes } from './src/helpers/propsCheck';

const Example = (props) => {
  propsCheck({ check: Example, props }); // propsCheck helper is used here
  const { value1, value2, message } = props;
  return `${message}: ${value1 + value2}`;
};

Example.propTypes = {
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number,
  message: PropTypes.string.isRequired,
};

Example.defaultProps = {
  value2: 0,
};

Example({
  value1: 7,
  value2: 761,
  message: 'Your lucky number is',
})

```