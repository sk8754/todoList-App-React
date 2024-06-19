import React, { useState } from "react";

//
const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  // フォームの送信を遮断し、スプレッド構文を利用し配列tasklistの情報を展開し、
  // tasklistのオブジェクトにidプロパティとtextプロパティを指定しタスクを追加する処理。
  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        // クラス名を操作するためにcompletedプロパティを設定する(初期値はfalse)
        completed: false,
      },
    ]);

    // タスクの追加後テキストボックスの中を空欄にする。
    setInputText("");
  };

  // テキストボックスに入力されている値を取得し、InputTextのステートを更新する処理。
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button className="add-task">タスクの追加</button>
      </form>
    </div>
  );
};

export default InputForm;
