import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyCultureAndVisionPage } from '../pages/SafetyCultureAndVisionPage';


test.beforeEach(async ({ page }) => {
    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    await volvoCommonUtil.gotoPage();
});

test('Validate culture and vision', async ({ page }) => {

    const safetyCultureAndVisionPage = new SafetyCultureAndVisionPage(page);     

    await safetyCultureAndVisionPage.clickVisionCultureTab();
    expect(await page.screenshot()).toMatchSnapshot("safetyHighlightsPage.png");
    await safetyCultureAndVisionPage.validatevisonMainDescription();
    await safetyCultureAndVisionPage.validateVisionImage();
    await safetyCultureAndVisionPage.validateCofounderSaying();
    await safetyCultureAndVisionPage.validateCofounderImg();
    await safetyCultureAndVisionPage.validateSafetyDNATitle();
});

test('Validate future of safety leadership', async ({ page }) => {

    const safetyCultureAndVisionPage = new SafetyCultureAndVisionPage(page);     

    await safetyCultureAndVisionPage.clickVisionCultureTab();
    await safetyCultureAndVisionPage.validateSafetyDNADescription();
    await safetyCultureAndVisionPage.validateFutureSafetyTitle();
    await safetyCultureAndVisionPage.validateFutureSafetyDescription();
    await safetyCultureAndVisionPage.validateZeroCollisionsTitle();
    await safetyCultureAndVisionPage.validateZeroCollisionsDescription();
    await safetyCultureAndVisionPage.validateZeroCollisionsImg();
    await safetyCultureAndVisionPage.validateWorldOfDataTitle();
    await safetyCultureAndVisionPage.validateWorldOfDataDescription();
    await safetyCultureAndVisionPage.validateWorldOfDataImg();
    await safetyCultureAndVisionPage.validatePioneeringInnovationsTitle();
    await safetyCultureAndVisionPage.validatePioneeringInnovationsDesc();
    await safetyCultureAndVisionPage.validatePioneeringInnovationsImg();
    await safetyCultureAndVisionPage.validateSupportTitle();
    await safetyCultureAndVisionPage.validateSupportDescription();
    await safetyCultureAndVisionPage.validateSupportImg();
});


