export interface ApiResponse<T> {
  message: string | null;
  status: string;
  data: T;
}
