"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUrlContext from "@/hook/useUrlContext";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import RemoveUrl from "./remove-url";
import { Plus } from "lucide-react";

type BlogDrawerProps = {
  label: string;
};

type FormType = {
  address: string;
};

const BlogDrawer = ({ label }: BlogDrawerProps) => {
  const { register, getValues, handleSubmit, formState, reset } =
    useForm<FormType>();
  const { errors } = formState;
  const { handleAddUrls, handleRemoveErrorDuplicate } = useUrlContext();
  const ref = useRef<undefined | number>();

  const onSubmit = (data: { address: string }) => {
    if (!data.address) return;
    ref.current = Math.random() * 1001;
    handleAddUrls({ url: data.address, id: ref.current });
  };

  const handleReset = () => {
    reset();
    handleRemoveErrorDuplicate();
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="left-auto right-0 h-screen w-full max-w-[514px] rounded-ee-none rounded-se-none">
        <DrawerHeader>
          <DrawerTitle className="flex h-[76px] w-full items-center justify-start bg-[#171717] px-0 text-white">
            <div className="flex w-full items-center justify-between px-[33px]">
              <span>{label}</span>
              <DrawerClose>
                <Button onClick={handleReset} className="text-2xl">
                  &times;
                </Button>
              </DrawerClose>
            </div>
          </DrawerTitle>
          <DrawerDescription className="mt-11">
            <form
              className="flex items-center px-[33px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  className={`w-[300px] rounded-[4px] focus-visible:ring-1 focus-visible:ring-offset-1 ${errors.address?.message ? "border-red-400 focus-visible:ring-0 focus-visible:ring-offset-0" : ""}`}
                  {...register("address", {
                    required: "This field must be filled",
                  })}
                  name="address"
                />
              </div>
              <Button type="submit" className="mb-[-20px]">
                <Plus width={17.45} height={17.5} />
              </Button>
            </form>
            <RemoveUrl
              getValues={getValues}
              id={ref.current}
              handleReset={handleReset}
            />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex border border-[#E4E4E7]">
          <DrawerClose className="ml-auto">
            <Button onClick={handleReset} variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BlogDrawer;
