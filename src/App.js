import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import StatefulApp from './components/propsstate/StatefulApp';
import TextInput from './components/propsstate/TextInput';
import ChildParentInvoke from './components/intercomp/ChildParentInvoke';
import CompLifeCycle from './components/lifecycle/CompLifeCycle';
import WeatherComponent from './components/lifecycle/WeatherComponent';
import Context from './components/contextapi/Context';
import Button from './components/hooks/UseStateDemo';
import DataLoader from './components/hooks/DataLoader';

function App() {
  return (
    <div className="bg-warning">
      <Header city='San Francisco'/>
        <DataLoader/>
    <Footer/>
  </div>
  );
}

export default App;
//<StatefulApp/>
//<TextInput/>
//<ChildParentInvoke/>
//<CompLifeCycle/>
//<WeatherComponent/>
//<Context/>
//<Button/>