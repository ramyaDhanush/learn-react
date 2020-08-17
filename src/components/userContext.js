import React from "react";

// Step 1 - Cretae User Context
const UserContect = React.createContext();
const UserProvider = UserContect.Provider;
const UserConsumer = UserContect.Consumer;

export { UserProvider, UserConsumer };
