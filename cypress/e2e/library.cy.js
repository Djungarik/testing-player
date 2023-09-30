describe("library page", () => {
  it("should open library and select song", () => {
    cy.visit("/");

    cy.contains("Library").click();

    cy.get(".active-library").find(".library-song ").eq(1).click();

    cy.get(".active-library")
      .find(".selected")
      .find("h3")
      .then((h3) => {
        const songTitle = h3.text();

        cy.get(".song-container")
          .find("h2")
          .then((h2) => {
            expect(h2.text()).to.eq(songTitle);
          });

        //get a bug
        cy.get(".player")
          .find("svg")
          .eq(1)
          .should("have.class", "svg-inline--fa fa-pause fa-w-14 fa-2x play");
      });
  });
});
