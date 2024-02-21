import { useState } from "react";
import { userContext } from "./userContext";
import Register from "../Register";
import Login from "../Login";
import App from "../../App";

export default function ContextProvider() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div>
      <userContext.Provider
        value={{ username, setUsername, password, setPassword, login, setLogin }}
      >
        <Register/>
        <Login/>
        <App/>
      </userContext.Provider>
    </div>
  );
}
