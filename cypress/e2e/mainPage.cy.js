describe("main page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("song should have a title with an appropriate image", () => {
    cy.get(".song-container")
      .find("h2")
      .then((el) => {
        const songTitle = el.text();

        cy.get("img").should("have.attr", "alt", songTitle);
      });
  });

  it("should play next song by clicking on right angle button", () => {
    cy.get('[data-icon="angle-right"]').click();

    cy.get(".song-container")
      .find("h3")
      .then((el) => {
        const author = el.text();
        expect(author).to.eq("Aiguille");
      });
  });

  it("should play previous song by clicking on left angle button", () => {
    cy.get('[data-icon="angle-left"]').click();

    const src =
      "https://i.scdn.co/image/ab67616d0000b2732daef4d8de3e7d85cdd5c525";

    cy.get("img").should("have.attr", "src", src);
  });
});
