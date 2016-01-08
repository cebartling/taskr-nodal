module.exports = (function () {

    "use strict";

    const Nodal = require('nodal');

    class CreateUserStory extends Nodal.Migration {

        constructor(db) {
            super(db);
            this.id = 2016010807084337;
        }

        up() {

            return [
                this.createTable("user_stories",
                    [
                        {"name": "title", "type": "string", "properties": {"unique": true}},
                        {"name": "description", "type": "string"}
                    ])
            ];

        }

        down() {

            return [
                this.dropTable("user_stories")
            ];

        }

    }

    return CreateUserStory;

})();
