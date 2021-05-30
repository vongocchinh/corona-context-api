import "./App.css";
import CoronaProvider from "./../Corona/context/CoronaContext";
import { ContainerCorona } from "./../Corona/Container.corona";

function App() {
  return (
    <div>
      <div className="bg">
        <CoronaProvider>
          <ContainerCorona />
        </CoronaProvider>
      </div>
      <div className="footer">Ngọc Chính</div>
    </div>
  );
}

export default App;
