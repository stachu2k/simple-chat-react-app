import React, { Component } from 'react';
import styles from './InputWrapper.module.scss';

class InputWrappper extends Component {
  render() {
    return (
      <div className={styles.InputWrappper}>
        {this.props.children}
      </div>
    );
  }
}

export default InputWrappper;
