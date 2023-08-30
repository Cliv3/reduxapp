import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import {Navbar} from "./components/Navbar.tsx";
import Login from "./pages/Login.tsx";
import ShowNavBar from "./components/ShowNavBar.tsx";
import Messages from "./pages/Messages.tsx";
import {useEffect } from "react";
import {useDispatch} from "react-redux";
import {authObserver} from "./features/actions/Auth.ts";
import PrivateRoute from "./components/PrivRoute.jsx";
import Profile from "./pages/Profile.tsx";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
            return authObserver(dispatch);

        },[]);

    return (
        <Router>
            <ShowNavBar>
                <Navbar/>
            </ShowNavBar>
            <Routes>
                <Route path="/" element={<PrivateRoute> <Home/> </PrivateRoute>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<PrivateRoute> <Profile/> </PrivateRoute>} />
                <Route path="/messages" element={<PrivateRoute> <Messages/> </PrivateRoute>} />
            </Routes>
        </Router>

  )
}

export default App
