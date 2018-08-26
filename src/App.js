import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './assets/images/music-logo.png'
import './App.css';
import MoodSelectionFormContainer from './components/MoodSelectionForm/MoodSelectionFormContainer';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">Moodify</h1>
        </header>
          <MoodSelectionFormContainer />
          <Footer />
      </div>
    );
  }
}

export default App;
