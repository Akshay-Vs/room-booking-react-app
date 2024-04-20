export type DealItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  city: string;
  state: string;
  isLiked: boolean;
};

export const getDeals = async () => {
  const data: DealItem[] = [
    {
      id: '86759675',
      name: 'Surfside Retreat',
      price: '250',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'San Diego',
      state: 'California',
      isLiked: false,
    },
    {
      id: '0786076',
      name: 'Sunshine Villa',
      price: '180',
      image:
        'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Miami',
      state: 'Florida',
      isLiked: false,
    },
    {
      id: '07600786',
      name: 'Lone Star Lodge',
      price: '200',
      image:
        'https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Austin',
      state: 'Texas',
      isLiked: true,
    },
    {
      id: '097806076',
      name: 'Empire Escape',
      price: '300',
      image:
        'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'New York City',
      state: 'New York',
      isLiked: false,
    },
    {
      id: '867590786',
      name: 'Pacific Paradise',
      price: '350',
      image:
        'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Honolulu',
      state: 'Hawaii',
      isLiked: true,
    },
    {
      id: '8675909785',
      name: 'Mountain Majesty',
      price: '280',
      image:
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Denver',
      state: 'Colorado',
      isLiked: false,
    },
    {
      id: '867594609',
      name: 'Beachfront Bliss',
      price: '400',
      image:
        'https://images.unsplash.com/photo-1646082142202-7a21d8f3cfb4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Maui',
      state: 'Hawaii',
      isLiked: false,
    },
    {
      id: '867590897',
      name: 'Winter Way',
      price: '320',
      image:
        'https://images.unsplash.com/photo-1583949465431-df3a60213db2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      city: 'Seward',
      state: 'Alaska',
      isLiked: true,
    },
  ];

  return data;
};
