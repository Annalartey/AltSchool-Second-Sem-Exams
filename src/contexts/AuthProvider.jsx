import React from 'react';

export default function AuthProvider(props) {
  return (
    <AuthContext.Provider value={{
  user: null;
}}>
      {props.children}
    </AuthContext.Provider>
  )
}