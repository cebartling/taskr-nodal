module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class UserStory extends Nodal.Model {}

  UserStory.setDatabase(Nodal.require('db/main.js'));
  UserStory.setSchema(Nodal.my.Schema.models.UserStory);

  return UserStory;

})();
