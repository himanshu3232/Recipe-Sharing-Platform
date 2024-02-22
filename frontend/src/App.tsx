import { useContext } from "react";
import NavBar from "./components/header/NavBar";
import { userContext } from "./components/context/userContext";
import User from "./components/user/User";
export default function App() {
  const context = useContext(userContext);
  return <div className="container">
    {/*NavBar only loads for as long as user is not logged in*/}
    {!context?.login && <NavBar />}
    {context?.login && <User />}
    </div>;
}
