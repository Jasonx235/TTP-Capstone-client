import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getRecipes } from "../actions/recipes";

export default function SearchBar() {
  const [search, setSearch] = useState({ search: "" });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (e) => {
    if (search.search !== "") {
      console.log(search);
      e.preventDefault();
      await dispatch(getRecipes(search));
      history.push("/result");
    } else {
      e.preventDefault();
      console.log("empty");
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };
  const SearchBar = (
    <>
      <Form
        className='searchBarDisplay'
        onSubmit={onSubmit}
        className='formFormat'
      >
        <Form.Field>
          <Form.Input
            className='input'
            placeholder='Search..'
            name='search'
            value={search.search}
            onChange={onChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
  return SearchBar;
}
