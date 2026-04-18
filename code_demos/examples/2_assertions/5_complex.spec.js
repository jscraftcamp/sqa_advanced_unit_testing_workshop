test("toMatchObject", () => {
  const houseForSale = {
    bath: false,
    rooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
    },
  };

  expect(houseForSale).toMatchObject({
    kitchen: {
      amenities: expect.arrayContaining(["oven"]),
      wallColor: expect.stringMatching(/white|yellow/),
    },
  });
});
