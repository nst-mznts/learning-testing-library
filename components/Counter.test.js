import {render, screen} from "@testing-library/react";
import Counter from './Counter';
import {act} from 'react';

describe('Counter test', () => {
    it('Counter element: exist in the DOM', () => {
        render(<Counter />)
        expect(screen.getByTestId('counter-element')).toBeInTheDocument();
        expect(screen.getByText("0")).toBeInTheDocument();
    });
    it('should increment counter value with interval', () => {
        jest.useFakeTimers();
        render(<Counter />);
        expect(screen.getByText("0")).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText("1")).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText("2")).toBeInTheDocument();
        jest.useRealTimers();
    });
})
