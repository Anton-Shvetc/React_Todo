import { useState } from "react";
import react from "react";
import { v4 as uuidv4 } from 'uuid';
import {Row, Col, Button, FormControl} from 'react-bootstrap';
import s from './AddTodo.module.css'

function AddTodo({todo, setTodo}) {

   

const [value, setValue] = useState('')
console.log(value)

function saveTodo() {
    if(value) {
        setTodo(

            [...todo, {
                id:  uuidv4(),
                title: value,
                status: false
            }]
            
            )
            setValue('')

    }


}

    return(

        <Row>
        <Col className= {s.addTodoForm}> 
        <FormControl type="text" placeholder="Введите задачу" value = {value} onChange={(e)=>setValue(e.target.value)}/>
<Button onClick={saveTodo} className= {s.btn}> Сохранить</Button>
        </Col>
    </Row>

    )
};

export default AddTodo;