import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

interface HrefLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    externalLink ?: boolean;
}

const HrefLink: React.FC<HrefLinkProps> = ({ href, className = '', children, externalLink }) => {
    const linkClasses = `inline-block relative text-teal-400 micro-animated-link ${externalLink && 'pr-4'} ${className}`;

    return (
        <span className={linkClasses}>
            <Link href={href}>
                {children}
                {
                externalLink && (
                    <ExternalLinkIcon className='text-slate-600 absolute top-0 right-0 h-3 w-3' />
                )
            }
            </Link>
        </span>
    );
};

export default HrefLink;