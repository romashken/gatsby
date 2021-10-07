import React from "react";
import { Link } from 'gatsby';

const Greeting = () => {
  return(
    <div>
      <h1>Домашняя Страница</h1>
      <p>
      <Link to="/App">Большой Фон</Link>
      </p>
      <p>
      <Link to="/demo">Шаблон №1</Link>
      </p>
      <p>
      <Link to="/second_task">Шаблон №2</Link>
      </p>
      <p>
      <Link to="/third_task">Шаблон №3</Link>
      </p>
      <p>
      <Link to="/fourth_task">Шаблон №4</Link>
      </p>
    </div>
  );
};

export default Greeting; 