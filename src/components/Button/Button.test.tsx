import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('рендерится с текстом', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    test('вызывает onClick при клике', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('Не вызывает onClick при disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'))
        expect(handleClick).not.toHaveBeenCalled()
    })

    test('Не вызывает onClick когда loading', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} loading >Click me</Button>);
        fireEvent.click(screen.getByText('Click me'))
        expect(handleClick).not.toHaveBeenCalled()
    })

    test('Имеет правильный type по умолчанию', () => {
        render(<Button>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'))
        expect(screen.getByText('Click me')).toHaveAttribute('type', 'button')
    })

    test('Change type to submit', () => {
        render(<Button type="submit">Submit</Button>)
        expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit')
    })

    test('Show startIcon', () => {
        const icon = <span data-testid="icon">📎</span>
        render(<Button startIcon={icon}>Submit</Button>)
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    test('отображает endIcon', () => {
        const icon = <span data-testid="icon">📎</span>;
        render(<Button endIcon={icon}>With icon</Button>);

        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    test('Accepted full width prop', () => {
        const { container } = render(<Button fullWidth>full width</Button>)
        expect(container.firstChild).toHaveClass('fullWidth')
    })

    test('Having diffrent variants', () => {
        const { container: primaryContainer } = render(
            <Button variant="primary">Primary</Button>
        )

        const { container: secondaryContainer } = render(
            <Button variant="secondary">secondary</Button>
        )

        expect(primaryContainer.firstChild).toHaveClass('variant--primary')
        expect(secondaryContainer.firstChild).toHaveClass('variant--secondary')
    })

    test('передает все стандартные HTML атрибуты', () => {
        render(
            <Button
                id="test-button"
                aria-label="Test button"
                data-test="test-data"
                title="button title"
                tabIndex={0}
                onClick={() => { }}
            >
                Button text
            </Button>
        );

        // Способ 1: По тексту (работает если children это текст)
        const button = screen.getByText('Button text');

        // Способ 2: По role (более надежно)
        // const button = screen.getByRole('button');

        // Способ 3: По test-id (если хотите явно)
        // const button = screen.getByTestId('test-button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('id', 'test-button');
        expect(button).toHaveAttribute('aria-label', 'Test button');
        expect(button).toHaveAttribute('data-test', 'test-data');
        expect(button).toHaveAttribute('title', 'button title');
        expect(button).toHaveAttribute('tabindex', '0');
    });

})