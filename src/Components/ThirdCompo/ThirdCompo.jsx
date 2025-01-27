/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext, } from "react";
import { Context1 } from "../../Contexts/Context1";

const ThirdCompo = () => {
    const [x, setX] = useContext(Context1)
    return (
        <div>
            <button>Count -  3 {x}</button>
        </div>
    );
};

export default ThirdCompo;