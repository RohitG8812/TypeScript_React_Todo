import Home from "./components/Home";
import Input from "./components/Input";
import TabNavigation from "./components/TabNavigation";
import DisplayTasks from "./components/DisplayTasks";

function App() {
  return (
    <div className="mainSection">
      <Home />
      <TabNavigation />
      <Input />
      <DisplayTasks />
    </div>
  );
}

export default App;
