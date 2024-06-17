"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";

const page = () => {
  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter();

  const clickLogin = () => {
    setLogin(true);
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-500">
      <div className="flex flex-col w-[400px] bg-gray-200 p-4 rounded-md">
        <div className="my-2 font-semibold">Username:</div>
        <div className="flex">
          <div className="w-10 h-10 mr-0.5 flex items-center justify-center">
            <img src="/person.svg" alt="person" />
          </div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="my-2 font-semibold">Password:</div>
        <div className="flex">
          <div className="w-10 h-10 mr-0.5 flex items-center justify-center">
            <img src="/password.svg" alt="password" />
          </div>
          <Input type="password" placeholder="Password" />
        </div>
        <Link
          href="/forget-password"
          className="text-blue-500 underline pt-2 text-sm"
        >
          Forgot password?
        </Link>
        <Button onClick={() => clickLogin()} className="mt-5">
          Login
        </Button>
      </div>
    </div>
  );
};

export default page;
