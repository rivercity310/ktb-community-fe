import SignupFeature from '@/features/auth/signup';
import { Link } from 'react-router-dom';

const SignupWidget = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-16">
        <h1 className="font-bold text-3xl">SIGN-UP</h1>
        <p>회원이 되어 커뮤니티에 합류하세요.</p>
      </div>
      <SignupFeature />
      <Link className="mt-4 text-[14px] underline underline-offset-2" to="/auth/login">로그인하러 가기</Link>
    </div>
  );
};

export default SignupWidget;