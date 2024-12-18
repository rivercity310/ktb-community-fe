import React, { FC, useEffect, useRef } from 'react';
import { SignupRequest } from '@/entities/auth/types.ts';
import NicknameInput from '@/shared/ui/input/NicknameInput.tsx';
import PasswordInput from '@/shared/ui/input/PasswordInput.tsx';
import EmailInput from '@/shared/ui/input/EmailInput.tsx';
import Button from '@/shared/ui/button/Button.tsx';
import HelperText from '@/shared/ui/text/HelperText.tsx';
import FileInputAvatar from '@/features/auth/signup/ui/FileInputAvatar.tsx';
import useSignupStore from '@/features/auth/signup/store/useSignupStore.ts';
import { validateEmail, validateNickname, validatePassword } from '@/shared/utils/validator.ts';
import {
  handleEmailHelperText,
  handleNicknameHelperText,
  handlePasswordCheckHelperText,
  handlePasswordHelperText,
  handleProfileImgHelperText,
} from '@/shared/utils/helper.ts';

interface SignupFormProps {
  pendingRequest: boolean;
  onSubmit: (signupRequest: SignupRequest) => void;
}

const SignupForm: FC<SignupFormProps> = ({ pendingRequest, onSubmit }) => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nicknameRef = useRef<HTMLInputElement | null>(null);

  const {
    email,
    password,
    passwordCheck,
    nickname,
    profileImg,
    setRef,
    setField,
  } = useSignupStore();

  useEffect(() => {
    setRef("emailRef", emailRef);
    setRef("nicknameRef", nicknameRef);
  }, [setRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !nickname || !profileImg) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== passwordCheck) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    onSubmit({ email, password, nickname, profileImg });
  };

  const buttonDisabled =
    !(validateNickname(nickname) && validatePassword(password) && validateEmail(email) &&
      profileImg !== null && password === passwordCheck);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col items-start">
          <p className="font-bold text-left">* 프로필 사진</p>
          <HelperText text={handleProfileImgHelperText(profileImg)} />
          <FileInputAvatar
            className="m-auto mt-3"
            onImageChange={(file: File | null) => setField("profileImg", file)} />
        </div>

        <EmailInput
          ref={emailRef}
          label="* 이메일"
          helperText={handleEmailHelperText(email)}
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChange={e => setField("email", e.target.value)}
        />

        <PasswordInput
          label="* 비밀번호"
          helperText={handlePasswordHelperText(password)}
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={e => setField("password", e.target.value)}
        />

        <PasswordInput
          label="* 비밀번호 확인"
          helperText={handlePasswordCheckHelperText(password, passwordCheck)}
          name="passwordCheck"
          value={passwordCheck}
          placeholder="비밀번호를 한번 더 입력해주세요."
          onChange={e => setField("passwordCheck", e.target.value)}
        />

        <NicknameInput
          ref={nicknameRef}
          label="* 닉네임"
          helperText={handleNicknameHelperText(nickname)}
          placeholder="닉네임을 입력해주세요."
          name="nickname"
          value={nickname}
          onChange={e => setField("nickname", e.target.value)}
        />

        <div className="flex">
          <Button
            className="w-[200px] m-auto"
            name="회원가입"
            disabled={pendingRequest || buttonDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;