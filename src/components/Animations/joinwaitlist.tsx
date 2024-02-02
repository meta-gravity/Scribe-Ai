"use client";
import React from "react";
import { Linebutton } from "./movinglinebtn";

export default function WaitlistBtn() {
  return (
    <div>
      <Linebutton
        borderRadius="3rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Join waitlist
      </Linebutton>
    </div>
  );
}
