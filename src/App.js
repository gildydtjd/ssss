import "./App.css";
import User from "./components/User";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <User />
    </div>
  );
}

export default App;
