import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { updateUser } from '../../services/usersServices';
import UserContext from '../../context/UserContext';
import classes from './UserEditForm.module.scss';

const UserEditForm = () => {
    const {users, setUsers} = useContext(UserContext);
    const params = useParams();
    const userId = +params.id;
    const hist = useHistory();

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
                hist.push('/');
            })
            .catch(error => {
                console.error('Error updating user data:', error);
            });
    };

    return (
        <>
            <h2>Edit User</h2>
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

                <button type="submit" className={classes.btnRegister}>Save</button>
            </form>
        </>
    );
};

export default UserEditForm;