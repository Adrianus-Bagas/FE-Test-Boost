import React from "react";
import {Suspense} from "react";

import {Bottombar} from "@/components";

export default function UnauthenticatedLayout({children}: {children: React.JSX.Element}) {
  return (
    <>
      <>
        <Suspense fallback={<></>}>
          <div className="min-h-screen pb-20 px-4">
            <>{children}</>
          </div>
          <Bottombar />
        </Suspense>
      </>
    </>
  );
}
