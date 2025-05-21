import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { useState, type ImgHTMLAttributes } from 'react';

import { ImagePreviewButton } from './ImagePreviewButton';

type ImageProps = {
  preview?: string;
  alt: string;
  previewClassName?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({
  alt,
  previewClassName = '',
  preview = '',
  ...props
}: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!preview) return <img alt={alt} {...props} />;

  return (
    <>
      <ImagePreviewButton
        preview={preview}
        alt={`Vista previa de ${alt}`}
        onClick={() => setIsOpen(true)}
        className={previewClassName}
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
          <img alt={alt} loading="eager" fetchPriority="high" {...props} />
        </ModalBody>
      </Modal>
    </>
  );
};
