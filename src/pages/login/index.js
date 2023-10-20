import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const router = useRouter();

  const handleSubmit = () => {
    // Use router.push to navigate to the '/verification' page
    router.push('/verification');
  };
  return (
    <div className="py-10 px-4 md:py-20 bg-gray-50">
      <div className="bg-white mx-auto max-w-xl p-5 shadow-xl rounded-md">
        <h2 className="text-[25px] font-medium mb-10 text-center text-gray-800">
          Login Your Marketplace
        </h2>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-3 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-3 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <Link
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-violet-600 font-semibold ml-2 text-[13px]  relative after:absolute after:content-[' '] hover:after:scale-x-100 hover:after:origin-left after:bg-violet-600 after:bottom-[-5px] after:h-[1px] after:rounded-[2px]  after:left-0 after:right-0 after:origin-right border-animation-time after:scale-x-0"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
