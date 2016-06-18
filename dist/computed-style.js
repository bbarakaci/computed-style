/*! Computed Style - v0.1.1 - 2016-06-18
* https://github.com/bbarakaci/computed-style
* Copyright (c) 2012 Burak Barakaci; Licensed MIT */

window.computedStyle = (function() {
    var computedStyle = {
        getAll : function(element){
            return document.defaultView.getComputedStyle(element);
        },
        get : function(element, name){
            return this.getAll(element)[name];
        },
        toFloat : function(value){
            return parseFloat(value, 10) || 0;
        },
        getFloat : function(element,name){
            return this.toFloat(this.get(element, name));
        },
        _getAllCurrentStyle : function(element) {
            return element.currentStyle;
        } 
    };

    if (document.documentElement.currentStyle) {
        computedStyle.getAll = computedStyle._getAllCurrentStyle;
    }
    
    return computedStyle;
    
}());