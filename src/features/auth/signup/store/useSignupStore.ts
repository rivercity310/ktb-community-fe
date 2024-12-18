import { create } from 'zustand';
import { SignupRequest } from '@/entities/auth/types.ts';
import { RefObject } from 'react';

type SignupProps = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  profileImg: File | null;
}

type SignupHandleState = {
  setField: (field: keyof SignupRequest | 'passwordCheck', value: string | File | null) => void;
  resetFields: () => void;
}

type SignupRefState = {
  emailRef: RefObject<HTMLInputElement> | null;
  nicknameRef: RefObject<HTMLInputElement> | null;
  fileInputRef: RefObject<HTMLInputElement> | null;
  setRef: (name: string, ref: RefObject<HTMLInputElement> | null) => void;
}

type SignupState = SignupProps & SignupHandleState & SignupRefState;

const useSignupStore = create<SignupState>((set) => ({
  email: '',
  password: '',
  passwordCheck: '',
  nickname: '',
  profileImg: null,
  emailRef: null,
  nicknameRef: null,
  fileInputRef: null,
  setRef: (name: string, ref: RefObject<HTMLInputElement> | null) => set((state) => ({ ...state, [name]: ref })),
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  resetFields: () => set({ email: '', password: '', passwordCheck: '', nickname: '', profileImg: null }),
}));

export default useSignupStore;