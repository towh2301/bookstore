import {CreateAxiosInstance} from "@/config/axios/createAxiosInstance.ts";

export const useHttpPublicRequest = (baseURL: string) => CreateAxiosInstance({
	baseURL: baseURL
});
