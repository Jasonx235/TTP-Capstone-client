const collection = (collection = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    default:
      return collection;
  }
};

export default collection;
