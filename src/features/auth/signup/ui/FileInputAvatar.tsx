import React, { FC, useEffect, useRef, useState } from 'react';
import Avatar, { AvatarProps } from '@/shared/ui/avatar/Avatar';
import Input from '@/shared/ui/input/Input.tsx';
import { validateProfileImg } from '@/shared/utils/validator.ts';
import useSignupStore from '@/features/auth/signup/store/useSignupStore.ts';

type ButtonAvatarProps = AvatarProps & {
  onImageChange: (file: File | null) => void;
  className?: string
};

const FileInputAvatar: FC<ButtonAvatarProps> = (props) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { onImageChange, className: _className } = props;
  const { setRef } = useSignupStore();

  useEffect(() => {
    setRef('fileInputRef', fileInputRef);
  }, [setRef]);

  // Avatar 클릭되면 file input 트리거
  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file && validateProfileImg(file)) {
      const objectURL = URL.createObjectURL(file);
      setImageUrl(objectURL);
      onImageChange(file);
    } else {
      alert('유효하지 않은 파일입니다.');
      onImageChange(null);
    }
  };

  return (
    <div className={_className}>
      <Avatar
        size="10rem"
        src={imageUrl}
        className="hover:opacity-75"
        style={{
          ...props.style,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          cursor: 'pointer',
        }}
        onClick={handleButtonClick}
      />
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInputAvatar;