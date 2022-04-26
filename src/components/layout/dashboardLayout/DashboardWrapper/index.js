import React from 'react';
import MainHeader from '../Header/MainHeader';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardWrapper = () => {
    return (
        <div className="">
            <div className="flex w-full ">
                <Sidebar />
                <main className="w-full">
                    <div className="w-full px-8 py-2 border-b-2 bg-neutral-50 border-neutral-200">
                        <div className="flex flex-col">
                            <MainHeader />
                            <div className="flex flex-col">
                                <div className="subHeader"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-10 bg-slate-50 h-[90%] overflow-y-auto">
                        <Outlet />
                    </div>
                    <div className="absolute bottom-0 w-full h-[5%] px-10 py-4  footer bg-slate-100 border-t-2 border-neutral-100 ">
                        <div className="container flex justify-between w-[80%]">
                            <div className="text-dark">
                                <span className="mr-2 text-muted font-weight-bold">
                                    ©{new Date().getFullYear()}
                                </span>
                                <span>EDUBASE</span>
                            </div>
                            <div className="order-2 text-dark order-md-1">
                                <a
                                    href="https://api.whatsapp.com/send?phone=2349017298682&text=Hi%2C%20My%20name%20is"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark"
                                >
                                    {/* <img
                                        src={whatsapp}
                                        alt="whatsapp_icon"
                                        style={{
                                            position: 'relative',
                                            top: '-2px',
                                            width: '40px',
                                        }}
                                    /> */}
                                    Chat With Us
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardWrapper;
