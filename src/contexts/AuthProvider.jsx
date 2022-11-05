import React from 'react';

export default function AuthProvider(props) {
  return (
    <AuthContext.Provider value={{
    user: {
    username: "Anatiola",
    name: 'Anna Lartey',
    email: 'anna.t.lartey@gmail.com'
  },
}}>
      {props.children}
    </AuthContext.Provider>
  )
}