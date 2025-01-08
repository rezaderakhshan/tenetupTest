"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUrlContext from "@/hook/useUrlContext";
import { Minus } from "lucide-react";

import { UseFormGetValues } from "react-hook-form";
type TgetValue = {
  address: string;
};
const RemoveUrl = ({
  getValues,
  id,
  handleReset,
}: {
  getValues: UseFormGetValues<TgetValue>;
  id: number | undefined;
  handleReset: () => void;
}) => {
  const { handleRemoveUrl, isDuplicatedContent } = useUrlContext();

  return (
    <>
      <div className="mt-4 flex items-center px-[33px]">
        <div className="">
          <Input
            required
            className="w-[300px] rounded-[4px] focus-visible:ring-1 focus-visible:ring-offset-1"
            readOnly
            value={getValues().address ? getValues().address : ""}
          />
        </div>
        <Button
          onClick={() => {
            handleRemoveUrl(id);
            handleReset();
          }}
        >
          <Minus width={17.45} height={17.5} />
        </Button>
      </div>
      {isDuplicatedContent && (
        <p className="text-red-700">This url was entered already</p>
      )}
    </>
  );
};

export default RemoveUrl;
