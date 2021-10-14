import React from 'react';
import Layout from '../components/navbar/layout';
import CardSpin from '../components/card';
import './style.css';

export default function CardFlip() {
    return (
        <Layout>
            <body className="Body">
                <CardSpin /> 
            </body>
        </Layout>
    )
}
