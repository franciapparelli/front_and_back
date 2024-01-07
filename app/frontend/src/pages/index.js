import { useEffect, useState } from 'react'
import UserBox from '../components/UsersBox.js'
import CreateUser from '../components/CreateUser.js'

function LogIn() {
    const [users, setUsers] = useState([])
    useEffect(() => {
      fetch('http://0.0.0.0:8000/api/users/')
      .then(res => res.json())
      .then(res => setUsers(res))
    }, [])
    return (
        <main>
          
          <h1 style={{margin: 5}}>Frontend and Backend APP</h1>
  
          <CreateUser />
            
          {
            users.map(user => (
              <UserBox name={user.name} password={user.password} id={user.id} key={user.id} />
            ))
          }
        </main>
      );
  }
  
export default LogIn;
  