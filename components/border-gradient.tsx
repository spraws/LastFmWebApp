"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { NavbarDemo } from "@/components/navbar";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"
        className="dark:bg-black bg-black text-black dark:text-white flex items-center space-x-2"
      >
        <span>Hover me</span>
      </HoverBorderGradient>
    </div>
  );
}


