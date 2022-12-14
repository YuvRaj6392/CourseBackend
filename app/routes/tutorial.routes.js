const auth = require("../../middleware/auth"); 

module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/add", tutorials.create);
  
    // Retrieve all Courses
    router.get("/", tutorials.findAlltitle);

    // Retrieve all Courses by category
    router.get("/categories/:categoryName", tutorials.findCoursesByCategory);

    // Retrieve all categories
    router.get("/categories", tutorials.findAllCategories);
  
    // Retrieve all published Courses
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Course with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Course with id
    router.put("/:id", tutorials.update);
  
    // Delete a Course with id
    router.delete("/:id", tutorials.delete);
  
    // delete all Courses
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', auth, router);
  };