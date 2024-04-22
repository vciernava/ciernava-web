import Link from "next/link";

interface ButtonProps {
    href: string;
    className?: string;
    children: React.ReactNode;

}

const Button: React.FC<ButtonProps> = ({href, className = '', children}) => {
    const buttonClass = `block border border-indigo-400 text-indigo-400 bg-slate-900 font-mono px-6 py-4 w-fit hover:shadow-solid-button hover:shadow-indigo-400 hover:-translate-y-1.5 hover:-translate-x-1.5 transition-all duration-300 ease-in-out ${className}`

    return (
        <Link className={buttonClass} href={href}>
            {children}
        </Link>
    )
}

export default Button;