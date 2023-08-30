import {Link} from "react-router-dom";
import classes from './Navbar.module.scss'
import './Navbar.module.scss'
import {signOutAction} from "../features/actions/Auth.ts";
import {useDispatch} from "react-redux";

export const Navbar = () =>

{
    const dispatch =useDispatch()
    const signOut = () => {
        signOutAction(dispatch);
    }

    return(
        <header>
        <div className={classes.header_content_nav}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/messages">messages</Link>
                    </li>
                </ul>
                <button onClick={signOut}>logout</button>
            </nav>

        </div>
        </header>
    )

}