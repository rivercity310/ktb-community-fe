import useLogin from '@/features/auth/login/hooks/useLogin.ts';
import LoginForm from '@/features/auth/login/ui/LoginForm.tsx';

const LoginFeature = () => {
  const { mutateLogin, isLoginPending } = useLogin();

  const handleLogin = (email: string, password: string) => {
    mutateLogin({ email, password });
  }

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
      {isLoginPending ? <p>Pending...</p> : <p>Done</p>}
    </div>
  )
}

export default LoginFeature;