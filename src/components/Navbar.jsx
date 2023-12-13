import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

export default function Navbar() {

    let data = useCart();
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    const handleLogout = ()=> {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#6B240C"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 fst-italic" to="/"><RestaurantMenuTwoToneIcon/>QuickCrave</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav me-auto mb-2">
                            <Link className="nav-link active fs-5 mx-2" aria-current="page" to="/">Home</Link>
                    
                        {(localStorage.getItem("authToken"))?
                        <div className="navbar-nav ">
                            <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                        </div>
                        : ""
                        }
                        </div>
                        {(!localStorage.getItem("authToken")) ?
                        <div className='d-flex' >
                            <Link className="btn  mx-1" to="/login"> <LoginSharpIcon/> Login</Link>
                            <Link className="btn  mx-1" to="/createuser">SignUp</Link>
                        </div>
                        : <div>
                            <Link className="btn  mx-2" to="/" onClick={()=> {setCartView(true)}} > <ShoppingCartSharpIcon/> My Cart {" "}
                            <Badge pill bg='danger' >{data.length}</Badge>
                            </Link>
                            {cartView ? <Modal onClose={()=> setCartView(false)} ><Cart/></Modal> : null}
                            <Link className="btn mx-1" to="/" onClick={handleLogout} > <LogoutIcon/> Logout</Link>
                        </div>
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
