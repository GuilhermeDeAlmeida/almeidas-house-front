import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const header = <Header/>
  const body = <Body/>
  const footer = <Footer/>
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Família Almeida
          {header}
          {body}
          {footer}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
