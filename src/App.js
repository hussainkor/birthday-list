import React, { useState } from 'react';
import data from './data';
import UserList from './UserList';
import './App.css';

const App = () => {
  const [people, setPeople] = useState(data);
  return <div className='box'>
    <h2>{people.length} Birthdays today</h2>
    {people.length > 0 ? <>
      {
        <>
          <UserList people={people} />
        </>
      }<RemoveUser setPeople={setPeople} /></> : <>
      <p>No record found</p>
      <button onClick={() => window.location.reload()} className='clear-btn'> Reset List</button>
    </>}
  </div >
}

// function PersonList({ personObj }) {
//   return <>
//     <div className='user-photo'><img src={personObj.image} alt={personObj.name} /></div>
//     <div className='user-details'>
//       <p>{personObj.name}</p>
//       <span>{personObj.age}</span>
//     </div>
//   </>
// }

function RemoveUser(props) {
  return <button onClick={() => props.setPeople([])} className='clear-btn'> Clear all list</button>
}

export default App;