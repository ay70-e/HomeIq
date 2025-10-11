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