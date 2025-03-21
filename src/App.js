import logo from './logo.svg';
import './App.css';
function App() {
  const {bookName, author} = props
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>How are you</h2>
      <ul>{data.map((value) => <li key={value}>Data value = {value}</li>)}</ul>
      <div>
        <h1>bookname: {bookName}</h1>
        <h2>Author: {author}</h2>
      </div>
    </div>
  );
}

export default App;
