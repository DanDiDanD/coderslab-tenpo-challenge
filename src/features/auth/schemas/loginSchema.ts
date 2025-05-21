import * as yup from 'yup';

import type { LoginFormValues } from '../types';

export const loginSchema: yup.ObjectSchema<LoginFormValues> = yup.object({
  email: yup.string().email('Correo inválido').required('Correo es requerido'),
  password: yup
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Contraseña es requerida'),
});
