import { useQuery } from "@tanstack/react-query";
import "./RestorantsView.css";
import { getRestaurants } from "../api/api";
import { queryClient } from "../api/queryClient";
import { Stars } from "../../ui/Stars/Stars";

export const RestorantsView = () => {
  const restaurants = useQuery(
    {
      queryFn: () => getRestaurants(),
      queryKey: ["restorants"],
    },
    queryClient
  );

  switch (restaurants.status) {
    case "pending":
      return <h1>Загрузка</h1>;
    case "error":
      return <h1>Ошибка</h1>;
    case "success":
      return (
        <ul className="restaurants">
          {restaurants.data.map((restaurant) => (
            <li className="restaurants-restaurant" key={restaurant.id}>
              <img
                className="restaurant__image"
                src={restaurant.url}
                alt="Фотография ресторана"
              />
              <div>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
                <Stars rating={restaurant.raiting} />
              </div>
            </li>
          ))}
        </ul>
      );
  }
};
