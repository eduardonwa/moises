import { Suspense } from "react";
import Link from "next/link";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";

export default async function Page() {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <Link href="https://sanity.io/">
                      Sanity
                    </Link>{" "}
                    +{" "}
                    <Link href="https://nextjs.org/">
                      Next.js
                    </Link>
                  </div>
                </div>
                <div>
                  <p>
                    This starter is a statically generated site that uses Next.js
                    for the frontend and Sanity to handle its content. It comes with
                    a standalone Sanity Studio that offers features like real-time
                    collaboration, instant side-by-side content previews, and
                    intuitive editing.
                  </p>
                </div>
                <div>
                  <GetStartedCode />
                  <Link
                    href="https://www.sanity.io/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sanity Documentation
                    <svg>
                      <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <aside>
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}