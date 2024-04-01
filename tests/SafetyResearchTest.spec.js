import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyResearchPage } from '../pages/SafetyResearchPage';

test('Validate safety research page', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyResearchPage = new SafetyResearchPage(page);     

    await volvoCommonUtil.gotoPage();
    await safetyResearchPage.clickSafetyResearchTab();
    await safetyResearchPage.validateResearchDescription();
    await safetyResearchPage.validateResearchImg();
    expect(await page.screenshot()).toMatchSnapshot("safetyResearchPage.png");
    await safetyResearchPage.validateMoreThan40YearTitle();
    
    await safetyResearchPage.validateMoreThan40YearDesc();
    await safetyResearchPage.validateMoreThan40YearImg();
});