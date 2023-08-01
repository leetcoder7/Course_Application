import logo from './logo.svg';
import './App.css';
import Header from "./components/header"

function App() {
  return (
    <div>
      <Header name="header 1" title="First card"/>
      <hr />
      <Header /> (reusable component write code once use multiple times by importing the same)
      <hr name="header 2" title="second card"/>
      <h1>this is react app</h1>
      <p>this is an demp paragraph</p>
      <Header name="header 3" title="third card"/>
    </div>
  );
}

//Routing in reactjs using react-router-dom
//with the help of axios extension we can send request to the server using react js

export default App; 
