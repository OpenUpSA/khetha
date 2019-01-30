---
name: calcIfExternalLink
menu: Helpers
---

# calcIfExternalLink

![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)

**A helper function to check whether url links to an external site.**

## Notes

This helper is useful if you want to automatically create a new tabs when linking to external urls.

## Props

|Property|Type|Required|Default|Description|
|---|---|---|---|---|
|url|string|true||The url string that will be evaluated.|
|forceDomain|string|false|null|By default compares `url` to current domain as listed in browser. However `forceDomain` allows you to override the domain passed to `calcIfExternal`. This is useful for testing and when working on local server.

## Demos

### Basic

```
import calcIfExternalLink from './src/helpers/calcIfExternalLink';

console.log(calcIfExternalLink('https://google.com/example-1')) // True
console.log(calcIfExternalLink('https://docs.khetha.org.za/example-2')) // False
console.log(calcIfExternalLink('/example-3')) // False
console.log(calcIfExternalLink('//www.google.com')) // True
console.log(calcIfExternalLink('folder/example-3')) // False
```