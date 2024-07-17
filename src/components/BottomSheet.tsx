import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTechStack,
  DrawerSubTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/Project";

const BottomSheet = ({ name, description, tools }: Project) => {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>

      <DrawerContent className="pl-4 pr-4 ">
        <div className="mx-auto flex lg:max-w-[872px] flex-col ">
          <ScrollArea className="h-[100%] mr-10  rounded-md">
            <DrawerHeader>
              <DrawerTitle>{name}</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription>{description}</DrawerDescription>
            <DrawerHeader>
              <DrawerSubTitle>Technologies used</DrawerSubTitle>
            </DrawerHeader>
            <DrawerTechStack className="flex w-100">
              {tools &&
                tools.map((tool, index) => (
                  <Badge key={index} variant="outline">
                    {tool.name}
                  </Badge>
                ))}
            </DrawerTechStack>
          </ScrollArea>
        </div>
        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
