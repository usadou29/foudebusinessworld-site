import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCourseBySlug, hasUserPurchasedCourse, markLessonComplete, updateLessonAccess, getLessonProgress } from '../lib/courses';
import { useAuth } from '../context/AuthContext';
import type { CourseWithModules, Lesson } from '../types/course';
import VideoPlayer from '../components/courses/VideoPlayer';
import Button from '../components/ui/Button';
import SEOHead from '../components/SEOHead';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function LessonViewer() {
    const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
    const { t, i18n } = useTranslation('common');
    const { user } = useAuth();
    const navigate = useNavigate();
    const lang = i18n.language || 'fr';

    const [course, setCourse] = useState<CourseWithModules | null>(null);
    const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (slug && lessonId && user) {
            loadCourseAndLesson();
        }
    }, [slug, lessonId, user]);

    const loadCourseAndLesson = async () => {
        try {
            const courseData = await getCourseBySlug(slug!);
            setCourse(courseData);

            if (!courseData || !user) return;

            // Check if user purchased the course
            const purchased = await hasUserPurchasedCourse(courseData.id, user.id);

            // Find the current lesson
            let foundLesson: Lesson | null = null;
            for (const module of courseData.modules) {
                const lesson = module.lessons.find(l => l.id === lessonId);
                if (lesson) {
                    foundLesson = lesson;
                    break;
                }
            }

            setCurrentLesson(foundLesson);

            // Check if user can access this lesson
            if (foundLesson && !foundLesson.is_free && !purchased) {
                navigate(`/${lang}/courses/${slug}`);
                return;
            }

            // Update last accessed time
            if (foundLesson) {
                await updateLessonAccess(foundLesson.id, user.id);

                // Check if already completed
                const progress = await getLessonProgress(foundLesson.id, user.id);
                setIsCompleted(progress?.completed || false);
            }
        } catch (error) {
            console.error('Error loading lesson:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkComplete = async () => {
        if (!currentLesson || !user) return;

        try {
            await markLessonComplete(currentLesson.id, user.id);
            setIsCompleted(true);
        } catch (error) {
            console.error('Error marking lesson complete:', error);
        }
    };

    const handleVideoComplete = () => {
        handleMarkComplete();
    };

    const navigateToLesson = (lessonId: string) => {
        navigate(`/${lang}/courses/${slug}/lessons/${lessonId}`);
    };

    const getAdjacentLessons = () => {
        if (!course || !currentLesson) return { prev: null, next: null };

        const allLessons: Lesson[] = [];
        course.modules.forEach(module => {
            allLessons.push(...module.lessons);
        });

        const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);

        return {
            prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
            next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
        };
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-gray-400">Loading...</div>
            </div>
        );
    }

    if (!course || !currentLesson) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-gray-400">Lesson not found</div>
            </div>
        );
    }

    const lessonTitle = lang === 'fr' ? currentLesson.title_fr : currentLesson.title_en;
    const { prev, next } = getAdjacentLessons();

    return (
        <>
            <SEOHead title={lessonTitle} />

            <div className="min-h-screen bg-black">
                {/* Header */}
                <div className="border-b border-white/10 bg-brand-surface">
                    <div className="container mx-auto px-4 py-4">
                        <Link
                            to={`/${lang}/courses/${slug}`}
                            className="text-brand-gold hover:underline inline-flex items-center gap-2"
                        >
                            <ChevronLeft size={20} />
                            {lang === 'fr' ? course.title_fr : course.title_en}
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Video Player */}
                        <div className="mb-8">
                            {currentLesson.content_url ? (
                                <VideoPlayer
                                    url={currentLesson.content_url}
                                    onComplete={handleVideoComplete}
                                />
                            ) : (
                                <div className="aspect-video bg-brand-surface border border-white/10 rounded-lg flex items-center justify-center">
                                    <p className="text-gray-400">No video available</p>
                                </div>
                            )}
                        </div>

                        {/* Lesson Info */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-serif text-white mb-4">
                                {lessonTitle}
                            </h1>

                            {!isCompleted && (
                                <Button onClick={handleMarkComplete} variant="primary">
                                    <Check size={20} />
                                    {t('courses.mark_complete')}
                                </Button>
                            )}

                            {isCompleted && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                                    <Check size={20} />
                                    {t('courses.completed')}
                                </div>
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between">
                            {prev ? (
                                <button
                                    onClick={() => navigateToLesson(prev.id)}
                                    className="flex items-center gap-2 px-4 py-2 bg-brand-surface border border-white/10 rounded-lg hover:border-brand-gold transition-colors text-white"
                                >
                                    <ChevronLeft size={20} />
                                    {t('courses.continue')}
                                </button>
                            ) : (
                                <div />
                            )}

                            {next ? (
                                <button
                                    onClick={() => navigateToLesson(next.id)}
                                    className="flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-dark rounded-lg hover:bg-brand-gold-light transition-colors font-medium"
                                >
                                    {t('courses.continue')}
                                    <ChevronRight size={20} />
                                </button>
                            ) : (
                                <Link
                                    to={`/${lang}/courses/${slug}`}
                                    className="px-4 py-2 bg-brand-surface border border-white/10 rounded-lg hover:border-brand-gold transition-colors text-white"
                                >
                                    {t('courses.course_content')}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
