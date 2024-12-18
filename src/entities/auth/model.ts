import { create } from 'zustand';
import { LoginResponse } from '@/entities/auth/types.ts';

interface AuthState {
  user: LoginResponse | null;
  isAuthenticated: boolean;
  setAuth: (data: LoginResponse) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  // 로그인 성공 시 상태 업데이트
  setAuth: (data: LoginResponse) => {
    set({ user: data, isAuthenticated: true });
  },

  clearAuth: () => {
    set({ user: null, isAuthenticated: false });
  },
}));