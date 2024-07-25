import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/data/Blog";

const BlogCard = ({ title, content, url, details }: Blog) => {
  return (
    <a href={url} target="_blank" className="w-[380px]">
      <Card className=" rounded h-28 custom-card relative">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-md">
              {!details && title.length > 30
                ? title.slice(0, 34) + "..."
                : title}
            </CardTitle>
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={4}
              height={4}
              className="w-4 h-4 arrow"
            />
          </div>
          <CardDescription>
            {!details && content.length > 30
              ? content.slice(0, 40) + "..."
              : content}
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </a>
  );
};

export default BlogCard;
