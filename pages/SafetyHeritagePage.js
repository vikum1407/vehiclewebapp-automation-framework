const {test, expect} = require('@playwright/test')

exports.SafetyHeritagePage = 

class safetyHeritagePage
{
    constructor(page)
    {
        this.page = page;
        haritageDescription = page.locator('#ModelIntro-2');
        threePointSafetyBeltTitle = page.locator('#ImageWithText-1');
        threePointSafetyBeltDesc = page.locator('#ImageWithText-1');
        threePointSafetyBeltImg = page.getByRole('img', { name: 'The three-point safety belt' });
        rearwardFacingChildSeatTitle = page.locator('#ImageWithText-2');
        rearwardFacingChildSeatDesc = page.locator('#ImageWithText-2');
        rearwardFacingChildSeatImg = page.getByRole('img', { name: 'A rearward-facing child seat' });
    }
}