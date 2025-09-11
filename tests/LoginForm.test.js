import '@testing-library/jest-dom';
import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
    it('should render Username field in the DOM', () => {
        render(<LoginForm />);
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    });
    it('should render Password field in the DOM', () => {
        render(<LoginForm />);
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });
    it('should render Login button in the DOM', () => {
        render(<LoginForm />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        screen.debug();
    });
    it('should allows the user to login successfully', () => {
        const mockHandleLogin = jest.fn();
        render(<LoginForm onLogin={mockHandleLogin}/>);
        fireEvent.change(screen.getByPlaceholderText(/username/i), {
            target: {value: 'test@example.com'},
        });
        fireEvent.change(screen.getByPlaceholderText(/password/i), {
            target: {value: 'password123'},
        });
        fireEvent.click(screen.getByText(/login/i));
        expect(mockHandleLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    })
})
