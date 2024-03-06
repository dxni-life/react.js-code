const plantdata = [
    {
      name: "Aloe Vera",
      potSize: "Small to medium (6-8 inches)",
      waterRequirements: "Every 2-3 weeks, less in winter",
      sunlightExposure: "Direct sunlight",
      fact: "Aloe vera gel has healing and soothing properties.",
      imageUrl: "/images/aloe-vera.jpg"
    },
    {
      name: "Anthurium",
      potSize: "Medium (6-8 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Bright, indirect light",
      fact: "Anthuriums are known for their shiny red spathes and dark green leaves.",
      imageUrl: "/images/anthurium.jpg"
    },
    // B
    {
      name: "Bird of Paradise",
      potSize: "Large (10-14 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Bright, direct to indirect light",
      fact: "Bird of paradise plants can grow tall and are known for their large, banana-like leaves.",
      imageUrl: "/images/bird-of-paradise.jpg"
    },
    {
      name: "Boston Fern",
      potSize: "Medium (8-10 inches)",
      waterRequirements: "Keep consistently moist",
      sunlightExposure: "Indirect light",
      fact: "Boston ferns prefer high humidity environments.",
      imageUrl: "/images/boston-fern.jpg"
    },
    // C
    {
      name: "Chinese Evergreen",
      potSize: "Medium (8-10 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Low to medium light",
      fact: "Chinese evergreens can tolerate low light conditions well.",
      imageUrl: "/images/chinese-evergreen.jpg"
    },
    {
      name: "Croton",
      potSize: "Medium to large (8-12 inches)",
      waterRequirements: "Keep soil moist in growing season",
      sunlightExposure: "Bright, indirect light",
      fact: "Crotons are known for their vibrant, multicolored leaves.",
      imageUrl: "/images/croton.jpg"
    },
    // D
    {
      name: "Dracaena",
      potSize: "Medium to large (8-12 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Low to bright indirect light",
      fact: "Dracaena plants are popular for their air-purifying qualities.",
      imageUrl: "/images/dracaena.jpg"
    },
    // E
    {
      name: "English Ivy",
      potSize: "Small to medium (6-8 inches)",
      waterRequirements: "Keep soil lightly moist",
      sunlightExposure: "Indirect light",
      fact: "English ivy is a versatile and hardy vine known for its climbing ability.",
      imageUrl: "/images/english-ivy.jpg"
    },
    // F
    {
      name: "Fiddle Leaf Fig",
      potSize: "Large (10-12 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Bright indirect light",
      fact: "Fiddle leaf figs are popular for their large, decorative leaves.",
      imageUrl: "/images/fiddle-leaf-fig.jpg"
    },
    // G
    {
      name: "Golden Pothos",
      potSize: "Small to medium (6-8 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Low to bright indirect light",
      fact: "Golden pothos is known for its heart-shaped green leaves with variegation in yellow.",
      imageUrl: "/images/golden-pothos.jpg"
    },
    // H
    {
      name: "Hoya",
      potSize: "Small to medium (4-8 inches)",
      waterRequirements: "Every 2-3 weeks",
      sunlightExposure: "Bright, indirect light",
      fact: "Hoya plants, also known as wax plants, are known for their thick, waxy leaves.",
      imageUrl: "/images/hoya.jpg"
    },  
    {
        name: "Ivy (English Ivy)",
        potSize: "Small to medium (6-8 inches)",
        waterRequirements: "Keep soil evenly moist",
        sunlightExposure: "Indirect light",
        fact: "English Ivy is a versatile climber and can purify indoor air.",
        imageUrl: "/images/ivy.jpg"
      },
      {
        name: "Jade Plant",
        potSize: "Small to medium (5-8 inches)",
        waterRequirements: "Every 2-3 weeks, allow soil to dry out between waterings",
        sunlightExposure: "Full sun to partial shade",
        fact: "Jade plants are succulents known for their thick, fleshy leaves, symbolizing prosperity.",
        imageUrl: "/images/jade-plant.jpg"
      },
      {name: "Kentia Palm",
      potSize: "Large (10-14 inches)",
      waterRequirements: "Every 1-2 weeks",
      sunlightExposure: "Low to bright indirect light",
      fact: "Kentia palm is favored for its elegant fronds and tolerance of low light.",
      imageUrl: "/images/kentia-palm.jpg"
    },
      {
        name: "Maidenhair Fern",
        potSize: "Medium (6-8 inches)",
        waterRequirements: "Keep consistently moist",
        sunlightExposure: "Indirect light",
        fact: "Maidenhair ferns have delicate, lacy leaves and prefer high humidity.",
        imageUrl: "/images/maidenhair-fern.jpg"
      },
      {
        name: "Nerve Plant",
        potSize: "Small (4-6 inches)",
        waterRequirements: "Keep soil consistently moist",
        sunlightExposure: "Low to medium indirect light",
        fact: "Nerve plants are known for their striking vein patterns on the leaves.",
        imageUrl: "/images/nerve-plant.jpg"
      },
      {
        name: "Orchid",
        potSize: "Small to medium (5-8 inches)",
        waterRequirements: "Every 1-2 weeks, allow to dry out between waterings",
        sunlightExposure: "Bright, indirect light",
        fact: "Orchids are diverse and can bloom for months with proper care.",
        imageUrl: "/images/orchid.jpg"
      },
      {
        name: "Peace Lily",
        potSize: "Medium (7-8 inches)",
        waterRequirements: "Once a week",
        sunlightExposure: "Shade to partial shade",
        fact: "Peace lilies can bloom throughout the year.",
        imageUrl: "/images/peace-lily.jpg"
      },
      {
        name: "Quill Plant",
        potSize: "Medium (6-10 inches)",
        waterRequirements: "Every 2-3 weeks",
        sunlightExposure: "Bright, indirect light",
        fact: "Quill plants are known for their unique, spiky appearance.",
        imageUrl: "/images/quill-plant.jpg"
      },
      {
        name: "Rubber Plant",
        potSize: "Large (10-12 inches)",
        waterRequirements: "Every 1-2 weeks",
        sunlightExposure: "Indirect, bright light",
        fact: "Rubber plants are effective at removing toxins from the air.",
        imageUrl: "/images/rubber-plant.jpg"
      },
      {
        name: "Snake Plant",
        potSize: "Medium (8-10 inches)",
        waterRequirements: "Every 2-3 weeks",
        sunlightExposure: "Low to indirect sunlight",
        fact: "Snake plants can help purify the air.",
        imageUrl: "/images/snake-plant.jpg"
      },
      {
        name: "Tillandsia (Air Plant)",
        potSize: "Varies",
        waterRequirements: "Mist several times a week",
        sunlightExposure: "Bright, indirect light",
        fact: "Air plants don't need soil to grow, making them unique houseplants.",
        imageUrl: "/images/tillandsia.jpg"
      },
      {
        name: "Umbrella Plant",
        potSize: "Medium to large (8-12 inches)",
        waterRequirements: "Every 1-2 weeks",
        sunlightExposure: "Indirect light to partial shade",
        fact: "Umbrella plants can reach several feet in height and prefer humid environments.",
        imageUrl: "/images/umbrella-plant.jpg"
      },
      {
        name: "Venus Flytrap",
        potSize: "Small (4-6 inches)",
        waterRequirements: "Keep soil moist, use distilled water",
        sunlightExposure: "Full sun",
        fact: "Venus Flytraps are carnivorous plants known for their trap-like leaves.",
        imageUrl: "/images/venus-flytrap.jpg"
      },
      {
        name: "Wax Plant",
        potSize: "Small to medium (4-8 inches)",
        waterRequirements: "Every 2-3 weeks",
        sunlightExposure: "Bright, indirect light",
        fact: "Wax plants have thick, waxy leaves and produce fragrant flowers.",
        imageUrl: "/images/wax-plant.jpg"
      },
      {
        name: "Xerographica (Air Plant)",
        potSize: "Varies",
        waterRequirements: "Mist or soak weekly",
        sunlightExposure: "Bright, indirect light",
        fact: "Xerographica is a larger air plant known for its silver foliage and impressive size.",
        imageUrl: "/images/xerographica.jpg"
      },
      {
        name: "Yucca",
        potSize: "Large (10-14 inches)",
        waterRequirements: "Every 2-3 weeks",
        sunlightExposure: "Full sun to partial shade",
        fact: "Yucca plants are drought-tolerant and can store water in their trunks.",
        imageUrl: "/images/yucca.jpg"
      },
      {
        name: "ZZ Plant",
        potSize: "Medium (8-10 inches)",
        waterRequirements: "Every 2-3 weeks",
        sunlightExposure: "Low to bright indirect light",
        fact: "ZZ plants are known for their drought tolerance.",
        imageUrl: "/images/zz-plant.jpg"
      },
]
    export default plantdata;
  