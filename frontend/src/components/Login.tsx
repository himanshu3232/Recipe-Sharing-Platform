import { useContext } from "react";
import Heading from "./header/Heading";
import { userContext } from "./context/userContext";
import handleAPI from "./handleAPI";
import { Navigate } from "react-router-dom";

export default function Login() {
  const context = useContext(userContext);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const result: boolean = await handleAPI(
      "/login",
      "POST",
      context?.username,
      context?.password
    );
    context?.setLogin(result);
    if (context?.login) {
      <Navigate to="/user" replace />;
    }
  }
  return (
    <>
      <Heading content="Login!" size={3} />
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
              onChange={(e) => context?.setUsername(e.target.value)}
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
              onChange={(e) => context?.setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
