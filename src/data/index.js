const USERS = {
  1: {
    id: 1,
    username: "Alexia Jane",
    avatar: require("../../assets/images/users/32.jpeg"),
  },
  2: {
    id: 2,
    username: "Jacky Depp",
    avatar: require("../../assets/images/users/35.jpeg"),
  },
  3: {
    id: 3,
    username: "Thor Odison",
    avatar: require("../../assets/images/users/tho.png"),
  },
  4: {
    id: 4,
    username: "Spider Man",
    avatar: require("../../assets/images/users/spi.png"),
  },
  5: {
    id: 5,
    username: "Panther",
    avatar: require("../../assets/images/users/pa.png"),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: "21 May, 2022",
    author: USERS[1],
    rating: 7,
    text: "Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur",
  },
  2: {
    id: 2,
    date: "14 July, 2022",
    author: USERS[2],
    rating: 9.1,
    text: "Lorem ipsum dolor sit amet.",
  },
  3: {
    id: 3,
    date: "30 July, 2022",
    author: USERS[3],
    rating: 9.7,
    text: "Lorem ipsum dolor sit amet.",
  },
  4: {
    id: 4,
    date: "1 December, 2022",
    author: USERS[4],
    rating: 9.1,
    text: "Lorem ipsum dolor sit amet.",
  },
  5: {
    id: 5,
    date: "14 September, 2022",
    author: USERS[5],
    rating: 9.1,
    text: "Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt",
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: "Argos in Cappadocia",
    image: require("../../assets/images/hotels/cp-1.jpeg"),
    location: "Turkey, Cappadocia",
    rating: 9,
    pricePeerDay: "130$",
  },
  2: {
    id: 2,
    title: "Sultan Cave Suites",
    image: require("../../assets/images/hotels/cp-2.jpeg"),
    location: "Turkey, Cappadocia",
    rating: 9.3,
    pricePeerDay: "230$",
  },
  3: {
    id: 3,
    title: "Villa Brunella",
    image: require("../../assets/images/hotels/capri-1.jpeg"),
    location: "Italy, Capri",
    rating: 9.4,
    pricePeerDay: "280$",
  },
  4: {
    id: 4,
    title: "Hotel La Floridiana",
    image: require("../../assets/images/hotels/capri-2.jpeg"),
    location: "Italy, Capri",
    rating: 9.3,
    pricePeerDay: "190$",
  },
  5: {
    id: 5,
    title: "Le Taha'a by Pearl Resorts",
    image: require("../../assets/images/hotels/polynesia-1.jpeg"),
    location: "Polynesia, Bora Bora",
    rating: 9.2,
    pricePeerDay: "250$",
  },
  6: {
    id: 6,
    title: "Le Meridien Bora Bora",
    image: require("../../assets/images/hotels/polynesia-2.jpeg"),
    location: "Polynesia, Bora Bora",
    rating: 9.4,
    pricePeerDay: "270$",
  },
  7: {
    id: 7,
    title: "InterContinental Phuket Resort",
    image: require("../../assets/images/hotels/phuket-1.jpg"),
    location: "Thailand, Phuket",
    rating: 9.2,
    pricePeerDay: "210$",
  },
  8: {
    id: 8,
    title: "The Nai Harn",
    image: require("../../assets/images/hotels/phuket-2.jpeg"),
    location: "Thailand, Phuket",
    rating: 9.4,
    pricePeerDay: "430$",
  },
  9: {
    id: 9,
    title: "Hotel Poseidon",
    image: require("../../assets/images/hotels/ac-1.jpeg"),
    location: "Italy, Amalfi Coast",
    rating: 9.2,
    pricePeerDay: "330$",
  },
  10: {
    id: 10,
    title: "Le Agavi Hotel",
    image: require("../../assets/images/hotels/ac-2.jpeg"),
    location: "Italy, Amalfi Coast",
    rating: 9.4,
    pricePeerDay: "350$",
  },
  11: {
    id: 11,
    title: "Hotel Casa 1800 Granada",
    image: require("../../assets/images/hotels/granada-1.jpeg"),
    location: "Spain, Granada",
    rating: 9.2,
    pricePeerDay: "230$",
  },
  12: {
    id: 12,
    title: "Parador de Granada",
    image: require("../../assets/images/hotels/granada-2.jpeg"),
    location: "Spain, Granada",
    rating: 9.4,
    pricePeerDay: "120$",
  },

  13: {
    id: 13,
    title: "Konansou",
    image: require("../../assets/images/hotels/cb-1.jpeg"),
    location: "Japan, Cherry blossoms",
    rating: 9.2,
    pricePeerDay: "740$",
  },
  14: {
    id: 14,
    title: "Shuhokaku Kogetsu",
    image: require("../../assets/images/hotels/cb-2.jpeg"),
    location: "Japan, Cherry blossoms",
    rating: 9.4,
    pricePeerDay: "240$",
  },
  15: {
    id: 15,
    title: "H???i An hotel",
    image: require("../../assets/images/hotels/hoi-an-hotel.jpg"),
    location: "H???i An, Viet Nam",
    rating: 9.4,
    pricePeerDay: "240$",
  },
  16: {
    id: 16,
    title: "H???i An hotel",
    image: require("../../assets/images/hotels/hoi-an-hotel.jpg"),
    location: "H???i An, Viet Nam",
    rating: 9.4,
    pricePeerDay: "240$",
  },
  17: {
    id: 17,
    title: "Nha Trang hotel",
    image: require("../../assets/images/hotels/nt.png"),
    location: "Nha Trang,Kh??nh H??a",
    rating: 9.4,
    pricePeerDay: "260$",
  },
  18: {
    id: 18,
    title: "Nha Trang hotel",
    image: require("../../assets/images/hotels/nt2.png"),
    location: "Nha Trang,Kh??nh H??a",
    rating: 9.2,
    pricePeerDay: "260$",
  },
  19: {
    id: 19,
    title: "Nha Trang hotel",
    image: require("../../assets/images/hotels/nt3.png"),
    location: "Nha Trang,Kh??nh H??a",
    rating: 9.0,

    pricePeerDay: "230$",
  },
  20: {
    id: 20,
    title: "H??? Long hotel",
    image: require("../../assets/images/hotels/hl.png"),
    location: "H??? Long,Qu???ng Ninh",
    rating: 9.0,

    pricePeerDay: "230$",
  },
  21: {
    id: 21,
    title: "H??? Long hotel",
    image: require("../../assets/images/hotels/hl2.png"),
    location: "H??? Long,Qu???ng Ninh",
    rating: 9.0,

    pricePeerDay: "230$",
  },
  22: {
    id: 22,
    title: "H??? Long hotel",
    image: require("../../assets/images/hotels/hl3.png"),
    location: "H??? Long,Qu???ng Ninh",
    rating: 9.0,

    pricePeerDay: "230$",
  },
  23: {
    id: 23,
    title: "Phong Nha Resort",
    image: require("../../assets/images/hotels/pnha.png"),
    location: "Phong Nha K??? B??ng",
    rating: 9.8,
    pricePeerDay: "200$",
  },
  24: {
    id: 24,
    title: "Phong Nha Resort",
    image: require("../../assets/images/hotels/pnha2.png"),
    location: "Phong Nha K??? B??ng",
    rating: 9.8,
    pricePeerDay: "300$",
  },
};

export const TOP_PLACES = [
  {
    id: 100,
    image: require("../../assets/images/trips/phnha.png"),
    title: "Phong Nha K??? B??ng ",
    location: "Qu???ng B??nh",
    description:
      "Phong Nha-K??? B??ng n???m ??? m???t khu v???c n??i ???? v??i r???ng kho???ng 201.000 ha thu???c l??nh th??? Vi???t Nam, khu v???c l??nh th??? L??o ti???p gi??p v?????n qu???c gia n??y c??ng c?? di???n t??ch n??i ???? v??i kho???ng 200.001 ha.",
    rating: 9.9,
    gallery: [
      require("../../assets/images/trips/phna2.png"),
      require("../../assets/images/trips/phna3.png"),
    ],
    hotels: [HOTELS[23], HOTELS[24]],
    reviews: [REVIEWS[3], REVIEWS[4]],
  },
  {
    id: 101,
    image: require("../../assets/images/trips/cau.png"),
    title: "C???u V??ng ",
    location: "???? N???ng",
    description:
      "C???u V??ng l?? t??n m???t c??y c???u b??? h??nh d??i kho???ng 150 m (kho???ng 490 ft) t???i khu ngh??? d?????ng B?? N??, ???? N???ng, Vi???t Nam.[3][4] N???m ??? ????? cao kho???ng 1.414 m (so v???i m???c n?????c bi???n) tr??n n??i B?? N??,[5][6] c???u n???i li???n tr???m c??p treo v???i c??c khu v?????n kh??c c???a khu ngh??? d?????ng. ??? gi???a c???u c?? hai b??n tay l???n ???????c thi c??ng b???ng l???p r??p khung x????ng v?? ?????p v???a v??o b??n ngo??i ????? t???o ??i???m nh???n cho c??y c???u",
    rating: 9.4,
    gallery: [
      require("../../assets/images/trips/c22.png"),
      require("../../assets/images/trips/c3.png"),
    ],
    hotels: [HOTELS[23], HOTELS[24]],
    reviews: [REVIEWS[3], REVIEWS[4]],
  },
  {
    id: 91,
    image: require("../../assets/images/trips/Vinh-Ha-Long.jpg"),
    title: "V???nh H??? Long",
    location: "Vi???t Nam",
    description:
      "V???nh H??? Long l?? m???t v???nh nh??? thu???c ph???n b??? t??y v???nh B???c B??? t???i khu v???c bi???n ????ng B???c Vi???t Nam, bao g???m v??ng bi???n ?????o c???a th??nh ph??? H??? Long thu???c t???nh Qu???ng Ninh.",
    rating: 9.0,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[3], REVIEWS[4], REVIEWS[1]],
    hotels: [HOTELS[20], HOTELS[21], HOTELS[22]],
  },
  {
    id: 8,
    image: require("../../assets/images/trips/2082f59465c39094ce90bebd0fcf8fa7.jpeg"),
    title: "Amalfi Coast",
    location: "Italy",
    description:
      "The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more",
    rating: 9.4,
    gallery: [
      require("../../assets/images/trips/3722dd4614a5a58f2ec8ebf17c22f76d.jpeg"),
      require("../../assets/images/trips/af933a359582704eee05be198e882be0.jpeg"),
    ],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[9], HOTELS[10]],
  },
  {
    id: 4,
    image: require("../../assets/images/trips/922a0cb274208ccd234f6c14f2174b8b.jpeg"),
    title: "Granada",
    location: "Spain",
    description:
      "Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain",
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[3]],
    hotels: [HOTELS[11], HOTELS[12]],
  },
  {
    id: 6,
    image: require("../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg"),
    title: "Cherry blossoms",
    location: "Japan",
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[5]],
    hotels: [HOTELS[13], HOTELS[14]],
  },
];

export const PLACES = [
  {
    id: 1,
    image: require("../../assets/images/trips/hoiann.jpg"),
    title: "H???i An",
    location: "Vi???t Nam",
    description:
      "H???i An l?? m???t th??nh ph??? tr???c thu???c t???nh Qu???ng Nam, Vi???t Nam Ph??? c??? H???i An t???ng l?? m???t th????ng c???ng qu???c t??? s???m u???t, g???m nh???ng di s???n ki???n tr??c ???? c?? t??? h??ng tr??m n??m tr?????c, ???????c UNESCO c??ng nh???n l?? di s???n v??n h??a th??? gi???i t??? n??m 1999.",
    rating: 9.0,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[3], REVIEWS[4], REVIEWS[1]],
    hotels: [HOTELS[15]],
  },
  {
    id: 8,
    image: require("../../assets/images/trips/nh???.jpg"),
    title: "Nha Trang",
    location: "Vi???t Nam",
    description:
      "Nha Trang l?? m???t th??nh ph??? ven bi???n v?? l?? trung t??m ch??nh tr???, kinh t???, v??n h??a, khoa h???c k??? thu???t v?? du l???ch c???a t???nh Kh??nh H??a, Vi???t Nam.",
    rating: 9.0,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[4], REVIEWS[1]],
    hotels: [HOTELS[17], HOTELS[18], HOTELS[19]],
  },
  {
    id: 9,
    image: require("../../assets/images/trips/Vinh-Ha-Long.jpg"),
    title: "V???nh H??? Long",
    location: "Vi???t Nam",
    description:
      "V???nh H??? Long l?? m???t v???nh nh??? thu???c ph???n b??? t??y v???nh B???c B??? t???i khu v???c bi???n ????ng B???c Vi???t Nam, bao g???m v??ng bi???n ?????o c???a th??nh ph??? H??? Long thu???c t???nh Qu???ng Ninh.",
    rating: 9.0,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[3], REVIEWS[4], REVIEWS[1]],
    hotels: [HOTELS[20], HOTELS[21], HOTELS[22]],
  },

  {
    id: 5,
    image: require("../../assets/images/trips/645d5f28e26c7de2a280f71db15c2141.jpeg"),
    title: "Cappadocia",
    location: "Turkey",
    description:
      "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.",
    rating: 9.2,
    gallery: [
      require("../../assets/images/trips/4c73f37e70dded978374960fb29360f2.jpeg"),
      require("../../assets/images/trips/55608c7000bb15d24ee022f3d3f0bf8a.jpeg"),
      require("../../assets/images/trips/c68a4484f89d0c087ebdaa43629d2a7a.jpeg"),
    ],
    reviews: [REVIEWS[3], REVIEWS[2]],
    hotels: [HOTELS[1], HOTELS[2]],
  },
  {
    id: 2,
    image: require("../../assets/images/trips/eea622430834cb64b900c2f03e5be6b8.jpeg"),
    title: "Capri",
    location: "Italy",
    description:
      "Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.",
    rating: 9.1,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[1], REVIEWS[4], REVIEWS[2]],
    hotels: [HOTELS[3], HOTELS[4]],
  },
  {
    id: 3,
    image: require("../../assets/images/trips/0e627c12c05e4dd93ab122d618ea7849.jpeg"),
    title: "Bora Bora",
    location: "Polynesia",
    description:
      "Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.",
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2], REVIEWS[4], REVIEWS[3]],
    hotels: [HOTELS[5], HOTELS[6]],
  },
  {
    id: 7,
    image: require("../../assets/images/trips/c2dcbb54ca9316831b0f6ed4d4136dda.jpeg"),
    title: "Phuket",
    location: "Thailand",
    description:
      "Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand",
    rating: 9.2,
    gallery: [],
    reviews: [REVIEWS[5], REVIEWS[3], REVIEWS[4], REVIEWS[2]],
    hotels: [HOTELS[7], HOTELS[8]],
  },
];
export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_HOTELS = [...Object.values(HOTELS)].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
