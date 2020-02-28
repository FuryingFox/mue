//* Imports
import RefreshIcon from '@material-ui/icons/Refresh';
import Gear from '@material-ui/icons/Settings';
import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar1'>
          <Gear className='settings-icon' onClick={this.openModal} />
        </div>
        <div className='navbar2'>
            <RefreshIcon className='refreshicon'/>
        </div>
      </div>
    );
  }
}