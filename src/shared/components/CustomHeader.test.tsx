import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    const title = 'Curso de React';   
    
    test('should render the title correctly', () => {          

        render(<CustomHeader title={title} />);

        expect(screen.getByText(title)).toBeDefined()
    });

    test('should render the description when provided', () => {            
        const description = 'Curso de React con Fernando Herrera';

        render(<CustomHeader title={title} description={description} />);

        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });

    test('should render the description when not provided', () => {        
        const { container } = render(<CustomHeader title={title} />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);
    });

    test('should render the description when not provided', () => {        
        const { container } = render(<CustomHeader title={title} />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p?.innerHTML).toBeNull();
    });
});