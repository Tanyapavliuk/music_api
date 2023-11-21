const wrapper = require("../helpers/tryCatch");
const Group = require("../cervice/shema/group.js");

const handleGetAll = async (req, res, next) => {
  const data = await Group.find();
  res.json(data);
};

module.exports = {
  handleGetAll: wrapper(handleGetAll),
};
