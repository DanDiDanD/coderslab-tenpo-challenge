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
    className="relative group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary p-0 border-0 bg-transparent"
  >
    <img src={preview} alt={alt} {...props} />
    <div className="rounded-lg absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <span className="text-white text-sm md:text-lg font-medium">
        🔍 Ampliar imagen
      </span>
    </div>
  </button>
);
