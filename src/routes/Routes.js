import { useRoutes } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';

const NotFound = LazyLoading(() => import('../pages/NotFound'));
const Signin = LazyLoading(() => import('../pages/auth/signin/Signin'));
// const AuthOutlet = LazyLoading(() => import('../components/hoc/AuthOutlet'));

const ErorrBoundary = LazyLoading(() =>
    import('../components/HOC/ErrorBoundary')
);

// auth Routes
const SignUp = LazyLoading(() => import('../pages/auth/signup/SignUp'));
const SignIn = LazyLoading(() => import('../pages/auth/signin/Signin'));
const Home = LazyLoading(() => import('../pages/website/Home'));
const Seller = LazyLoading(() => import('../pages/website/Seller'));
const Agent = LazyLoading(() => import('../pages/website/Agent'));

// sellerPage
const CreateAccount = LazyLoading(() =>
    import('../pages/seller/CreateAccount')
);
const SellerDashboard = LazyLoading(() => import('../pages/seller/Dashboard'));
// Agent Page
const NewAgent = LazyLoading(() => import('../pages/Agent/newAgent.js'));

const AppRoutes = () => {
    let allRoutes = useRoutes([
        {
            path: '/',
            children: [
                { element: <Home />, index: true },
                { path: '/signin', element: <SignIn /> },
                { path: '/seller', element: <Seller /> },
                { path: '/agent', element: <Agent /> },
                {
                    path: '/signup',
                    element: <SignUp />,
                },
                { path: '/forgot-password', element: <SignUp /> },
            ],
        },
        {
            path: '/seller',
            children: [
                {
                    path: '/seller/create-account/:level',
                    element: <CreateAccount />,
                },
                {
                    path: '/seller/dashboard',
                    element: <SellerDashboard />,
                },
            ],
        },
        {
            path: '/agent',
            children: [
                {
                    path: '/agent/new-agent',
                    element: <NewAgent />,
                },
            ],
        },
        {
            path: '/error/:codeErr',
            element: <ErorrBoundary />,
        },

        {
            // =======
            // >>>>>>> 74763df8bbd4e67e19856d0a4e6a726ba0362df9
            path: '*',
            element: <NotFound />,
        },
    ]);
    return allRoutes;
};

export default AppRoutes;
