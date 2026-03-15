import type { Tables } from './supabase';

// Course types
export type Course = Tables<'courses'>;
export type CourseModule = Tables<'course_modules'>;
export type Lesson = Tables<'lessons'>;
export type UserCoursePurchase = Tables<'user_course_purchases'>;
export type UserLessonProgress = Tables<'user_lesson_progress'>;

// Extended types with relations
export interface CourseWithModules extends Course {
    modules: CourseModuleWithLessons[];
}

export interface CourseModuleWithLessons extends CourseModule {
    lessons: Lesson[];
}

export interface LessonWithProgress extends Lesson {
    progress?: UserLessonProgress;
}

export interface CourseWithProgress extends Course {
    purchased: boolean;
    progress: {
        completedLessons: number;
        totalLessons: number;
        percentage: number;
    };
}

// Content types
export type ContentType = 'video' | 'article' | 'quiz';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type PaymentStatus = 'completed' | 'refunded';
