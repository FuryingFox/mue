import RefreshIcon from '@material-ui/icons/Refresh';
import Gear from '@material-ui/icons/Settings';
import NewReleases from '@material-ui/icons/NewReleases';
import React from 'react';

export default class Navbar extends React.PureComponent {
  render() {
    let refreshHTML = <div className='navbar2'><RefreshIcon className='refreshicon' onClick={() => window.location.reload()} /></div>
    const refresh = localStorage.getItem('refresh');
    if (refresh === 'false') refreshHTML = '';

    return (
      <div className='navbar-container'>
        <div className='navbar1'>
          <Gear className='settings-icon' onClick={this.props.settingsModalOpen} />
        </div>
        {refreshHTML}
        <div className={refresh === 'false' ? 'navbar2' : 'navbar3'}>
            <NewReleases className='refreshicon' onClick={this.props.updateModalOpen} />
        </div>
      </div>
    );
  }
}