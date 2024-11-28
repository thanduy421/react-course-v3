import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <>
        <Home/>
        <Modal/>
        <Sidebar/>
      </>
    </AppProvider>
  );
};
export default App;
