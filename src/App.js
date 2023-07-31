import React, { useState } from 'react';
import "./index.css";
import "./Todolist";
import Todolist from './Todolist';

const App = () =>{

  const[inputlist , setinputlist] = useState("")
  const[items , setitems] = useState([])

  const demo = (event) =>{
    setinputlist(event.target.value);
  }

  const clickevent = () =>{
    setitems((olditems) =>{
      return [...olditems , inputlist];
    });
    setinputlist('');
  };

  const deleteItems = (id) =>{
    setitems((olditems) => {
      return olditems.filter((arrEle , index) => {
        return index !==id
      })
    })
  };

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder='Add a items' onChange={demo} value={inputlist}/>
          <button onClick={clickevent}>+</button>

          <ol>
          {items.map((itemval , index)=>{
            return <Todolist  
            key = {index} 
            id = {index} 
            text = {itemval}
            onSelect = {deleteItems}
            />;
          })}
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
