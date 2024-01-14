// GoodsContext.jsx
import { createContext, useState } from "react";

const GoodsContext = createContext({
  selectedGoods: [],
  addGoods: () => {},
  removeGoods: () => {},
  removeAllGoods: () => {},
  setSelectedGoods: () => {},
});

export const GoodsProvider = ({ children }) => {
  const [selectedGoods, setSelectedGoods] = useState([]);

  const addGoods = (item) => {
    setSelectedGoods((prevSelectedGoods) => [...prevSelectedGoods, item]);
  };

  const removeGoods = (item) => {
    setSelectedGoods((prevSelectedGoods) =>
      prevSelectedGoods.filter((el) => el.id !== item.id)
    );
  };

  const removeAllGoods = () => {
    setSelectedGoods([]);
  };

  return (
    <GoodsContext.Provider
      value={{
        selectedGoods,
        addGoods,
        removeGoods,
        removeAllGoods,
        setSelectedGoods,
      }}
    >
      {children}
    </GoodsContext.Provider>
  );
};

export default GoodsContext;
