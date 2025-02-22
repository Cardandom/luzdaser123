import React from "react";
import imgSlider1 from "../assets/Us1.avif";
import imgSlider4 from "../assets/Us4.avif";

const AboutUs = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const delay = 5000; // 5 segundos
  // const intervalRef = useRef(null); // Guardar referencia del intervalo

  // const startInterval = () => {
  //   intervalRef.current = window.setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, delay);
  // };

  // // Iniciar intervalo en el montaje del componente
  // useEffect(() => {
  //   startInterval();
  //   return () => clearInterval(intervalRef.current); // Limpiar intervalo al desmontar
  // }, []);

  // // Reiniciar el intervalo al hacer clic en 'Next' o 'Prev'
  // const handleNext = () => {
  //   clearInterval(intervalRef.current); // Limpiar intervalo actual
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   startInterval(); // Reiniciar intervalo
  // };

  // const handlePrev = () => {
  //   clearInterval(intervalRef.current); // Limpiar intervalo actual
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  //   startInterval(); // Reiniciar intervalo
  // };

  return (
    <div className="w-full h-full mx-auto bg-gray-200/20 mt-20">
      <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
          <img
            src={imgSlider4}
            alt="aboutUs"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-5 mb-5">
          <h2 className="font-serif text-6xl text-center lg:text-left my-5">
            Sobre nosotros
          </h2>
          <p className="leading-snug lg:text-base lg:pr-5">
            A través de Eco Blog Real Estate & Construction VBA, creamos
            viviendas que combinan calidad, belleza y diseño innovador. Nuestro
            proyeco Reina Sofha en Paradera es un testimonio de nuestra visión:
            Lineas limpias, minimalismo elegante y una infraestructura de
            vanguardia
          </p>
          <p className="leading-snug lg:text-base lg:pr-5">
            JBSS ECO Real Estate te acompaña en la busqueda de tu hogar ideal en
            Aruba. Ya seas local o extrajero, nuestras oferta inmobiliaria se
            adapta a tus necesidades y estilo de vida.
          </p>
          <p className="leading-snug lg:text-base lg:pr-5">
            Somos el referente que impulsa el desarrollo de Aruba, brindando
            oportunidades de vivienda excepcionales para todos.
          </p>
        </div>
      </div>
      {/* seccion 2 */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
          <img
            src={imgSlider1}
            alt="aboutUs2"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-10 mb-5">
          <h2 className="font-serif text-6xl text-center lg:text-right my-5">
            Nuestros Servicios
          </h2>
          <p className="leading-snug lg:text-base text-left xl:text-right lg:pl-5">
            En estos momentos nuestros servicios, pasión y energíasestán
            volcadas en la creación de un Proyecto Residencialcon fecha
            determinada.
          </p>
          <button className="mx-auto flex bg-teal-500 text-white px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
