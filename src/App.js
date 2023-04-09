import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textify" />
      <div className="container my-3">
        <TextForm heading="What do you textify?"/>
      </div>
    </>
  );
}

export default App;
