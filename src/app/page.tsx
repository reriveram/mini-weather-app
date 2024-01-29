"use client";

import { useState } from "react";
import { Combobox } from "./components/ui/combobox";
import { Text } from "./components/ui/text";

import { useLocations } from "./hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { appIcon, homeContainer, homeHeading, homeTitle } from "./page.css";

export default function Home() {
  const [input, setInput] = useState<string>("");

  const { locations, isLoading, error } = useLocations(input);

  function handleOnChange(value: string) {
    setInput(value);
  }

  return (
    <section className={homeContainer}>
      <FontAwesomeIcon className={appIcon} icon={faSun} />
      <Text className={homeTitle}>Mini Weather App</Text>
      <Text className={homeHeading}>View the 5 day forecast for any city</Text>
      <Combobox
        options={locations}
        inputValue={input}
        handleOnChange={handleOnChange}
      />
    </section>
  );
}
