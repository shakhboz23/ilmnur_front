export interface GroupsType {
    groups: any[],
    group: any,
    // users: any[],
    group_id: number,
    image: string,
}

export interface GroupsCreate {
    title: string,
    description: string,
    file: any,
    group_type: string,
}