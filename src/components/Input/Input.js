import React, { Component } from 'react';

class Input extends Component {
  _input = undefined;

  _submitForm = e => {
    e.preventDefault();

    if (!this._input.value.trim()) {
      return;
    }

    this.props.sendMessage(
      this._input.value,
      this.props.nickname,
      new Date().toDateString(),
      1,
    );

    this._input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this._submitForm(e)}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="write message"
              ref={el => this._input = el}
            />
          </div>
          <div className="control">
            <input className="button" type="submit" value="Send"/>
          </div>
        </div>
      </form>
    );
  }
}

export default Input;
