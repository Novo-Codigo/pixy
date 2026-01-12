import USER_CONSTANTS from "../../user/utils/constants";
import type { LoginResponse, AuthPayload } from "../types/api.types";
import { api } from "./api";

export const authService = {
    login: async (credentials: any) => {
        const { data } = await api.post<LoginResponse>(
            "/login/",
            credentials
        );

        if (data.access) {
            localStorage.setItem(USER_CONSTANTS.access, data.access);
            localStorage.setItem(USER_CONSTANTS.refresh, data.refresh);
        }

        window.location.href = "/";
        return data;
    },
    register: async (payload: AuthPayload) => {
        const { data } = await api.post(
            "/users/",
            payload
        );

        window.location.href = "/registration";
        return data;
    },
    logout: () => {
        localStorage.clear();
        window.location.href = "/registration";
    },
    getProfile: async () => {
        const { data } = await api.get("/users/me");

        return data;
    }
}
