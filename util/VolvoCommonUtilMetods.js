const {test, expect} = require('@playwright/test');
const exp = require('constants');

exports.VolvoCommonUtilMethods = 

class volvoCommonUtilMethods
{

    constructor(page){
        this.page = page;
    }

    static async gotoPage(){
        await page.goto('https://www.volvocars.com/intl/v/car-safety/a-million-more')
    }

    static async descriptionValidation(element, value){
        await expect(this.page.locator(element)).toHaveText(value);
    }

    static async photoValidation(element, value){
        await expect(this.page.locator(element)).toBeVisible(value);
    }

    static async videoValidation(element, value){
        await expect(this.page.locator(element)).toBeVisible(value);
    }
}