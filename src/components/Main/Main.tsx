import { FC } from "react";
import { Input } from "../../ui/Input/Input";
import { RestorantsView } from "../RestorantsView/RestorantsView";
import { Restaurant } from "../api/api";
import "./Main.css";

interface MainProps {
    restaurants: Restaurant[]
}

export const Main: FC<MainProps> = ({ restaurants }) => {
    return (
        <main className="main">
            <section className="main-section">
                <Input placeholder="Search for restorants" color="red" size={60} type="text"/> 
                <RestorantsView  restaurants={restaurants}/>
            </section>
        </main>
    )
}