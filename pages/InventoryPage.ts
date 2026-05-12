import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    // Locators
    readonly title: Locator;
    readonly backpackAddBtn: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.backpackAddBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    // Assertions
    async verifyProductsPage(): Promise<void> {
        await expect(this.title).toHaveText('Products');
    }

    // Actions
    async addBackpackToCart(): Promise<void> {
        await this.backpackAddBtn.click();
    }

    async verifyCartCount(count: string): Promise<void> {
        await expect(this.cartBadge).toHaveText(count);
    } 
}