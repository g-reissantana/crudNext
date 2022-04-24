import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { ShowContact } from '../pages/ShowContact';

export const MainRoutes = () => useRoutes([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/showContact',
        element: <ShowContact/>
    },
    {
        path: '*',
        element: 'Não encontrado'
    }
]);