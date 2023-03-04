const initialState = [
  {
    id: 11,
    device_name: 1,
    alias: 1,
    type: "Snow",
    port: "Jon",
    ip_address: 35,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 21,
    device_name: 2,
    alias: 2,
    type: "Lannister",
    port: "Cersei",
    ip_address: 42,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 31,
    device_name: 3,
    alias: 3,
    type: "Lannister",
    port: "Jaime",
    ip_address: 45,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 41,
    device_name: 4,
    alias: 4,
    type: "Stark",
    port: "Arya",
    ip_address: 16,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 51,
    device_name: 5,
    alias: 5,
    type: "Targaryen",
    port: "Daenerys",
    ip_address: null,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 61,
    device_name: 6,
    alias: 6,
    type: "Melisandre",
    port: null,
    ip_address: 150,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 71,
    device_name: 7,
    alias: 7,
    type: "Clifford",
    port: "Ferrara",
    ip_address: 44,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 81,
    device_name: 8,
    alias: 8,
    type: "Frances",
    port: "Rossini",
    ip_address: 36,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 92,
    device_name: 9,
    alias: 9,
    type: "Roxie",
    port: "Harvey",
    ip_address: 65,
    status: "Offline",
    detail: "Detail",
  },
  {
    id: 12,
    device_name: 1,
    alias: 1,
    type: "Snow",
    port: "Jon",
    ip_address: 35,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 22,
    device_name: 2,
    alias: 2,
    type: "Lannister",
    port: "Cersei",
    ip_address: 42,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 32,
    device_name: 3,
    alias: 3,
    type: "Lannister",
    port: "Jaime",
    ip_address: 45,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 42,
    device_name: 4,
    alias: 4,
    type: "Stark",
    port: "Arya",
    ip_address: 16,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 52,
    device_name: 5,
    alias: 5,
    type: "Targaryen",
    port: "Daenerys",
    ip_address: null,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 62,
    device_name: 6,
    alias: 6,
    type: "Melisandre",
    port: null,
    ip_address: 150,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 72,
    device_name: 7,
    alias: 7,
    type: "Clifford",
    port: "Ferrara",
    ip_address: 44,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 82,
    device_name: 8,
    alias: 8,
    type: "Frances",
    port: "Rossini",
    ip_address: 36,
    status: "Online",
    detail: "Detail",
  },
  {
    id: 92,
    device_name: 9,
    alias: 9,
    type: "Roxie",
    port: "Harvey",
    ip_address: 65,
    status: "Offline",
    detail: "Detail",
  },
];

export function dummyReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
