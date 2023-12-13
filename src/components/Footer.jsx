import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';

export default function Footer() {
    return (
        <div id='footer' className='border-top' >
            <div className="container" >
                <footer className="d-flex flex-wrap justify-content-between align-items-center m-3">
                    <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        </Link>
                        <span className="mb-3 mb-md-0 text-body-secondary">© 2023  <RestaurantMenuTwoToneIcon fontSize='12'/> QuickCrave, Inc</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                        <li class="ms-3">Home </li>
                        <li class="ms-3">MyOrders </li>
                        <li class="ms-3">Signup</li>
                    </ul>
                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><TwitterIcon/></li>
                        <li class="ms-3"><InstagramIcon/></li>
                        <li class="ms-3"><FacebookIcon/></li>
                    </ul>

                </footer>
            </div>
        </div>
    )
}
