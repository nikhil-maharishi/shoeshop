import Wrapper from "@/components/Wrapper";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must contains minimum 8 characters !")
    .required("Password is required !")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
      "Password must contain one uppercase , one lowercase , one number, one special character. "
    ),
  // cnfrmPassword: Yup.string()
  //   .required("Confirm Password is required !")
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
  email: Yup.string().email("Invalid email").required("Email is required !"),
  username: Yup.string().required("Username is required !"),
  firstname: Yup.string()
    .min(3,"Write a valid firstname")
    .required("Firstname is required !")
    .matches(/[a-zA-Z]/, "Write a valid firstname"),
  lastname: Yup.string()
    .min(3,"Write a valid lastname")
    .required("Lastname is required !")
    .matches(/[a-zA-Z]/, "Write a valid lastname"),
});

const initialValues = {
  email: "",
  password: "",
  // cnfrmPassword: "",
  username: "",
  firstname: "",
  lastname: "",
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        console.log(values);
        
          try{
            const login = await axios.post("http://localhost:8000/users/register", values).then((res)=>{
              setCookie('cookie', 'value',);
            });
           
          }
          catch(err) {
            console.error(err);
          }
       
      },
    });

  return (
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-7">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Register
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row gap-12 py-10">
        <div className="">
          <form  onSubmit={handleSubmit}>
            <div className="">
              <div className="py-3 flex flex-col justify-between">
                <input
                  className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname && (
                  <small className="text-red-600">{errors.firstname}</small>
                )}
              </div>

              <div className="py-3 flex flex-col justify-between">
                <input
                  className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname && (
                  <small className="text-red-600">{errors.lastname}</small>
                )}
              </div>
            </div>

            <div className="py-3 flex flex-col justify-between">
              <input
                className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (
                <small className="text-red-600">{errors.username}</small>
              )}
            </div>

            <div className="py-3 flex flex-col justify-between">
              <input
                className="ml-2 border-[1px] outline-none border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
                type="email"
                name="email"
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

            <div className="py-3 flex flex-col justify-between">
              <input
                className="ml-2 outline-none border-[1px] border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
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

            {/* <div className="py-3 flex flex-col justify-between ">
              <input
                className="ml-2 outline-none border-[1px] border-black border-x-0 border-t-0  w-[300px] p-1 text-[12px] md:w-[400px] md:text-[15px]"
                type="password"
                name="cnfrmPassword"
                id="cnfrmPassword"
                placeholder="Confirm Password"
                value={values.cnfrmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cnfrmPassword && touched.cnfrmPassword && (
                <small className="text-red-600">{errors.cnfrmPassword}</small>
              )}
            </div> */}

            <button
              disabled={!values}
              type="submit"
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75 flex items-center gap-2 justify-center disabled:bg-black/[0.05]"
            >
              Sign Up
            </button>

            <Link href="/login">
              <button className="w-full py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75 flex items-center gap-2 justify-center border border-black ]">
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
