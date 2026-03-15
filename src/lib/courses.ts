import { supabase } from './supabase';
import type { Course, CourseWithModules, UserLessonProgress } from '../types/course';

/**
 * Fetch all published courses
 */
export async function getCourses(): Promise<Course[]> {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
}

/**
 * Fetch a single course by slug with all modules and lessons
 */
export async function getCourseBySlug(slug: string): Promise<CourseWithModules | null> {
    const { data: course, error: courseError } = await supabase
        .from('courses')
        .select(`
            *,
            modules:course_modules(
                *,
                lessons(*)
            )
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (courseError) throw courseError;
    if (!course) return null;

    // Transform the data to match our type
    const courseWithModules: CourseWithModules = {
        ...course,
        modules: (course.modules || [])
            .map((module: any) => ({
                ...module,
                lessons: (module.lessons || []).sort((a: any, b: any) => a.order_index - b.order_index)
            }))
            .sort((a: any, b: any) => a.order_index - b.order_index)
    };

    return courseWithModules;
}

/**
 * Check if user has purchased a course
 */
export async function hasUserPurchasedCourse(courseId: string, userId: string): Promise<boolean> {
    const { data, error } = await supabase
        .from('user_course_purchases')
        .select('id')
        .eq('course_id', courseId)
        .eq('user_id', userId)
        .eq('payment_status', 'completed')
        .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
    return !!data;
}

/**
 * Get user's progress for a course
 */
export async function getUserCourseProgress(courseId: string, userId: string) {
    // Get all lessons in the course
    const { data: modules, error: modulesError } = await supabase
        .from('course_modules')
        .select('id, lessons(id)')
        .eq('course_id', courseId);

    if (modulesError) throw modulesError;

    const allLessonIds = modules?.flatMap(m => (m.lessons as any[]).map(l => l.id)) || [];

    // Get user's progress
    const { data: progress, error: progressError } = await supabase
        .from('user_lesson_progress')
        .select('*')
        .eq('user_id', userId)
        .in('lesson_id', allLessonIds);

    if (progressError) throw progressError;

    const completedLessons = progress?.filter(p => p.completed).length || 0;
    const totalLessons = allLessonIds.length;

    return {
        completedLessons,
        totalLessons,
        percentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
        progress: progress || []
    };
}

/**
 * Mark a lesson as complete
 */
export async function markLessonComplete(lessonId: string, userId: string): Promise<void> {
    const { error } = await supabase
        .from('user_lesson_progress')
        .upsert({
            user_id: userId,
            lesson_id: lessonId,
            completed: true,
            completed_at: new Date().toISOString(),
            last_accessed_at: new Date().toISOString()
        }, {
            onConflict: 'user_id,lesson_id'
        });

    if (error) throw error;
}

/**
 * Update last accessed time for a lesson
 */
export async function updateLessonAccess(lessonId: string, userId: string): Promise<void> {
    const { error } = await supabase
        .from('user_lesson_progress')
        .upsert({
            user_id: userId,
            lesson_id: lessonId,
            last_accessed_at: new Date().toISOString()
        }, {
            onConflict: 'user_id,lesson_id'
        });

    if (error) throw error;
}

/**
 * Get lesson progress for a specific lesson
 */
export async function getLessonProgress(lessonId: string, userId: string): Promise<UserLessonProgress | null> {
    const { data, error } = await supabase
        .from('user_lesson_progress')
        .select('*')
        .eq('lesson_id', lessonId)
        .eq('user_id', userId)
        .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
