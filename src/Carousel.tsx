import { MouseEvent, useState } from "react";

interface IProps {
  images: string[];
}

const Carousel = ({ images }: { images: IProps }) => {
  const [active, setActive] = useState(0);
  const handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (e.target.dataset.index) {
      setActive(+e.target.dataset.index);
    }
  };
  return (
    <div className="carousel">
      <img data-testid="hero" src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <img
            onClick={(e) => handleIndexClick(e)}
            data-index={index}
            data-testid={`thumbnail${index}`}
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="amimal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
