import React from 'react';
import './AddWineForm.css';
import WineTable from './WineSortsTable';

export default function WineForm ()
{      
    return (
        <div className='AddWine'>
            <form id="addWineForm" onSubmit={handleSubmit}>
                <label>Choose wine color:</label>
                <br></br>
                <input type="radio" name="color" value="white"/> White 
                <br></br>
                <input type="radio" name="color" value="rose" />  Rose 
                <br></br>
                <input type="radio" name="color" value ="red" /> Red
                <br></br>
                <label>Type of Wine:</label>
                <br></br>
                <input type="text" id="type" name="type"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

function saveToLocalStorage(object) 
{
    let i = 0;
    if(localStorage.getItem("counter") === null)
    {
        localStorage.setItem("counter", i);
    }
    else
    {
        i = localStorage.getItem("counter");
        i++;
        localStorage.setItem("counter", i);
    } 
    
    localStorage.setItem(i, JSON.stringify(object));
}
    
function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    let color = form.get("color");
    let type = form.get("type"); 
    let obj = {"color" : color, "type" : type};
    saveToLocalStorage(obj);
    <WineTable />
}

    
    

   
