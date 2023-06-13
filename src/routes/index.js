import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Products = lazy(() => import('../pages/Products'));
const Category = lazy(() => import('../pages/Category'));
const Brand = lazy(() => import('../pages/Brand'));
const Store = lazy(() => import('../pages/Store'));
const Customers = lazy(() => import('../pages/Customers'));
const CustomerOrder = lazy(() => import('../pages/CustomerOrder'));
const Staff = lazy(() => import('../pages/Staff'));
const Orders = lazy(() => import('../pages/Orders'));
const OrderInvoice = lazy(() => import('../pages/OrderInvoice'));
const Coupons = lazy(() => import('../pages/Coupons'));
const EditProfile = lazy(() => import('../pages/EditProfile'));
const Page404 = lazy(() => import('../pages/Page404'));

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/brand',
        component: Brand,
    },
    {
        path: '/store',
        component: Store,
    },
    {
        path: '/customers',
        component: Customers,
    },
    {
        path: '/customer-order/:id',
        component: CustomerOrder,
    },
    {
        path: '/our-staff',
        component: Staff,
    },
    {
        path: '/orders',
        component: Orders,
    },
    {
        path: '/order/:id',
        component: OrderInvoice,
    },
    {
        path: '/coupons',
        component: Coupons,
    },
    {
        path: '/setting',
        component: EditProfile
    },
    {
        path: '/404',
        component: Page404,
    },
    {
        path: '/edit-profile',
        component: EditProfile,
    },
]

export default routes