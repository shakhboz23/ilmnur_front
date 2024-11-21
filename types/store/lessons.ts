export interface LessonsType {
    lessons: any[],
    courses: any[],
    lesson_id: number,
    create: Create,
}


interface Create {
    video: string,
}