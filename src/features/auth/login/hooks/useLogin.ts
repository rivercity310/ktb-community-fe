import { useMutation } from '@tanstack/react-query';
import { login } from '@/entities/auth/api.ts';
import { useAuthStore } from '@/entities/auth/model.ts';

const useLogin = () => {
  const { setAuth, clearAuth } = useAuthStore();

  const { isPending: isLoginPending, mutate: mutateLogin } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      setAuth(data.data);
      alert('Login Success');
    },
    onError: () => {
      clearAuth();
      alert('Login Failed');
    },
  });

  return {
    isLoginPending,
    mutateLogin
  }
};

export default useLogin;