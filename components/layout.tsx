import Head from "next/head";
import React, { ReactNode } from "react";

const layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="h-min-screen w-full">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default layout;
