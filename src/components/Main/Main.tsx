import { Input } from "../../ui/Input/Input";
import { RestorantsView } from "../RestorantsView/RestorantsView";
import "./Main.css";

export const Main = () => {
    return (
        <main className="main">
            <section className="main-section">
                <Input placeholder="Search for restorants" color="red" size={60} type="text"/> 
                <RestorantsView />
            </section>
        </main>
    )
}