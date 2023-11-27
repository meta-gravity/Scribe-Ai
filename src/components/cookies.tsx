"use client"

import { loglib } from "@loglib/tracker";
import { Button } from "./ui/button";

export default function Cookiesbtn() {
  return (
    <nav>
        <Button onClick={() => loglib.setConsent("granted")}>Accept</Button>
    </nav>
  );
}