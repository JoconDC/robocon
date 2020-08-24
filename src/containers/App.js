import React from 'react'
import CardList from '../components/CardList'
import { robots } from '../components/robotslist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
  }
   

   render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
      return (
      <div>
      <div className='tc'>
        <h1 className='f1'>RoboContacts</h1>
        <SearchBox searchChange={this.onSearchChange}/>
      </div>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>  
      </div>  
    )
   }
  }

export default App