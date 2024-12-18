import SignupFeature from '@/features/auth/signup';

const SignupWidget = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">회원가입</h1>
      <p>커뮤니티에 합류해보세요.</p>
      <SignupFeature />
    </div>
  );
};

export default SignupWidget;