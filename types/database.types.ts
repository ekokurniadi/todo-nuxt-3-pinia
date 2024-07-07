export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            todo_table: {
                Row: {
                    status: boolean | null
                    created_at: string | null
                    id: number
                    task: string | null
                }
                Insert: {
                    status?: boolean | null
                    created_at?: string | null
                    id?: number
                    task?: string | null

                }
                Update: {
                    status?: boolean | null
                    created_at?: string | null
                    id?: number
                    task?: string | null
                }
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