import { Outlet } from "react-router-dom";


function App() {
 


  return (
    <section className="bg-blue-700 text-white min-h-screen flex items-center justify-center">
    <Outlet/> 
    </section>
  );
}

export default App;
