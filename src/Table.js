import React from 'react';

class Table extends React.Component {
  render() {
    const destProps = this.props.destinations
    const removeDest = this.props.removeDestination
    return (
      <table>
        <TableHeader />
        <TableBody destinations={destProps} removeDestination={removeDest} />
      </table>
    )
  }
}


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Destination</th>
        <th>Country</th>
        <th>Delete</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.destinations.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.destination}</td>
        <td>{row.country}</td>
        <td><button onClick={() => {
          props.removeDestination(index);
        }}>Delete</button></td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}


export default Table