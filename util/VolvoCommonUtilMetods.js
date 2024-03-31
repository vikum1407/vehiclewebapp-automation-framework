import { test, expect } from '@playwright/test';
const exp = require('constants');

exports.VolvoCommonUtilMethods = 

class volvoCommonUtilMethods
{

    constructor(page){
        this.page = page;
    }

    async gotoPage() {
        try {
            await this.page.goto('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        } catch (error) {
            console.error('Error navigating to the page:', error);
        }
    }

    async textContainValidation(element, value){
        try {
            if (!this.page) {
                throw new Error('Page object is not defined.');
            }
            await expect(this.page.locator(element)).toContainText(value);
        } catch (error) {
            console.error('Error validating text:', error);
        }
    }

    async clickRejectCookies(){
        await page.getByRole('button', { name: 'Reject All' }).click();
    }

    async textFullValidation(element, value){
        try {
            if (!this.page) {
                throw new Error('Page object is not defined.');
            }
            await expect(this.page.locator(element)).toHaveText(value);
        } catch (error) {
            console.error('Error validating text:', error);
        }
    }

    async imageValidation(element){
        try {
            if (!this.page) {
                throw new Error('Page object is not defined.');
            }
            await expect(this.page.locator(element)).toBeVisible();
        } catch (error) {
            console.error('Error validating image:', error);
        }
    }

    async videoValidation(element, value){
        await expect(this.page.locator(element)).toBeVisible(value);
    }

    async buttonisActiveValidation(element){
        try {
            if (!this.page) {
                throw new Error('Page object is not defined.');
            }
            await expect(this.page.locator(element)).toBeEnabled();
        } catch (error) {
            console.error('Error validating image:', error);
        }
    }

    
}