import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyHeritagePage } from '../pages/SafetyHeritagePage';


test.beforeEach(async ({ page }) => {
    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    await volvoCommonUtil.gotoPage();
});

test('Validate safety heritage page', async ({ page }) => {

    const safetyHeritagePage = new SafetyHeritagePage(page);     

    await safetyHeritagePage.clickSafetyHeritageTab();
    await safetyHeritagePage.validateHeritageDesc();
    await safetyHeritagePage.validateThreePointSafetyBTitle();
    await safetyHeritagePage.validateThreePointSafetyBDesc();
    
    await safetyHeritagePage.validateThreePointSafetyBImg();
    expect(await page.screenshot()).toMatchSnapshot("safetyHeritagePage.png");
    await safetyHeritagePage.validateRearwardFacingChildSeatTitle();
    await safetyHeritagePage.validateRearwardFacingChildSeatDesc();
    await safetyHeritagePage.validaterRearwardFacingChildSeatImg();

});