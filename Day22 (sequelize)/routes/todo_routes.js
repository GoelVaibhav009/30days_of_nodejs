const express = require("express");
const router = express.Router();

const db = require("../models");

// Get All Todo
router.get("/all", (req, res) => {
  db.Todo.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

// Get All Todo
router.get("/all/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

// Post new Todo
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

// Post new Todo
router.put("/edit/:id", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

// Delete Todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
