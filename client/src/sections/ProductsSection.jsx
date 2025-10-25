// client/src/sections/ProductsSection.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Importa el componente Card
import PetAccessoriesImg from '../assets/imagesCards/imagen-pet-accessories.png';
import MechanicalPartsImg from '../assets/imagesCards/imagen-mechanical-parts.png';
import PlantersImg from '../assets/imagesCards/imagen-planters.png';
import LightingImg from '../assets/imagesCards/imagen-lighting.png';
import GiftsImg from '../assets/imagesCards/imagen-gifts.png';
import MerchandiseImg from '../assets/imagesCards/imagen-merchandise.png';
import PrototypingImg from '../assets/imagesCards/imagen-prototyping.png';
import ToolsImg from '../assets/imagesCards/imagen-tools.png';

import '../styles/ProductsSection.css'; // Estilos específicos para la sección

const productsData = [
    {
        id: 'pet-accessories',
        title: 'Pet Accessories',
        description: 'Innovative pet solutions designed for modern homes',
        imageUrl: PetAccessoriesImg,
        color: '#42a5f5',
    },
    {
        id: 'custom-mechanical-parts',
        title: 'Custom Mechanical Parts',
        description: 'Precision-engineered replacement parts for automotive and machinery',
        imageUrl:MechanicalPartsImg,
        color: '#78909c', // Un gris para este placeholder
    },
    {
        id: 'designer-planters',
        title: 'Designer Planters',
        description: 'Stylish and sustainable planters to elevate your indoor and outdoor spaces',
        imageUrl: PlantersImg,
        color: '#66bb6a', // Un verde
    },
    {
        id: 'sculptural-lighting',
        title: 'Sculptural Lighting',
        description: 'Artistic lighting fixtures that are both functional and aesthetic statements',
        imageUrl: LightingImg,
        color: '#ffc107', // Un naranja/amarillo
    },
    {
        id: 'personalized-gifts',
        title: 'Personalized Gifts',
        description: 'Unique, custom-made gifts for every occasion and loved one',
        imageUrl: GiftsImg,
        color: '#ab47bc', // Un morado
    },
    {
        id: 'promotional-merchandise',
        title: 'Promotional Merchandise',
        description: 'Custom-branded items to boost your business and engage your audience',
        imageUrl: MerchandiseImg,
        color: '#ef5350', // Un rojo
    },
    {
        id: 'rapid-prototyping',
        title: 'Rapid Prototyping',
        description: 'Quick and efficient prototyping services to bring your ideas to life faster',
        imageUrl: PrototypingImg,
        color: '#42a5f5', // Otro azul
    },
    {
        id: 'functional-tools-accessories',
        title: 'Functional Tools & Accessories',
        description: 'Durable and ergonomic tools designed for everyday tasks and specialized needs',
        imageUrl: ToolsImg,
        color: '#78909c', // Otro gris
    },
];

const ProductsSection = () => {
    // Aquí podrías añadir lógica para filtrar/categorizar si lo necesitamos más adelante
    return (
        <section className="products-section">
            <h2 className="section-title">Nuestros Productos & Servicios</h2>
            {/* Aquí podríamos añadir los botones de filtro como en tu imagen */}
            {/* <div className="filter-buttons">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Consumer Products</button>
        <button className="filter-btn">B2B Solutions</button>
        <button className="filter-btn">Design Services</button>
      </div> */}

            <div className="products-grid">
                {productsData.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        color={product.color}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;