import React, { useState } from 'react';
import { Whisper, Tooltip } from 'rsuite';
import { VscBellDot } from 'react-icons/vsc';
import DrawerPanel from '../../../elements/DrawerPanel';

const HeaderIcon = ({ icon, text, iconColor, hasNotification }) => {
    const [open, setOpen] = useState(false);
    const tooltip = <Tooltip>{text || 'tooltip'}</Tooltip>;

    const openNotice = () => {
        if (hasNotification) setOpen(true);
        return;
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="relative mx-2.5">
                <Whisper
                    placement="bottom"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={tooltip}
                >
                    <span
                        className={`text-lg icon ${iconColor}`}
                        onClick={openNotice}
                    >
                        {hasNotification ? <VscBellDot /> : icon}
                    </span>
                </Whisper>
            </div>

            {open && <DrawerPanel handleClose={handleClose} size="xs" />}
        </>
    );
};

export default HeaderIcon;
