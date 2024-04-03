import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "./components/api/api";
import { queryClient } from "./components/api/queryClient";

import "./styles.css";
import "../font/font.css";

function App() {
  const restaurants = useQuery(
    {
      queryFn: () => getRestaurants(),
      queryKey: ["restorants"],
    },
    queryClient
  );

  switch (restaurants.status) {
    case "pending":
      return (
        <h1>Загрузка</h1>
        )
    case "error":
      return (
        <h1>Ошибка</h1>
      )
    case "success":
      return (
        <>
          <Header />
          <Main restaurants={restaurants.data}/>
          <Footer />
        </>
      );
  }

}

export default App;
