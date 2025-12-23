export interface Service {
  id: string;
  title: string;
  price: number;
}

export type SelectedItem = Service & {
  quantity: number;
};
