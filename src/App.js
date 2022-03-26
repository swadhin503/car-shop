import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 className="header-title"><span className="span-title">Swadhin</span> Car Shop</h1>
      <Shop></Shop>
      <div>
        <h3>How React works?</h3>
        <p>
        It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.
        </p>
        <h3>How useState works?</h3>
        <p>
        The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. 

        Syntax: The first element is the initial state and the second one is a function that is used for updating the state.
        </p>
      </div>
    </div>
  );
}

export default App;
