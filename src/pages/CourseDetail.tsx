import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCourseBySlug, hasUserPurchasedCourse, getUserCourseProgress } from '../lib/courses';
import { useAuth } from '../context/AuthContext';
import type { CourseWithModules } from '../types/course';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEOHead from '../components/SEOHead';
import { Clock, BookOpen, ChevronDown, ChevronUp, Lock, Play } from 'lucide-react';

export default function CourseDetail() {
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation('common');
    const { user } = useAuth();
    const navigate = useNavigate();
    const lang = i18n.language || 'fr';

    const [course, setCourse] = useState<CourseWithModules | null>(null);
    const [loading, setLoading] = useState(true);
    const [hasPurchased, setHasPurchased] = useState(false);
    const [progress, setProgress] = useState({ completedLessons: 0, totalLessons: 0, percentage: 0 });
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (slug) {
            loadCourse();
        }
    }, [slug, user]);

    const loadCourse = async () => {
        try {
            const data = await getCourseBySlug(slug!);
            setCourse(data);

            if (user && data) {
                const purchased = await hasUserPurchasedCourse(data.id, user.id);
                setHasPurchased(purchased);

                if (purchased) {
                    const progressData = await getUserCourseProgress(data.id, user.id);
                    setProgress(progressData);
                }
            }
        } catch (error) {
            console.error('Error loading course:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleModule = (moduleId: string) => {
        setExpandedModules(prev => {
            const newSet = new Set(prev);
            if (newSet.has(moduleId)) {
                newSet.delete(moduleId);
            } else {
                newSet.add(moduleId);
            }
            return newSet;
        });
    };

    const handleStartCourse = () => {
        if (!course) return;

        // Find first lesson
        const firstModule = course.modules[0];
        const firstLesson = firstModule?.lessons[0];

        if (firstLesson) {
            navigate(`/${lang}/courses/${course.slug}/lessons/${firstLesson.id}`);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-16 bg-black flex items-center justify-center">
                <div className="text-gray-400">Loading...</div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen pt-32 pb-16 bg-black flex items-center justify-center">
                <div className="text-gray-400">Course not found</div>
            </div>
        );
    }

    const title = lang === 'fr' ? course.title_fr : course.title_en;
    const description = lang === 'fr' ? course.description_fr : course.description_en;
    const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

    return (
        <>
            <SEOHead title={title} />

            <div className="min-h-screen pt-32 pb-16 bg-black">
                <Container>
                    {/* Course Header */}
                    <div className="mb-12">
                        <Link to={`/${lang}/courses`} className="text-brand-gold hover:underline mb-4 inline-block">
                            ← {t('courses.all_courses')}
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                            {title}
                        </h1>

                        {description && (
                            <p className="text-gray-400 text-lg mb-6">
                                {description}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                            {course.duration_hours && (
                                <div className="flex items-center gap-2">
                                    <Clock size={20} />
                                    <span>{t('courses.duration', { hours: course.duration_hours })}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <BookOpen size={20} />
                                <span>{t('courses.lessons_count', { count: totalLessons })}</span>
                            </div>
                            {course.level && (
                                <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-bold">
                                    {t(`courses.level.${course.level}`)}
                                </span>
                            )}
                        </div>

                        {/* Progress (if purchased) */}
                        {hasPurchased && progress.totalLessons > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                    <span>{t('courses.progress', { percentage: progress.percentage })}</span>
                                    <span>{progress.completedLessons} / {progress.totalLessons}</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-brand-gold transition-all"
                                        style={{ width: `${progress.percentage}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        {hasPurchased ? (
                            <Button onClick={handleStartCourse} variant="primary" size="lg">
                                {progress.completedLessons > 0 ? t('courses.continue') : t('courses.start')}
                            </Button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="text-3xl font-bold text-brand-gold">
                                    {course.price}€
                                </div>
                                <Button variant="primary" size="lg">
                                    {t('courses.buy', { price: course.price })}
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Course Content */}
                    <div>
                        <h2 className="text-2xl font-serif text-white mb-6">
                            {t('courses.course_content')}
                        </h2>

                        <div className="space-y-4">
                            {course.modules.map((module, index) => {
                                const isExpanded = expandedModules.has(module.id);
                                const moduleTitle = lang === 'fr' ? module.title_fr : module.title_en;

                                return (
                                    <div key={module.id} className="bg-brand-surface border border-white/10 rounded-lg overflow-hidden">
                                        {/* Module Header */}
                                        <button
                                            onClick={() => toggleModule(module.id)}
                                            className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="text-brand-gold font-bold">
                                                    {index + 1}
                                                </span>
                                                <span className="text-white font-medium">
                                                    {moduleTitle}
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    {t('courses.lessons_count', { count: module.lessons.length })}
                                                </span>
                                            </div>
                                            {isExpanded ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                        </button>

                                        {/* Lessons List */}
                                        {isExpanded && (
                                            <div className="border-t border-white/10">
                                                {module.lessons.map((lesson) => {
                                                    const lessonTitle = lang === 'fr' ? lesson.title_fr : lesson.title_en;
                                                    const canAccess = hasPurchased || lesson.is_free;

                                                    return (
                                                        <div
                                                            key={lesson.id}
                                                            className="p-4 border-b border-white/5 last:border-0 flex items-center justify-between hover:bg-white/5 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                {canAccess ? (
                                                                    <Play size={16} className="text-brand-gold" />
                                                                ) : (
                                                                    <Lock size={16} className="text-gray-500" />
                                                                )}
                                                                <span className={canAccess ? 'text-white' : 'text-gray-500'}>
                                                                    {lessonTitle}
                                                                </span>
                                                                {lesson.is_free && !hasPurchased && (
                                                                    <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">
                                                                        {t('courses.free_preview')}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {lesson.duration_minutes && (
                                                                <span className="text-gray-500 text-sm">
                                                                    {lesson.duration_minutes} min
                                                                </span>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
