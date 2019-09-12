import React from "react";
import { withRouter } from 'react-router-dom';
import Navigtion from "./Nav";


const NavDisplay = withRouter(props =>
    {(props.location.pathname === "/") ? null : <Navigtion />}
)

export default NavDisplay;