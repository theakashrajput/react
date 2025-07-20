import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  return (
    <div className="bg-gray-700 w-full h-screen flex p-5 select-none">
      <Create />
      <Read />
    </div>
  );
};

export default App;
