import axios from "axios";
import CORE_CONSTANTS from "../utils/constants";
import USER_CONSTANTS from "../../user/utils/constants";
import { authService } from "./auth-services";

export const api = axios.create({
    baseURL: CORE_CONSTANTS.baseURL,
});

export const publicApi = axios.create({
    baseURL: CORE_CONSTANTS.baseURL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(USER_CONSTANTS.access);

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refresh = localStorage.getItem(USER_CONSTANTS.refresh);

                if (!refresh) throw new Error("No refresh token!");

                const { data } = await axios.post(`${CORE_CONSTANTS.baseURL}/refresh/`, {
                    refresh: refresh
                })

                const newAccessToken = data.access;

                localStorage.setItem(USER_CONSTANTS.access, newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return api(originalRequest);
            } catch (refreshError) {
                authService.logout();

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
