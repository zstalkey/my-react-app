import React from 'react';
import Table from './Table';

class App extends React.Component{
  render() { 
    const destList = [
      {
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
      },
    ]
    return (
      <div className="App">
        <h1>Places to travel</h1>
        <Table destinations={destList}/>
      </div>
    )
  }
}

export default App;
