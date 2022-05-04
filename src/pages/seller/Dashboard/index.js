import React, { useState } from 'react';
import DashboardWrapper from '../../../components/SellerComponents/Dashboard';
import Collections from './Collections';
import Brand from './Brands';
import Products from './Products';

const Dashboard = () => {
    const [showing, setShowing] = useState('Products');
    return (
        <DashboardWrapper
            danger="mainly"
            BreadcrumbList={[
                { name: 'Dashboard', link: '/' },
                { name: 'Overview', link: '/' },
            ]}
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
