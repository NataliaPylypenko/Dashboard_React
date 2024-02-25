import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from "../../services/usersServices";
import UserContext from "../../context/UserContext";
import UserItem from "./UserItem";
import classes from './UsersList.module.scss'

const UsersList = () => {
    const {users, setUsers} = useContext(UserContext);

    useEffect(() => {
        setUsers(users)
    }, [users]);

    const handleDeleteUser = id => {
        deleteUser(id)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        users.length ? (
            <>
                <h2>Users List</h2>
                <ul className={classes.items}>
                    {users.map(user => (
                        <UserItem
                            key={user.id}
                            user={user}
                            handleDeleteUser={handleDeleteUser}
                        />
                    ))}
                </ul>
                <Link to="/createuser" className={classes.btn + ' ' + classes.btnCreate}>Create User</Link>
            </>
        ) : ('')
    );
};

export default UsersList;