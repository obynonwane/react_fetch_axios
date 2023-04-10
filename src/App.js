import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="container">
      <h1 className="display-4 text-center">Learn react</h1>
      <br />

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                value={email}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
