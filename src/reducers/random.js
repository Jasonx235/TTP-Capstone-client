const recipes = (random = [], action) => {
    switch (action.type) {
      case "SINGLE":
        return action.payload; //by Single
      case "HOME":
        return action.payload; //by Mutiple (3)
        default:
        return random;
    }
};

export default recipes;