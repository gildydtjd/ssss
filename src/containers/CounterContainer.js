import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const OnIncrease = () => {
    dispatch(increase());
  };

  const OnDecrease = () => {
    dispatch(decrease());
  };
  return (
    <Counter number={number} OnDecrease={OnDecrease} OnIncrease={OnIncrease} />
  );
}

export default CounterContainer;
