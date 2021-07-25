const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET /api/category
router.get("/", (req, res) => {
  Category.findAll()
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/category/1
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST /api/category
router.post("/", (req, res) => {
  Category.create({
    id: req.body.id,
    categoryName: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch(err);
  res.status(500).json(err);
});

// PUT /api/category/1
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: "No category found with that id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE /api/category/1
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "There is no category by that id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
