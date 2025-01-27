/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext } from "react";
import SecondCompo from "../SecondCompo/SecondCompo";
import { Context1 } from "../../Contexts/Context1";

const FirstCompo = () => {
    const [x, setX] = useContext(Context1);
    return (
        <div>
            <SecondCompo></SecondCompo>
            <button>Count - 1 {x}</button>
        </div>
    );
};

export default FirstCompo;