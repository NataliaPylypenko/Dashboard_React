import React, {useContext, useEffect, useState} from 'react';
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addUser } from "../../services/usersServices";
import classes from "../user/UserEditForm.module.scss";

const CreareUserForm = () => {
    const {users, setUsers} = useContext(UserContext);
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        city: '',
        street: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(formData)
            .then(() => {
                setUsers([...users, formData]);
                history.push('/');
            })
            .catch(error => {
                console.error('Error updating user data:', error);
            });
    };

    return (
        <>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div>
                    <label>Street:</label>
                    <input type="text" name="street" value={formData.street} onChange={handleChange} />
                </div>

                <button type="submit" className={classes.btnRegister}>Create User</button>
            </form>
        </>
    );
};

export default CreareUserForm;