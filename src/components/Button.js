import axios from "axios";
import { useState } from "react";
const Button = (props) => {
  const [posts, setPosts] = useState([]);

  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      fetch user data
    </button>
  );
};

export default Button;
