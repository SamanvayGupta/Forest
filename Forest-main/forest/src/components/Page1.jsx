import React from "react";

const Page1 = () => {
  return (
    <>
      <div className="flex justify-center w-[100vw] overflow-hidden text-gray-100">
        <h1 className="text-[4vw] font-semibold py-[2vw] w-[90vw] font-['satisfy'] text-gray-100">
          "Forests are the lungs of our land, purifying the air and giving fresh
          strength to our people."
        </h1>
      </div>
      <div className="w-[100vw] flex justify-center">
      <iframe
      className="object-cover h-[60vw] w-[100vw] pointer-events-none"
        src="https://www.youtube.com/embed/CVHj7Wxhvdo?si=iQq1uBuWl5kAWtv5&autoplay=1&mute=1&loop=1&playlist=CVHj7Wxhvdo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>

      <p className="px-[2vw] text-gray-100 mb-11">
        India, a land of diverse cultures and rich heritage, is also home to
        some of the most breathtaking and ecologically significant forests on
        the planet. From the dense rainforests of the Western Ghats to the
        majestic Himalayan woodlands, India's forests are not only vital
        ecosystems but also repositories of unparalleled biodiversity and
        natural beauty. At our platform, we invite you to embark on a journey
        through India's forested landscapes, where every tree tells a story and
        every leaf whispers tales of centuries-old wisdom. Our platform is
        dedicated to celebrating and preserving these invaluable natural
        resources, offering a gateway to understanding their importance and the
        urgent need for their conservation. Through engaging content,
        captivating imagery, and insightful resources, we aim to illuminate the
        wonders of India's forests and the myriad ways in which they enrich our
        lives. Whether you're a nature enthusiast, a student of environmental
        science, or simply curious about the world around you, there's something
        here for everyone.
      </p>
    </>
  );
};

export default Page1;
