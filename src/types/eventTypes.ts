export type EventType = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
  price: number;
  speakers: {
    name: string;
    role: string;
    image: string;
  }[];
};

export type CartItemType = EventType & {
  quantity: number;
};