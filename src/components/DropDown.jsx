import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons'


function DropDown({ items }) {
    // HANDLE THE HOVERING EFFECT USING THE USE-STATE HOOKS 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* HEADING OF THE APP  */}
            <h4>Should you use a dropdown?</h4>

            <div className="dropdown">

                {/* CREATING BUTTON WHICH WE CAN APPLY THE HOVERING EFFECT  */}
                <button
                    className="dropdown-toggle"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    Dropdown <span><DownOutlined /></span> // USE THE ANT ICONS PAKAGE FOR THE DOWN ARROW KEY
                </button>

                {/* USING THE CONDITIONAL RENDERING WE CAN SHOW OR HIDE THE DROPDOWN MENU ITEMS  */}
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