import { Button, type ButtonProps } from './Button';

export const NavButton = ({ className, ...props }: ButtonProps) => {
  return (
    <li>
      <Button
        className={`cursor-pointer bg-transparent text-md border-0 border-b-1 rounded-none justify-start px-3 py-2 w-full md:p-0 md:border-0 md:hover:bg-transparent md:h-fit md:text-sm md:hover:text-primary-700 ${className}`}
        {...props}
      />
    </li>
  );
};
