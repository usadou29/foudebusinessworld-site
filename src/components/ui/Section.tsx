import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, darker = false, className = '', ...props }) => {
    return (
        <section
            className={`py-16 md:py-24 ${darker ? 'bg-brand-dark' : 'bg-brand-gray'} ${className}`}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
