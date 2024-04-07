import { ChangeEvent, FC, useState } from "react";
import { Input } from "../../ui/Input/Input";
import { RestorantsView } from "../RestorantsView/RestorantsView";
import { Restaurant } from "../api/api";
import "./Main.css";

interface MainProps {
  restaurants: Restaurant[];
}

export const Main: FC<MainProps> = ({ restaurants }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(input)
  };

  return (
    <main className="main">
      <section className="main-section">
        <Input
          placeholder="Search for restorants"
          color="red"
          size={60}
          type="text"
          onInput={handleInputChange}
          value={input}
        />
        <RestorantsView restaurants={restaurants} filterOn={input} />
      </section>
    </main>
  );
};
