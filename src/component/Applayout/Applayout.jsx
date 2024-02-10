import { Outlet } from 'react-router-dom';
import Search from '../../pages/search/search';
import Navbar from './NavBar';


const AppLayout = () => {
    return (
       <>
       <Navbar/>
       <Search/>
       <Outlet/>
       </>
    );
}

export default AppLayout;
