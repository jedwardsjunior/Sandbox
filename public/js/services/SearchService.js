// public/js/services/ResultService.js
angular.module('SearchService', [])
  .service('searchResults', function() {
      var query = '';
      var result = '';
      var image = '';
      var url = '';

      return {
          getQuery: function () {
              return query;
          },
          setQuery: function(value) {
              query = value;
          },
          getResult: function () {
              return result;
          },
          setResult: function(value) {
              result = value;
          },
          getImage: function () {
              return image;
          },
          setImage: function(value) {
              image = value;
          },
          getUrl: function () {
              return url;
          },
          setUrl: function(value) {
              url = value;
          }
      };

  });
