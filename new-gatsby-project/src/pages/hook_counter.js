import React from 'react';
import Counter from '../components/counter';
import './style.css';
import Layout from "../components/navbar/layout";

export default function App() {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
}