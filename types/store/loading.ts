export interface LoadingType {
    loadingTypes: string[];
    baseUrl: string;
    error: string;
    isLogin: boolean;
    isDrawer: boolean;
    middleware: boolean;
    pagination: Object;
    category_id: number[],
    subcategory_id: number[],
    drawer: boolean,
    logout: boolean,
    analytics_id: number,
    owner_id: number,
}