import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioTestB = () => {
  return (
    <RadioGroup defaultValue="" className="flex flex-col gap-1">
      <p>Coughing/Sneezing</p>
      <div className="flex gap-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="yes" />
          <Label htmlFor="yes">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="no" />
          <Label htmlFor="no">No</Label>
        </div>
      </div>
    </RadioGroup>
  );
};

export default RadioTestB;
