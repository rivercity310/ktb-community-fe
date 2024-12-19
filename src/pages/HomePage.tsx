import HeaderWidget from '@/widgets/common/HeaderWidget.tsx';
import FooterWidget from '@/widgets/common/FooterWidget.tsx';
import DarkModeWidget from '@/widgets/common/DarkModeWidget.tsx';
import HomeWidget from '@/widgets/home/HomeWidget.tsx';

const HomePage = () => {
  return (
    <div className="bg-gray-101 dark:bg-[#121212] text-black dark:text-gray-300">
      <HeaderWidget />
      <HomeWidget />
      <FooterWidget />
      <DarkModeWidget className="fixed bottom-10 right-10" />
    </div>
  );
};

export default HomePage;