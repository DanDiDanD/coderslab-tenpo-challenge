import { Button as FlowbiteButton, Spinner } from 'flowbite-react';
import type { ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

type ButtonProps = FlowbiteButtonProps & {
  isLoading?: boolean;
  loadingText?: string;
};

export const Button = ({
  isLoading = false,
  loadingText = 'Cargando...',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <FlowbiteButton
      {...props}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" className="mr-2" />
          {loadingText}
          <span className="sr-only" aria-live="polite" role="status">
            {loadingText}
          </span>
        </>
      ) : (
        children
      )}
    </FlowbiteButton>
  );
};
