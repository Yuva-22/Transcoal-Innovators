/*import React from 'react';
import './table.css';

function table() { 
  return (
    <div className='table'> 
        <table class="trucktable">
            <tr>
                <td>No.of.Trucks</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Amount of coal</td>
                <td>112.5 tonnes</td>
            </tr>
            <tr>
                <td>Starting point</td>
                <td>Chennai</td>
            </tr>
            <tr>
                <td>Ending point</td>
                <td>Chennai</td>
            </tr>
            <tr>
                <td>Estimated Duration</td>
                <td>90 hours</td>
            </tr>
            <tr>
                <td>Total Distance</td>
                <td>6000 kms</td>
            </tr>
            <tr>
                <td>Distance covered</td>
                <td>2694 kms</td>
            </tr>
        </table>

    </div>
  )
}

export default table;*/

import './table.css';

const table = ({value1,value2}) => {
    return(
        <div className='table'>
            <span className='left'>{value1}</span>
            <span className='right'>{value2}</span>
        </div>
    )
}

export default table;