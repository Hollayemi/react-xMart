import React from 'react';
import HeaderIcon from './HeaderIcon';
import { FaPowerOff, FaRegBell } from 'react-icons/fa';

const MainHeader = ({ user }) => {
    return (
        <div className="mainHeader">
            <div className="flex items-stretch justify-between ">
                <div className="flex items-center ">
                    <h3 className="self-center font-semibold text-md text-neutral-500 ">
                        Welcome, Kalson
                    </h3>
                </div>

                <div className="flex items-center">
                    <HeaderIcon
                        icon={<FaRegBell />}
                        text="Announcements"
                        iconColor="icon-blue"
                        hasNotification
                    />
                    <HeaderIcon
                        icon={<FaPowerOff />}
                        text="Logout"
                        iconColor="icon-red"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
