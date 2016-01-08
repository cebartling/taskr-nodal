module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const UserStory = Nodal.require('app/models/user_story.js');

  class UserStoriesController extends Nodal.Controller {

    index() {

      UserStory.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      UserStory.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      UserStory.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      UserStory.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      UserStory.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return UserStoriesController;

})();
