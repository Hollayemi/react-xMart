import React, { useState } from 'react';
import {
    Container,
    Header,
    Content,
    Sidebar,
    Navbar,
    Dropdown,
    Nav,
    Sidenav,
    Breadcrumb,
} from 'rsuite';
import {
    FaAngleRight,
    FaAngleLeft,
    FaToolbox,
    FaUserCog,
    FaGripHorizontal,
    FaChartPie,
    FaFolderOpen,
    FaShoppingBag,
    FaShoppingBasket,
    FaCog,
    FaGripLinesVertical,
} from 'react-icons/fa';
import RecentInfo from './RecentInfo';

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle bg-slate-900">
            <Navbar.Body className="bg-slate-900">
                <Nav pullRight>
                    <Nav.Item
                        onClick={onChange}
                        style={{
                            width: 56,
                            textAlign: 'center',
                        }}
                    >
                        {expand ? <FaAngleLeft /> : <FaAngleRight />}
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

const DashboardHeader = ({ BreadcrumbList }) => {
    // eslint-disable-next-line array-callback-return
    const myBreadcrumb = BreadcrumbList.map((res, index) => {
        if (index !== BreadcrumbList.length) {
            return (
                <Breadcrumb.Item href={res.link} key={index}>
                    <span>{res.name}</span>
                </Breadcrumb.Item>
            );
        }
        if (index === BreadcrumbList.length) {
            return (
                <Breadcrumb.Item active key={index}>
                    <span>{res.name}</span>
                </Breadcrumb.Item>
            );
        }
    });
    return (
        <div className="h-full flex items-center">
            <div className="font-medium text-white">
                <Breadcrumb separator={<FaAngleRight />}>
                    {myBreadcrumb}
                </Breadcrumb>
            </div>
        </div>
    );
};

const DashboardWrapper = ({ ...props }) => {
    const setShowing = props.setShowing;
    const [expand, setExpand] = useState(true);
    return (
        <div className="show-fake-browser sidebar-page bg-slate-100">
            <Container>
                <div className="rounded-r-3xl overflow-hidden h-[100%] bg-slate-900 fixed top-0">
                    <Sidebar
                        style={{ display: 'flex', flexDirection: 'column' }}
                        width={expand ? 260 : 56}
                        collapsible
                    >
                        <Sidenav.Header>
                            <div className="h-14 ml-6 text-lg min-w-[100%]">
                                <div className="flex items-center h-full">
                                    <i className="text-lg">
                                        <FaUserCog />
                                    </i>
                                    <span className="px-4 text-sm">
                                        {props.shopName}
                                    </span>
                                </div>
                            </div>
                        </Sidenav.Header>
                        <Sidenav
                            expanded={expand}
                            defaultOpenKeys={['3']}
                            appearance="subtle"
                        >
                            <Sidenav.Body>
                                <Nav>
                                    <Nav.Item
                                        eventKey="1"
                                        active
                                        onClick={() => setShowing('Dashboard')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaGripHorizontal />
                                                </i>
                                                <span className="px-3">
                                                    Dashboard
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>

                                    <Nav.Item
                                        eventKey="2"
                                        onClick={() => setShowing('Analytics')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaChartPie />
                                                </i>
                                                <span className="px-3">
                                                    Analytics
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>

                                    <Dropdown
                                        eventKey="3"
                                        trigger="click"
                                        title={
                                            <div className="h-5 ml-1 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaShoppingBag />
                                                    </i>
                                                    <span className="px-5">
                                                        Store
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        icon={<FaToolbox />}
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item
                                            eventKey="3-1"
                                            onClick={() =>
                                                setShowing('Collections')
                                            }
                                        >
                                            Collections
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3-2"
                                            onClick={() => setShowing('Brands')}
                                        >
                                            Brands
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3-1"
                                            onClick={() =>
                                                setShowing('Products')
                                            }
                                        >
                                            Products
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-4">
                                            Upload Product
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-4">
                                            Edit Products
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="5"
                                        trigger="click"
                                        title={
                                            <div className="h-5 ml-1">
                                                <div className="flex items-center ml-2 h-full">
                                                    <i className="text-lg">
                                                        <FaShoppingBasket />
                                                    </i>
                                                    <span className="px-5">
                                                        Orders
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item eventKey="4-1">
                                            Unsupplied Orders
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-2">
                                            Supplied Orders
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-3">
                                            Booked Products
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-4">
                                            Tags
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-5">
                                            Versions
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="6"
                                        trigger="click"
                                        title={
                                            <div className="h-5 ml-1 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaCog />
                                                    </i>
                                                    <span className="px-5">
                                                        Seetings
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        icon={<FaToolbox />}
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item eventKey="4-1">
                                            Edit Store Information
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-2">
                                            Set OTP
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-3">
                                            Activities
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-4">
                                            Reference Keys
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-5">
                                            Go Pro
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="7"
                                        trigger="click"
                                        title={
                                            <div className="h-5 ml-1 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaGripLinesVertical />
                                                    </i>
                                                    <span className="px-5">
                                                        More
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item eventKey="4-1">
                                            Help
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-2">
                                            Tools
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-3">
                                            APIs
                                        </Dropdown.Item>
                                    </Dropdown>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                        <NavToggle
                            expand={expand}
                            onChange={() => setExpand(!expand)}
                        />
                    </Sidebar>
                </div>

                <Container>
                    <div
                        className={`absolute overflow-x-hidden ${
                            expand === true
                                ? 'w-[calc(100%_-_260px)] ml-[260px]'
                                : 'w-[calc(100%-56px)] ml-[56px]'
                        }`}
                    >
                        <Header></Header>
                        <Content>
                            <div className="h-14 bg-slate-100 shadow flex items-center px-3">
                                <DashboardHeader
                                    BreadcrumbList={props.BreadcrumbList}
                                />
                            </div>
                            <div className="w-full bg-slate-100">
                                {props.children}
                            </div>
                            <div className="fixed -right-[280px] lg:right-0  top-0 w-[280px] h-full  bg-slate-50 shadow-md">
                                <RecentInfo />
                            </div>
                        </Content>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default DashboardWrapper;
