import React from 'react';
import PropsType from 'prop-types';
import { Link } from 'react-router-dom';
import TheLockSvg from '@/assets/images/svg/the-lock.svg';

function SignInForm({
  onSubmit,
  register,
  formErrors,
  apiError,
  isSubmitting,
}) {
  return (
    <form className="mt-8" onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          ref={register}
        />
        {formErrors?.email && (
          <p className="text-red-500 text-xs italic mt-1">
            {formErrors.email.message}
          </p>
        )}
      </div>
      <div className="col-span-6 sm:col-span-3 mt-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          ref={register}
        />
        {formErrors?.password && (
          <p className="text-red-500 text-xs italic mt-1">
            {formErrors.password.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            ref={register}
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm leading-5 text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm leading-5">
          <Link
            to="/auth/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          disabled={isSubmitting}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <img
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
              src={TheLockSvg}
              alt="the-lock"
            />
          </span>
          {isSubmitting ? 'Please wait' : 'Sign in'}
        </button>
      </div>

      {apiError && (
        <p className="text-red-500 text-xs italic mt-1">{apiError}</p>
      )}
    </form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropsType.func.isRequired,
  register: PropsType.func.isRequired,
  formErrors: PropsType.object,
  apiError: PropsType.string,
  isSubmitting: PropsType.bool.isRequired,
};

export default SignInForm;
