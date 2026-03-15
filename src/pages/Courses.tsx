import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCourses } from '../lib/courses';
import type { Course } from '../types/course';
import CourseCard from '../components/courses/CourseCard';
import Container from '../components/ui/Container';
import SEOHead from '../components/SEOHead';
import { Search } from 'lucide-react';

export default function Courses() {
    const { t } = useTranslation('common');
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [levelFilter, setLevelFilter] = useState<string>('all');

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const data = await getCourses();
            setCourses(data);
        } catch (error) {
            console.error('Error loading courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = searchQuery === '' ||
            course.title_fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.title_en.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLevel = levelFilter === 'all' || course.level === levelFilter;

        return matchesSearch && matchesLevel;
    });

    return (
        <>
            <SEOHead title={t('courses.title')} />

            <div className="min-h-screen pt-32 pb-16 bg-black">
                <Container>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                            {t('courses.all_courses')}
                        </h1>
                    </div>

                    {/* Filters */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder={t('courses.search_placeholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                            />
                        </div>

                        {/* Level Filter */}
                        <select
                            value={levelFilter}
                            onChange={(e) => setLevelFilter(e.target.value)}
                            className="px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors"
                        >
                            <option value="all">{t('courses.filter_by_level')}</option>
                            <option value="beginner">{t('courses.level.beginner')}</option>
                            <option value="intermediate">{t('courses.level.intermediate')}</option>
                            <option value="advanced">{t('courses.level.advanced')}</option>
                        </select>
                    </div>

                    {/* Course Grid */}
                    {loading ? (
                        <div className="text-center text-gray-400 py-12">
                            Loading...
                        </div>
                    ) : filteredCourses.length === 0 ? (
                        <div className="text-center text-gray-400 py-12">
                            {t('courses.no_courses')}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
}
