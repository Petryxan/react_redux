import React, { Component } from "react";
import "./styleTest.scss";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  handleClick() {
    const wrapper = this.wrapperRef.current;
    console.log(wrapper);
    wrapper.classList.toggle("is-nav-open");
    console.log(wrapper);
  }
  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper">
        <div className="nav">
          <span className="nav__icon" onClick={() => this.handleClick()}>
            878787
          </span>
        </div>
      </div>
    );
  }
}
