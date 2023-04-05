import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GITHUB_CLIENT_ID = 'cdc7256f736ba530df4d';
const GITHUB_CLIENT_SECRET = 'd81ce6288f6af0f0219c77b39efc7740a76ab8ee';
const GITHUB_SCOPE = 'repo';
const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const REDIRECT_URI = 'http://localhost:3000';

  const Login=()=>{
    const [accessToken, setAccessToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    
        if (code) {
          axios.post(
            GITHUB_ACCESS_TOKEN_URL,
            {
              client_id: GITHUB_CLIENT_ID,
              client_secret: GITHUB_CLIENT_SECRET,
              code: code,
              redirect_uri: REDIRECT_URI,
            },
            {
              headers: {
                Accept: 'application/json',
              },
            }
          )
            .then(response => {
              setAccessToken(response.data.access_token);
              setIsLoggedIn(true);
              localStorage.setItem('access_token', response.data.access_token);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          const storedToken = localStorage.getItem('access_token');
          if (storedToken) {
            setAccessToken(storedToken);
            setIsLoggedIn(true);
          }
        }
      }, []);
    
      const handleLoginClick = () => {
        window.location.href = `${GITHUB_AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}&scope=${GITHUB_SCOPE}&redirect_uri=${REDIRECT_URI}`;
      };
    
      const handleLogoutClick = () => {
        localStorage.removeItem('access_token');
        setAccessToken('');
        setIsLoggedIn(false);
      };
      return<div className='login'>
        <>
        <div className='Authorization'>
      {isLoggedIn ? (
      <>
      <button onClick={handleLogoutClick}>Logout</button>
      
      </>
      ) : (
        <ul className="index-list">
        <li className="index-list-item" onClick={handleLoginClick}><a href="#">Login with GitHub</a></li>
        </ul>
        
      
      )}
      </div>
      </>
    </div>
    }
    export default Login;

 