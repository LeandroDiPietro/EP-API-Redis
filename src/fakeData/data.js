const mgenerate = require("mgeneratejs");
const template = require("./template/fanclub.json");

const data = async (id) => {
  return { id, ...(await mgenerate(template)) };
};

module.exports = data;
