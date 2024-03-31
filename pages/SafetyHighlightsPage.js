import { test, expect } from '@playwright/test';
import exp from 'constants';
const { VolvoCommonUtilMethods } = require('../util/VolvoCommonUtilMetods');
const fs = require('fs');
const path = require('path');


const jsonFilePath = path.resolve(__dirname, '../conf/config.json');
const testData = JSON.parse(fs.readFileSync(jsonFilePath));

exports.SafetyHighlightsPage = 

class safetyHighlightsPage
{
    
    constructor(page)
    {
        this.page = page;

        //highlightsTab = page.getByRole('link', { name: 'Highlights' });
        this.firstDescription = this.page.locator('#ModelIntro-2');
        this.mainImage = this.page.getByRole('img', { name: 'A man leaning on a Volvo and' });
        this.aimDescription = this.page.locator('#ModelIntro-3');
        this.safetyFocusTitle = this.page.locator('#TextStatement-1');

        this.spaceTechButton = this.page.getByRole('button', { name: 'Safe Space Technology' });
        this.spaceTechTitle = this.page.locator('#operational-emissions');
        this.spaceTechDescription = this.page.locator('#operational-emissions');
        this.spaceTechImg = this.page.getByRole('img', { name: 'A digital rendering of objects on a blue surface.' });

        this.acclaimedButton = this.page.getByRole('button', { name: 'Our most acclaimed lifesaver' });
        this.acclaimedTitle = this.page.locator('#co2-per-car');
        this.acclaimedDescription = this.page.locator('#co2-per-car');
        this.acclaimedImg = this.page.getByRole('img', { name: 'Close up of a seatbelt buckle' });

        this.ddResearchButton = this.page.getByRole('button', { name: 'Data-based research' });
        this.ddResearchTitle = this.page.locator('#tailpipe-emissions');
        this.ddResearchDescriptiom = this.page.locator('#tailpipe-emissions');
        this.ddResearchImg = this.page.getByRole('img', { name: 'A digital rendering of dots' });

        this.zeroCollisionsTitle = this.page.locator('#ModelIntro-4');
        this.collisionsDescription = this.page.locator('#ModelIntro-4');
        this.collisionsImg = this.page.getByRole('img', { name: 'A digital rendering of a car' });

        this.ourLearningTitle = this.page.locator('#ModelIntro-5');
        this.evolutionImg = this.page.getByRole('img', { name: 'A man driving a car looking' });
        this.evolutionTitle = this.page.locator('#MediaHighlights-1');
        this.evolutionDescription = this.page.locator('#MediaHighlights-1');

        this.autonomousDrivingImg = this.page.getByRole('img', { name: 'A time-delay shot of what' });
        this.autonomousTitle = this.page.locator('#MediaHighlights-1');
        this.autonomousDescription = this.page.locator('#MediaHighlights-1');

        this.rechargeVehicleModelTitle = this.page.locator('#ProductListCarousel-1');
        this.nextSlide = this.page.locator('#ProductListCarousel-1').getByLabel('Next slide');
        this.previousSlide = this.page.locator('#ProductListCarousel-1').getByLabel('Previous slide');
        this.EC40 = this.page.getByLabel('EC40', { exact: true });

        this.footerDescription = this.page.locator('#Disclaimer-1');
        this.backToTopButton = this.page.getByRole('contentinfo');

        //this.volvoCommonUtil = new VolvoCommonUtilMethods();

    }

    // async validateFirstDescription(){
    //     await this.volvoCommonUtil.textContainValidation(this.page, this.firstDescription, testData.descriptionText);
    // }

    async validateFirstDescription(){
        await expect(this.firstDescription).toContainText(testData.descriptionText);
    }

    async validateMainImage(){
        await expect(this.mainImage).toBeVisible();
    }
    
    async validateAim(){
        await expect(this.aimDescription).toContainText(testData.aimText);
    }

    async validateSafeSpace(){
        await expect(this.spaceTechButton).toBeVisible();
    }

    async validateSafeSpaceTitle(){
        await expect(this.spaceTechTitle).toContainText(testData.spaceTechTitleText);
    }

    async validateSafeSpaceDescription(){
        await expect(this.spaceTechDescription).toContainText(testData.spaceTechDescriptionText);
    }

    async validateSafeSpaceImage(){
        await expect(this.spaceTechImg).toBeVisible();
    }

    async validateSafeAcclaimed(){
        await expect(this.acclaimedButton).toBeEnabled();
    }

    // async clickSafeAcclaimed(){
    //     await this.page(this.acclaimedButton).click();
    // }

    async validateSafeAcclaimedTitle(){
        await expect(this.acclaimedTitle).toContainText(testData.acclaimedTitleText);
    }

    async validateSafeAcclaimedDescription(){
        await expect(this.acclaimedDescription).toContainText(testData.acclaimedDescription);
    }

    async validateSafeAcclaimedImage(){
        await expect(this.acclaimedImg).toBeVisible();
    }

    //----------
    async validateDBResearchButton(){
        await expect(this.ddResearchButton).toBeEnabled();
    }

    async validateDBResearchTitle(){
        await expect(this.ddResearchTitle).toContainText(testData.dbResearchTitle);
    }

    async validateDBResearchDescription(){
        await expect(this.ddResearchDescriptiom).toContainText(testData.dbResearchDescription);
    }

    async validateDBResearchImage(){
        await expect(this.ddResearchImg).toBeVisible();
    }

    async validateZeroColTitle(){
        await expect(this.zeroCollisionsTitle).toContainText(testData.zeroCollisions);
    }

    async validateZeroColTitleDescription(){
        await expect(this.collisionsDescription).toContainText(testData.zeroCollisionsDesc);
    }

    async validateDBResearchImage(){
        await expect(this.collisionsImg).toBeVisible();
    }

    async validateOurLearningsTitle(){
        await expect(this.ourLearningTitle).toContainText(testData.ourLearningsT);
    }

    async validateEvolutionTitle(){
        await expect(this.evolutionTitle).toContainText(testData.evolutionTitle);
    }

    async validateEvolutionDesc(){
        await expect(this.evolutionTitle).toContainText(testData.evolutionDescription);
    }

    async validateEvolutionImage(){
        await expect(this.evolutionImg).toBeVisible();
    }

    async validateAutonomousDTitle(){
        await expect(this.autonomousTitle).toContainText(testData.evolutionTitle);
    }

    async validateAutonomousDDesc(){
        await expect(this.autonomousDescription).toContainText(testData.evolutionDescription);
    }

    async validateAutonomousDImage(){
        await expect(this.autonomousDrivingImg).toBeVisible();
    }

        // this.rechargeVehicleModelTitle = this.page.locator('#ProductListCarousel-1');
        // this.nextSlide = this.page.locator('#ProductListCarousel-1').getByLabel('Next slide');
        // this.previousSlide = this.page.locator('#ProductListCarousel-1').getByLabel('Previous slide');
        // this.EC40 = this.page.getByLabel('EC40', { exact: true });

        // this.footerDescription = this.page.locator('#Disclaimer-1');
        // this.backToTopButton = this.page.getByRole('contentinfo');

        async validateRechargeVehicleTitle(){
            await expect(this.rechargeVehicleModelTitle).toContainText(testData.rechargeVehicleTitle);
        }
    
        async validateNextslideBtn(){
            await expect(this.nextSlide).toBeEnabled();
        }

        // async validateNextslideBtn(){
        //     await this.page.locator(this.nextSlide).click();
        // }
    
        async validateAutonomousDImage(){
            await expect(this.autonomousDrivingImg).toBeVisible();
        }

        async validateEC40Button(){
            await expect(this.EC40).toBeEnabled();
        }

        async validateBackToTopButton(){
            await expect(this.backToTopButton).toBeEnabled();
        }


}