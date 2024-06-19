import React from "react";

const TodoList = ({ taskList, setTaskList }) => {
  // タスクを消す処理。フィルター関数を利用。
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              {/* タスクが完了したものに横線を引くボタン */}
              <button onClick={() => handleComplete(task.id)}>
                <i className="fa-solid fa-check"></i>
              </button>
              {/* タスクリストを削除するボタン。idプロパティにて対象を指定する。 */}
              <button onClick={() => handleDelete(task.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default TodoList;
