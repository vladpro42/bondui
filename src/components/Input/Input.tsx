import { forwardRef } from "react"
import type { InputProps } from "./Input.type";
import styles from "./Input.module.css"


export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        variant = 'primary',
        inputSize = 'medium',
        fullWidth = false,
        startIcon, endIcon,
        disabled = false,
        placeholder,
        className = '',
        type = 'text',
        ...rest
    }, ref) => {

    const isDisabled = disabled;

    const inputClassName = [
        styles.input,
        styles[`variant--${variant}`],
        styles[`size--${inputSize}`],
        fullWidth ? styles.fullWidth : '',
        isDisabled ? styles.isDisabled : '',
        className,
    ].filter(Boolean).join(' ');


    return <input
        ref={ref}
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        {...rest}
    >
    </input>



});

Input.displayName = 'Input';