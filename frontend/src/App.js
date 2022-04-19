import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import RegistrationForm from "./components/RegistatrationForm/RegistrationForm";

function App() {
  // const [videoTitle, setVideoTitle] = useState("");
  const [user, setUser] = useState(null);
  const [currentVideoId, setVideoId] = useState("");
  const [search, setSearch] = useState("");
  const [storedUserName, setStoredUserName] = useState("");
  const APIKEY = "AIzaSyBX7Unp0G6opzW7hJ3wWBp85ysQaslVrsI";

  useEffect(() => {
    const jwt = localStorage.getItem("token");

    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);
    } catch {}
    getVideo("castles");
  }, []);

  async function getVideo(request) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${request}&key=${APIKEY}`
      );
      console.log("getVideo function response data", response.data);
      setVideoId(response.data.items[0].id.videoId);
    } catch (err) {
      console.log("Error in getVideo call: ", err);
    }
  }

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} getVideo={getVideo} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            
            <Home
              storedUserName={storedUserName}
              user={user}
              setUser={setUser}
              videoId={currentVideoId}
              setVideoId={setVideoId}
              
            />
          }
         />
        {/* <Route
          path="home"
          element={() => {
            if (!user) {
              return <LoginForm />;
            } else {
              return <Home user={user} />;
            }
          }}
        /> */}
        <Route
          path="login/*"
          element={
            <LoginForm user={user} setStoredUserName={setStoredUserName} />
          }
        />
        <Route
          exact
          path="loginform/registration"
          element={<RegistrationForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
