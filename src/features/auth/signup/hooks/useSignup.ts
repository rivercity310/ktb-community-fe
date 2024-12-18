import { useMutation } from '@tanstack/react-query';
import { signup } from '@/entities/auth/api.ts';
import { SignupResponse } from '@/entities/auth/types.ts';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/shared/types/api.ts';


const useSignup = () => {
  const mutation = useMutation<SignupResponse, AxiosError<ErrorResponse>, FormData>({
    mutationFn: signup,
  });

  return {
    mutateSignup: mutation.mutate,
    isSignupPending: mutation.isPending,
  };
};

export default useSignup;
