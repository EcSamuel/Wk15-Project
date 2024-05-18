import ShowConnections from './REST/ShowConnections';
import './App.css';
import TitleHeader from './REST/TitleHeader';


function App() {
  return (
    <>    
    <div className="App-header">
      <header className="App-header">
        
          <TitleHeader/>
          
          <ShowConnections/>
        
      </header>
      
    </div>
    </>

  );
}

export default App;
