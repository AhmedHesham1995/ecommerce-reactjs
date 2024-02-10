import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';


const AppLayout = () => {
    return (
       <>
       <Navbar/>
       <Outlet/>
       </>
    );
}

export default AppLayout;
