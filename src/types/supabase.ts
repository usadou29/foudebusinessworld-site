export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            course_modules: {
                Row: {
                    course_id: string
                    created_at: string | null
                    description_en: string | null
                    description_fr: string | null
                    id: string
                    order_index: number
                    title_en: string
                    title_fr: string
                    updated_at: string | null
                }
                Insert: {
                    course_id: string
                    created_at?: string | null
                    description_en?: string | null
                    description_fr?: string | null
                    id?: string
                    order_index: number
                    title_en: string
                    title_fr: string
                    updated_at?: string | null
                }
                Update: {
                    course_id?: string
                    created_at?: string | null
                    description_en?: string | null
                    description_fr?: string | null
                    id?: string
                    order_index?: number
                    title_en?: string
                    title_fr?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "course_modules_course_id_fkey"
                        columns: ["course_id"]
                        isOneToOne: false
                        referencedRelation: "courses"
                        referencedColumns: ["id"]
                    },
                ]
            }
            courses: {
                Row: {
                    created_at: string | null
                    description_en: string | null
                    description_fr: string | null
                    duration_hours: number | null
                    id: string
                    is_published: boolean | null
                    level: string | null
                    price: number
                    slug: string
                    thumbnail_url: string | null
                    title_en: string
                    title_fr: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    description_en?: string | null
                    description_fr?: string | null
                    duration_hours?: number | null
                    id?: string
                    is_published?: boolean | null
                    level?: string | null
                    price: number
                    slug: string
                    thumbnail_url?: string | null
                    title_en: string
                    title_fr: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    description_en?: string | null
                    description_fr?: string | null
                    duration_hours?: number | null
                    id?: string
                    is_published?: boolean | null
                    level?: string | null
                    price?: number
                    slug?: string
                    thumbnail_url?: string | null
                    title_en?: string
                    title_fr?: string
                    updated_at?: string | null
                }
                Relationships: []
            }
            lessons: {
                Row: {
                    content_type: string
                    content_url: string | null
                    created_at: string | null
                    duration_minutes: number | null
                    id: string
                    is_free: boolean | null
                    module_id: string
                    order_index: number
                    title_en: string
                    title_fr: string
                    updated_at: string | null
                }
                Insert: {
                    content_type: string
                    content_url?: string | null
                    created_at?: string | null
                    duration_minutes?: number | null
                    id?: string
                    is_free?: boolean | null
                    module_id: string
                    order_index: number
                    title_en: string
                    title_fr: string
                    updated_at?: string | null
                }
                Update: {
                    content_type?: string
                    content_url?: string | null
                    created_at?: string | null
                    duration_minutes?: number | null
                    id?: string
                    is_free?: boolean | null
                    module_id?: string
                    order_index?: number
                    title_en?: string
                    title_fr?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "lessons_module_id_fkey"
                        columns: ["module_id"]
                        isOneToOne: false
                        referencedRelation: "course_modules"
                        referencedColumns: ["id"]
                    },
                ]
            }
            user_course_purchases: {
                Row: {
                    course_id: string
                    id: string
                    payment_status: string | null
                    purchased_at: string | null
                    stripe_payment_id: string | null
                    user_id: string
                }
                Insert: {
                    course_id: string
                    id?: string
                    payment_status?: string | null
                    purchased_at?: string | null
                    stripe_payment_id?: string | null
                    user_id: string
                }
                Update: {
                    course_id?: string
                    id?: string
                    payment_status?: string | null
                    purchased_at?: string | null
                    stripe_payment_id?: string | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_course_purchases_course_id_fkey"
                        columns: ["course_id"]
                        isOneToOne: false
                        referencedRelation: "courses"
                        referencedColumns: ["id"]
                    },
                ]
            }
            user_lesson_progress: {
                Row: {
                    completed: boolean | null
                    completed_at: string | null
                    id: string
                    last_accessed_at: string | null
                    lesson_id: string
                    user_id: string
                }
                Insert: {
                    completed?: boolean | null
                    completed_at?: string | null
                    id?: string
                    last_accessed_at?: string | null
                    lesson_id: string
                    user_id: string
                }
                Update: {
                    completed?: boolean | null
                    completed_at?: string | null
                    id?: string
                    last_accessed_at?: string | null
                    lesson_id?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_lesson_progress_lesson_id_fkey"
                        columns: ["lesson_id"]
                        isOneToOne: false
                        referencedRelation: "lessons"
                        referencedColumns: ["id"]
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
