import {useContext, useState} from 'react';
import CampIcon from './camp-table.png';
import './style.css';
import GoodsContext from '../../context/goods.context';

const CampComponent = ({ goodCount }) => {
 const { removeAllGoods } = useContext(GoodsContext);
 const { selectedGoods } = useContext(GoodsContext);

 const sum = selectedGoods.reduce((acc, cur) => {
  return acc + cur.cost;
 }, 0);

 const campClick = () => {
  if (sum === 40) {
  return  removeAllGoods()
  }
 };

 return (
  <div className="camp">
   <img src={CampIcon} onClick={campClick} />
  </div>
 );
};

export default CampComponent;