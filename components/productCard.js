export class ProductCard {
    constructor(page, numPosition) {
        this.page = page;
        this.numPosition = numPosition;
        this.card = this.page.locator('[data-test="inventory-item"]').nth(this.numPosition);
        this.title = this.card.locator('[data-test="inventory-item-name"]');
        this.buttonAddToCard = this.card.getByText('Add to cart');
        this.buttonRemove = this.card.getByText('Remove');
        this.price = this.card.locator('[data-test="inventory-item-price"]');
    }

    async clickByTitle() {
        await this.title.click()
    }

    async addToCard(){
        await this.buttonAddToCard.click()
    }
}
