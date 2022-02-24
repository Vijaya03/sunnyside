import logo from './logo.svg';
import './App.css'; 
import Header from './component/header';
import Footer from './component/footer';
import About from './component/about';
import Service from './component/service';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Service></Service>
        <About></About>
        <Footer></Footer>
    </div>
  );
}

export default App;
