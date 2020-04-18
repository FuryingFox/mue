//* Imports
import React from 'react';
import Background from './components/Background';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Quote from './components/Quote';
import Search from './components/Search';
import Credit from './components/Credit';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Modal from 'react-modal';
import './scss/index.scss'; 

//* App
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modal: false };
    this.openModal = this.onOpenModal.bind(this);
  }

  onOpenModal() {
    this.setState({ modal: true });
  }

  // Render all the components
  render() {
    return (
      <React.Fragment>
        <Background/>
        <Search/>
        <Navbar />
        <div id='center'>
          <Greeting />
          <Clock /> 
          <Quote />
          <Credit />
          <Modal isOpen={this.state.modal}>
            <Settings />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
