import { useState, useEffect } from "react";
import axios from "axios";

export default function Counter() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      Users
      {post.map((item) => {
        return (
          <div key={item.id}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
}
