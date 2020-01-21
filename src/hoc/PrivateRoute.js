import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {

    const { isLogged } = useContext(SocketContext)

    if (isLogged) {
        return <Route {...props} />
    } else {
        return <Redirect to='/' />
    }

}

export default PrivateRoute








// const PrivateRoute = (props)=>{
//   const isLogged = useContext(user)
//   if(localStorage.getItem('token'))
//     return <Route {...props}/>
//   else
//     return <Redirect to="/login" />
// }

// const PublicRoute = (MonComp)=>{
//   const isLogged = useContext(user)
//   if(isLogged)
//     return MonComp
//   else
//     return <Redirect to="/login" />
// }