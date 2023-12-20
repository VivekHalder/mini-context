import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile(){
    const { user } = useContext(UserContext);
    if(!user){
        return <h1>No user to display.</h1>
    }
    else{
        return <h1>Welcome {user.username}.</h1>
    }
}

export default Profile;