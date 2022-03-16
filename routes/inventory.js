const router = require("express").Router();
// controllers
const inventory = require("../controllers/inventory");

router
  .get("/:id", inventory.getItemByID)
  .post("/", inventory.addNewItem)
  .put("/", inventory.updateItemByID)
  .delete("/", inventory.deleteItemByID)
  .get("/", inventory.getAllItems);

// updateItemByID, deleteItemByID get itemID from the item sent through request body

module.exports = router;
