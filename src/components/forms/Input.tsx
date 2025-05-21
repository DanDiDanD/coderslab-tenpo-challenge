import { TextInput } from 'flowbite-react';
import type { TextInputProps } from 'flowbite-react';
import type { FieldError } from 'react-hook-form';

import { FormControl } from './FormControl';

type InputProps = TextInputProps & {
  label: string;
  error?: FieldError;
};

export const Input = ({ id, label, error, color, ...props }: InputProps) => {
  const hasError = Boolean(error);
  const effectiveColor = hasError ? 'failure' : color;
  const describedById = hasError ? `${id}-error` : undefined;

  return (
    <FormControl
      id={id!}
      label={label}
      error={error?.message}
      describedBy={describedById}
    >
      <TextInput
        id={id}
        {...props}
        color={effectiveColor}
        aria-invalid={hasError}
        aria-describedby={describedById}
      />
    </FormControl>
  );
};
