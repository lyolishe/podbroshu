import {QueryClient} from "@tanstack/react-query";
import {ApiClient} from "@/api/webApi/apiClient";

export const apiClient = new ApiClient(process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3001');

export const queryClient = new QueryClient();