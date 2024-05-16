function replaceMongoIdInArray(arr) {
  return arr
    .map((item) => ({ id: item._id.toString(), ...item }))
    .map(({ _id, ...rest }) => rest);
}

function replaceMongoIdInObject(obj) {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}

function isDateInBetween(date, from, to) {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
}

export { replaceMongoIdInArray, replaceMongoIdInObject, isDateInBetween };
