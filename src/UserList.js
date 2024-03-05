import React from "react";

const UserList = (({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return <div className="list-box" key={id}>
                    <div className='user-photo'><img src={image} alt={name} /></div>
                    <div className='user-details'>
                        <p>{name}</p>
                        <span>{age}</span>
                    </div>
                </div>
            })}
        </>
    )
})

export default UserList