import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const UserAccess = () => {
    const { user} = useContext(AuthContext);
    const userAccess = useLoaderData();
    const { author, title, description , image_url} = userAccess;
    return (
        <div>
            <div className='mt-3 mb-4'>
                <h4>Welcome <span className='fw-bold'>{user?.displayName}</span> to our exclusive courses.</h4>   
            </div>
            <div>
            <h5>{title}</h5>
            <img src={image_url} alt="" />
            <p>Author: {author.name}</p>
            <p>{description.slice(0,300)}</p>
            </div>
        </div>
    );
};

export default UserAccess;