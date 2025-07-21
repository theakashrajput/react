import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 text-zinc-200 relative">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
