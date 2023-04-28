describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Rahvaraamat website', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://rahvaraamat.ee/');

    cy.get(':nth-child(2) > .styles_carouselHeader__3EedN > .styles_title__3CJ0X').should('include.text', 'Nädala TOP raamatud');
    cy.get(':nth-child(2) > .styles_carouselHeader__3EedN > .styles_buttonContainer__cjxze > .styles_raLinkButtonWrapper__C2FoW > .styles_raLinkButton__1UTyU').should('include.text', 'Vaata kõiki');


    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.styles_mobileHeader__1ZXrA > .styles_searchBarWrapper__1vw0u > .styles_searchFormWrapper__1i4Mb > .styles_searchBar__3anWV > .styles_searchButtonsWrapper__2wGAP > :nth-child(1) > .styles_button__1pwFl').should('have.attr', 'aria-label', 'Search');
    cy.get(':nth-child(2) > .styles_carousel__28dNJ > .styles_tabs__dpIrj > .styles_tabsWrapper__2X2JX > .styles_nav__8ReFH > :nth-child(3) > span').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .styles_carouselHeader__3EedN > .styles_buttonContainer__cjxze > .styles_raLinkButtonWrapper__C2FoW > .styles_raLinkButton__1UTyU').click();
    cy.get('.styles_openMobileFiltersWrapper__1MND-').should('have.class', 'styles_openMobileFiltersWrapper__1MND-');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Sportland website', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://sportland.ee/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.Button-AcceptAll').click();
    cy.get('.PromoMessage-CloseButton').click();
    cy.get('.Notification-Button').click();
    cy.get(':nth-child(2) > [data-content-type="text"] > p > .UniqueSellingPointWrapper > :nth-child(2)').should('have.attr', 'href', '/id#join-now');
    cy.get('#clerkWishlistButton281257 > .ProductWishlistButton').should('have.class', 'ProductCard-WishlistButton');
    cy.get(':nth-child(2) > [data-content-type="text"] > .widget > a').should('have.attr', 'href', '/naised');
    /* ==== End Cypress Studio ==== */
  });
})