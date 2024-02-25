import React, {useContext, useEffect, useState} from 'react';
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addUser } from "../../services/usersServices";
import FormUser from "../formUser/FormUser";

const CreareUser = () => {
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
            .catch(error => console.error('Error updating editUser data:', error));
    };

    return (
        <>
            <h2>Create New User</h2>
            <FormUser formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} nameButton='Create User' />
        </>
    );
};

export default CreareUser;