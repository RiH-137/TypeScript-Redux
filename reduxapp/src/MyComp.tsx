import React from "react";

import { useAppSelector } from "./redux/hooks";

const MyComp: React.FC = () => {
    const count = useAppSelector((state) => state.counter);
    return <div>Count is {count}</div>;
    };

export default MyComp;
