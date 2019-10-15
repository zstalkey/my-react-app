import React from 'react';

class Table extends React.Component {
    render() {
        const destProps = this.props.destinations
      return (
        <table>
          <TableHeader />
          <TableBody destinations = {destProps} />
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
        </tr>
      )
    })
    return (
      <tbody>{ rows }</tbody>
    )
   }


export default Table