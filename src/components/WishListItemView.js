import React, { Component } from "react"

import WishListItemEdit from "./WishListItemEdit"
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"

class WishListItemView extends Component {
    constructor() {
        super()
        this.state = {
            isEditing: false
        }
    }
    renderEditable() {
        return (
            <li>
                <WishListItemEdit item={this.state.clone} />
                <button onClick={this.onSaveEdit}>Save</button>
                <button onClick={this.onCancelEdit}>Cancel</button>
            </li>
        )
    }
    onToggleEdit = () => {
        this.setState({
            isEditing: true,
            clone: clone(this.props.item)
        })
    }
    onCancelEdit = () => {
        this.setState({
            isEditing: false
        })
    }
    onSaveEdit = () => {
        applySnapshot(this.props.item, getSnapshot(this.state.clone))
        this.setState({
            isEditing: false,
            clone: null
        })
    }
    render() {
        const { item } = this.props
        return this.state.isEditing ? (
                this.renderEditable()
            ) : (
            <li className="item">
                { item.image && <img src = {item.image} alt=""/>}
                <h3>{item.name}</h3>
                <span>{item.price}</span>
                <span>
                    <button onClick={this.onToggleEdit}>Edit</button>
                    <button onClick={item.remove}>Delete</button>
                </span>
            </li>
        )
    }
}

export default observer(WishListItemView)