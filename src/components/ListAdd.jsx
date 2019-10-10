import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

class ListAdd extends Component {
  handleOnClick = event => {
    console.log(this.refs.input.value);
    this.addItem(this.refs.input.value);
  };

  handleOnPress = event => {
    if (event.key === "Enter") {
      this.addItem(this.refs.input.value);
    }
  };

  addItem = name => {
    if (name.length > 0) {
      this.props.actions.add(name);
      this.refs.input.value = "";
      this.refs.input.focus();
    }
  };

  render() {
    return (
      <div>
        <div>
          <input ref="input" onKeyPress={this.handleOnPress} />
          <button onClick={this.handleOnClick}>+</button>
        </div>
        <p>Последняя добавленная: {this.props.list.last}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

export default connect(
  (state)=>{return state },
  mapDispatchToProps
)(ListAdd);
