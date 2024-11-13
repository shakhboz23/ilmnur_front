export interface GroupsType {
    groups: any[],
    // users: any[],
    group_id: number,
    image: string,
}

export interface GroupsCreate {
    title: string,
    description: string,
    file: any,
}