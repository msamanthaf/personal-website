// cypress/integration/web.spec.js

describe("Web Application", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/"); // Update with your actual URL
		Cypress.on("uncaught:exception", (err, runnable) => {
			// Ignore the error and prevent Cypress from failing the test
			return false;
		});
	});

	it("should have a header with navigation links", () => {
		cy.get("header").should("exist");
		cy.get(".header-nav").should("exist");
		cy.get(".header-nav a").should("have.length", 3); // Assuming you have three navigation links
	});

	it("should have a profile section", () => {
		cy.get("#profile").should("exist");
		cy.get("#profile h1").should("have.text", "MARIE");
		cy.get("#profile h2 h3").should("have.text", "SAM");
	});

	it('should have an "About" section with an image', () => {
		cy.get(".about").should("exist");
		cy.get(".about img").should("exist");
	});

	it("should have a portfolio section with project sliders", () => {
		cy.get("#portfolio").should("exist");
		cy.get(".image-slider .slides-div").should(
			"have.length.greaterThan",
			0
		);
	});

	it("should have a contact section with a form", () => {
		cy.get("#contact").should("exist");
		cy.get(".screen-body form").should("exist");
		cy.get("#name").should("exist");
		cy.get("#email").should("exist");
		cy.get("#msg").should("exist");
		cy.get(".sendbutton button").should("exist");
	});
});
