# Computed Style

Get computed styles of dom elements

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bbarakaci/computed-style/master/dist/computed-style.min.js
[max]: https://raw.github.com/bbarakaci/computed-style/master/dist/computed-style.js

Place it in your file
    
    <script src="computed-style.min.js"></script>
    
## Api

### getAll(element)

Returns the native Css declaration of the browser. It is a collection of all the computed styles of the element.
    
    var styles = computedStyle.getAll(element);
    
### get(element, name)

Returns the computed value for given style name
    
    var marginTop = computedStyle.get(element, 'marginTop');
    
### toFloat(value)

Gets rid of 'px' values returning a floating nuber or 0
    
    var number = computedStyle.toFloat('120px');
    

### getFloat(element, name)

Gets the floating number value of the given style name of an element.
    
    var number = computedStyle.getFloat(element, 'marginTop');