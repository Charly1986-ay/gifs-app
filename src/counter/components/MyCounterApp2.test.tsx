import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

const handleAddMock = vi.fn();
const handleResetMock = vi.fn();
const handleSubstractMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSubstract: handleSubstractMock

    })
}));

describe('MyCounterApp', () => {

    test('should render component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            'counter: 40'
        );

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'reset' })).toBeDefined();
    });

    test('should call handleAdd is button clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleSubstractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });
});