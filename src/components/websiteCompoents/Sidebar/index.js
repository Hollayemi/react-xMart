import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { teacherNav, parentNav, studentNav, adminNav } from './data';

const Aside = ({ location }) => {
    const navMenu = location.pathname.includes('/admin')
        ? adminNav
        : location.pathname.includes('/teacher')
        ? teacherNav
        : location.pathname.includes('/parent')
        ? parentNav
        : studentNav;

    console.log(navMenu);

    return (
        <>
            <aside className="w-[20%]">
                <div className="relative h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a
                        href="https://flowbite.com"
                        className="flex items-center pl-2.5 mb-5"
                    >
                        {/* <img
                                src="/docs/images/logo.svg"
                                className="h-6 mr-3 sm:h-7"
                                alt="Flowbite Logo"
                            /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            EduBase
                        </span>
                    </a>

                    <ul className="space-y-2">
                        <li>
                            <Link
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                to="/"
                            >
                                <FaHome />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

const Sidebar = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Aside location={location} />
        </>
    );
};

export default Sidebar;
