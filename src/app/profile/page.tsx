"use client";
import ToggelThem from "@/components/ToggelThem";
import { SignOut, UserCircle } from "@phosphor-icons/react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputComponent from "@/components/InputComponent";

export default function Profile() {
  const profileSchema = Yup.object().shape({
    username: Yup.string().required("input is required"),
    phoneNumber: Yup.number().required("input is required"),
    password: Yup.string().required("input is required"),
    newPassword: Yup.string().required("input is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      newPassword: "",
    },
    validationSchema: profileSchema,
    onSubmit: (values: any) => {
      alert(values);
    },
  });
  return (
    <div>
      <ToggelThem />
      <div className="dark:bg-blue_primary bg-orange_primary py-4">
        <div className="flex justify-between mb-2 px-[5%]">
          <Image borderRadius={50} width={14} src="/logo.png" alt={""} />
          <UserCircle color="white" size={60} />
        </div>
        <hr />
      </div>
      <div className="flex flex-col items-center dark:bg-blue_primary bg-orange_primary text-white mt-4 mx-[5%] lg:py-8 py-4">
        <Heading as="h1" size={{ base: "2xl", lg: "4xl" }}>
          Lorem
        </Heading>
        <Text width={500} marginTop={4} fontSize="md">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </Text>
      </div>
      <div className="flex justify-between mt-4 px-[5%]">
        <div className="flex items-center gap-2 bold">
          <UserCircle color="black" size={60} />
          <Text fontWeight="bold" fontSize="lg">
            user name
          </Text>
        </div>
        <button className=" w-fit px-6 text-center font-bold py-3 dark:bg-purple-200 bg-orange-200 dark:text-purple-800 text-orange-800 rounded-full">
          ✏️ Edit Profile
        </button>
      </div>
      <div className="lg:flex w-full inline-block justify-between my-16 px-[5%] font-semibold">
        <Box className="flex lg:flex-col justify-between lg:border-r-2 lg:w-[20%] w-full pe-8">
          <div className="pt-4 flex items-center">
            <UserCircle color="black" size={40} />
            <Text marginLeft={4}>Profil</Text>
          </div>
          <div className="pt-4 flex items-center lg:border-t-2 border-red-600 text-red-600">
            <SignOut size={32} />
            <Text marginLeft={4}>LogOut</Text>
          </div>
        </Box>
        <Box className="border-2 rounded-lg lg:w-[76%] lg:mt-0 mt-8 p-8">
          <Heading
            className="border-b-2 pb-4 mb-6"
            as="h1"
            size={{ base: "xl", lg: "xl" }}
          >
            🖋️ Edit Profile
          </Heading>
          <form>
            <InputComponent
              color="#FFFFF"
              placeholder="First Name"
              name="username"
              width={"100%"}
              onChange={formik.handleChange}
              handleError={formik.errors.username}
            />
            <InputComponent
              color="#FFFFF"
              placeholder="Phone Number"
              name="phoneNumber"
              type="number"
              width={"100%"}
              onChange={formik.handleChange}
              handleError={formik.errors.phoneNumber}
            />
            <InputComponent
              color="#FFFFF"
              placeholder="Old Password"
              name="password"
              type="password"
              width={"100%"}
              onChange={formik.handleChange}
              handleError={formik.errors.password}
            />
            <InputComponent
              color="#FFFFF"
              placeholder="New Password"
              name="newPassword"
              type="password"
              width={"100%"}
              onChange={formik.handleChange}
              handleError={formik.errors.newPassword}
            />
            <button className=" w-fit px-6 font-bold py-3 dark:bg-purple-200 bg-orange-200 dark:text-purple-800 text-orange-800 rounded-full">
              Edit Profile →
            </button>
          </form>
        </Box>
      </div>

      <footer className="w-full h-80 p-20 dark:bg-blue_primary bg-orange_primary">
        <Image borderRadius={100} width={40} src="/logo.png" alt={""} />
      </footer>
    </div>
  );
}
