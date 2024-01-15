import React from 'react';
import '../../styles/homecard.css'; // Asegúrate de crear un archivo CSS con los estilos necesarios

const HomeCard = () => {
    return (


        <div className="menu-image-container" >

            <div className="card" style={{ margin: "20px" }}>
                <img
                    src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177484/Dise%C3%B1o_sin_t%C3%ADtulo__5___1_-removebg-preview_yeyq1h.png"
                    className="card-image"
                />
                <div className="card-body">
                    <h1 className="card-titule">Innovación y Sistemas Adaptativos</h1>

                    <p className="card-info" style={{ color: "white", fontFamily: "Poppins, sans-serif" }}>
                        La innovación está en el corazón de todo lo que hacemos. Nos dedicamos a crear sistemas adaptativos que no solo responden a los cambios del mercado, sino que también los anticipan, asegurando que nuestros clientes siempre estén un paso adelante.
                    </p>
                </div>
            </div>

            <div className="card" style={{ margin: "20px" }}>
                <img
                    src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177485/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_j2hrcm.png"
                    className="card-image"
                />
                <div className="card-body">
                    <h1 className="card-titule" style={{ marginTop: "1cm" }}>
                        Infraestructuras de Mercado Avanzadas
                    </h1>

                    <p className="card-info" style={{ color: "white", fontFamily: "Poppins, sans-serif" }}>
                        Nuestra infraestructura de mercado 'Quantum Market' es un testimonio de nuestro compromiso con la calidad y la innovación. Este sistema utiliza lo último en tecnología para ofrecer resultados óptimos y soluciones personalizadas para cada cliente.
                    </p>
                </div>
            </div>

            <div className="card" style={{ margin: "20px" }}>
                <img
                    src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177226/Dise%C3%B1o_sin_t%C3%ADtulo_7_1_ajutgk.png"
                    className="card-image"
                />
                <div className="card-body">
                    <h1 className="card-titule" style={{ marginTop: "1cm" }}>
                        Tecnología de Vanguardia: Drones y Robots
                    </h1>

                    <p className="card-info" style={{ color: "white", fontFamily: "Poppins, sans-serif" }}>
                        En Criptosasun, también estamos a la vanguardia en el uso de tecnología de hardware adaptativo, incluyendo drones y robots. Estas herramientas nos permiten ofrecer servicios más eficientes y efectivos, adaptándonos a las necesidades cambiantes del mercado y de nuestros clientes.
                    </p>
                </div>
            </div>


        </div>

    );
};

export default HomeCard;
