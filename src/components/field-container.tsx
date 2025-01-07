import { cn } from "@/lib/utils";
type FieldContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const FieldContainer = ({ children, className }: FieldContainerProps) => {
  return (
    <div className={cn("flex w-full max-w-[600px] flex-col gap-1", className)}>
      {children}
    </div>
  );
};

export default FieldContainer;
