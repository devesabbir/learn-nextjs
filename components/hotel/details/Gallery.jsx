import Image from "next/image";

function Gallery() {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src="/assets/images/1.png"
          className="h-[400px]"
          alt=""
          width={500}
          height={500}
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image
            src="/assets/images/2.png"
            className="h-[400px]"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/3.png"
            className="h-[400px]"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/4.png"
            className="h-[400px]"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="/assets/images/5.png"
            className="h-[400px]"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
