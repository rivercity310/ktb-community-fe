import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from 'react';

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonProps = ReactButtonProps & {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ className: _className, name, ...buttonProps }) => {
  const className = ['btn btn-primary', _className].join(' ');

  return (
    <button {...buttonProps} className={className}>
      {name}
    </button>
  );
};

export default Button;