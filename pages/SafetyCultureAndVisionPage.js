const {test, expect} = require('@playwright/test')

exports.SafetyCultureAndVisionPage = 

class safetyCultureAndVisionPage
{
    constructor(page)
    {
        this.page = page;
        visonMainDescription = page.locator('#ModelIntro-2');
        visonImg = page.getByRole('img', { name: 'Three people having a chat' });
        cofounderSaying = page.locator('#ImageWithText-1');
        cofounderImg = page.getByRole('img', { name: 'A vintage shot of two' });
        safetyDNATitle = page.locator('#ImageWithText-2');
        safetyDNADescription = page.locator('#ImageWithText-2');
        futureSafetyTitle = page.locator('#ModelIntro-3');
        futureSafetyDescription = page.locator('#ModelIntro-3');
        zeroCollisionsTitle = page.locator('#MediaHighlights-1');
        zeroCollisionsDescription = page.locator('#MediaHighlights-1');
        zeroCollisionsImg = page.getByRole('img', { name: 'Digital rendering of two cars' });
        worldOfDataTitle = page.locator('#MediaHighlights-1');
        worldOfDataDescription = page.locator('#MediaHighlights-1');
        worldOfDataImg =  page.getByRole('img', { name: 'A man inspecting a crash-test' });
        pioneeringInnovationsTitle = page.locator('#TextStatement-1');
        pioneeringInnovationsImg = page.getByText('Ideas that change the world');
        pioneeringInnovationsDesc = page.locator('#ModelIntro-4');
        supportTitle = page.locator('#ImageWithText-3');
        supportDescription = page.locator('#ImageWithText-3');
        supportImg = page.getByRole('img', { name: 'A digital rendering of a' });
    }

}