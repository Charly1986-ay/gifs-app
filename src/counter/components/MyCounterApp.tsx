import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {    
    const { counter, handleAdd, handleSubstract, handleReset } = useCounter(6);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{counter}</h1>

            <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    );
};