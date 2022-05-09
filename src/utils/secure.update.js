const { UNAUTHORIZED_CODE } = require("../utils/status.codes");
const { UNAUTHORIZED_ACCESS } = require("../utils/constant");
const { ErrorHandler } = require("../utils/erro.handler");

const updateModel = async (targetModel, body, filterBody, updateFields) => {
  let data = {};
  let updateBody = {};
  for (let key in body) {
    if (updateFields.includes(String(key))) {
      updateBody[key] = body[key];
    }
  }
  await targetModel.findOne(filterBody).then(function (obj) {
    if (obj) {
      obj.update(updateBody);
      data = obj;
    } else {
      throw new ErrorHandler(UNAUTHORIZED_CODE, UNAUTHORIZED_ACCESS);
    }
  });

  return data;
};

module.exports = updateModel;
