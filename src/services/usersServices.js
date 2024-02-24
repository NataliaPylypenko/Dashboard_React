const API = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () =>
    fetch(API)
        .then(response => response.json());

export const deleteUser = id =>
    fetch(`${API}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json());