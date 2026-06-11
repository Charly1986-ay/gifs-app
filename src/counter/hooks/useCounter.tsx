import { useState } from "react";

export const useCounter = (initValue: number = 10) => {
    const [counter, setCounter] = useState(initValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter((previous) => previous - 1);
    }

    const handleReset = () => {
        setCounter(initValue);
    }

    return {
        // Properties or values
        counter,

        // Methods
        handleAdd,
        handleSubstract, 
        handleReset
    };
}