export interface LessonsType {
    lessons: any,
    all_lessons: any,
    courses: any[],
    lesson_id: number,
    create: Create,
}


interface Create {
    video: string,
    content: string,
    title: string,
}