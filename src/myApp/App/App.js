import "./App.css";
import CoronaProvider from "./../Corona/context/CoronaContext";
import { ContainerCorona } from './../Corona/Container.corona';

function App() {
  return (
    <div className="bg">
      <CoronaProvider>
        <ContainerCorona/>
      </CoronaProvider>
    </div>
  );
}

export default App;
