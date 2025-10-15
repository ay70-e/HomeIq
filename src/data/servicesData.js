export const servicesByCategory = {
  cleaning: [
    {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    description: 'General cleaning for rooms, floors, and furniture.',
    image: '/icons/house.png',
    price: 15000,
    available: true
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    description: 'Degreasing appliances and cleaning surfaces.',
    image: '/icons/kitchen.png',
    price: 12000,
    available: false
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    description: 'Sanitizing toilets, sinks, and tiles.',
    image: '/icons/wiping.png',
    price: 10000,
    available: true
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    description: 'Detailed cleaning for all areas before events or after travel.',
    image: '/icons/cleaning-mop.png',
    price: 20000,
    available: false
  },
  {
    id: 'window-cleaning',
    name: 'Window Cleaning',
    description: 'Cleaning windows inside and outside with streak-free finish.',
    image: 'data:image/png;base64,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',
    price: 8000,
    available: true
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    description: 'Vacuuming and deep cleaning carpets to remove dirt and stains.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6ERbfTRbBd1676LXe-Qv5Zx7b2Pshjifvw&s',
    price: 12000,
    available: true
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    description: 'Professional cleaning of sofas and upholstery.',
    image: 'data:image/png;base64,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',
    price: 10000,
    available: false
  },
  {
    id: 'garage-cleaning',
    name: 'Garage Cleaning',
    description: 'Sweeping, washing, and organizing garages.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLLW1BV7zX9qi8JnVIZROcT_e60GVJv_xXw&s',
    price: 15000,
    available: true
  }
  ],

  maintenance: [
    {
      id: 'electrical-repair',
      name: 'Electrical Repair',
      description: 'Fix switches, sockets, and lighting issues.',
      image: '/icons/web-maintenance.png',
      price: 18000,
      available: true
    },
    {
      id: 'plumbing-repair',
      name: 'Plumbing Repair',
      description: 'Fix leaks, install faucets, and unclog drains.',
      image: '/icons/web-maintenance.png',
      price: 16000,
      available: false
    },
    {
      id: 'ac-maintenance',
      name: 'AC Maintenance',
      description: 'Clean filters, refill gas, and fix cooling issues.',
      image: '/icons/web-maintenance.png',
      price: 25000,
      available: true
    },
    {
      id: 'appliance-repair',
      name: 'Appliance Repair',
      description: 'Repair refrigerators, washing machines, and ovens.',
      image: '/icons/web-maintenance.png',
      price: 22000,
      available: true
    }
  ],

  gardening: [
    {
      id: 'lawn-trimming',
      name: 'Lawn Trimming',
      description: 'Trim grass and shape garden edges.',
      image: '/icons/watering.png',
      price: 8000,
      available: true
    },
    {
      id: 'plant-care',
      name: 'Plant Care',
      description: 'Watering, fertilizing, and pest control.',
      image: '/icons/watering.png',
      price: 9000,
      available: false
    },
    {
      id: 'tree-pruning',
      name: 'Tree Pruning',
      description: 'Cut dead branches and shape trees.',
      image: '/icons/watering.png',
      price: 10000,
      available: true
    },
    {
      id: 'garden-cleanup',
      name: 'Garden Cleanup',
      description: 'Remove weeds, leaves, and debris.',
      image: '/icons/watering.png',
      price: 11000,
      available: true
    }
  ],

  moving: [
    {
      id: 'furniture-packing',
      name: 'Furniture Packing',
      description: 'Wrap and protect furniture for safe transport.',
      image: '/icons/moving_10809671.png',
      price: 17000,
      available: true
    },
    {
      id: 'local-moving',
      name: 'Local Moving',
      description: 'Move items within the city with trusted movers.',
      image: '/icons/moving_10809671.png',
      price: 30000,
      available: false
    },
    {
      id: 'long-distance-moving',
      name: 'Long Distance Moving',
      description: 'Transport belongings across cities or regions.',
      image: '/icons/moving_10809671.png',
      price: 45000,
      available: true
    },
    {
      id: 'moving-assistance',
      name: 'Moving Assistance',
      description: 'Help with lifting, organizing, and setup.',
      image: '/icons/moving_10809671.png',
      price: 20000,
      available: true
    }
  ]
};