import { Separator } from "@/components/ui/separator";
import BottomSheet from "./BottomSheet";
import { Project } from "@/data/Project";
import Link from "next/link";

import { FC } from "react";
export const ProjectCard: FC<Project> = ({
  name,
  description,
  github,
  production,
  tools,
}) => {
  return (
    <div className="mt-10">
      <div className="space-y-1">
        <h4 className="text-md font-medium leading-none">{name}</h4>
        <p className="text-sm ">{description.slice(0, 150) + "..."}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Link target="_blank" href={github}>
          Source
        </Link>
        <Separator orientation="vertical" />
        <div>
          <BottomSheet
            name={name}
            description={description}
            tools={tools}
            production={production}
            github={github}
          />
        </div>
        <Separator orientation="vertical" />
        <div>
          {production ? (
            <>
              <div className="flex justify-between ">
                <Link href={production}>Live</Link>
                {/* <div className="w-2 h-2 rounded-full bg-[#50e3c2] relative top-[6px] left-1"></div> */}
                <div className="glowing-dot  relative top-[6px] left-1"></div>
              </div>
            </>
          ) : (
            <p>Not deployed</p>
          )}
        </div>
      </div>
    </div>
  );
};
