import React from 'react';
import { Link } from "react-router-dom";
import classes from './UsersList.module.scss'

const UserItem = ({ user, handleDeleteUser }) => {
    return (
        <li className={classes.item}>
            <p>{user.name}</p>
            <div style={{display:'flex',gap:20}}>
                <Link to={`/user/${user.id}`} className={classes.btn + ' ' + classes.btnEdit}>Edit</Link>
                <button className={classes.btn + ' ' + classes.btnDel} onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
        </li>
    );
};

export default UserItem;