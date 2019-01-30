---
name: calcIfExternalLink
menu: Helpers
---

# propsCheck

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

**A helper function to check whether url links to an external site.**

## Overview

This helper is useful if you want to automatically create a new tabs when linking to external urls.

## Props

|Property|Type|Required|Default|Description|
|---|---|---|---|---|
|url|string|true||The url string that will be evaluated.|

## Demos

### Basic

```
import calcIfExternalLink from './src/helpers/calcIfExternalLink';

console.log(calcIfExternalLink('https://google.com/example-1')) // True
console.log(calcIfExternalLink('https://docs.khetha.org.za/example-2')) // False
console.log(calcIfExternalLink('/example-3')) // False
console.log(calcIfExternalLink('www.google.com')) // True
console.log(calcIfExternalLink('folder/example-3')) // False
```