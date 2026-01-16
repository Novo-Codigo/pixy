import type { User } from '../../user/types/user.types';
import USER_CONSTANTS from '../../user/utils/constants';
import type { LoginResponse, AuthPayload } from '../types/api.types';
import { api } from './api';

export const authService = {
    login: async (credentials: any) => {
        localStorage.clear();
        try {
            const { data } = await api.post<LoginResponse>('/login/', credentials);

            localStorage.setItem(USER_CONSTANTS.access, data.access);
            localStorage.setItem(USER_CONSTANTS.refresh, data.refresh);

            return data;
        } catch (error) {
            throw error;
        }
    },
    register: async (payload: AuthPayload) => {
        const { data } = await api.post('/users/', payload);

        return data;
    },
    logout: () => {
        localStorage.clear();
    },
    getProfile: async (): Promise<User> => {
        try {
            const { data } = await api.get<User>('/users/me/');

            localStorage.setItem(USER_CONSTANTS.name, data.name);
            localStorage.setItem(USER_CONSTANTS.email, data.email);
            localStorage.setItem(USER_CONSTANTS.last_name, data.last_name);
            if (data.date_joined) localStorage.setItem(USER_CONSTANTS.date_joined, data.date_joined);
            if (data.updated_at) localStorage.setItem(USER_CONSTANTS.updated_at, data.updated_at);

            return data;
        } catch (error) {
            const name = localStorage.getItem(USER_CONSTANTS.name);
            const email = localStorage.getItem(USER_CONSTANTS.email);
            const last_name = localStorage.getItem(USER_CONSTANTS.last_name);
            const date_joined = localStorage.getItem(USER_CONSTANTS.date_joined) ?? "";
            const updated_at = localStorage.getItem(USER_CONSTANTS.updated_at) ?? "";

            if (name) return {
                name,
                last_name,
                email,
                date_joined,
                updated_at
            } as User;

            throw error;
        }
    },
};
