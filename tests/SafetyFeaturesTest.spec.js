import {test, expect} from '@playwright/test';
import { VolvoCommonUtilMethods } from '../util/VolvoCommonUtilMetods';
import { SafetyFeaturesPage } from '../pages/SafetyFeaturesPage';


test('Validate Volvo vehicle main features', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyFeaturesPage = new SafetyFeaturesPage(page);     

    await volvoCommonUtil.gotoPage();
    await safetyFeaturesPage.clickSafetyFeaturesTab();
    await safetyFeaturesPage.validateFeatureDescription();
    await safetyFeaturesPage.validateLindarImage();
    await safetyFeaturesPage.validateLidarTitle();
    await safetyFeaturesPage.validateLindarDescription();
    await safetyFeaturesPage.validateAutonomousDrivingTitle();
    await safetyFeaturesPage.validateAutonomousDescription();
    await safetyFeaturesPage.validateAutonomousImg();
    await safetyFeaturesPage.validateDrivingSyatemTitle();
    await safetyFeaturesPage.validateDrivingDescription();
    await safetyFeaturesPage.validateOccupantTitle();
    await safetyFeaturesPage.validateOccupantSensingDescription();
    await safetyFeaturesPage.validateProtectingDayTitle();
});

test('Validate protecting features', async ({ page }) => {

    const volvoCommonUtil = new VolvoCommonUtilMethods(page);
    const safetyFeaturesPage = new SafetyFeaturePage(page);     

    await volvoCommonUtil.gotoPage();
    await safetyFeaturesPage.clickSafetyFeaturesTab();
    expect(await page.screenshot()).toMatchSnapshot("safetyHighlightsPage.png");
    await safetyFeaturesPage.validateProtectingDayTitle();
    await safetyFeaturesPage.validateCollisionAvoidTitle();
    await safetyFeaturesPage.validateCollisionAvoidDescription();
    await safetyFeaturesPage.validateCollisionAvoidVideo();
    await safetyFeaturesPage.validateLaneKeepingAidTitle();
    await safetyFeaturesPage.validateLaneKeepingAidDesc();
    await safetyFeaturesPage.validateLaneKeepingAidVideo();
    await safetyFeaturesPage.validateRunOffRoadTitle();
    await safetyFeaturesPage.validateRunOffRoadDesc();
    await safetyFeaturesPage.validateRunOffRoadVideo();
    await safetyFeaturesPage.validateCrossTrafficAlertTitle();
    await safetyFeaturesPage.validateCrossTrafficAlertDesc();

    await safetyFeaturesPage.validateCrossTrafficAlertVideo();
    await safetyFeaturesPage.validateBlisSystemTitle();
    await safetyFeaturesPage.validateBlisSystemDesc();
    await safetyFeaturesPage.validateBlisSystemVideo();
    await safetyFeaturesPage.validateSurroundViewCameraTitle();
    await safetyFeaturesPage.validateSurroundViewCameraDesc();
    await safetyFeaturesPage.validateSurroundViewCameraImg();
    await safetyFeaturesPage.validateSpeedCapTitle();
    await safetyFeaturesPage.validateSpeedCapDesc();
    await safetyFeaturesPage.validateSpeedCapImg();
    await safetyFeaturesPage.validateCareKeyTitle();
    await safetyFeaturesPage.validateCareKeyDesc();

    await safetyFeaturesPage.validateCareKeyImg();
    await safetyFeaturesPage.validateConnectedSafetyTitle();
    await safetyFeaturesPage.validateConnectedSafetyDesc();
    await safetyFeaturesPage.validateConnectedSafetyImg();
    await safetyFeaturesPage.validateAirBagsTitle();
    await safetyFeaturesPage.validateAirBagsDesc();
    await safetyFeaturesPage.validateAirBagsImg();
});