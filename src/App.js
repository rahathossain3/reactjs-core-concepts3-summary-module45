import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LodeComments></LodeComments>

    </div>
  );
}


function LodeComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))

  }, [])

  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )

}

function Comment(props) {
  return (
    <div>
      <h4>Email : {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreases = () => setCount(count + 1);
  const handleDecreases = () => setCount(count - 1);
  return (
    <div>
      <h1>COunter : {count}</h1>
      <button onClick={handleIncreases}>Increases </button>
      <button onClick={handleDecreases}>Decreases </button>
    </div>
  )
}

export default App;
