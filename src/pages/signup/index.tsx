import SignupWidget from '@/widgets/auth/SignupWidget.tsx';
import HeaderWidget from '@/widgets/common/HeaderWidget.tsx';
import FooterWidget from '@/widgets/common/FooterWidget.tsx';
import DarkModeWidget from '@/widgets/common/DarkModeWidget.tsx';

const Signup = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-[#121212] text-black dark:text-gray-300 overflow-x-hidden grid gap-12 relative">
      <HeaderWidget />
      <SignupWidget />
      <FooterWidget />

      <DarkModeWidget
        className="fixed bottom-10 right-10"
      />
    </div>
  );
};

export default Signup;