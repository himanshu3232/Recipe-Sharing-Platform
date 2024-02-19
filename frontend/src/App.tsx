import NavBar from "./components/NavBar";
import { userContext } from "./components/userContext";
export default function App() {
  return (
    <div className="container">
      <userContext.Provider value={"hey man"}>
        <NavBar />
      </userContext.Provider>
    </div>
  );
}
