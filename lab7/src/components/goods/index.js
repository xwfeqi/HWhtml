import { useContext, useState } from "react";
import GoodsContext from "../../context/goods.context";
import "./style.css";


/**
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.imageSrc
 * @param {number} props.cost
 */
const GoodsComponent = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { addGoods, removeGoods } = useContext(GoodsContext);
  

  const onClick = () => {
    setIsSelected((prevIsSelected) => {
      const newValue = !prevIsSelected;

      if (newValue) {
        addGoods(props);
      } else {
        removeGoods(props);
      }
      return newValue;
    });
  };

  const classNames = ["goods"];

  if (isSelected) {
    classNames.push("selected");
  }

  return (
    <div className={classNames.join(" ")} onClick={onClick}>
      <img alt="" src={props.imageSrc} title={props.title} />
      <div className="goods-cost">{props.cost}</div>
    </div>
  );
};

export default GoodsComponent;
