import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export const CreateAxiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
	return axios.create(config);
}