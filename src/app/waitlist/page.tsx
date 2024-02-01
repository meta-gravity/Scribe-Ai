"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Beams from "@/components/Animations/lightbeam";
import { Button } from "@/components/ui/button";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Write content with AI by your side. We will send you updates through our email and get you ready for beta
        </p>
        <div className=" flex">
          <Input
            type="email"
            placeholder="hello@scribe.com"
            className="rounded-lg border border-neutral-800 focus:ring-2  w-full relative  mt-3  bg-neutral-950 placeholder:text-neutral-700"
          />

          <Button variant='ghost' className="text-[#303030] px-2 py-2">Join Now</Button>
        </div>
      </div>
      <Beams />
    </div>
  );
}

