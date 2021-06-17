import React, { createContext, useState, useEffect } from "react";

import { app } from "../../Base";
const db = app.firestore().collection("africa");
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);

      db.doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentData(doc.data());
        });
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser, currentData }}>
      {children}
    </GlobalContext.Provider>
  );
};
