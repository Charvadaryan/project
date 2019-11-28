import React from 'react';

const Nav = ({onClickFunction, tab3}) => {
    return (
        <div>
            <ul className="d-flex" style={{listStyle: 'none'}}>
                <li className="nav-item">
                    {(tab3 === "Login") ? <a onClick={onClickFunction.bind(null, "Home")} className="nav-link" href="#">Home</a> : null}
                </li>
                <li className="nav-item">
                    {(tab3 === "Home") ? <a onClick={onClickFunction.bind(null, "Login")} className="nav-link" href="#">Login</a> : null}
                </li>
            </ul>
        </div>
    )
    
}

export default Nav;