import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ApplianceControl from './components/ApplianceControl';


function App() {
  return (

    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    const App = () => {
      return (
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <ApplianceControl />
          </ScrollView>
        </SafeAreaView>
      );
}

export default App;
