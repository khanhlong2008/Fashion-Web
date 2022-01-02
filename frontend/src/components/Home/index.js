import React, { useContext } from 'react';
import AuthContext from '../../context/auth';
export default function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.user ? <span>Hello, {authCtx.user.firstName}</span> : null}
    </div>
  );
}
