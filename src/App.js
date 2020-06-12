import React from 'react';
import BuildingCard from './components/BuildingCard'
import './App.css';


class App extends React.Component {
  render() {
    return(
        <div className="App">
          <BuildingCard />
        </div>
    )
  }
}

export default App;
