import React, { Component } from 'react';
import styles from './App.module.scss';
import './styles.scss';
import Message from 'components/Message/Message';
import SelectRoom from 'components/SelectRoom/SelectRoom';
import Input from 'components/Input/Input';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Room}>
          <SelectRoom/>
        </div>
        <div className={styles.Text}>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <div className={styles.input}>
          <Input/>
        </div>
      </div>
    );
  }
}

export default App;
