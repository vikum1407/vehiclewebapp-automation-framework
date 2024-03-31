const {test, expect} = require('@playwright/test')

class SafetyChildPage
{
    constructor(page)
    {
        this.page = page;
        childSafetyDescription = page.locator('#ModelIntro-2');
        childSafetyImg = page.getByRole('img', { name: 'A child sat leaning on a wall' });
        everyonesIncludeTitle = page.locator('#ImageWithText-1');
        everyonesIncludeDesc = page.locator('#ImageWithText-1');
        everyonesIncludeImg = page.getByRole('img', { name: 'A family with three children' });
        designedForLifeTitle = page.locator('#ModelIntro-3');
        designedForLifeDesc = page.locator('#ModelIntro-3');
        designedForLifeVideo = page.locator('#VideoWithPreview-1 button').filter({ hasText: 'WATCH FILM' });
        designedForLifeMoreBtn = page.locator('#CTALink-1').getByRole('link', { name: 'Read more' });
        frontSeatChildSafetyTitle = page.locator('#ModelIntro-4');
        frontSeatChildSafetyDesc = page.locator('#ModelIntro-4');
        frontSeatChildSafetyVideo = page.locator('button').filter({ hasText: 'WATCH FILM' });
        frontSeatChildSafetyMoreBtn = page.locator('#CTALink-2').getByRole('link', { name: 'Read more' });
        childSeatsTitle = page.locator('#ImageWithText-2');
        childSeatsDesc = page.locator('#ImageWithText-2');
        childSeatsMoreBtn = page.getByLabel('Read more');

        /**second open page validation locators */
        protectingLittlePassTitle = page3.locator('h1');
        protectingLittlePassDesc = page3.locator('#ModelIntro-1');
        protectingLittleImg = page3.getByRole('img', { name: 'Image of a family with two' });
        infantSeatTitle = page3.locator('#ImageWithText-1');
        infantSeatSize = page3.locator('#ImageWithText-1')
        infantSeatDesc = page3.locator('#ImageWithText-1');
        infantSeatImg = page3.getByRole('img', { name: 'Volvo infant child seat for' });




    }
}

const page1Promise = page.waitForEvent('popup');
await designedForLifeMoreBtn.click();
const page1 = await page1Promise;

const page2Promise = page.waitForEvent('popup');
await frontSeatChildSafetyVideo.click();
const page2 = await page2Promise;

const page3Promise = page.waitForEvent('popup');
await childSeatsMoreBtn.click();
const page3 = await page3Promise;