import Wrapper from "@/components/Wrapper";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must contains minimum 8 characters !")
    .required("Password is required !")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
      "Password must contain one uppercase , one lowercase , one number, one special character. "
    ),
  // email: Yup.string().email("Invalid email").required("Email is required !"),
});

const initialValues = {
  username: "",
  password: "",
};

const login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        console.log(values);
        const user = await axios.post(
          "http://192.168.178.49:8000/users/login/",
          values
        );
      },
    });

  return (
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-7">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Sign In !
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row gap-12 py-10">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="py-3 flex justify-between">
              <input
                className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[10px] md:w-[400px] md:text-[15px]"
                type="text"
                name="username"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <small className="text-red-600">{errors.email}</small>
              )}
            </div>

            <div className="py-3 flex justify-between">
              <input
                className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[10px] md:w-[400px] md:text-[15px]"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <small className=" text-red-600">{errors.password}</small>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75 flex items-center gap-2 justify-center"
            >
              Login
            </button>

            <Link href="/register">
              <button className="w-full py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75 flex items-center gap-2 justify-center border border-black ]">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default login;
