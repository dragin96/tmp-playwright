// @ts-check
const { test, expect } = require('@playwright/test');
const {LoginPage} = require("../pages/loginPage");
const {ProductsPage} = require("../pages/productsPage");
const {ProductCard} = require("../components/productCard");

test('Авторизация с корректным данными', async ({ page }) => {
  // arrange
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const validUser = {
    login: 'standard_user',
    password: 'secret_sauce'
  }
  await loginPage.open();
  // act
  await loginPage.submitForm(validUser);
  // assert
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  const card = new ProductCard(page, 1);
  await card.clickByTitle();
  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
});
