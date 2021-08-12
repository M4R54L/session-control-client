import React from 'react';
import joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';

import classes from './Login.module.scss';
import authApi from '../apis/auth.api';

const loginSchema = joi.object({
  username: joi.string().required().min(3).messages({
    'string.empty': 'El usuario es requerido',
    'string.min': 'El usuario debe tener más de 3 caracteres',
  }),
  password: joi.string().required().min(5).max(15).messages({
    'string.empty': 'La contraseña es requerida',
    'string.min': 'La contraseña debe estar entre 5 y 15',
    'string.max': 'La contraseña debe estar entre 5 y 15',
  }),
});

function Login() {
  const [axiosError, setaxiosError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    mode: 'onTouched',
    defaultValues: { username: '', password: '' },
    resolver: joiResolver(loginSchema),
  });

  const onSubmit = async () => {
    console.log(getValues());
    try {
      var res = await authApi.post('/', getValues());
      console.log(res);
      setaxiosError('');
      reset();
    } catch (error) {
      setaxiosError(error.response.data.errors);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img></img>
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formGroup}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingrese su usuario"
            {...register('username')}
            className={errors?.username && classes.errorInput}
          />
          {errors?.username && (
            <p className={classes.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            {...register('password')}
            className={errors?.password && classes.errorInput}
          />
          {errors?.password && (
            <p className={classes.error}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={classes.submit}>
          Ingresar
        </button>
        <p className={classes.error}>{axiosError}</p>
      </form>
    </div>
  );
}

export default Login;
