import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {    
    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter(15));

        expect(result.current.counter).toBe(15);
    });

    test('should initialize with default value of 20', () => {
        const initValue: number = 20;
        const { result } = renderHook(() => useCounter(initValue));

        expect(result.current.counter).toBe(initValue);
    });

    test('should increment counter then handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
        });
        
        act(() => {
            result.current.handleAdd();
        });
        
        expect(result.current.counter).toBe(12);
    });

    test('should decrement counter then handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubstract();
        });         
        
        expect(result.current.counter).toBe(9);
    });

    test('should reset to initial counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.handleSubstract();
            result.current.handleSubstract();
            result.current.handleSubstract();
            result.current.handleSubstract();
        });

        expect(result.current.counter).toBe(6);

        act(() => {
            result.current.handleReset();
        });         
        
        expect(result.current.counter).toBe(10);
    });
});