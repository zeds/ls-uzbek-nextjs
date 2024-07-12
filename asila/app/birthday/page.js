"use client";
import React from "react";
// import { DateField, DatePicker } from "@/components/ui/date-picker"
import { DateField } from "@internationalized/date";
import { DatePicker } from "antd";

export default function page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="w-[420px] gap-5">
        {/* <DatePicker label="Pick a date" /> */}
        <DatePicker label="Pick a date">
          <DateField />
        </DatePicker>
      </div>
    </section>
  );
}
