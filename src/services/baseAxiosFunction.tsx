import axios, { AxiosResponse } from "axios";

type ApiResponse<T> = T;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

axios.defaults.baseURL = "http://localhost:4000";

const api = {
  get: async <T,>(
    url: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> => {
    return apiCalls<T>("GET", url, undefined, headers);
  },
  post: async <T,>(
    url: string,
    data: unknown,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> => {
    return apiCalls<T>("POST", url, data, headers);
  },
  put: async <T,>(
    url: string,
    data: unknown,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> => {
    return apiCalls<T>("PUT", url, data, headers);
  },
  delete: async <T,>(
    url: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> => {
    return apiCalls<T>("DELETE", url, undefined, headers);
  },
};
async function apiCalls<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  headers: Record<string, string> = {}
): Promise<ApiResponse<T>> {
  try {
    const res: AxiosResponse<T> = await axios({
      headers: {
        Authorization: localStorage.token && `Bearer ${localStorage.token}`,
        ...headers,
      },
      method,
      url,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
}

export default api;

// interface LoginResponse {
//   token: string;
// }
// const userData = { username: "gery", password: "f7123hu" };
// const loginToken = await api.post<LoginResponse>(`users/login`, userData);
// console.log(loginToken);
