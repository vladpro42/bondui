import { forwardRef } from "react"
import styles from "./Label.module.css"
import type { LabelProps } from "./Label.type";


export const Label = forwardRef<HTMLLabelElement, LabelProps>((
    {
        children,
        variant = 'primary',
        fullWidth = false,
        startIcon, endIcon,
        disabled = false,
        className = '',
        ...rest
    }, ref) => {

    const isDisabled = disabled;

    const inputClassName = [
        styles.label,
        styles[`variant--${variant}`],
        fullWidth ? styles.fullWidth : '',
        isDisabled ? styles.isDisabled : '',
        className,
    ].filter(Boolean).join(' ');


    return <label
        ref={ref}
        className={inputClassName}
        {...rest}
    >
        {children}
    </label>



});

Label.displayName = 'Label';