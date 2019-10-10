import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { items,title="Todo list", selected } = this.props;
    console.log(selected);
    return (
      <div>
        <h2>{title}</h2>
        <ul style={{ height: 300, overflowY: "scroll" }}>
          {items.map((item, index) => (
            <ListItem key={index} name={item.name} index={index} selected={index==selected}/>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.list.items,
    selected: state.list.selected
  };
};

export default connect(mapStateToProps)(List);
