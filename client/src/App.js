import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const user =false;
  return (
    <Router>
      <Topbar/>
           
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/post/:postid" element={<Single/>}/>
        <Route exact path="/write" element={user? <Write/> : <Register/>}/>
        <Route exact path="/settings" element={user? <Settings/> :<Register/>}/>
        <Route exact path="/login" element={user? <Home/> : <Login/>}/>
        <Route exact path="/register" element={user? <Home/> : <Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
