import React from "react"
import { Dropdown } from "semantic-ui-react"

const areaOptions = [
    { key: "American", text: "American", value: "American" },
    { key: "British", text: "British", value: "British" },
    { key: "Canadian", text: "Canadian", value: "Canadian" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
    { key: "Dutch", text: "Dutch", value: "Dutch" },
    { key: "Egyptian", text: "Egyptian", value: "Egyptian" },
    { key: "French", text: "French", value: "French" },
    { key: "Greek", text: "Greek", value: "Greek" },
    { key: "Indian", text: "Indian", value: "Indian" },
    { key: "Irish", text: "Irish", value: "Irish" },
    { key: "Italian", text: "Italian", value: "Italian" },
    { key: "Jamaican", text: "Jamaican", value: "Jamaican" },
    { key: "Japanese", text: "Japanese", value: "Japanese" },
    { key: "Kenyan", text: "Kenyan", value: "Kenyan" },
    { key: "Malaysian", text: "Malaysian", value: "Malaysian" },
    { key: "Mexican", text: "Mexican", value: "Mexican" },
    { key: "Moroccan", text: "Moroccan", value: "Moroccan" },
    { key: "Polish", text: "Polish", value: "Polish" },
    { key: "Russian", text: "Russian", value: "Russian" },
    { key: "Spanish", text: "Spanish", value: "Spanish" },
    { key: "Thai", text: "Thai", value: "Thai" },
    { key: "Tunisian", text: "Tunisian", value: "Tunisian" },
    { key: "Turkish", text: "Turkish", value: "Turkish" },
    { key: "Unknown", text: "Unknown", value: "Unknown" },
    { key: "Vietnamese", text: "Vietnamese", value: "Vietnamese" }
]

const AreaDropdown = () => (
    <Dropdown
        className="simple"
        placeholder="Area"
        fluid
        selection
        clearable
        options={ areaOptions }
    />
)

export default AreaDropdown