import Counter from './counter'
import { useState } from "react"
import './App.css'

function App() {
  const [state, setState] = useState(false)

  const [toDos,setTodos]= useState([])
  const [toDo,setTodo] = useState('')
  const [dToDOs,deleted]=useState([]);

  //console.log(toDos)
  return (
    <div className="app">
      <header className="app-header">
        <p style={{ cursor: "pointer" }} className="helo" onClick={() => { setState(!state) }} >Show / Hide</p> <br />  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {state && <Counter />}
         
      </header>
      <h1>To do App portion</h1>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input required value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => { setTodos([...toDos, {id:Date.now(), text: toDo ,doneStatus:false,cStatus:false}]) }}    >&#10750;</i>
      </div>
      <div className="todos">
        {
          toDos.map((object,i)=>{
            return (
              <div className="todo " name = "box "  >
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.value,object)
                    setTodos(toDos.filter((object2) =>{
                        if (object2.id===object.id){
                            object.doneStatus =e.target.checked
                            
                        }
                        return object2
                    }))

                        }} value={object.doneStatus} type="checkbox" name="" id="" />
                  <p>{object.text+ "  Number "}{ i}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    deleted([...dToDOs,object])
                    
                    setTodos(toDos.filter((object3) => {

                        if (object3.id !== object.id){
                            return true
                        }object3.cStatus=true
                        return false
                    }
                    
                    ));

                  }} className="fas fa-times">&times;</i>
                </div>
              </div>
            )
          })
        }
        <hr/>
        
      </div>
      <div className="finished">
        Finished todos
      {   
          toDos.map((object,i)=>{
           if(object.doneStatus){
             return (
              <div className="todo " name = "box "  >
                
                <div className="left">                  
                    <p style={{ textDecoration: "line-through" }}>  {object.text}</p>
                </div>
                
              </div>
            )
           }else{
            return null
           }
          })
        }
      </div>
      <div className="cancelled">
        Deleted todos
      {   
          dToDOs.map((object,i)=>{
           if(object.cStatus){
             return (
              <div className="todo " name = "box "  >
                
                <div className="left">                  
                    <p style={{ color: "rose" }}>  {object.text}</p>
                </div>
                
              </div>
            )
           }else{
            return null
           }
          })
        }
      </div>
    </div>
    
  );
}

export default App;
