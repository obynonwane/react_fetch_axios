import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  const fetchUserData = () => {
    axios
      .get("http://localhost:3000/api/users")
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
    // fetch("http://localhost:3000/api/users", { method: "GET" })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setUsers(data.users))
    //   .catch((error) => console.log(error));
  };

  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
    // fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setPosts(data);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      {users && users.map((user) => <div key={user.age}>{user.name}</div>)}
      <Button handleClick={fetchPosts} />
      {posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(email);
//     console.log(password);
//   };
//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learn react</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 value={email}
//                 type="email"
//                 onChange={(event) => setEmail(event.target.value)}
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 type="password"
//                 onChange={(event) => setPassword(event.target.value)}
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
