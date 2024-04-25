interface BadgeProps {
    className?: string;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({children}) => {
    return (
        <div className="inline-block text-slate-600 text-xs font-mono">
            [{children}]
        </div>
    )
}

export default Badge;