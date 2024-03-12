import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/social.png"; 

function App() {
  return (
    <section className="bg-blue-900 text-slate-50">
      <header className="flex justify-between px-32 py-6">
        <Link to={"/"} className="text-xl text-slate-50 ">
        <img src={logo} alt="Logo du site" className="h-16 rounded-full shadow-lg" />
        </Link>
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
              <Link
                to={"/donner-un-avis"}
                className="text-xl text-slate-50 border-b">
              
                Donner mon avis
              </Link>
            </li>
            <li>
              <Link
                to={"/avis"}
                className="text-xl text-slate-50 border-b"
              >
                 Avis utilisateurs
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}

export default App;
