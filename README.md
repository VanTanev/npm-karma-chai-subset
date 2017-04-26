# karma-chai-subset

> Adapter for the [chai-subset](https://github.com/debitoor/chai-subset) plugin for [Chai Assertion Library](http://chaijs.com/).

## Installation

```bash
$ npm install chai chai-subset karma-chai-subset --save-dev
```

## Configuration

```js
// karma.config.js
module.exports = function (config) {
    config.set({
        // the order is important, chai-subset must come before chai
        frameworks: ['chai-subset', 'chai']
    })
}
```

## Usage

> adds the `containSubset` matcher to Chai

```js
var object = {
    foo: 'bar',
    inner: {
        value: 'orange'
    }
}

// PASS
expect(object).to.containSubset({
    inner: { value: 'orange' }
})

// PASS
expect(object).to.not.containSubset({
    inner: { value: 'apple' }
})

// FAIL
expect(object).to.containSubset({
    inner: { value: 'mandarine' }
})
```
