
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router_App } from './config/Router_App';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <Router_App/> */}
      <TodoApp/>

    </div>
  );
}

export default App;
