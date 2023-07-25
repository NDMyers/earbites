'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { spotifyApi, setAccessToken } from '@/app/api/spotify'

const Login = () => {
    const router = useRouter();
  
    function onSuccess(token : any) {
      setAccessToken(token);
      router.push('/');
    }
  
    function onFailure(error : Error) {
      console.error(error);
    }

    const clientID = process.env.SPOTIFY_CLIENT_ID
  
    return (
      <div>
        {/* <SpotifyAuth
          redirectUri="http://localhost:3000/callback"
          clientID={process.env.SPOTIFY_CLIENT_ID}
          scopes={['user-read-email', 'user-library-read']}
          onSuccess={onSuccess}
          onFailure={onFailure}
        /> */}
        <p>{clientID}</p>
      </div>
    );
  };
  
  export default Login;