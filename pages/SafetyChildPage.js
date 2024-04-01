import { test, expect } from '@playwright/test';
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyChildPage = 

class safetyChildPage
{
    constructor(page)
    {
        this.page = page;
        this.childSafetyDescription = this.page.locator('#ModelIntro-2');
        this.childSafetyImg = this.page.getByRole('img', { name: 'A child sat leaning on a wall' });
        this.everyonesIncludeTitle = this.page.locator('#ImageWithText-1');
        this.everyonesIncludeDesc = this.page.locator('#ImageWithText-1');
        this.everyonesIncludeImg = this.page.getByRole('img', { name: 'A family with three children' });
        this.designedForLifeTitle = this.page.locator('#ModelIntro-3');
        this.designedForLifeDesc = this.page.locator('#ModelIntro-3');
        this.designedForLifeVideo = this.page.locator('#VideoWithPreview-1 button').filter({ hasText: 'WATCH FILM' });
        this.designedForLifeMoreBtn = this.page.locator('#CTALink-1').getByRole('link', { name: 'Read more' });
        this.frontSeatChildSafetyTitle = this.page.locator('#ModelIntro-4');
        this.frontSeatChildSafetyDesc = this.page.locator('#ModelIntro-4');
        this.frontSeatChildSafetyVideo = this.page.locator('button').filter({ hasText: 'WATCH FILM' });
        this.frontSeatChildSafetyMoreBtn = this.page.locator('#CTALink-2').getByRole('link', { name: 'Read more' });
        this.childSeatsTitle = this.page.locator('#ImageWithText-2');
        this.childSeatsDesc = this.page.locator('#ImageWithText-2');
        this.childSeatsMoreBtn = this.page.getByLabel('Read more');

        /**second open page validation locators */
        protectingLittlePassTitle = page3.locator('h1');
        protectingLittlePassDesc = page3.locator('#ModelIntro-1');
        protectingLittleImg = page3.getByRole('img', { name: 'Image of a family with two' });
        infantSeatTitle = page3.locator('#ImageWithText-1');
        infantSeatSize = page3.locator('#ImageWithText-1')
        infantSeatDesc = page3.locator('#ImageWithText-1');
        infantSeatImg = page3.getByRole('img', { name: 'Volvo infant child seat for' });
    }

    async validateChildDescription(){
        await expect(this.childSafetyDescription).toContainText(testData.childSafetyDescription);
    }

    async validateChildSafetyImg(){
        await expect(this.childSafetyImg).toBeVisible();
    }
    
    async validateEveryonesIncludeTitle(){
        await expect(this.everyonesIncludeTitle).toContainText(testData.everyonesIncludeTitle);
    }

    async validateEveryonesIncludeDesc(){
        await expect(this.everyonesIncludeDesc).toContainText(testData.everyonesIncludeDesc);
    }

    async validateEveryonesIncludeImg(){
        await expect(this.everyonesIncludeImg).toBeVisible();
    }

    async validateDesignedForLifeTitle(){
        await expect(this.designedForLifeTitle).toContainText(testData.designedForLifeTitle);
    }

    async validateDesignedForLifeDesc(){
        await expect(this.designedForLifeDesc).toContainText(testData.designedForLifeDesc);
    }

    async validateDesignedForLifeVideo(){
        await expect(this.designedForLifeVideo).toBeVisible();
    }

    async validateDesignedForLifeMoreBtn(){
        await expect(this.designedForLifeMoreBtn).toBeEnabled();
    }

    async validateFrontSeatChildSafetyTitle(){
        await expect(this.frontSeatChildSafetyTitle).toContainText(testData.frontSeatChildSafetyTitle);
    }

    async validateFrontSeatChildSafetyDesc(){
        await expect(this.frontSeatChildSafetyDesc).toContainText(testData.frontSeatChildSafetyDesc);
    }

    async validateFrontSeatChildSafetyVideo(){
        await expect(this.frontSeatChildSafetyVideo).toBeVisible();
    }

    async validateFrontSeatChildSafetyMoreBtn(){
        await expect(this.frontSeatChildSafetyMoreBtn).toBeEnabled();
    }

    async validateChildSeatsTitle(){
        await expect(this.childSeatsTitle).toContainText(testData.childSeatsTitle);
    }

    async validateChildSeatsDesc(){
        await expect(this.childSeatsDesc).toContainText(testData.childSeatsDesc);
    }

    async validateChildSeatsMoreBtn(){
        await expect(this.childSeatsMoreBtn).toBeEnabled();
    }
}

// const page1Promise = page.waitForEvent('popup');
// await designedForLifeMoreBtn.click();
// const page1 = await page1Promise;

// const page2Promise = page.waitForEvent('popup');
// await frontSeatChildSafetyVideo.click();
// const page2 = await page2Promise;

// const page3Promise = page.waitForEvent('popup');
// await childSeatsMoreBtn.click();
// const page3 = await page3Promise;