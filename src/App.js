import logo from './logo.svg';
import './App.css';
import UserList from "./user";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [userList, setUserList] = useState([])
  let [userName, setUserName] = useState("")
  let [userEmail, setUserEmail] = useState("")
  useEffect(async () => {
    let users = await axios.get("http://localhost:3000/about");
    setUserList(users.data)
  }, [])

  let handleSubmit = async () => {
    try {
      let data = {
        userName,
        userEmail
      }

      await axios.post("http://localhost:3000/register", data)
      alert("Done")
    } catch (error) {
      alert("Error")
    }
  }

  return <>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()
    }}>
      <label>Name</label>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <label>Email</label>
      <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
      <button>Submit</button>
    </form>
    <button>Create Folder</button>
    {
      userList.map((item) => {
        return <UserList data={item}></UserList>
      })
    }
  </>
}

export default App;
