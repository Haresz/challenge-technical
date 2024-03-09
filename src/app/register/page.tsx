"use client";
import React from "react";
import ToggelThem from "@/components/ToggelThem";
import { Button, Heading, Image, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputComponent from "@/components/InputComponent";

export default function page() {
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("input is required"),
    phoneNumber: Yup.number().required("input is required"),
    password: Yup.string().required("input is required"),
    confirmPassword: Yup.string().required("input is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {},
  });
  return (
    <div className="dark:bg-blue bg-orange w-full h-screen text-white">
      <ToggelThem />
      <Image
        className="lg:inline-block hidden absolute mt-4 ml-4"
        width={300}
        src="vocagame.png"
      />

      <form className="flex flex-col px-8 items-center justify-center mt-4">
        <Heading
          className="-tracking-3"
          as="h1"
          size={{ base: "2xl", lg: "4xl" }}
        >
          Daftarkan Akun
        </Heading>
        <Text marginTop={4} fontSize="lg" marginBottom={{ base: 6, lg: 10 }}>
          Daftar akun anda dengan mengisi form dibawah
        </Text>
        <InputComponent
          color="#FFFFF"
          placeholder="First Name"
          name="username"
          width={{ base: "100%", lg: 500 }}
          onChange={formik.handleChange}
          handleError={formik.errors.username}
        />
        <InputComponent
          color="#FFFFF"
          placeholder="Phone Number"
          name="phoneNumber"
          type="number"
          width={{ base: "100%", lg: 500 }}
          onChange={formik.handleChange}
          handleError={formik.errors.phoneNumber}
        />
        <InputComponent
          color="#FFFFF"
          placeholder="Password"
          name="password"
          type="password"
          width={{ base: "100%", lg: 500 }}
          onChange={formik.handleChange}
          handleError={formik.errors.password}
        />
        <InputComponent
          color="#FFFFF"
          placeholder="Confirm Password"
          name="confirmPassword"
          type="confirmPassword"
          width={{ base: "100%", lg: 500 }}
          onChange={formik.handleChange}
          handleError={formik.errors.confirmPassword}
        />
        <Button borderRadius={50} className="lg:w-[500px] w-full" size="lg">
          Button
        </Button>
        <Text
          width={{ base: "100%", lg: 500 }}
          className="text-white font-medium text-center mt-4"
        >
          Sudah punya akun?
          <span className="font-bold">LogIn Sekarang</span>
        </Text>
      </form>
    </div>
  );
}
