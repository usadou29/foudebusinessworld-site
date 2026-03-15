import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    href: string;
    ctaText: string;
    image?: string;
    badge?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    features,
    href,
    ctaText,
    image,
    badge,
}: ServiceCardProps) {
    const { lang } = useParams();
    const currentLang = lang || 'fr';
    const lp = (path: string) => `/${currentLang}${path}`;

    return (
        <div className="group card-premium rounded-lg overflow-hidden h-full flex flex-col">
            {/* Image Section */}
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                    {badge && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-brand-gold text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                            {badge}
                        </span>
                    )}
                    <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg glass-gold flex items-center justify-center text-brand-gold">
                            {icon}
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                {!image && (
                    <div className="w-14 h-14 rounded-lg glass-gold flex items-center justify-center text-brand-gold mb-4">
                        {icon}
                    </div>
                )}
                
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-brand-gold transition-colors">
                    {title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                    {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    to={lp(href)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 rounded-sm text-sm font-medium"
                >
                    {ctaText}
                </Link>
            </div>
        </div>
    );
}
