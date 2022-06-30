import * as d3 from 'd3'
import './App.css';
import Header from './components/Header'
import MapOptionsMenu from './components/MapOptionsMenu';
import Legend from './components/Legend';
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header className="header"/>
      </div>
      <div className='map'>
        <Map/>
      </div>
      <div className='map-options'>
        <MapOptionsMenu />
      </div>      
      <div className='legend'>
        <Legend />
      </div>
      
    </div>
  );
}

export default App;
