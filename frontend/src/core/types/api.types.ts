export interface LoginResponse {
    access: string;
    refresh: string;
}

export interface AuthPayload {
    email: string;
    name?: string;
    last_name?: string;
    password: string;
}
