import { test, expect } from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyHighlightsPage } from '../pages/SafetyHighlightsPage';


test.beforeEach(async () => {
    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    await volvoCommonUtil.gotoPage();
});

test('Validate highlight main image and description', async ({ page }) => {

    const safetyHighlightsPage = new SafetyHighlightsPage(page);     

    await safetyHighlightsPage.validateFirstDescription();
    await safetyHighlightsPage.validateMainImage();
    expect(await page.screenshot()).toMatchSnapshot("safetyHighlightsPage.png");
    await safetyHighlightsPage.validateAim();
});

test('Validate safety for drive', async ({ page }) => {

    const safetyHighlightsPage = new SafetyHighlightsPage(page);     

    await safetyHighlightsPage.validateSafeSpace();
    await safetyHighlightsPage.validateSafeSpaceTitle();
    await safetyHighlightsPage.validateFirstDescription();
    await safetyHighlightsPage.validateMainImage();
    
    //await safetyHighlightsPage.clickSafeAcclaimed();
    await safetyHighlightsPage.validateSafeAcclaimed();
    await safetyHighlightsPage.validateSafeAcclaimedTitle();
    await safetyHighlightsPage.validateSafeAcclaimedDescription();
    await safetyHighlightsPage.validateSafeAcclaimedImage();

    await safetyHighlightsPage.validateDBResearchButton();
    await safetyHighlightsPage.validateDBResearchTitle();
    await safetyHighlightsPage.validateDBResearchDescription();
    await safetyHighlightsPage.validateDBResearchImage();

    await safetyHighlightsPage.validateZeroColTitle();
    await safetyHighlightsPage.validateFirstDescription();
    await safetyHighlightsPage.validateMainImage();
});

test('Validate our learnings', async ({ page }) => {

    const safetyHighlightsPage = new SafetyHighlightsPage(page);     

    await safetyHighlightsPage.validateEvolutionTitle();
    await safetyHighlightsPage.validateEvolutionDesc();
    await safetyHighlightsPage.validateEvolutionImage();

    await safetyHighlightsPage.validateAutonomousDTitle();
    await safetyHighlightsPage.validateAutonomousDDesc();
    await safetyHighlightsPage.validateAutonomousDImage();

    await safetyHighlightsPage.validateRechargeVehicleTitle();
    await safetyHighlightsPage.validateNextslideBtn();
    await safetyHighlightsPage.validateAutonomousDImage();
    await safetyHighlightsPage.validateEC40Button();
    await safetyHighlightsPage.validateBackToTopButton();
    
});