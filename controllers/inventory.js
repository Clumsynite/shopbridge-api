const Item = require("../models/Item");

// Not being used
// Use getItemsForUser instead
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    return res.status(200).json({ success: true, items, msg: "Successfully retreived All items" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.getItemByID = async (req, res) => {
  try {
    const { _id } = req.params;
    const item = await Item.findOne({ _id });
    return res.status(200).json({
      success: true,
      item,
      msg: `${item.name}, successfully retreived`,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.addNewItem = async (req, res) => {
  try {
    const item = await new Item({
      ...req.body,
    }).save();
    return res.status(200).json({ success: true, item, msg: "Successfully added Item" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.updateItemByID = async (req, res) => {
  try {
    const { _id } = req.body;
    await Item.findByIdAndUpdate(
      { _id },
      {
        ...req.body,
      }
    );
    const item = await Item.findOne({ _id });
    return res.status(200).json({ success: true, item, msg: "Item Update Successful" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.deleteItemByID = async (req, res) => {
  try {
    const { _id, name } = req.body;
    const { deletedCount } = await Item.deleteOne({ _id });
    // eslint-disable-next-line no-throw-literal
    if (deletedCount === 0) throw "Item not found";
    return res.status(200).json({
      success: true,
      msg: `Removed ${name} from Inventory.`,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
