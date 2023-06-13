import {
    FiGrid,
    FiShoppingBag,
    FiUsers,
    FiUser,
    FiCompass,
    FiGift,
    FiList,
    FiSettings,
    FiPackage,
    FiLayers
} from 'react-icons/fi';

const sidebar = [
    {
        path: '/dashboard', // the url
        icon: FiGrid, // icon
        name: 'Dashboard', // name that appear in Sidebar
    },
    {
        path: '/products',
        icon: FiShoppingBag,
        name: 'Products',
    },
    {
        path: '/category',
        icon: FiList,
        name: 'Category',
    },
    {
        path: '/brand',
        icon: FiPackage,
        name: 'Brand',
    },
    {
        path: '/store',
        icon: FiLayers,
        name: 'Store',
    },
    {
        path: '/customers',
        icon: FiUsers,
        name: 'Customers',
    },
    {
        path: '/orders',
        icon: FiCompass,
        name: 'Orders',
    },
    {
        path: '/coupons',
        icon: FiGift,
        name: 'Coupons',
    },
    {
        path: '/our-staff',
        icon: FiUser,
        name: 'Our Staff',
    },
    {
        path: '/setting',
        icon: FiSettings,
        name: 'Setting',
    },
];

export default sidebar;