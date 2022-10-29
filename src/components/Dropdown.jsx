import "../css/dropdown.css";
import React, { useState } from "react";
export const Dropdown = ({text, link }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="leading-normal dropdown-wrapper mb-5" >
            <h3 onClick={( ) => setShowDropdown(!showDropdown)} className="mb-2 text-2xl font-bold tracking-tight text-uablue flex items-center trigger-button"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>Zajímavý odkaz</h3>
            <div className={showDropdown ? "active" : "notactive"}>
                <div className="ml-6">
                    <p>
                        {text}
                    </p>
                    <p>
                        <a href={link} className="text-uayellow">Proklik na odkaz</a>
                    </p>
                </div>

            </div>
        </div>

    );
}
export default Dropdown;