import { Label, HelperText } from 'flowbite-react';
import type { ReactNode } from 'react';

type FormControlProps = {
  id: string;
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
  describedBy?: string;
};

export const FormControl = ({
  id,
  label,
  error,
  children,
  className = '',
  describedBy,
}: FormControlProps) => {
  const hasError = Boolean(error);

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && (
        <Label htmlFor={id} color={hasError ? 'failure' : undefined}>
          {label}
        </Label>
      )}
      {children}
      {error && (
        <HelperText id={describedBy} color="failure" className="mt-0">
          <span>{error}</span>
        </HelperText>
      )}
    </div>
  );
};
