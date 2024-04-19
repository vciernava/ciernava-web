import Link from 'next/link';
import React from 'react';

interface HrefLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const HrefLink: React.FC<HrefLinkProps> = ({ href, className, children }) => {
    const linkClasses = `relative text-teal-400 micro-animated-link ${className}`;

    return (
        <span className={linkClasses}>
            <Link href={href}>
                {children}
            </Link>
        </span>
    );
};

export default HrefLink;