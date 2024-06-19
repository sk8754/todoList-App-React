import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="body">
      <Title />
      {/* propsとしてtaskListとsetTaskListを各コンポーネントに渡す */}
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      <Footer />
    </div>
  );
}

export default App;
