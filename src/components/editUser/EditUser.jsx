import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { updateUser } from '../../services/usersServices';
import UserContext from '../../context/UserContext';
import FormUser from "../formUser/FormUser";

const EditUser = () => {
    const {users, setUsers} = useContext(UserContext);
    const params = useParams();
    const userId = +params.id;
    const history = useHistory();

    let currentUser = users.find(user => user.id === userId);

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        currentUser && setFormData({
            name: currentUser.name,
            username: currentUser.username ,
            email: currentUser.email,
            city: currentUser.address.city ,
            street: currentUser.address.street
        })
    }, [users]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(userId, formData)
            .then(data => {
                setUsers(users.map(user => user.id === userId ? data : user));
                history.push('/');
            })
            .catch(error => console.error('Error updating editUser data:', error));
    };

    return (
        <>
            <h2>Edit User</h2>
            <FormUser formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} nameButton='Save' />
        </>
    );
};

export default EditUser;