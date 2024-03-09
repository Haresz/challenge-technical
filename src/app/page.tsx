"use client";
import { useEffect, useState } from "react";
import ProgressSlider from "@/components/ProgressSlider";
import ToggelThem from "@/components/ToggelThem";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputComponent from "@/components/InputComponent";

export default function Home() {
  const items: any = [
    {
      title: "Lorem1",
      desc: `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      `,
    },
    {
      title: "Lorem2",
      desc: `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      `,
    },
    {
      title: "Lorem3",
      desc: `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      `,
    },
    {
      title: "Lorem4",
      desc: `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      `,
    },
  ];

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("input is requied"),
    password: Yup.string().required("input is requied"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values: any) => {
      alert(values);
    },
  });

  return (
    <div className="flex justify-between h-screen">
      <Box
        className="lg:flex hidden py-16 flex-1  flex-col justify-around items-center dark:bg-blue bg-orange"
        bgSize={"100% 114vh"}
      >
        <Image width="50%" src={"vocagame.png"} alt={"vocaGame"} />
        <ProgressSlider items={items} />
      </Box>
      <Box className="flex-1">
        <ToggelThem />
        <div className="flex flex-col mt-8 lg:ml-16 lg:mr-16 ml-8 mr-8 ">
          <Heading
            className="-tracking-3 dark:text-blue_primary text-orange_primary"
            as="h1"
            size={{ base: "2xl", lg: "4xl" }}
          >
            Silahkan LogIn
          </Heading>
          <Text marginTop={12} fontSize="lg">
            Masukkan Username dan password anda untuk masuk
          </Text>
          <form className="mt-12" onSubmit={formik.handleSubmit}>
            <InputComponent
              placeholder="Username"
              name="username"
              width={{ base: "100%", lg: 500 }}
              onChange={formik.handleChange}
              handleError={formik.errors.username}
            />
            <InputComponent
              placeholder="Password"
              name="password"
              type="password"
              width={{ base: "100%", lg: 500 }}
              onChange={formik.handleChange}
              handleError={formik.errors.password}
            />
            <button className="lg:w-[500px] w-full text-center font-semibold py-3 dark:bg-purple-200 bg-orange-200 dark:text-purple-800 text-orange-800 rounded-full">
              Masuk Sekarang
            </button>
            <Text
              width={{ base: "100%", lg: 500 }}
              className="text-gray_dark font-medium text-center mt-12"
            >
              Belum punya akun?
              <span className="font-bold dark:text-blue_primary text-orange_primary">
                Daftar Sekarang
              </span>
            </Text>
          </form>
        </div>
      </Box>
    </div>
  );
}
