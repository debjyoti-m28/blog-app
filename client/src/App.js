import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";


function App() {
  return (
    <div className="App">
     <Topbar/>
     <Settings/>
     {/* <Write/> */}
     {/* <Single/> */}
     {/* <Home/> */}
    </div>
  );
}

export default App;
