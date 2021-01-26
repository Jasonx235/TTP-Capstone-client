import React from "react";

function Ingredients(props) {
  let ing = [];

  const displayIng = () => {
    for (let i = 0; i < props.ingredientsArray.length; i++) {
      ing.push(
        <li key={i}>
          {props.ingredientsArray[i]}:&nbsp;&nbsp;&nbsp;
          {props.measurementsArray[i]}
        </li>
      );
    }
    return ing;
  };

  return (
    <>
      <p>Ingredients</p>
      <ul>{displayIng()}</ul>
    </>
  );
}

export default Ingredients;
