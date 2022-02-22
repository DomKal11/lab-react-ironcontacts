import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";



function App() {
  
  const [getContacts, setGetContacts] = useState(contacts.slice(0, 5));


  function addContact() {
    const remaining = contacts.filter(arr => !getContacts.includes(arr));
    console.log(remaining);

    const random = Math.floor(Math.random() * remaining.length );
    setGetContacts((remaining.splice(random,1).concat(getContacts)));
  }

  function sortBy(criteria) {
    let sortedArr = getContacts;
    if(criteria==="popularity"){
      sortedArr = getContacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1);
    }
    else if(criteria==="name"){
      sortedArr = getContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    console.log(sortedArr);
    setGetContacts([...sortedArr]);
  }

  
  function deleteContact(id) {
   
  }


  return (
    <div>
      <h2>Contacts</h2>
      <div align="center">
      <button onClick={() => addContact()}> Add Random Contact </button>
      <button onClick={() => sortBy("popularity")}> Sort By Popularity </button>
      <button onClick={() => sortBy("name")}> Sort By Name </button>
      </div>
      <table className="contacts-table">
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {getContacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  className="profile-pic"
                  src={contact.pictureUrl}
                  alt={contact.name}
                ></img>
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity}</p>
              </td>
              <td>
                {contact.wonOscar && <p>🏆</p>}
              </td>
              <td>
              {contact.wonEmmy && <p>🏆</p>}
              </td>
              <td>
              <button onClick={() => deleteContact(contact.id)}> Delete </button>
              </td>
              
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
