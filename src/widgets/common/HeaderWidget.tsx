import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENV } from '@/shared/config/env.ts';
import Avatar from '@/shared/ui/avatar/Avatar.tsx';
import { IoMdArrowRoundBack } from 'react-icons/io';

interface HeaderWidgetProps {
  showBackButton?: boolean;
  showUserAvatar?: boolean;
}

const HeaderWidget: FC<HeaderWidgetProps> = ({ showBackButton = false, showUserAvatar = false}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header
      className="border-b-2 border-b-gray-300 dark:border-b-gray-700 flex flex-row items-center justify-center py-3 gap-40 w-screen">
      {/* BACK 버튼 */}
      {showBackButton && (
        <IoMdArrowRoundBack
          className='text-3xl font-medium cursor-pointer'
          onClick={handleBackClick}
        >
          BACK
        </IoMdArrowRoundBack>
      )}

      {/* LOGO 텍스트 */}
      <h1
        className="text-2xl font-bold cursor-pointer hover:text-black dark:hover:text-white whitespace-nowrap"
        onClick={handleHomeClick}
      >
        {ENV.LOGO_TEXT}
      </h1>

      {/* 아바타 */}
      {showUserAvatar && (
        <Avatar
          size="46px"
        />
      )}

    </header>

  );
};

export default HeaderWidget;