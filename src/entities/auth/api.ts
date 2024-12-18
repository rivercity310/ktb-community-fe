import { HttpStatusCode } from 'axios';
import axiosInstance from '@/shared/config/axios.ts';
import { ApiResponse } from '@/shared/types/api.ts';
import { LoginRequest, LoginResponse, SignupRequest } from '@/entities/auth/types.ts';

export const login = async (loginRequest: LoginRequest) => {
  const res = await axiosInstance.post<ApiResponse<LoginResponse>>('/auth/login', loginRequest);
  if (res.status === HttpStatusCode.Ok) return Promise.resolve(res);
  else return Promise.reject();
};

export const logout = async () => {
  const res = await axiosInstance.post<ApiResponse<null>>('/auth/logout');
  if (res.status === HttpStatusCode.Ok) return Promise.resolve(res);
  else return Promise.reject();
};

export const signup = async (signupRequest: SignupRequest) => {
  const res = await axiosInstance.post<ApiResponse<null>>('/auth/signup', signupRequest);
  if (res.status === HttpStatusCode.Ok) return Promise.resolve(res);
  else return Promise.reject();
};