import FieldContainer from "@/components/field-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RadioTestB from "./radio-test-b";

const FormTestB = () => {
  return (
    <form className="border-[#D1D5DB]-400 w-full max-w-[838px] rounded-[10px] border px-4 py-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="hover:no-underline">
            General
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <FieldContainer>
              <Label htmlFor="reason">Symptom/Reason for visit</Label>
              <Textarea
                id="reason"
                className="rounded-[6px] px-[13px] focus-visible:ring-0"
              />
            </FieldContainer>
            <div className="flex items-center justify-start gap-4">
              <FieldContainer className="max-w-[292px]">
                <Label htmlFor="onSet">Onset of Symptom</Label>
                <Input
                  className="w-full rounded-[6px] px-[13px] py-[9px] focus-visible:ring-0 focus-visible:ring-offset-0"
                  id="onSet"
                />
              </FieldContainer>
              <FieldContainer className="max-w-[292px]">
                <Label htmlFor="severity">Severity</Label>
                <Select>
                  <SelectTrigger
                    id="severity"
                    className="w-full rounded-[6px] px-[13px] py-[9px] focus:ring-0"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "select1", label: "Select 1" },
                      { value: "select2", label: "Select 2" },
                    ].map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldContainer>
            </div>
            <div className="flex items-center justify-start gap-4">
              <FieldContainer className="max-w-[292px]">
                <Label htmlFor="progression">Progression</Label>
                <Select>
                  <SelectTrigger
                    id="progression"
                    className="w-full rounded-[6px] px-[13px] py-[9px] focus:ring-0"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "select1", label: "Select 1" },
                      { value: "select2", label: "Select 2" },
                    ].map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldContainer>
              <div className="flex w-[292px] gap-2">
                <p className="mt-[17px]">Duration</p>
                <FieldContainer className="">
                  <Label htmlFor="day">Day</Label>
                  <Select>
                    <SelectTrigger
                      id="day"
                      className="w-full gap-[10px] rounded-[6px] px-[13px] py-[9px] focus:ring-0"
                    >
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldContainer>
                <FieldContainer className="">
                  <Label htmlFor="week">Week</Label>
                  <Select>
                    <SelectTrigger className="w-full gap-[10px] rounded-[6px] focus:ring-0">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        { value: "0", label: "0" },
                        { value: "1", label: "1" },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldContainer>
                <FieldContainer className="">
                  <Label htmlFor="week">Month</Label>
                  <Select>
                    <SelectTrigger className="w-full gap-[10px] rounded-[6px] focus:ring-0">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        { value: "0", label: "0" },
                        { value: "1", label: "1" },
                      ].map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldContainer>
              </div>
            </div>
            <FieldContainer className="max-w-[292px]">
              <Label htmlFor="Urination">Urination</Label>
              <Select>
                <SelectTrigger
                  id="Urination"
                  className="w-full rounded-[6px] px-[13px] py-[9px] focus:ring-0"
                >
                  <SelectValue placeholder="Urination" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    { value: "select1", label: "Select 1" },
                    { value: "select2", label: "Select 2" },
                  ].map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldContainer>
            <RadioTestB />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  );
};

export default FormTestB;
