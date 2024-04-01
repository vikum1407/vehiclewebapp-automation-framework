const {test, expect} = require('@playwright/test');
const fs = require('fs');
const path = require('path');


const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyHeritagePage = 

class safetyHeritagePage
{
    constructor(page)
    {
        this.page = page;
        this.heritageDescription = this.page.locator('#ModelIntro-2');
        this.threePointSafetyBeltTitle = this.page.locator('#ImageWithText-1');
        this.threePointSafetyBeltDesc = this.page.locator('#ImageWithText-1');
        this.threePointSafetyBeltImg = this.page.getByRole('img', { name: 'The three-point safety belt' });
        this.rearwardFacingChildSeatTitle = this.page.locator('#ImageWithText-2');
        this.rearwardFacingChildSeatDesc = this.page.locator('#ImageWithText-2');
        this.rearwardFacingChildSeatImg = this.page.getByRole('img', { name: 'A rearward-facing child seat' });
    }

    async clickSafetyHeritageTab(){
        await this.page.getByRole('link', { name: 'Heritage' }).click();
    }

    async validateHeritageDesc(){
        await expect(this.heritageDescription).toContainText(testData.heritageDescription);
    }

    async validateThreePointSafetyBTitle(){
        await expect(this.threePointSafetyBeltTitle).toContainText(testData.threePointSafetyBeltTitle);
    }

    async validateThreePointSafetyBDesc(){
        await expect(this.threePointSafetyBeltDesc).toContainText(testData.threePointSafetyBeltDesc);
    }

    async validateThreePointSafetyBImg(){
        await expect(this.threePointSafetyBeltImg).toBeVisible();
    }

    async validateRearwardFacingChildSeatTitle(){
        await expect(this.rearwardFacingChildSeatTitle).toContainText(testData.rearwardFacingChildSeatTitle);
    }

    async validateRearwardFacingChildSeatDesc(){
        await expect(this.rearwardFacingChildSeatDesc).toContainText(testData.rearwardFacingChildSeatDesc);
    }

    async validaterRearwardFacingChildSeatImg(){
        await expect(this.rearwardFacingChildSeatImg).toBeVisible();
    }
}