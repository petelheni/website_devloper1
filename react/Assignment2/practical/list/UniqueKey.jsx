import React from 'react';

const Uniquekey = () => {
    const users = [
        { id: 1, name: "shital" },
        { id: 2, name: "pooja" },
        { id: 3, name: "suraj" },
        { id: 4, name: "sagar" },
        { id: 5, name: "Aniket" },
    ];

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li> // Display user.name instead of user
                ))}
            </ul>
        </>
    );
};

export default Uniquekey;
