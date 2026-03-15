import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    external?: boolean;
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    disabled = false,
    loading = false,
    external = false,
    fullWidth = false,
}: ButtonProps) {
    const baseStyles = 'btn-premium inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-sm';
    
    const variants = {
        primary: 'premium-gradient text-black hover:shadow-gold',
        secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
        outline: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black',
        ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`;

    const content = (
        <>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {children}
            {!loading && variant === 'primary' && <ArrowRight className="w-4 h-4" />}
        </>
    );

    if (href) {
        const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
        return (
            <Link to={href} className={classes} {...linkProps}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes} disabled={disabled || loading}>
            {content}
        </button>
    );
}
