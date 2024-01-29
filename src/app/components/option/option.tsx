import { LocationType } from "@/app/types";
import { getOptionFormat } from "@/app/utils/data-format";
import Link from "next/link";
import { item } from "./option.css";

interface OptionProps {
  option: LocationType;
}

export default function Option({ option }: OptionProps) {
  return (
    <Link
      className={item}
      href={{
        pathname: "/forecast",
        query: {
          lat: `${option.lat}`,
          lon: `${option.lon}`,
          city: `${option.name}`,
          country: `${option.country}`,
        },
      }}
    >
      {getOptionFormat(option)}
    </Link>
  );
}
