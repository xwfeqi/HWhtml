import { useState } from "react";
import * as uuid from "uuid";
import GoodsComponent from "./goods";
import CounterComp from "./counter";
import "./style.css";
import GoodsMock from "./goodsMock.json";
import GoodsContext from "../context/goods.context";
import CampComponent from "./camp";

const goods = GoodsMock.map((el) => ({
  ...el,
  id: uuid.v1(),
}));

const AppComponent = () => {
  const [data, setData] = useState(goods); // data - запитати
  const [selectedGoods, setSelectedGoods] = useState([]);

  const totalSum = selectedGoods.reduce((acc, good) => acc + good.cost, 0);

  const addGoods = (item) => {
    setSelectedGoods((prevSelectedGoods) => {
      return [...prevSelectedGoods, item];
    });
  };

  const removeGoods = (item) => {
    setSelectedGoods((prevSelectedGoods) => {
      return prevSelectedGoods.filter((el) => {
        // if (item.id === el.id) {
        //  return false;
        // } else {
        //  return true;
        // }
        return item.id !== el.id;
      });
    });
  };

  const removeAllGoods = () => {
    setData((prevData) => {
      return prevData.filter((el) => {
        const exists = selectedGoods.find((item) => item.id === el.id);
        return !exists;
      });
    });
    setSelectedGoods([]);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <GoodsContext.Provider
          value={{
            selectedGoods: selectedGoods,
            addGoods,
            removeGoods,
            removeAllGoods,
          }}
        >
          <CounterComp data={data} />
          <div className="goods-wrapper">
            {data.map((el) => {
              // return <GoodsComponent cost={el.cost} imageSrc={el.imageSrc} title={el.title} />;
              return <GoodsComponent {...el} key={el.id} />;
            })}
          </div>
          {/* <GoodsComponent cost={20} title='title' imageSrc='./images/goods-1.webp' /> */}

          <CampComponent sum={totalSum} />
        </GoodsContext.Provider>
      </div>
    </div>
  );
};

export default AppComponent;
