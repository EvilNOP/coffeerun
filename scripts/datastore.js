(function (window) {
  'use strict';
  
  var App = window.App || {};
  
  function DataStore() {
    this.data = {};
  }
  
  App.DataStore = DataStore;
  window.App = App;
})(window);
