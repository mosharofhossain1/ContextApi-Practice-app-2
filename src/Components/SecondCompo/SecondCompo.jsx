/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext } from "react";
import ThirdCompo from "../ThirdCompo/ThirdCompo";
import { Context1 } from "../../Contexts/Context1";

const SecondCompo = () => {
    const [x, setX] = useContext(Context1)
    return (
        <div>
            <ThirdCompo></ThirdCompo>
            <button>Count - 2 {x}</button>
        </div>
    );
};

export default SecondCompo;