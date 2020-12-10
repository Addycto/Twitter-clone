import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    //BEM CSS class naming convention
    <div className="app">

      <Sidebar />
      <Feed />
      <Widgets />

    </div>
  );
}

export default App;
