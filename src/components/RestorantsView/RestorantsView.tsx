import "./RestorantsView.css";
import { Stars } from "../../ui/Stars/Stars";
import { Restaurant } from "../api/api";
import { FC, useState } from "react";
import { Modal } from "../Modal/Modal";

interface RestorantsViewProps {
  restaurants: Restaurant[];
}

export const RestorantsView: FC<RestorantsViewProps> = ({ restaurants }) => {
  const [modalActive, modalSetActive] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  return (
    <div>
      <ul className="restaurants">
        {restaurants.map((restaurant) => (
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
                <Stars key={restaurant.id} id={restaurant.id} rating={restaurant.raiting} size={"based"} />
              </div>
              <p className="info__descr">{restaurant.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <Modal active={modalActive} setActive={modalSetActive}>
        {selectedRestaurant && (
            <div className="modalWindow">
              <div className="modalWindow-img">
                <img className="modalWindow__img" src={selectedRestaurant.url} alt="Фотография ресторана" />
              </div>
              <div className="modalWindow-info">
                <h2 className="info__title">{selectedRestaurant.name}</h2>
                <p className="ingo__descr">
                  You can change the rating
                </p>
                <Stars key={selectedRestaurant.id} id={selectedRestaurant.id} rating={selectedRestaurant.raiting} size={"moded"} change="can"/>
              </div>
              <p className="modalWindow__descr">{selectedRestaurant.description}</p>
            </div>
        )}
      </Modal>
    </div>
  );
};
