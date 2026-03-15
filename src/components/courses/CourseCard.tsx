import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, BarChart3 } from 'lucide-react';
import type { Course } from '../../types/course';

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.language || 'fr';

    const title = lang === 'fr' ? course.title_fr : course.title_en;
    const description = lang === 'fr' ? course.description_fr : course.description_en;

    const levelColors = {
        beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
        intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
        advanced: 'bg-red-500/10 text-red-400 border-red-500/20'
    };

    const levelColor = course.level ? levelColors[course.level as keyof typeof levelColors] : levelColors.beginner;

    return (
        <Link
            to={`/${lang}/courses/${course.slug}`}
            className="group block bg-brand-surface border border-white/10 rounded-xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-brand-gold/20 to-brand-surface relative overflow-hidden">
                {course.thumbnail_url ? (
                    <img
                        src={course.thumbnail_url}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <BarChart3 size={48} className="text-brand-gold/50" />
                    </div>
                )}

                {/* Level Badge */}
                {course.level && (
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${levelColor}`}>
                            {t(`courses.level.${course.level}`)}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {title}
                </h3>

                {description && (
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-500">
                        {course.duration_hours && (
                            <div className="flex items-center gap-1">
                                <Clock size={16} />
                                <span>{t('courses.duration', { hours: course.duration_hours })}</span>
                            </div>
                        )}
                    </div>

                    <div className="text-brand-gold font-bold text-lg">
                        {course.price}€
                    </div>
                </div>
            </div>
        </Link>
    );
}
