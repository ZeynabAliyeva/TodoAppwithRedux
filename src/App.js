import AddTodo from "./pages/AddTodo";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import {Link,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/todoList"}>Todo List</Link>
        </li>
        <li>
          <Link to={"/aboutList"}>About page</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<AddTodo/>}/>
          <Route path="/todoList" element={<TodoList/>}/>
          <Route path="/aboutList" element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
