export interface LessonsType {
    lessons: any,
    all_lessons: any,
    courses: any[],
    group: any,
    lesson_id: number,
    create: Create,
}


export interface Create {
    video: string,
    content: string,
    title: string,
}