import React from 'react';
import BuildingList from './components/BuildingList'
import SearchAppBar from "./components/SearchAppBar";
import Container from '@material-ui/core/Container';
import './App.scss';


class App extends React.Component {
  render() {
    return(
        <Container maxWidth="xl" className="App">
            <SearchAppBar />
            <BuildingList />
        </Container>
    )
  }
}

export default App;
