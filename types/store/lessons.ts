export interface LessonsType {
    lessons: any,
    courses: any[],
    lesson_id: number,
    create: Create,
    comment: Object,
}


interface Create {
    video: string,
    content: string,
    title: string,
}