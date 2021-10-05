import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import kitten from './floppa.jpg'

export default function Home () {
  return (
    <div>
      <figure className="position-relative">
        <img src={kitten} alt="kitten" className="img-fluid" />
          <figcaption>
            FOREST FLOPPA
          </figcaption>
      </figure>
    </div>
  );
}

