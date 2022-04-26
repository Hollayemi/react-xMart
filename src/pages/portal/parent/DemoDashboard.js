import React, { useState } from 'react';
import {
    Container,
    Sidebar,
    Header,
    Content,
    Footer,
    Navbar,
    Nav,
    Dropdown,
    Sidenav,
    FlexboxGrid,
} from 'rsuite';

import {
    Dashboard,
    Notice,
    Gear,
    ArrowLeft,
    ArrowRight,
    Global,
    Mobile,
    Location,
    Off,
} from '@rsuite/icons';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

const iconStyles = {
    width: 56,
    height: 56,
    padding: 18,
    lineHeight: '56px',
    textAlign: 'center',
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav pullRight>
                    <Nav.Item
                        onClick={onChange}
                        style={{ width: 56, textAlign: 'center' }}
                    >
                        {expand ? <ArrowLeft /> : <ArrowRight />}
                    </Nav.Item>
                </Nav>
            </Nav>
        </Navbar>
    );
};

const ParentDashboard = () => {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <div className="show-fake-browser sidebar-page">
                <Container>
                    <Sidebar
                        style={{ display: 'flex', flexDirection: 'column' }}
                        width={expand ? 260 : 56}
                        collapsible
                    >
                        <Sidenav.Header>
                            <div style={headerStyles}>
                                <Location style={{ fontSize: 20 }} />
                                <span style={{ marginLeft: 12 }}> BRAND</span>
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
                                        icon={<Dashboard />}
                                    >
                                        Dashboard
                                    </Nav.Item>
                                    <Nav.Item eventKey="2" icon={<Global />}>
                                        User Group
                                    </Nav.Item>
                                    <Dropdown
                                        eventKey="3"
                                        trigger="hover"
                                        title="Advanced"
                                        icon={<Mobile />}
                                        placement="rightStart"
                                    >
                                        <Dropdown.Item eventKey="3-1">
                                            Geo
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-2">
                                            Devices
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-3">
                                            Brand
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-4">
                                            Loyalty
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3-5">
                                            Visit Depth
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="4"
                                        trigger="hover"
                                        title="Settings"
                                        icon={<Gear />}
                                        placement="rightStart"
                                    >
                                        <Dropdown.Item eventKey="4-1">
                                            Applications
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-2">
                                            Websites
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-3">
                                            Channels
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-4">
                                            Tags
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-5">
                                            Versions
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

                    <Container>
                        <Header>
                            <FlexboxGrid justify="space-between" align="middle">
                                <FlexboxGrid.Item colspan={20}>
                                    <h1>Parent Dashboard</h1>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={4}>
                                    <Notice />
                                    <Off />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Header>
                        <Content>Content</Content>
                    </Container>
                </Container>
            </div>
        </>
    );
};

export default ParentDashboard;
