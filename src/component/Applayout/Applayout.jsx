import { Outlet } from 'react-router-dom';
import Search from '../../pages/search/search';


const AppLayout = () => {
    return (
       <>
       <Search/>
       <Outlet/>
       </>
    );
}

export default AppLayout;
