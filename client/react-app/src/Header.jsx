import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
  const [username, setUserName] = useState(null);
    useEffect(() => {
      fetch('http://localhost:4000/profile', {
        credentials: 'include'
      }).then(response => {
        response.json().then(userInfo => {
          setUserName(userInfo.username);
        });
      });
    }, []);

    function logout() {
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST'
      });
      setUserName(null);
    }

    return(
        <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create new article</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    );
}