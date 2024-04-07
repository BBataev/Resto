import "./RestorantsView.css";
import { Stars } from "../../ui/Stars/Stars";
import { Restaurant } from "../api/api";
import { FC, useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";

interface RestorantsViewProps {
  restaurants: Restaurant[];
  filterOn: string;
}

export const RestorantsView: FC<RestorantsViewProps> = ({
  restaurants,
  filterOn,
}) => {
  const [modalActive, modalSetActive] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(restaurants);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = restaurants.filter((item) =>
        item.name.toLowerCase().includes(filterOn.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }, 500);

    return () => clearTimeout(timer);
  }, [filterOn, restaurants]);

  return (
    <div>
      <ul className="restaurants">
        {filteredRestaurants.length != 0 ? (
          filteredRestaurants.map((restaurant) => (
            <li
              className="restaurants-restaurant"
              key={restaurant.id}
              onClick={() => {
                setSelectedRestaurant(restaurant);
                modalSetActive(true);
              }}
            >
              <img
                className="restaurant__image"
                src={restaurant.url}
                alt="Фотография ресторана"
              />
              <div className="restaurant-info">
                <div className="info-header">
                  <h2 className="header__title">{restaurant.name}</h2>
                  <Stars
                    key={restaurant.id}
                    id={restaurant.id}
                    rating={restaurant.raiting}
                    size={"based"}
                  />
                </div>
                <p className="info__descr">{restaurant.description}</p>
              </div>
            </li>
          ))
        ) : (
          <h3 className="nothingFound">
            Ничего такого не нашлось
          </h3>
        )}
      </ul>
      <Modal active={modalActive} setActive={modalSetActive}>
        {selectedRestaurant && (
          <div className="modalWindow">
            <div className="modalWindow-img">
              <img
                className="modalWindow__img"
                src={selectedRestaurant.url}
                alt="Фотография ресторана"
              />
            </div>
            <div className="modalWindow-info">
              <h2 className="info__title">{selectedRestaurant.name}</h2>
              <p className="ingo__descr">You can change the rating</p>
              <Stars
                key={selectedRestaurant.id}
                id={selectedRestaurant.id}
                rating={selectedRestaurant.raiting}
                size={"moded"}
                change="can"
              />
            </div>
            <p className="modalWindow__descr">
              {selectedRestaurant.description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};
