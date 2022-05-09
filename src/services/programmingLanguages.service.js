const {
  getOffset,
  ErrorHandler,
  statusCodes,
  constant,
  secureUpdate,
} = require("../utils");
const config = require("../configs/general.config");
const { programming_languages: ProgrammingLanguage } = require("../models");

async function getMultiple(page = 1) {
  const offset = getOffset(page, config.listPerPage);
  const data = await ProgrammingLanguage.findAndCountAll({
    limit: config.listPerPage,
    offset,
  }).catch((err) => {
    throw new ErrorHandler(
      statusCodes.INTERNAL_ERROR,
      err.message || constant.INTERNAL_ERROR
    );
  });
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(programmingLanguage) {
  const { name, released_year, githut_rank, pypl_rank, tiobe_rank } =
    programmingLanguage;
  const body = { name, released_year, githut_rank, pypl_rank, tiobe_rank };
  const data = await ProgrammingLanguage.create(body).catch((err) => {
    throw new ErrorHandler(
      statusCodes.INTERNAL_ERROR,
      err.message || constant.INTERNAL_ERROR
    );
  });
  return { data };
}

async function update(id, programmingLanguage) {
  const updateFields = [
    "name",
    "released_year",
    "githut_rank",
    "pypl_rank",
    "tiobe_rank",
  ];
  const filterBody = { where: { id: id } };

  const data = await secureUpdate(
    ProgrammingLanguage,
    programmingLanguage,
    filterBody,
    updateFields
  ).catch((err) => {
    throw new ErrorHandler(
      statusCodes.INTERNAL_ERROR,
      err.message || constant.INTERNAL_ERROR
    );
  });

  return { data };
}

async function remove(id) {
  let data = await ProgrammingLanguage.destroy({
    where: { id },
  }).catch((err) => {
    throw new ErrorHandler(
      statusCodes.INTERNAL_ERROR,
      err.message || constant.INTERNAL_ERROR
    );
  });

  return { data };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
