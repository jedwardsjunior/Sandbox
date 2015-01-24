// public/js/services/ResultService.js
angular.module('SearchService', [])

  .service('searchHelper', function() {
      var query = ''
      var source = '';
      return {
          getQuery: function () {
            return query;
          },
          setQuery: function(value) {
            query = value;
          },
          getSource: function () {
            return source;
          },
          setSource: function(value) {
            source = value;
          }
      };

  });
