/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('computedStyle', {
    setup: function() {
      this.elm = document.getElementById('victim');
      this.cs = window.computedStyle;
    }
  });

  test('get', 4, function() {
    equal(this.cs.getAll(this.elm)['marginTop'], '25px', 'getAll');
    equal(this.cs.get(this.elm, 'marginTop'), '25px', 'get');
    equal(this.cs.toFloat(this.cs.getAll(this.elm)['marginTop']), 25, 'toFloat');
    equal(this.cs.getFloat(this.elm, 'marginBottom'), 0, 'getting as float of unexisting style should return 0');
    
  });

}(jQuery));
