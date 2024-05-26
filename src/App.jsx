import { useState } from 'react'
import './App.css'
import  { Header }  from './components/Header'
import  { Cattle }  from './components/Cattle'
import  { Navigation }  from './components/Navigation'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 🌾イベントが発火してその内容を元にtodotextを更新して、その値がvalueに常に設定される
  const onClickAdd = () => {
    if (todoText === '') return;
    // から文字のときはそのまま帰す
    const newTodos = [...incompleteTodos, todoText];
    // スプレッド構文で現在のincompleteTodosをnewTodosにコピーして、　todoTextの内容を付け足してる
    setIncompleteTodos(newTodos);
    // 更新関数に渡している、更新のトリガー？
    setTodoText('');
    // ぼたんおしたら消す
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 削除した時の新しい配列つくる
    newTodos.splice(index, 1);
    // 特定の配列の中から、何番目のindexを何個削除するか
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);

    setCompleteTodos(newCompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disable={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: 'red' }}>Todoは5個までだよん</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComp={onClickComplete}
        onClickDele={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickB={onClickBack} />
    </>
  );
};




// ============================================================================
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
