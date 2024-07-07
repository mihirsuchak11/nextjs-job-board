"use client";

import H1 from "@/components/ui/h1";
import React from "react";

type Props = {};

const Error = () => {
  return (
    <main className="m-auto my-10 max-w-5xl px-3 py-3 text-center">
      <H1>Error</H1>
      <p>An unexpected error occured</p>
    </main>
  );
};

export default Error;
