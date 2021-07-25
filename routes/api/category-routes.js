const router = require("express").Router();
const { Category } = require("../../models");

// GET /api/category
router.get("/", (req, res) => {
    Category.findAll({

    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// GET /api/category/1
router.get("/:id", (req, res) => {

})
.then(dbCategoryData => {
    if (!dbCategoryData) {
        res.json(dbCategoryData);
    })  
        .catch(err) {
            res.status(404).json({ message: "No category found" });
        }
    }
})

// POST /api/category
router.post("/", (req, res) => {

})

// PUT /api/category/1
router.put("/:id", (req, res) => {

})

// DELETE /api/category/1
router.delete("/:id", (req, res) => {

})

module.exports = router;