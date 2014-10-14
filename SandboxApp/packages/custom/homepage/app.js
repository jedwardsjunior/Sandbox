'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Homepage = new Module('homepage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Homepage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Homepage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Homepage.menus.add({
    title: 'Sandbox',
    link: 'Sandbox',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Homepage.aggregateAsset('css', 'homepage.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Homepage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Homepage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Homepage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Homepage;
});
