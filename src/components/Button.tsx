import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "s" | "m" | "l" | "xl";
    variant?: "primary" | "secondary" | "black";
}

const sizeClasses = {
    s: "px-3 py-1 text-sm",
    m: "px-4 py-2 text-base",
    l: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-xl",
};

const variantClasses = {
    primary: "bg-[#5766AB] text-white hover:bg-[#434675]",
    secondary: "bg-[#819EBB] text-black hover:bg-[#5766AB]",
    black: "bg-black text-white hover:bg-[#434675]",
};

export const Button: React.FC<ButtonProps> = ({
    size = "m",
    variant = "primary",
    className = "",
    children,
    ...props
}) => {
    return (
        <button
            className={`rounded-lg font-semibold transition ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
