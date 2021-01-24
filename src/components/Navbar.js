import React, { Component } from "react"
import { Input, Menu } from "semantic-ui-react"

import CategoryDropdown from "./CategoryDropdown"
import AreaDropdown from "./AreaDropdown"

export class Navbar extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        <CategoryDropdown />
                        <AreaDropdown />
                    </Menu.Item>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Navbar
