import "./App.css";
import CoronaProvider from "./../Corona/context/CoronaContext";
import { ContainerCorona } from './../Corona/Container.corona';

function App() {
  return (
    <>
      <CoronaProvider>
        <ContainerCorona/>
      </CoronaProvider>
    </>
  );
}

export default App;
