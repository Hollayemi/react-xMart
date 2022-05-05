import React, { useState } from 'react';
import DashboardWrapper from '../../../components/SellerComponents/Dashboard';
import Collections from './Collections';
import Brand from './Brands';
import Products from './Products';

const Dashboard = () => {
    const [showing, setShowing] = useState('Products');
    const myBreadcrumb = [
        { name: 'Dashboard', link: '/' },
        { name: showing, link: '/' },
    ];

    return (
        <DashboardWrapper
            danger="mainly"
            BreadcrumbList={myBreadcrumb}
            setShowing={setShowing}
            shopName="Kemon-Mart"
        >
            {showing === 'Brands' && <Brand />}
            {showing === 'Collections' && <Collections />}
            {showing === 'Products' && <Products />}
        </DashboardWrapper>
    );
};

export default Dashboard;
