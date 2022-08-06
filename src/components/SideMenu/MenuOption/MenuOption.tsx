import React, { useEffect, useRef, useState } from "react";
import "./MenuOption.css";
import {ReactComponent as Home} from "../../../assets/icons/Home.svg"

const MenuOption: React.FunctionComponent = () => {
    const buttonElement = useRef<HTMLDivElement>(null);
    const [isExpanded, setExpanded] = useState<boolean>(true);

    useEffect(() => {
        console.dir(buttonElement.current);
        console.log(buttonElement.current?.offsetWidth)
        if (buttonElement.current?.clientWidth as number >= 180) {
            setExpanded(true);
            console.log("yass expanded");
        }
        else {
            setExpanded(true);
        }
    }, [])

    return (
        <div className="button" ref={buttonElement}>
            <div className="text">
                Home
            </div>
            <Home className="icon"/>
        </div>
    )
}

export default MenuOption;