import { render, screen, waitFor } from "@testing-library/react";
import Counter from '../components/Counter';

describe('Counter test', () => {
    it('Counter element: exist in the DOM', () => {
        render(<Counter />)
        expect(screen.getByTestId('counter-element')).toBeInTheDocument();
    });
    it('should increment counter value with interval', async () => {
        render(<Counter />);
        expect(screen.getByText(/0/)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText(/1/)).toBeInTheDocument();
        }, { timeout: 1000 });
        await waitFor(() => {
            expect(screen.getByText(/2/)).toBeInTheDocument();
        }, { timeout: 1000 });
    });
})
