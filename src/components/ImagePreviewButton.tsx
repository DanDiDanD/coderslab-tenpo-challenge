import type { ImgHTMLAttributes } from 'react';

type PreviewProps = {
  preview?: string;
  alt: string;
  onClick: () => void;
} & ImgHTMLAttributes<HTMLImageElement>;

export const ImagePreviewButton = ({
  preview,
  alt,
  onClick,
  ...props
}: PreviewProps) => (
  <button
    type="button"
    aria-label={`Ver imagen completa de ${alt}`}
    onClick={onClick}
    className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary p-0 border-0 bg-transparent"
  >
    <img
      src={preview}
      alt={alt}
      {...props}
      className="transition-transform duration-300 ease-out group-hover:rotate-[1deg] group-hover:-translate-y-1 "
    />
  </button>
);
