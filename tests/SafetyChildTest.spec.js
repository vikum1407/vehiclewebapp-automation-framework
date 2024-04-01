import { test, expect } from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyChildPage } from '../pages/SafetyChildPage';


test('Validate highlight main image and description', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyChildPage = new SafetyChildPage(page);     

    await volvoCommonUtil.gotoPage();
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


