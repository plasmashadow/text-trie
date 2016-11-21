'use strict';

/*
 * Unit tests for lib/calculator.js
 */

describe('TextTrie', function() {

  // API for interacting with the page.
  var controls =  {
    get words(){
      var text = document.getElementById("passage").innerText;
      return text.split(" ");
    }
  };


  // inject the HTML fixture for the tests
  beforeEach(function() {
    // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
    fixture.base = 'test';
    fixture.load('search.fixture.html');
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    fixture.cleanup();
  });

  it('should insert into trie', function(){
    var Index = window.Index;
    Index.insert("hello");
    Index.search("hel")[0].should.equal('hello');
  });

  it('should find a data in search', function(){
    var Index = window.Index;
    for(var key in controls.words){
       var word = controls.words[key];
       Index.insert(word);
    }
    var fts = Index.search('so');
    expect(fts).to.contain("someone");
    expect(fts).to.contain("somewhere");
  });

  it('should benchmark', function(){
    var MAX_NUMBER = 100000;
    var Index = window.Index;
    for(var i = 0; i< MAX_NUMBER; i++){
      var word = i + [];
      Index.insert(word);
    }
    var start = new Date().getTime();
    var fts = Index.search("9989");
    var end = new Date().getTime();
    console.log(end-start);
    expect(fts).to.contain("9989");
  });

});
