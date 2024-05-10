
import { AppName } from "./component/AppName";
import { Input } from "./component/Input";
import { TodoItems } from "./component/TodoItems";
import "./style/App.css";
import TodoItemContextProvider from "./store/CreateStore";
import { WElcome } from "./component/WElcome";


function App() {
  return (
<TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <Input />
          <WElcome />
          <TodoItems />
        </div>
      </center>
      </TodoItemContextProvider>
  );
}

export default App;
