import CarouselItem from "./CarouselItem";

function Carousel() {
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: 1600 }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        {/*Slide 1*/}
        <CarouselItem
          checked={"checked"}
          image={
            "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
          }
          content={
            'Stripy Zig Zag Jigsaw Pillow and Duvet Set'
          }
          id="carousel-1"
          prev='carousel-3'
          next='carousel-2'
          control='control-1'
        />
        {/*Slide 2*/}
        <CarouselItem
          image={
            "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80"
          }
          content={
            'Real Bamboo Wall Clock'
          }
          id="carousel-2"
          prev='carousel-1'
          next='carousel-3'
          control='control-2'
        />
        {/*Slide 3*/}
        <CarouselItem
          image={
            "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
          }
          content={
            'Brown and blue hardbound book'
          }
          id="carousel-3"
          prev='carousel-2'
          next='carousel-1'
          control='control-3'
        />
        {/* Add additional indicators for each slide*/}
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Carousel;
