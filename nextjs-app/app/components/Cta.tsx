import { Suspense } from "react";

import ResolvedLink from "@/app/components/ResolvedLink";
import { CallToAction } from "@/sanity.types";

type CtaProps = {
  block: CallToAction;
  index: number;
};

export default function CTA({ block }: CtaProps) {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>
              {block.heading}
            </h2>
            <p>
              {block.text}
            </p>
          </div>

          <Suspense fallback={null}>
            <div>
              <ResolvedLink link={block.link}>
                {block.buttonText}
              </ResolvedLink>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}