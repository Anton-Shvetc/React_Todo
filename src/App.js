import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {


  // Хранит в себе информацию о списке задач
  // setTodo - функция, которая меняет нашу задачу
  const [todo, setTodo] = useState( [
    {
      id: 1,
      title: 'firstTodo',
      status: true
    },
    {
      id: 2,
      title: 'secondTodo',
      status: true
    },
    {
      id: 3,
      title: 'thirdTodo',
      status: false
    },
  ])

  return (
   <Container>
<Header/>
<AddTodo todo={todo} setTodo={setTodo}/>
{/* TodoList получает пропсы todo и setTodo */}
<TodoList todo={todo} setTodo={setTodo}/> 

</Container>

  );
}

export default App;
