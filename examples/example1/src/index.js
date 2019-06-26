import React from 'react';
import ReactDOM from 'react-dom';

const Row = () => (
  <tr>
    <td>cell1</td>
    <td>cell2</td>    
  </tr>
);

const Table = (props) => (
  <table>
    <Row/>
    <Row/>
  </table>
);

ReactDOM.render(<Table />, document.getElementById('root'));
