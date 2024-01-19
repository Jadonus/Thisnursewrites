"use client";
import Nav from "@/components/ui/Nav";
import { MailCheck } from "lucide-react";

export default function Success() {
  return (
    <>
      <Nav />
      <div className="flex flex-col h-[3/4] items-center justify-center  m-12">
        <MailCheck size={200} />
        <p className="text-4xl text-center">Your Message Has succesfuly sent</p>
      </div>
    </>
  );
}
