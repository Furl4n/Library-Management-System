import { api } from "../service/api";
import type { User } from "../interfaces/User";
import { useQuery } from '@tanstack/react-query';

const fetchData = async(): Promise<User> => {
    const response = await api.get<User>("/users");
    return response.data;
}

export function useUserData() {

    const token = localStorage.getItem("@Auth:token");

    return useQuery({
        queryFn: fetchData,
        enabled: !!token,
        queryKey: ['user-data']
    })
}