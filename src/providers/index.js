import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProviders = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objIndex, setObjIndex] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "nilton",
      email: "nfescame@gmail.com",
    },
    {
      id: 2,
      name: "jane",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "lucas",
      email: "lucas@gmail.com",
    },
    {
      id: 4,
      name: "mario",
      email: "mario@gmail.com",
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    if (objIndex !== null) {
      const newName = (users[objIndex].name = name);
      const newEmail = (users[objIndex].email = email);
      console.log(newName, newEmail);

      setObjIndex(null);
      setName("");
      setEmail("");
    } else {
      let newID = 0;
      if (users.length > 0) {
        newID = users[users.length - 1].id + 1;
      } else {
        newID = 1;
      }
      setUsers([...users, { id: newID, name: name, email: email }]);
      setName("");
      setEmail("");
    }
  };

  const handleDelete = (id) => {
    const filtered = users.filter((el) => {
      return el.id !== parseInt(id);
    });

    setUsers(filtered);
  };

  const handleUpdate = (id) => {
    const objIndex = users.findIndex((obj) => obj.id === parseInt(id));
    const filtered = users.filter((el) => {
      return el.id === parseInt(id);
    });
    setObjIndex(objIndex);
    setName(filtered[0].name);
    setEmail(filtered[0].email);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        name,
        setName,
        email,
        setEmail,
        handleClick,
        handleDelete,
        handleUpdate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
