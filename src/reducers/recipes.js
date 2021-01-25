const recipes = (recipes = [], action) => {
    switch (action.type) {
      case "SEARCH":
        return action.payload; //by name
      case "CATEGORY":
        return action.payload; //by category
      case "AREA":
        return action.payload; //by area
        default:
        return recipes;
    }
};

export default recipes;
