import useSignup from '@/features/auth/signup/hooks/useSignup.ts';
import SignupForm from '@/features/auth/signup/ui/SignupForm.tsx';
import { SignupRequest } from '@/entities/auth/types.ts';
import { AxiosError, HttpStatusCode } from 'axios';
import { ErrorResponse } from '@/shared/types/api.ts';
import { ResponseText } from '@/shared/constants/responseText.ts';
import useSignupStore from '@/features/auth/signup/store/useSignupStore.ts';
import { useNavigate } from 'react-router-dom';

const SignupFeature = () => {
  const navigate = useNavigate();
  const { mutateSignup, isSignupPending } = useSignup();
  const { emailRef, nicknameRef } = useSignupStore();

  const handleSignup = (signupRequest: SignupRequest) => {
    const { email, password, nickname, profileImg } = signupRequest;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('nickname', nickname);
    formData.append('profileImg', profileImg);

    mutateSignup(formData, {
      onSuccess: () => {
        navigate("/auth/login");
      },
      onError: (err: AxiosError<ErrorResponse, null>) => {
        if (err.status === HttpStatusCode.BadRequest) {
          const errData = err.response?.data;
          if (!errData) return;

          const errStatus = errData.status;

          if (errStatus === ResponseText.EMAIL_DUPLICATED) {
            emailRef?.current?.focus();
          }

          else if (errStatus === ResponseText.NICKNAME_DUPLICATED) {
            nicknameRef?.current?.focus();
          }
        }

        console.error(err);
      },
    });
  };

  return (
    <div className="min-w-[600px]">
      <SignupForm
        onSubmit={handleSignup}
        pendingRequest={isSignupPending}
      />
    </div>
  );
};

export default SignupFeature;