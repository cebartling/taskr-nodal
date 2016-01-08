module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class UsersController extends Nodal.Controller {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      User.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      User.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      User.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      User.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return UsersController;

})();
