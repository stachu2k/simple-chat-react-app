import React, { Component } from 'react';
import { InputCont } from 'containers';
import styles from './InputWrapper.module.scss';

class InputWrappper extends Component {
  render() {
    return (
      <div className={styles['input-wrapper']}>
        <InputCont/>
      </div>
    );
  }
}

export default InputWrappper;
