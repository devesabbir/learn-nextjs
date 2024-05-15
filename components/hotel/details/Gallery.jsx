"use client";

import Portal from "@/components/modal/Portal";
import Image from "next/image";
import { useState } from "react";

function Gallery({ gallery }) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState();
  const newGallery = [...gallery];
  newGallery.shift();

  const handleOpen = (index = 0) => {
    setOpen(!open);
    setImageIndex(index);
  };

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          onClick={() => handleOpen()}
          src={gallery && gallery[0]}
          className="h-[400px] cursor-pointer"
          alt=""
          width={500}
          height={500}
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {newGallery?.map((item, i) => (
            <Image
              onClick={() => handleOpen(i + 1)}
              key={item}
              src={item}
              className="h-[400px] cursor-pointer"
              alt=""
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
      {open && (
        <Portal onHandleModal={handleOpen}>
          <Image
            onClick={handleOpen}
            src={gallery && gallery[imageIndex]}
            className="h-[500px] object-cover min-w-full"
            alt=""
            width={500}
            height={500}
          />
        </Portal>
      )}
    </section>
  );
}

export default Gallery;
