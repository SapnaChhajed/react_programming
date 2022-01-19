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
import TestUseFetch from './components/hooks/TestUseFetch';
import RefsDemo from './components/intercomp/RefsDemo';

function App() {
  return (
    <div className="bg-warning">
      <Header city='San Francisco'/>
       <RefsDemo/>
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
//<DataLoader/>
//<TestUseFetch/> 