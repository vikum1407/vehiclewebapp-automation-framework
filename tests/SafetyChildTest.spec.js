import { test, expect } from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyChildPage } from '../pages/SafetyChildPage';

test.beforeEach(async () => {
    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    await volvoCommonUtil.gotoPage();
});

test('Validate highlight main image and description', async ({ page }) => {

    const safetyChildPage = new SafetyChildPage(page);     

    await safetyChildPage.clickSafetyChildTab();
    expect(await page.screenshot()).toMatchSnapshot("safetyHighlightsPage.png");
    await safetyChildPage.validateChildDescription();
    await safetyChildPage.validateChildSafetyImg();
    await safetyChildPage.validateEveryonesIncludeTitle();
    await safetyChildPage.validateEveryonesIncludeDesc();
    await safetyChildPage.validateEveryonesIncludeImg();
    await safetyChildPage.validateDesignedForLifeTitle();
    await safetyChildPage.validateDesignedForLifeDesc();
    await safetyChildPage.validateDesignedForLifeVideo();
    await safetyChildPage.validateDesignedForLifeMoreBtn();
    await safetyChildPage.validateFrontSeatChildSafetyTitle();
    await safetyChildPage.validateFrontSeatChildSafetyDesc();
    await safetyChildPage.validateFrontSeatChildSafetyVideo();
    await safetyChildPage.validateFrontSeatChildSafetyMoreBtn();
    await safetyChildPage.validateChildSeatsTitle();
    await safetyChildPage.validateChildSeatsDesc();
    await safetyChildPage.validateChildSeatsMoreBtn();
});


