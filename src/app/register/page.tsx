"use client";
// import ui
import ToggelThem from "@/components/ToggelThem";
import { Button, Heading, Image, Text, useToast } from "@chakra-ui/react";
import InputComponent from "@/components/InputComponent";

// import validation form
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

// import redux
import { useAppDispatch } from "@/lib/hooks";
import { actionRegister } from "@/lib/features/users/usersSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function page() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();

  const RegisterSchema = Yup.object().shape({
    id: Yup.string().required(),
    username: Yup.string().required("input is required"),
    phoneNumber: Yup.number().required("input is required"),
    password: Yup.string().required("input is required"),
    confirmPassword: Yup.string().required("input is required"),
  });

  const handleSubmit = (values: any) => {
    if (values.confirmPassword == values.password) {
      delete values.confirmPassword;
      console.log(values, "handleSubmit");
      dispatch(actionRegister(values));
      router.push("/profile");
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      var inFifteenMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);
      Cookies.set("token", uuidv4(), { expires: inFifteenMinutes });
    } else {
      toast({
        title: "Password not match.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      username: "",
      phoneNumber: null,
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="dark:bg-blue bg-orange w-full lg:h-screen h-fit lg:p-0 pb-4 text-white">
      <ToggelThem />
      <Image
        className="lg:inline-block hidden absolute mt-4 ml-4"
        width={300}
        src="vocagame.png"
      />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col px-8 items-center justify-center mt-4"
      >
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
          type="password"
          width={{ base: "100%", lg: 500 }}
          onChange={formik.handleChange}
          handleError={formik.errors.confirmPassword}
        />
        <Button
          type="submit"
          borderRadius={50}
          className="lg:w-[500px] w-full"
          size="lg"
          width={{ base: "100%", lg: 500 }}
        >
          Submit
        </Button>
        <Text
          width={{ base: "100%", lg: 500 }}
          className="text-white font-medium text-center mt-4"
        >
          Sudah punya akun?
          <Link className="font-bold" href={"/"}>
            LogIn Sekarang
          </Link>
        </Text>
      </form>
    </div>
  );
}
