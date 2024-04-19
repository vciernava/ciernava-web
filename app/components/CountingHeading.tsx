interface CountingHeadingProps {
    className?: string;
    children: React.ReactNode;
}

const CountingHeading: React.FC<CountingHeadingProps> = ({className, children}) => {
    const headingClass = `relative text-3xl font-bold flex items-center mt-4 mb-8 w-full counting-heading ${className}`;

    return (
        <h2 className={headingClass}>
            {children}
        </h2>
    )
}

export default CountingHeading;