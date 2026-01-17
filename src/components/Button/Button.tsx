import { forwardRef } from "react"
import type { ButtonProps } from "./Button.type";
import styles from "./Button.module.css"


export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        children,
        variant = 'primary',
        size = 'medium',
        fullWidth = false,
        startIcon, endIcon,
        loading = false,
        disabled = false,
        className = '',
        type = 'button',
        ...rest
    }, ref) => {

    const isDisabled = disabled || loading;

    const btnClassName = [
        styles.button,
        styles[`variant--${variant}`],
        styles[`size--${size}`],
        fullWidth ? styles.fullWidth : '',
        isDisabled ? styles.isDisabled : '',
        loading ? styles.loading : '',
        className,
    ].filter(Boolean).join(' ');


    return <button
        ref={ref}
        className={btnClassName}
        disabled={isDisabled}
        type={type}
        aria-disabled={isDisabled}
        aria-busy={isDisabled}
        {...rest}
    >
        {loading && (
            <span className={styles.loading} aria-hidden="true">
                Loading...
            </span>
        )}

        {!loading && startIcon && (
            <span className={styles.startIcon} aria-hidden="true">
                {startIcon}
            </span>
        )}

        <span className={styles.content}>
            {children}
        </span>

        {!loading && endIcon && (
            <span className={styles.endIcon} aria-hidden="true">
                {startIcon}
            </span>
        )}

    </button>
});

Button.displayName = 'Button';