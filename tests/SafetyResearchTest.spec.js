import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyResearchPage } from '../pages/SafetyResearchPage';

test.beforeEach(async ({ page }) => {
    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    await volvoCommonUtil.gotoPage();
});

test('Validate safety research page', async ({ page }) => {

    const safetyResearchPage = new SafetyResearchPage(page);     

    await safetyResearchPage.clickSafetyResearchTab();
    await safetyResearchPage.validateResearchDescription();
    await safetyResearchPage.validateResearchImg();
    expect(await page.screenshot()).toMatchSnapshot("safetyResearchPage.png");
    await safetyResearchPage.validateMoreThan40YearTitle();
    
    await safetyResearchPage.validateMoreThan40YearDesc();
    await safetyResearchPage.validateMoreThan40YearImg();
});