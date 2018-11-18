//import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
        orm.all("cats", function(res) {
        cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(res) {
        cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
        cb(res);
        });
    }
};


// * Export at the end of the `burger.js` file.
module.exports = burger;