import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
          <div className={styles.HeaderContainer}>
          <div className={styles.Title}>
            The Chat
          </div>
          <div>
            <button className={styles.Button}>Options</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
