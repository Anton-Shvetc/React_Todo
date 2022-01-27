import react from "react";
import { useState } from "react/cjs/react.development";
import {Row, Col, Button} from 'react-bootstrap';
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock , faLockOpen} from '@fortawesome/free-solid-svg-icons'





// Функция todo получает пропсы todo и setTodo
function TodoList({todo, setTodo}) {
    console.log(todo)

  
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('');
  


function editTodo(id, title) {

    setEdit(id)
   setValue(title)
 


}



function saveTodo(id) {
    let newTodo = [...todo].map( item => {
        if(item.id == id) {
            item.title = value
        }
        return item
    })
    
    setTodo(newTodo);
    setEdit(null)

}


    function deleteTodo(id) {
      

        let newTodo  = [...todo].filter(item => item.id!=id)
        setTodo(newTodo) // Эта функция передается в компонент TodoList
        console.log("delete")

    }
    function statusTodo(id) {
        let newTodo  = [...todo].filter(item => {
            if(item.id === id) {
item.status = !item.status
            }
            return item
        })
        setTodo(newTodo) // Эта функция передается в компонент TodoList
      
   }

    return (

        <div className="list">
            {
           todo.map(  item => (
         <div key= {item.id} className ={ s.listItems}> 
            {
                edit == item.id ? 
                <div>
                      <input onChange={e  => setValue(e.target.value)} value={value} />
                      
                </div> : 

               <div className={item.status ? s.close : ''}> {item.title} </div>
            }

{
       edit == item.id ? <div>
           
    <Button onClick={() =>saveTodo(item.id)}> <FontAwesomeIcon icon = {faSave}/></Button>


       </div> : 
       <div>
<Button onClick={() => deleteTodo(item.id)} className={s.btn}><FontAwesomeIcon icon = {faTrash}/></Button>
            <Button onClick={() => editTodo(item.id, item.title)} className={s.btn}><FontAwesomeIcon icon = {faEdit}/></Button>
            <Button onClick={() => statusTodo(item.id)} className={s.btn}>
                {item.status ?  <FontAwesomeIcon icon = {faLock}/>
                :
                <FontAwesomeIcon icon = {faLockOpen}/>}
                </Button>
       </div>
}

            
        </div>

           ))
           }
        </div>
           
    );
};
export default TodoList;