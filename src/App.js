import React from 'react';
import BuildingList from './components/BuildingList'
import './App.css';


class App extends React.Component {
  render() {
    return(
        <div className="App">
          <BuildingList />
        </div>
    )
  }
}

export default App;
