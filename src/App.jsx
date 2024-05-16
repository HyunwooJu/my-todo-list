import React, { useState } from "react";
import "./App.css";

function App() {
  // 상태 훅을 사용하여 todos, title, body 상태를 정의합니다.
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 제목 입력 변경 핸들러
  const onChangeTitle = (e) => setTitle(e.target.value);

  // 내용 입력 변경 핸들러
  const onChangeBody = (e) => setBody(e.target.value);

  // 새로운 Todo 추가 핸들러
  const addTodo = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  // Todo 삭제 핸들러
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo 완료 상태 토글 핸들러
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <main>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="제목"
          />
          <input
            type="text"
            value={body}
            onChange={onChangeBody}
            placeholder="내용"
          />
          <button type="submit">추가하기</button>
        </form>
        <section>
          <h2>Working</h2>
          <ul>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <li key={todo.id} className="todo-item">
                  <h3>{todo.title}</h3>
                  <p>{todo.body}</p>
                  <div className="buttons">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="toggle-btn"
                    >
                      완료
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="delete-btn"
                    >
                      삭제하기
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h2>Done</h2>
          <ul>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => (
                <li key={todo.id} className="todo-item">
                  <h3>{todo.title}</h3>
                  <p>{todo.body}</p>
                  <div className="buttons">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="toggle-btn"
                    >
                      취소
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="delete-btn"
                    >
                      삭제하기
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
