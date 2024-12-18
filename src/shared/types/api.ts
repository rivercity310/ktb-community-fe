export interface ApiResponse<T> {
  message: string | null;
  status: string;
  data: T;
}

export interface ErrorResponse {
  message: string;
  status: string;
}