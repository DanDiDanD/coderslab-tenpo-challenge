import { isAxiosError } from '../../../utils/axios';

type ErrorMessageProps = {
  isError: boolean;
  error: Error | null;
};

export const ErrorMessage = ({ isError, error }: ErrorMessageProps) => {
  if (!isError || !error) return null;

  let message = 'Ocurrió un error. Por favor, intenta nuevamente.';

  if (isAxiosError(error)) {
    const status = error.response?.status;

    if (status === 400) message = 'Hubo un problema con tu solicitud.';
    else if (status === 401)
      message = 'El nombre de usuario y la contraseña son incorrectos.';
    else if (status === 403)
      message = 'No tienes permiso para realizar esta acción.';
    else if (typeof status === 'number' && status >= 500)
      message = 'Error del servidor. Intenta más tarde.';
    else message = error.message;
  }

  return (
    <p role="alert" className="text-red-700 text-center mt-1 mb-3">
      {message}
    </p>
  );
};
