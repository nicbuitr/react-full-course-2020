import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/nicbuitr';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
    setTimeout(() => setIsLoading(false), 2000);
  };

  useEffect(() => {
    getUser();   
  }, []);

  const { name, login, avatar_url, html_url } = user;

  return (
    isLoading?<h2>Loading...</h2>
    : 
    <div className="users">
      <center><img className="img" src={avatar_url} alt={login} /></center>
      <div>
        <h3>{name}</h3>
        <h4>{login}</h4>
        <a href={html_url} target="_blank">Profile</a>
      </div>
    </div>
  );
};

export default MultipleReturns;
