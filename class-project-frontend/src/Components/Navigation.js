import React from 'react';
// import { useStateValue } from "../StateProvider";
import { NavLink } from 'react-router-dom';
// import { RiQuillPenLine } from "react-icons/ri";
 
const Navigation = () => {
    // const [{ user }] = useStateValue();
    

    return (
        <div>
            <div className="nav">
                <div className="nav-header">
                    <h3>ClassProject</h3>
                </div>
                <NavLink className="nav-link" to="/">
                Home
                </NavLink>
                <NavLink className="nav-link" to="/classes">
                Classes
                </NavLink>
                <NavLink className="nav-link" to="#">
                Other
                </NavLink>
            </div>
        </div>
      
    );
}
 
export default Navigation;