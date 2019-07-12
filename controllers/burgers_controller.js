// Dependencies
var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
  //GET request to grab database contents
router.get("/", function(req, res) { //base route
//  .selectAll(funcburgertion(burger_data) {
  burger.selectAll(function(burger_data){
    console.log(burger_data);
    res.render("index",{burger_data}); //"index" is from the views folder
  })
});    

//POST request to add a burger to the database
router.post('/burgers/add', function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      res.redirect('/'); // to reflect update
    });
});
  // PUT request to update a burger's status
router.put('/burgers/update', function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    console.log(result)
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;