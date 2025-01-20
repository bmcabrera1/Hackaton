import { TypeAnimation } from "react-type-animation";

const Page = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <img src="/home-4.png" alt="Avatar" className="w-[700px] h-[700px]" />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Ven y conoce sobre, <br />
            <TypeAnimation
              sequence={[
                "Tus peliculas favoritas",
                1000,
                "Tus actores favoritos",
                1000,
                "Datos que no conocias",
                1000,
                "Y disfruta de BoxTime",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-m md:text-xl md:mx-0 md:mb-8">
            Bienvenido a BoxTime, una plataforma que te acerca con tus peliculas
            y actores favoritos.
          </p>

          <p className="mx-auto mb-2 text-m md:text-xl md:mx-0 md:mb-8">
            Box time es una plataforma que te permite concer de cerca detalles
            que no sabias acerca de tus peliculas y actores favoritos, disfruta
            de todo el contenido y vive una experiencia increible disfrutando de
            todo nuestro contenido.
          </p>

          <div className="flex items-center justify-center gap-2 md:justify-start md:gap-10">
            <a
              href="/more"
              className=" center px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-black/50"
            >
              Datos que no conocias
            </a>
            <a
              href="/more"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Disfruta nuestro catálogo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
``;
