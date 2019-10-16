import React from 'react';
import Table from './Table';

class App extends React.Component{
  state = {
    destList:[      {
      destination: 'Tokyo', 
      country: 'Japan',
    },
    {
      destination: 'Vienna', 
      country: 'Austria',
    },
    {
      destination: 'British Columbia', 
      country: 'Canada',
    },
    {
      destination: 'Berlin', 
      country: 'Germany',
    },
    {
      destination: 'Tasmania', 
      country: 'Australia',
    },],
  }
  removeDestination = index => {
    const listofDest = this.state.destList;
    this.setState({
      destList: listofDest.filter((dest, i) => {
        return i !== index
      })
    })
  }
  render() { 
    return (
      <div className="App">
        <h1>Places to travel</h1>
        <Table destinations={this.state.destList} removeDestination={this.removeDestination}/>
      </div>
    )
  }
}



export default App;
