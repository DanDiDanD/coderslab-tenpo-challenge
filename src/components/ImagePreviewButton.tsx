import type { ImgHTMLAttributes } from 'react';

type ImagePreviewButtonProps = {
  preview?: string;
  alt: string;
  onClick: () => void;
} & ImgHTMLAttributes<HTMLImageElement>;

export const ImagePreviewButton = ({
  preview,
  alt,
  onClick,
  ...props
}: ImagePreviewButtonProps) => {
  return (
    <button
      type="button"
      aria-label={`Ver imagen completa de ${alt}`}
      onClick={onClick}
      className={`block relative group cursor-pointer focus-visible:outline-none bg-transparent`}
    >
      <img src={preview} alt={alt} {...props} />
    </button>
  );
};
