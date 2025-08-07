import { Navigation } from '@/widgets/navigation';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <>
        <Navigation />
        <Outlet />
        <Toaster
            position='bottom-right'
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 3000,
                removeDelay: 1000,
            }}
        />
    </>
);
