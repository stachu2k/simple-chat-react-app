import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" type="text" placeholder="Message" />
        </div>
        <div className="control">
          <a className="button" href="/">Send</a>
        </div>
      </div>
    );
  }
}

export default Input;
