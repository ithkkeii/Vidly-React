import React, { Component } from "react";
import Input from "./common/input";

class SearchBox extends Component {
  raiseSearch = ({ currentTarget: input }) => {
    this.props.onChange(input.value);
  };

  render() {
    return <Input value={this.props.value} onChange={this.raiseSearch} />;
  }
}

export default SearchBox;
