import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../Context/DataContext';

const DP = () => {
  const {profilePicUrl,setProfilePicUrl} = useContext(DataContext);

  useEffect(() => {
    const fetchProfilePic = async () => {
      const response = await fetch('https://api.github.com/users/pin4ka');
      const data = await response.json();
      setProfilePicUrl(data.avatar_url);
    };
    
    fetchProfilePic();
  }, []);

  return (
    <div className=''>
      {profilePicUrl && (
        <img 
          src={profilePicUrl} 
          alt="GitHub Profile" 
          // className=" rounded-full h-auto w-auto max-w-[350px] aspect-square object-cover"
          className=" rounded-full h-auto w-auto max-w-[350px]"
        />
      )}
    </div>
  );
};

export default DP;
