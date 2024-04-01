const {test, expect} = require('@playwright/test')
const fs = require('fs');
const path = require('path');


const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyResearchPage = 

class safetyResearchPage
{
    constructor(page)
    {
        this.page = page;
        this.researchDescription = this.page.locator('#ModelIntro-2');
        this.researchImg = this.page.getByRole('img', { name: 'Inside a Volvo Cars testing' });
        this.moreThan40YearTitle = this.page.locator('#ImageWithText-2');
        this.moreThan40YearDesc = this.page.locator('#ImageWithText-2');
        this.moreThan40YearImg = this.page.getByRole('img', { name: 'Top-down view of a crash test.' });
        
    }

    async clickSafetyResearchTab(){
        await this.page.getByRole('link', { name: 'Research' }).click();
    }

    async validateResearchDescription(){
        await expect(this.researchDescription).toContainText(testData.researchDescription);
    }

    async validateResearchImg(){
        await expect(this.researchImg).toBeVisible();
    }

    async validateMoreThan40YearTitle(){
        await expect(this.moreThan40YearTitle).toContainText(testData.moreThan40YearTitle);
    }

    async validateMoreThan40YearDesc(){
        await expect(this.moreThan40YearDesc).toContainText(testData.moreThan40YearDesc);
    }

    async validateMoreThan40YearImg(){
        await expect(this.moreThan40YearImg).toBeVisible();
    }

}