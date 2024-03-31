const {test, expect} = require('@playwright/test')

exports.SafetyResearchPage = 

class safetyResearchPage
{
    constructor(page)
    {
        this.page = page;
        researchDescription = page.locator('#ModelIntro-2');
        researchImg = page.getByRole('img', { name: 'Inside a Volvo Cars testing' });
        moreThan40YearTitle = page.locator('#ImageWithText-2');
        moreThan40YearDesc = page.locator('#ImageWithText-2');
        moreThan40YearImg = page.getByRole('img', { name: 'Top-down view of a crash test.' });
        
    }

}