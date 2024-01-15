import React from 'react';
import '../../styles/homecard2.css'; // Asegúrate de crear un archivo CSS con los estilos necesarios

const HomeCard = () => {
    return (
        <>
            <img className="titulo-imagen2" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
            <div className="menuimagecontainer02" >

                <div className="card2" style={{ margin: "20px" }}>

                    <div className="cardbody1">
                        <img className='imgscard1' src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177484/Dise%C3%B1o_sin_t%C3%ADtulo__5___1_-removebg-preview_yeyq1h.png" alt="" />
                        <h1 className="card-titule2">Bateria Virtual</h1>

                        <p className="card-info2" style={{ color: "#4c4e52", fontFamily: "Poppins, sans-serif" }}>
                            <ul>
                                <li>Representación de las relaciones entre entornos complejos y la conducta de los agentes.</li>
                                <li>Evolución basada en Aprendizaje Reforzado y Algoritmos Genéticos.</li>
                                <li>Estructura apoyada en la Teoria de Categorías.</li>

                            </ul>
                        </p>
                    </div>
                </div>

                <div className="card2" style={{ margin: "20px" }}>

                    <div className="card-body1">
                        <img className='imgscard1' src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177226/Dise%C3%B1o_sin_t%C3%ADtulo_7_1_ajutgk.png" alt="" />
                        <h1 className="card-titule2" >
                            Quantum Market
                        </h1>

                        <p className="card-info2" >
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sit, nulla fugiat cumque </li>
                                <li>Evolución basada en Aprendizaje Reforzado y Algoritmos Genéticos.</li>
                                <li>Estructura apoyada en la Teoria de Categorías.</li>

                            </ul>
                        </p>
                    </div>
                </div>

                <div className="card2" style={{ margin: "20px" }}>

                    <div className="card-body1">
                        <img className='imgscard1' src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177485/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_j2hrcm.png" alt="" />
                        <h1 className="card-titule2">
                            Lorem ipsum dolor
                        </h1>

                        <p className="card-info2" style={{ color: "#4c4e52", fontFamily: "Poppins, sans-serif" }}>
                            <ul>
                                <li>Representación de las relaciones entre entornos complejos y la conducta de los agentes.</li>
                                <li>Evolución basada en Aprendizaje Reforzado y Algoritmos Genéticos.</li>
                                <li>Estructura apoyada en la Teoria de Categorías.</li>

                            </ul>
                        </p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default HomeCard;
