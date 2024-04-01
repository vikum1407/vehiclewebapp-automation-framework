import { test, expect } from '@playwright/test';
const fs = require('fs');
const path = require('path');


const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyFeaturesPage = 

class safetyFeaturesPage
{
    constructor(page)
    {
        this.page = page;
        this.safetyFeatureTab = this.page.getByRole('link', { name: 'Features' })
        this.featureDescription = this.page.locator('#TextStatement-1');
        this.lidarTitle = this.page.locator('#ImageWithText-1');
        this.lidarDescription = this.page.locator('#ImageWithText-1');
        this.lidarImg = this.page.getByRole('img', { name: 'A digital rendering of objects on a blue surface.' });
        this.autonomousdrivingTitle = this.page.locator('#ImageWithText-2');
        this.autonomousdrivingDescription = this.page.locator('#ImageWithText-2');
        this.autonomousdrivingImg = this.page.getByRole('img', { name: 'Digital rendering of two cars' });
        this.driverSystemTitle = this.page.locator('#ImageWithText-3');
        this.driverSystemDescription = this.page.locator('#ImageWithText-3');
        this.driverSystemImg = this.page.getByRole('img', { name: 'A digital rendering of a' });
        this.occupantSensingTitle = this.page.locator('#PromotionBackgroundImage-1');
        this.occupantSensingDescription = this.page.locator('#PromotionBackgroundImage-1');
        this.protectingDayTitle = this.page.locator('#TextStatement-2');
        this.collisionAvoidanceTitle = this.page.locator('#MediaHighlights-1');
        this.collisionAvoidanceDesc = this.page.locator('#MediaHighlights-1');
        this.collisionAvoidanceVideo = this.page.locator('#MediaHighlights-1 video');
        this.laneKeepingAidTitle = this.page.locator('#MediaHighlights-1');
        this.laneKeepingAidDesc = this.page.locator('#MediaHighlights-1');
        this.laneKeepingAidVideo = this.page.locator('#MediaHighlights-1').getByLabel('play').nth(1);
        this.runOffRoadTitle = this.page.locator('#MediaHighlights-1');
        this.runOffRoadDesc = this.page.locator('#MediaHighlights-1');
        this.runOffRoadVideo = this.page.locator('#MediaHighlights-1').getByLabel('play').nth(2);
        this.crossTrafficAlertTitle = this.page.locator('#MediaHighlights-2');
        this.crossTrafficAlertDesc = this.page.locator('#MediaHighlights-2');
        this.crossTrafficAlertVideo = this.page.locator('#MediaHighlights-2').getByLabel('play');
        this.blisSystemTitle = this.page.locator('#MediaHighlights-2');
        this.blisSystemDesc = this.page.locator('#MediaHighlights-2')
        this.blisSystemVideo = this.page.locator('#MediaHighlights-2').getByLabel('play').nth(1);
        this.surroundViewCameraTitle = this.page.locator('#MediaHighlights-2');
        this.surroundViewCameraDesc = this.page.locator('#MediaHighlights-2');
        this.surroundViewCameraImg = this.page.locator('#MediaHighlights-2 video').nth(2);
        this.speedCapTitle = this.page.locator('#ImageWithText-4');
        this.speedCapDesc = this.page.locator('#ImageWithText-4');
        this.speedCapImg = this.page.getByRole('img', { name: 'A Volvo car driving on a road' });
        this.careKeyTitle = this.page.locator('#ImageWithText-5');
        this.careKeyDesc = this.page.locator('#ImageWithText-5');
        this.careKeyImg = this.page.getByRole('img', { name: 'An orange Volvo key fob' });
        this.connectedSafetyTitle = this.page.locator('#MediaHighlights-3');
        this.connectedSafetyDesc = this.page.locator('#MediaHighlights-3');
        this.connectedSafetyImg = this.page.getByRole('img', { name: 'Volvo XC90 driving in a built' });
        this.airBagsTitle = this.page.locator('#MediaHighlights-3');
        this.airBagsDesc = this.page.locator('#MediaHighlights-3');
        this.airBagsImg = this.page.getByRole('img', { name: 'Chassis view of a car with' });
    }

    async clickSafetyFeaturesTab(){
        await this.page.getByRole('link', { name: 'Features' }).click();
    }

    async validateFeatureDescription(){
        await expect(this.featureDescription).toContainText(testData.featureDescription);
    }

    async validateLindarImage(){
        await expect(this.lidarImg).toBeVisible();
    }
    
    async validateLidarTitle(){
        await expect(this.lidarTitle).toContainText(testData.lidarTitle);
    }

    async validateLindarDescription(){
        await expect(this.lidarDescription).toContainText(testData.lidarDescription);
    }

    async validateAutonomousDrivingTitle(){
        await expect(this.autonomousdrivingTitle).toContainText(testData.autonomousdrivingTitle);
    }

    async validateAutonomousDescription(){
        await expect(this.autonomousdrivingDescription).toContainText(testData.autonomousdrivingDescription);
    }

    async validateAutonomousImg(){
        await expect(this.autonomousdrivingImg).toBeVisible();
    }

    async validateDrivingSyatemTitle(){
        await expect(this.driverSystemTitle).toContainText(testData.driverSystemTitle);
    }

    async validateDrivingDescription(){
        await expect(this.driverSystemDescription).toContainText(testData.driverSystemDescription);
    }

    async validateOccupantTitle(){
        await expect(this.occupantSensingTitle).toContainText(testData.occupantSensingTitle);
    }

    async validateOccupantSensingDescription(){
        await expect(this.occupantSensingDescription).toContainText(testData.occupantSensingDescription);
    }

    async validateProtectingDayTitle(){
        await expect(this.protectingDayTitle).toContainText(testData.protectingDayTitle);
    }

    async validateCollisionAvoidTitle(){
        await expect(this.collisionAvoidanceTitle).toContainText(testData.collisionAvoidanceTitle);
    }

    async validateCollisionAvoidDescription(){
        await expect(this.collisionAvoidanceDesc).toContainText(testData.collisionAvoidanceDesc);
    }
    
    async validateCollisionAvoidVideo(){
        await expect(this.collisionAvoidanceVideo).toBeVisible();
    }

    async validateLaneKeepingAidTitle(){
        await expect(this.laneKeepingAidTitle).toContainText(testData.laneKeepingAidTitle);
    }

    async validateLaneKeepingAidDesc(){
        await expect(this.laneKeepingAidDesc).toContainText(testData.laneKeepingAidDesc);
    }

    async validateLaneKeepingAidVideo(){
        await expect(this.laneKeepingAidVideo).toBeVisible();
    }

    async validateRunOffRoadTitle(){
        await expect(this.runOffRoadTitle).toContainText(testData.runOffRoadTitle);
    }

    async validateRunOffRoadDesc(){
        await expect(this.runOffRoadDesc).toContainText(testData.runOffRoadDesc);
    }

    async validateRunOffRoadVideo(){
        await expect(this.runOffRoadVideo).toBeVisible();
    }

    async validateCrossTrafficAlertTitle(){
        await expect(this.crossTrafficAlertTitle).toContainText(testData.crossTrafficAlertTitle);
    }

    async validateCrossTrafficAlertDesc(){
        await expect(this.crossTrafficAlertDesc).toContainText(testData.crossTrafficAlertDesc);
    }

    async validateCrossTrafficAlertVideo(){
        await expect(this.crossTrafficAlertVideo).toBeVisible();
    }

    async validateBlisSystemTitle(){
        await expect(this.blisSystemTitle).toContainText(testData.blisSystemTitle);
    }

    async validateBlisSystemDesc(){
        await expect(this.blisSystemDesc).toContainText(testData.blisSystemDesc);
    }

    async validateBlisSystemVideo(){
        await expect(this.blisSystemVideo).toBeVisible();
    }

    async validateSurroundViewCameraTitle(){
        await expect(this.surroundViewCameraTitle).toContainText(testData.surroundViewCameraTitle);
    }

    async validateSurroundViewCameraDesc(){
        await expect(this.surroundViewCameraDesc).toContainText(testData.surroundViewCameraDesc);
    }

    async validateSurroundViewCameraImg(){
        await expect(this.surroundViewCameraImg).toBeVisible();
    }
    
    async validateSpeedCapTitle(){
        await expect(this.speedCapTitle).toContainText(testData.speedCapTitle);
    }

    async validateSpeedCapDesc(){
        await expect(this.speedCapDesc).toContainText(testData.speedCapDesc);
    }

    async validateSpeedCapImg(){
        await expect(this.speedCapImg).toBeVisible();
    }

    async validateCareKeyTitle(){
        await expect(this.careKeyTitle).toContainText(testData.careKeyTitle);
    }

    async validateCareKeyDesc(){
        await expect(this.careKeyDesc).toContainText(testData.careKeyDesc);
    }

    async validateCareKeyImg(){
        await expect(this.careKeyImg).toBeVisible();
    }

    async validateConnectedSafetyTitle(){
        await expect(this.connectedSafetyTitle).toContainText(testData.connectedSafetyTitle);
    }

    async validateConnectedSafetyDesc(){
        await expect(this.connectedSafetyDesc).toContainText(testData.connectedSafetyDesc);
    }

    async validateConnectedSafetyImg(){
        await expect(this.connectedSafetyImg).toBeVisible();
    }

    async validateAirBagsTitle(){
        await expect(this.airBagsTitle).toContainText(testData.airBagsTitle);
    }

    async validateAirBagsDesc(){
        await expect(this.airBagsDesc).toContainText(testData.airBagsDesc);
    }

    async validateAirBagsImg(){
        await expect(this.airBagsImg).toBeVisible();
    }
}