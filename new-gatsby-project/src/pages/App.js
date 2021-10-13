import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/navbar/layout";

import kitten from '../img/floppa.jpg'

export default function Home () {
  return (
    <div>
      <Layout>
        <figure className="position-relative">
          <img src={kitten} alt="kitten" className="img-fluid" />
            <figcaption>
              FOREST FLOPPA
            </figcaption>
        </figure>
      </Layout>
    </div>
  );
}

