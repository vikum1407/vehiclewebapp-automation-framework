import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyCultureAndVisionPage } from '../pages/SafetyCultureAndVisionPage';



test('Validate culture and vision', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyCultureAndVisionPage = new SafetyCultureAndVisionPage(page);     

    await volvoCommonUtil.gotoPage();
    await safetyCultureAndVisionPage.clickVisionCultureTab();
    await safetyCultureAndVisionPage.validatevisonMainDescription();
    await safetyCultureAndVisionPage.validateVisionImage();
    await safetyCultureAndVisionPage.validateCofounderSaying();
    await safetyCultureAndVisionPage.validateCofounderImg();
    await safetyCultureAndVisionPage.validateSafetyDNATitle();
});

test('Validate future of safety leadership', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyCultureAndVisionPage = new SafetyCultureAndVisionPage(page);     

    await volvoCommonUtil.gotoPage();
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


