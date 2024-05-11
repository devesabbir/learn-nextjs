function replaceMongoIdInArray(arr) {
  return arr
    .map((item) => ({ id: item._id.toString(), ...item }))
    .map(({ _id, ...rest }) => rest);
}

function replaceMongoIdInObject(obj) {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}

export { replaceMongoIdInArray, replaceMongoIdInObject };
