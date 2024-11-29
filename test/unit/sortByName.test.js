const sorting = import("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit", () => {
  it("The function should not be sorted unless it is necessary", () => {
    const input = ["Гарри Поттер"];
    const expected = ["Гарри Поттер"];
    const result = sorting.sortByName(input);
    expect(result).toEqual(["Гарри Поттер"]);
  });
});
