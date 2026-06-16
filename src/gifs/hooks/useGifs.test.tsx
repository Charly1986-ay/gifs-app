import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import * as gifsActions from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {

    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previuosTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    });

    test('should return a list of gifs', async () => {
        // handledSearch
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs when handleTermClicked is called', async () => {
        // handledTermClicked
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs from cache', async () => {
        // handledSearch
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifsActions, 'getGifsByQuery').mockRejectedValue(
            new Error('This is my custom error')
        );

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return no more than 8 previous terms', async () => {
        // handledSearch
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifsActions, 'getGifsByQuery').mockRejectedValue([]);  
            
        await act(async () => {
            await result.current.handleSearch('goku1');
        });

        await act(async () => {
            await result.current.handleSearch('goku2');
        });

        await act(async () => {
            await result.current.handleSearch('goku3');
        });

        await act(async () => {
            await result.current.handleSearch('goku4');
        });

        await act(async () => {
            await result.current.handleSearch('goku5');
        });

        await act(async () => {
            await result.current.handleSearch('goku6');
        });

        await act(async () => {
            await result.current.handleSearch('goku7');
        });

        await act(async () => {
            await result.current.handleSearch('goku8');
        });

         await act(async () => {
            await result.current.handleSearch('goku9');
        });

        expect(result.current.previuosTerms).toBe(8);
        console.log(result.current.previuosTerms);
    });
});