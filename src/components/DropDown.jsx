import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons'


function DropDown({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h4>Should you use a dropdown?</h4>
            <div className="dropdown">
                <button
                    className="dropdown-toggle"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    Dropdown <span><DownOutlined /></span>
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DropDown;