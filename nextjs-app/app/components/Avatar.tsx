import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";
import DateComponent from "@/app/components/Date";

type Props = {
  person: {
    firstName: string | null;
    lastName: string | null;
    picture?: any;
  };
  date: string;
};

export default function Avatar({ person, date }: Props) {
  const { firstName, lastName, picture } = person;

  return (
    <div>
      {picture?.asset?._ref ? (
        <div>
          <Image
            alt={picture?.alt || ""}
            height={48}
            width={48}
            src={
              urlForImage(picture)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <div>
           By 
        </div>
      )}
      <div>
        {firstName && lastName && (
          <div>
            {firstName} {lastName}
          </div>
        )}
        <div>
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  );
}