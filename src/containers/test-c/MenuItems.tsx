import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type submenu = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};
type items = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hasSubmenu: boolean;
  href: string;
  submenu?: submenu[];
};
type MenuItemsProps = {
  items: items;
};
const MenuItems = ({ items }: MenuItemsProps) => {
  if (!items.hasSubmenu) {
    return (
      <Link
        href={items.href}
        className="flex items-center gap-[10px] pr-[18px]"
      >
        <span>
          <items.icon width={16} height={16} stroke={"#18181B"} />
        </span>
        <span className="font-bold text-[#18181B]">{items.title}</span>
      </Link>
    );
  } else {
    return (
      <div className="flex items-start gap-[10px] pr-[18px]">
        <span className="mt-1">
          <items.icon width={16} height={16} stroke={"#18181B"} />
        </span>
        <Accordion type="single" collapsible className="flex-1">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="py-0 hover:no-underline">
              {items.title}
            </AccordionTrigger>
            <AccordionContent>
              {items.submenu?.map((sub) => (
                <Link
                  href={`testC/${sub.href}`}
                  key={sub.title + Math.random() * 1100}
                  className="flex"
                >
                  <sub.icon width={12} height={29} />
                  <span className="mb-[-6px] self-end">{sub.title}</span>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
};

export default MenuItems;
