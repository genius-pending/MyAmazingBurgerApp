var connection = require("./connection.js");

// object of functions to preform db queries
let orm = {
  //select all record from burgers table
  selectAll: function(response) {
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  },
  //insert into the burgers table with name and devoured status
  insertOne: function(burger, response) {
    let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger, false], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  //update devoured as true for the refrenced id
  updateOne: function(id, response) {
    let queryString = "UPDATE burgers SET ? WHERE ?";
    connection.query(queryString, [{ devoured: true }, { id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  //delete record form burgers table where refrenced id
  deleteOne: function(id, response) {
    let queryString = "DELETE FROM burgers WHERE ?";
    connection.query(queryString, [{ id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }

};

module.exports = orm;