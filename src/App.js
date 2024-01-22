import "./App.scss";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Header from "./Component/Header/Header"
import Home from "./Component/Home";

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tvshow" element={ <Home/>} />
      <Route path="/movies" element={ <Home/>} />
      <Route path="/recentlyadded" element={ <Home/>} />
      <Route path="/mylist" element={ <Home/>} />
    </Routes>
  </Router>
}

export default App;
