(function(){
    function Node(){
        var self = this;
        self.word = null;
        self.nodes = {};
    }

    Node.prototype._getAll = function(){
       var self = this;
       var words = [];
       for(var key in self.nodes){
         var node = self.nodes[key];
         if(node.word){
           words.push(node.word);
         }
         words.push.apply(words, node._getAll())
       }
       return words;
    }

    Node.prototype._insert = function(word, pos){
      pos = pos || 0;
      var self = this;
      var currentLetter = word[pos];
      if(!(currentLetter in self.nodes)){
        self.nodes[currentLetter] = new Node();
      }
      if(pos+1 == word.length){
        self.nodes[currentLetter].word = word;
      }else{
        self.nodes[currentLetter]._insert(word, pos+1);
      }
      return true;
    }

    Node.prototype._getAllWithPrefix = function(prefix, pos){
      var words = [];
      var self = this;
      for(var key in self.nodes){
        node = self.nodes[key];
        if(pos >= prefix.length || key == prefix[pos]){
          if(node.word != null)
             words.push(node.word);
          if(Object.keys(node.nodes).length != 0){
            if(pos+1 <= prefix.length)
               words.push.apply(words, node._getAllWithPrefix(prefix, pos+1))
            else
               words.push.apply(words, node._getAllWithPrefix(prefix, pos))
          }
        }
      }
      return words;
    }


    window.Index = (function(){
      var root = new Node();

      return {
        insert: function(word){
          root._insert(word);
        },
        getAll: function(){
          return root._getAll();
        },
        search: function(prefix, pos){
          pos = pos || 0;
          return root._getAllWithPrefix(prefix, pos);
        }
      }
    })();
})();
