module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  const IndexController = Nodal.require('app/controllers/index_controller.js');
  const StaticController = Nodal.require('app/controllers/static_controller.js');
  const Error404Controller = Nodal.require('app/controllers/error/404_controller.js');

  /* generator: begin imports */

  const UsersController = Nodal.require('app/controllers/users_controller.js');
  const UserStoriesController = Nodal.require('app/controllers/user_stories_controller.js');

  /* generator: end imports */

  router.route(/^\/?$/, IndexController);
  router.route(/^\/static\/(.*)/, StaticController);

  /* generator: begin routes */

  router.route(/^\/users\/?/, UsersController);
  router.route(/^\/user_stories\/?/, UserStoriesController);

  /* generator: end routes */

  router.route(/.*/, Error404Controller);

  return router;

})();
