import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const myStyle = {
    color: "#a836e0",
    borderRadius: '30px',
    marginLeft: '40%',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    posistion: 'relative',
    top: "22px",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  const myStyle1 = {
    marginLeft: '40%',
    border: '3px solid #8721ad',
    borderRadius: '10px'
  };
  const myStyle2 = {
    marginLeft: '40%',
   color: '#ff5600'
  };
  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" style={myStyle} placeholder="Search by first name" value={searchTerm}  onChange={handleSearch} />
      {filteredUsers.map((user) => (
        <div key={user.id} >
             <h3 style={myStyle2}>ID: {user.id} </h3>
          < img src={user.avatar} style={myStyle1} alt={user.first_name} />
          <span>{user.first_name}</span>
        </div>
      ))}
    </div>
  );
};

//Coding done by Jibin George

export default UserList;
