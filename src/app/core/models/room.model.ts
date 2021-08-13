export interface RoomModel {
  id: string;
  type: string;
  count: string;
  price: string;
}

type RoomKeys = keyof RoomModel;

export interface RoomColumnHeader {
  name: RoomKeys;
  value: string;
}
