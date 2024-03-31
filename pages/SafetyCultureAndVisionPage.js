const {test, expect} = require('@playwright/test')
const fs = require('fs');
const path = require('path');


const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyCultureAndVisionPage = 

class safetyCultureAndVisionPage
{
    constructor(page)
    {
        this.page = page;
        this.visonMainDescription = this.page.locator('#ModelIntro-2');
        this.visonImg = this.page.getByRole('img', { name: 'Three people having a chat' });
        this.cofounderSaying = this.page.locator('#ImageWithText-1');
        this.cofounderImg = this.page.getByRole('img', { name: 'A vintage shot of two' });
        this.safetyDNATitle = this.page.locator('#ImageWithText-2');
        this.safetyDNADescription = this.page.locator('#ImageWithText-2');
        this.futureSafetyTitle = this.page.locator('#ModelIntro-3');
        this.futureSafetyDescription = this.page.locator('#ModelIntro-3');
        this.zeroCollisionsTitle = this.page.locator('#MediaHighlights-1');
        this.zeroCollisionsDescription = this.page.locator('#MediaHighlights-1');
        this.zeroCollisionsImg = this.page.getByRole('img', { name: 'Digital rendering of two cars' });
        this.worldOfDataTitle = this.page.locator('#MediaHighlights-1');
        this.worldOfDataDescription = this.page.locator('#MediaHighlights-1');
        this.worldOfDataImg =  this.page.getByRole('img', { name: 'A man inspecting a crash-test' });
        this.pioneeringInnovationsTitle = this.page.locator('#TextStatement-1');
        this.pioneeringInnovationsImg = this.page.getByText('Ideas that change the world');
        this.pioneeringInnovationsDesc = this.page.locator('#ModelIntro-4');
        this.supportTitle = this.page.locator('#ImageWithText-3');
        this.supportDescription = this.page.locator('#ImageWithText-3');
        this.supportImg = this.page.getByRole('img', { name: 'A digital rendering of a' });
    }

    async validatevisonMainDescription(){
        await expect(this.visonMainDescription).toContainText(testData.descriptionText);
    }

    async validateVisionImage(){
        await expect(this.visonImg).toBeVisible();
    }
    
    async validateCofounderSaying(){
        await expect(this.cofounderSaying).toContainText(testData.cofounderSaying);
    }

    async validateCofounderImg(){
        await expect(this.cofounderImg).toBeVisible();
    }

    async validateSafetyDNATitle(){
        await expect(this.safetyDNATitle).toContainText(testData.safetyDNATitle);
    }

    async validateSafetyDNADescription(){
        await expect(this.safetyDNADescription).toContainText(testData.safetyDNADescription);
    }

    async validateFutureSafetyTitle(){
        await expect(this.futureSafetyTitle).toContainText(testData.futureSafetyTitle);
    }

    //-----------------

    async validateFutureSafetyDescription(){
        await expect(this.futureSafetyDescription).toContainText(testData.futureSafetyDescription);
    }

    async validateZeroCollisionsTitle(){
        await expect(this.zeroCollisionsTitle).toContainText(testData.zeroCollisionsTitle);
    }

    async validateZeroCollisionsDescription(){
        await expect(this.zeroCollisionsDescription).toContainText(testData.zeroCollisionsDescription);
    }

    async validateZeroCollisionsImg(){
        await expect(this.zeroCollisionsImg).toBeVisible();
    }

    async validateWorldOfDataTitle(){
        await expect(this.worldOfDataTitle).toContainText(testData.worldOfDataTitle);
    }

    async validateWorldOfDataDescription(){
        await expect(this.worldOfDataDescription).toContainText(testData.worldOfDataDescription);
    }

    async validateWorldOfDataImg(){
        await expect(this.zeroCollisionsImg).toBeVisible();
    }
    
    async validatePioneeringInnovationsTitle(){
        await expect(this.pioneeringInnovationsTitle).toContainText(testData.pioneeringInnovationsTitle);
    }

    async validatePioneeringInnovationsDesc(){
        await expect(this.pioneeringInnovationsDesc).toContainText(testData.pioneeringInnovationsDesc);
    }

    async validatePioneeringInnovationsImg(){
        await expect(this.pioneeringInnovationsImg).toBeVisible();
    }

    async validateSupportTitle(){
        await expect(this.supportTitle).toContainText(testData.supportTitle);
    }

    async validateSupportDescription(){
        await expect(this.supportDescription).toContainText(testData.supportDescription);
    }

    async validateSupportImg(){
        await expect(this.supportImg).toBeVisible();
    }

}