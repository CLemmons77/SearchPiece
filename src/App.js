import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CardInfo from "./pages/CardInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/search" Component={Search} />
          <Route path="/cardinfo/:id" Component={CardInfo} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
