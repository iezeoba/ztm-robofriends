import React from 'react';
//import logo from '../logo.svg';//logo was not used in this project//
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js'
//import { robots } from './robots.js'; //This was removed bcos we are now getting our robots from the server using 'fetch' in the componentDidMount() //robots.js was supplying us locally //
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    //console.log(filteredRobots);
  }

  render() {
    //const { robots, searchfield } = this.state //This destructuring allows us to use robots and searchfield without appending 'this.state' before them// for eg. in the line below and the line after it// 
    const filteredRobots = this.state.robots.filter(robot => {  //With the destructuring above, this can be written thus //const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  //And this too //return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (this.state.robots.length === 0) { //This block of code is run while the 'fetch' from cDM() is still processing//
      //return !robots.length ?  //Ternary operator can be used in place of the if/else statement//To use this, delete the 'if', 'else' and the 2 'return' lines and check the commas// 
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;