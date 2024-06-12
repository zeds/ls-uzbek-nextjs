import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-200 w-full h-[100vh]">
      <div className="bg-gray-400 w-1/3 h-60 p-10">
        <div>username</div>
        <Input
          type="email"
          placeholder="Email"
          className="bg-white placeholder:text-gray-400"
        />
        <div>password</div>
        <Input
          type="password"
          placeholder="password"
          className="bg-white  placeholder:text-gray-400"
        />
        <Link href="#" className="text-blue-600">
          forget
        </Link>
        <Button className="bg-black text-white w-full  mt-4">login</Button>
      </div>
    </div>
  );
};

export default Page;
