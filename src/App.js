//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NewGameButton from './components/NewGame'

function App() {
  return (
    <div className="wrapper">
        <Header />
        <Main></Main>
        <Footer />
    </div>
  );
}

export default App;
