import React from "react"
import { Dropdown } from "semantic-ui-react"

const categoryOptions = [
    { key: "Beef", text: "Beef", value: "Beef" },
    { key: "Breakfast", text: "Breakfast", value: "Breakfast" },
    { key: "Chicken", text: "Chicken", value: "Chicken" },
    { key: "Dessert", text: "Dessert", value: "Dessert" },
    { key: "Goat", text: "Goat", value: "Goat" },
    { key: "Lamb", text: "Lamb", value: "Lamb" },
    { key: "Miscellaneous", text: "Miscellaneous", value: "Miscellaneous" },
    { key: "Pasta", text: "Pasta", value: "Pasta" },
    { key: "Pork", text: "Pork", value: "Pork" },
    { key: "Seafood", text: "Seafood", value: "Seafood" },
    { key: "Side", text: "Side", value: "Side" },
    { key: "Starter", text: "Starter", value: "Starter" },
    { key: "Vegan", text: "Vegan", value: "Vegan" },
    { key: "Vegetarian", text: "Vegetarian", value: "Vegetarian" }
]

const CategoryDropdown = () => (
    <Dropdown 
        className="simple"
        placeholder="Category"
        fluid
        selection
        clearable
        options={ categoryOptions }
    />
)

export default CategoryDropdown