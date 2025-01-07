import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
type itemsObject = {
  value: string;
  label: string;
};
type SelectFormProps = {
  items: itemsObject[];
  id: string;
  placeholder: string;
};
const SelectForm = ({ items, id, placeholder }: SelectFormProps) => {
  return (
    <Select>
      <SelectTrigger
        id={id}
        className="w-full gap-[10px] rounded-[6px] focus:ring-0"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectForm;
