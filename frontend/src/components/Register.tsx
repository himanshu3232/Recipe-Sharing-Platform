import { useState } from "react";
import Heading from "./header/Heading";
import handleAPI from "./handleAPI";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    const result: boolean = await handleAPI(
      "/register",
      "POST",
      username,
      password
    );
    handleResult(result);
  }
  function handleResult(result: boolean): void {
    if (result) alert("Registration successful!");
    else alert("User already exists!");
  }
  return (
    <>
      <Heading content="Register to Recipe World!" size={3} />
      <div className="card custom-margin">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="Help"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your details with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
