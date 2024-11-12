const client = require("./redis");

const checkCache = async (req, res, next) => {
  const id = req.params.id ?? -1;
  const data = await client.get(id);
  if (data) {
    return res.status(200).json(JSON.parse(data));
  }
  next();
};

const deleteCache = async (req, res, next) => {
  const id = req.params.id ?? -1;
  client.del(id);
  next();
};

module.exports = { checkCache, deleteCache };
