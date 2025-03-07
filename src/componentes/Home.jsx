import { useState } from "react";
import "swiper/css";
import DiasAcumulativos from "./dias";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  const [Load, setLoad] = useState({
    favorite: false,
  });
  const loadClick = (event) => {
    const { name, checked } = event.target;
    setLoad({
      favorite: name === "favorite" ? checked : Load.favorite,
    });
    console.log(Load.favorite);
  };

  function mudarFoto(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  var lista = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  var listaNova = mudarFoto(lista);
  console.log(listaNova);

  return (
    <div className="Appp">
      <main>
        <h2 className="euteamo">❤️❤️EU TE AMO há..</h2>
        <DiasAcumulativos clasesumir={`${Load.favorite}dias `} />
        <div className={`${Load.favorite}header header`}>
          <Swiper slidesPerView={1} loop={true} autoplay={true}>
            {lista.map((item) => (
              <SwiperSlide>
                <div className="stack">
                  <div className="card">
                    <div className="image">
                      <img
                        src={`../assets/${item}.jpeg`}
                        alt="oi"
                        className="imagem"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
        <div className={`${Load.favorite}botao botao`}>
          <input
            type="checkbox"
            id="favorite"
            name="favorite"
            value="favorite-button"
            checked={Load.favorite}
            onChange={loadClick}
          />
          <label for="favorite" className="container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div className="action">
              <span className="option-1">melhores momentos </span>
              <span className="option-2">melhores momentos </span>
            </div>
          </label>
        </div>
      </main>
      <footer className={`${Load.favorite}footer`}>
        <p>
          {" "}
          oi vidinha, eu quero lembrar você do quanto é incrível, forte e
          maravilhosa. Desde o momento em que entrou na minha vida, tudo ganhou
          mais cor, mais sentido e mais amor. tu que ilumina os meus dias com um
          sorriso, que me inspira e me ensina, a cada instante, o verdadeiro
          significado do amor. Não há palavras suficientes para expressar o
          quanto sou grato por ter você ao meu lado, por compartilhar sonhos,
          risadas e até os momentos difíceis, que ficam mais leves só por você
          estar aqui. Meu coração transborda de amor por você, e hoje, mais do
          que nunca, quero te lembrar que você merece tudo de mais lindo no
          mundo. Que seus dias sejam repletos de felicidade, que seus sonhos se
          realizem e que eu possa estar sempre ao seu lado, segurando sua mão e
          te amando mais a cada instante. Feliz Dia das Mulheres, meu bem! Você
          é única, especial e o maior presente que a vida me deu. 💖
        </p>
      </footer>
    </div>
  );
}

export default Home;
