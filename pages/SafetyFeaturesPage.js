const {test, expect} = require('@playwright/test')

exports.SafetyFeaturesPage = 

class safetyFeaturesPage
{
    constructor(page)
    {
        this.page = page;
        featureDescription = page.locator('#TextStatement-1');
        lidarTitle = page.locator('#ImageWithText-1');
        lidarDescription = page.locator('#ImageWithText-1');
        lidarImg = page.getByRole('img', { name: 'A digital rendering of objects on a blue surface.' });
        autonomousdrivingTitle = page.locator('#ImageWithText-2');
        autonomousdrivingDescription = page.locator('#ImageWithText-2');
        autonomousdrivingImg = page.getByRole('img', { name: 'Digital rendering of two cars' });
        driverSystemTitle = page.locator('#ImageWithText-3');
        driverSystemDescription = page.locator('#ImageWithText-3');
        driverSystemImg = page.getByRole('img', { name: 'A digital rendering of a' });
        occupantSensingTitle = page.locator('#PromotionBackgroundImage-1');
        occupantSensingDescription = page.locator('#PromotionBackgroundImage-1');
        protectingDayTitle = page.locator('#TextStatement-2');
        collisionAvoidanceTitle = page.locator('#MediaHighlights-1');
        collisionAvoidanceDesc = page.locator('#MediaHighlights-1');
        collisionAvoidanceVideo = page.locator('#MediaHighlights-1 video');
        laneKeepingAidTitle = page.locator('#MediaHighlights-1');
        laneKeepingAidDesc = page.locator('#MediaHighlights-1');
        laneKeepingAidVideo = page.locator('#MediaHighlights-1').getByLabel('play').nth(1);
        runOffRoadTitle = page.locator('#MediaHighlights-1');
        runOffRoadDesc = page.locator('#MediaHighlights-1');
        runOffRoadVideo = page.locator('#MediaHighlights-1').getByLabel('play').nth(2);
        crossTrafficAlertTitle = page.locator('#MediaHighlights-2');
        crossTrafficAlertDesc = page.locator('#MediaHighlights-2');
        crossTrafficAlertVideo = page.locator('#MediaHighlights-2').getByLabel('play');
        blisSystemTitle = page.locator('#MediaHighlights-2');
        blisSystemDesc = page.locator('#MediaHighlights-2')
        blisSystemVideo = page.locator('#MediaHighlights-2').getByLabel('play').nth(1);
        surroundViewCameraTitle = page.locator('#MediaHighlights-2');
        surroundViewCameraDesc = page.locator('#MediaHighlights-2');
        surroundViewCameraImg = page.locator('#MediaHighlights-2 video').nth(2);
        speedCapTitle = page.locator('#ImageWithText-4');
        speedCapDesc = page.locator('#ImageWithText-4');
        speedCapImg = page.getByRole('img', { name: 'A Volvo car driving on a road' });
        careKeyTitle = page.locator('#ImageWithText-5');
        careKeyDesc = page.locator('#ImageWithText-5');
        careKeyImg = page.getByRole('img', { name: 'An orange Volvo key fob' });
        connectedSafetyTitle = page.locator('#MediaHighlights-3');
        connectedSafetyDesc = page.locator('#MediaHighlights-3');
        connectedSafetyImg = page.getByRole('img', { name: 'Volvo XC90 driving in a built' });
        airBagsTitle = page.locator('#MediaHighlights-3');
        airBagsDesc = page.locator('#MediaHighlights-3');
        airBagsImg = page.getByRole('img', { name: 'Chassis view of a car with' });


    }

}