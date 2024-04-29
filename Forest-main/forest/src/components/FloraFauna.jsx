import React from "react";

const FloraFauna = () => {
  return (
    <div className="text-white">
      <div className="w-[100vw] flex justify-center">
        <iframe
          className="object-cover h-[60vw] w-[100vw] pointer-events-none"
          src="https://www.youtube.com/embed/9pt_wpMqKVc?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-[100vw] flex justify-center flex-col items-center px-[5vw]">
        <h1 className="text-[2.5vw] pb-3">
          Welcome to Our World of Flora and Fauna
        </h1>
        <p>
          Step into the enchanting realm of flora and fauna, where nature's
          wonders unfold in breathtaking beauty and diversity. Our website is a
          gateway to the captivating world of plants and animals, where every
          species has a story to tell and every ecosystem holds secrets waiting
          to be discovered.
        </p>
        <br />
      </div>
      <div className="px-[2vw]">
        <h1 className="text-[2vw] pb-2">Discover the Marvels of Flora:</h1>
        <p>
          In our botanical haven, you'll encounter a kaleidoscope of plant life,
          from the towering giants of the forest to the delicate blooms of the
          meadow. Explore the intricate patterns of leaves, the vibrant hues of
          petals, and the fascinating adaptations that enable plants to thrive
          in diverse habitats. <br /> Learn about the wonders of photosynthesis,
          the remarkable process through which plants harness sunlight to
          produce energy, sustaining life on Earth. Delve into the fascinating
          world of plant reproduction, from the intricacies of pollination to
          the miracle of seed dispersal. <br />
          From the lush rainforests teeming with exotic orchids to the arid
          deserts adorned with resilient cacti, our website celebrates the
          incredible resilience and beauty of plant life in all its forms.
        </p>
        <br />
        <h1 className="text-[2vw] pb-2">Journey into the Realm of Fauna:</h1>
        <p>
          Embark on a wildlife adventure like no other as you explore the rich
          tapestry of animal life that inhabits our planet. From majestic
          predators to tiny insects, each creature plays a vital role in
          maintaining the delicate balance of nature. <br />
          Marvel at the grace of a soaring eagle, the stealth of a hunting big
          cat, or the playful antics of a troupe of monkeys swinging through the
          canopy. Dive into the depths of the ocean to encounter dazzling coral
          reefs, teeming with a kaleidoscope of marine life, from colorful fish
          to graceful sea turtles <br /> Our website offers insights into the
          fascinating behaviors and adaptations of animals, from complex social
          structures to ingenious survival strategies. Discover the wonders of
          migration, as millions of birds traverse continents in search of food
          and breeding grounds, or the intricate web of relationships that bind
          species together in intricate ecosystems.
        </p>
        <br />
        <h1 className="text-[2vw] pb-2">Conservation and Preservation:</h1>
        <p>
          {" "}
          At the heart of our website lies a commitment to conservation and
          preservation. We believe in the importance of protecting our planet's
          precious biodiversity for future generations to enjoy. Through
          informative articles, practical tips, and inspiring stories, we aim to
          empower individuals to take action to safeguard the natural world.{" "}
          <br /> Join us on a journey of discovery and wonder as we celebrate
          the extraordinary diversity of life on Earth. Together, let's unlock
          the mysteries of flora and fauna and ensure a brighter, more
          sustainable future for all. Welcome to our world of wonder.
        </p>
      </div>
    </div>
  );
};

export default FloraFauna;
