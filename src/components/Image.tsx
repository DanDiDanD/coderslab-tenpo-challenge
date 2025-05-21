import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { useState, type ImgHTMLAttributes } from 'react';

import { ImagePreviewButton } from './ImagePreviewButton';

type ImageProps = {
  preview?: string;
  alt: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ src, alt, preview = '', ...props }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!preview) return <img alt={alt} {...props} />;

  return (
    <>
      <ImagePreviewButton
        preview={preview}
        alt={alt}
        onClick={() => setIsOpen(true)}
      />

      <Modal
        dismissible
        show={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        popup
        aria-labelledby="modal-image-title"
      >
        <ModalHeader>
          <span id="modal-image-title" className="sr-only">
            Vista ampliada de la imagen {alt}
          </span>
        </ModalHeader>
        <ModalBody>
          <img
            alt={alt}
            src={src}
            {...props}
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
        </ModalBody>
      </Modal>
    </>
  );
};
