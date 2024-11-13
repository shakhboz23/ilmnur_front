export interface LessonsType {
    lessons: any[],
    lesson_id: number,
    create: Create,
}


interface Create {
    video: string,
}