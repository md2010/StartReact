import React from 'react';
import './AddWineForm.css';

function WineTable() {
    return (
        <div className='table'>
        <table className="wineTable">

            <thead> 
                <tr>
                <th>Color</th>
                <th>Type</th> 
                <th>Delete</th>               
                </tr>
            </thead>

            <tbody className="tbody">

                {Object.keys(localStorage).map((key) => 
                (
                    <WineRow  wine = {JSON.parse(localStorage.getItem(key))} id = {key} />)
                )}

            </tbody>
           
         </table>
         </div>
    )
}

function WineRow(props){
    if(props.id === "counter")
    {
        return;
    }
    return (       
        <tr>
            <td>
                {props.wine.color} 
            </td>
            <td>
                {props.wine.type}
            </td>
            <td>
                <button onClick={() => handleClick(props.id)}> Delete </button>
            </td>
        </tr>
    )
}

function handleClick(i) {
    localStorage.removeItem(i);
    WineTable();
}

export default WineTable;