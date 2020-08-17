import React from "react";

// Step 1 - Cretae User Context
const UserContext = React.createContext('Full Stack');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext