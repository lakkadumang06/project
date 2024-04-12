import "./App.css";
import Grid from "./components/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
function App() {
  return (
    <>

      <Navbar />
      <Slider />
      <Grid />
      <Detail />

    </>
  );
}

export default App;
