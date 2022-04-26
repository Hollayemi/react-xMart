import React from 'react';
import { ButtonToolbar, Dropdown, IconButton, Popover, Whisper } from 'rsuite';

const IconDropdown = ({ Icon, Content, onSelect, className, ref }) => {
    const myContent = Content.map((res, index) => {
        return (
            <Dropdown.Item eventKey={res.value} key={index}>
                {res.name}
            </Dropdown.Item>
        );
    });
    const handleSelect = (eventKey) => {
        onSelect(eventKey);
    };

    return (
        <ButtonToolbar>
            <Whisper
                placement="bottomStart"
                trigger="click"
                speaker={
                    <Popover ref={ref} className={className} full>
                        <Dropdown.Menu onSelect={handleSelect}>
                            {myContent}
                        </Dropdown.Menu>
                    </Popover>
                }
            >
                <i className="w-full h-full">{Icon}</i>
            </Whisper>
        </ButtonToolbar>
    );
};

export default IconDropdown;
