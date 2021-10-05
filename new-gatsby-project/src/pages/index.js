import React from "react";
import { Link } from 'gatsby';

const Greeting = () => {
  return(
    <div>
      <h1>Домашняя Страница</h1>
      <p>
      <Link to="/App">Шаблон №1</Link>
      </p>
      <p>
      <Link to="/demo">Шаблон №2</Link>
      </p>
    </div>
  );
};

export default Greeting; 