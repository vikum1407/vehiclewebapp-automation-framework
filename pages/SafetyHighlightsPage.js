const {test, expect} = require('@playwright/test')

exports.SafetyHighlightsPage = 

class safetyHighlightsPage
{
    
    constructor(page)
    {
        this.page = page;

        highlightsTab = page.getByRole('link', { name: 'Highlights' });
        firstDescription = page.locator('#ModelIntro-2');
        mainImage = page.getByRole('img', { name: 'A man leaning on a Volvo and' });
        aimDescription = page.locator('#ModelIntro-3');
        safetyFocusTitle = page.locator('#TextStatement-1');

        spaceTechButton = page.getByRole('button', { name: 'Safe Space Technology' });
        spaceTechTitle = page.locator('#operational-emissions');
        spaceTechDescription = page.locator('#operational-emissions');
        spaceTechImg = page.getByRole('img', { name: 'A digital rendering of objects on a blue surface.' });

        acclaimedButton = page.getByRole('button', { name: 'Our most acclaimed lifesaver' });
        acclaimedTitle = page.locator('#co2-per-car');
        acclaimedDescription = page.locator('#co2-per-car');
        acclaimedImg = page.getByRole('img', { name: 'Close up of a seatbelt buckle' });

        ddResearchButton = page.getByRole('button', { name: 'Data-based research' });
        ddResearchTitle = page.locator('#tailpipe-emissions');
        ddResearchDescriptiom = page.locator('#tailpipe-emissions');
        ddResearchImg = page.getByRole('img', { name: 'A digital rendering of dots' });

        zeroCollisionsTitle = page.locator('#ModelIntro-4');
        collisionsDescription = page.locator('#ModelIntro-4');
        collisionsImg = page.getByRole('img', { name: 'A digital rendering of a car' });

        ourLearningTitle = page.locator('#ModelIntro-5');
        evolutionImg = page.getByRole('img', { name: 'A man driving a car looking' });
        evolutionTitle = page.locator('#MediaHighlights-1');
        evolutionDescription = page.locator('#MediaHighlights-1');

        autonomousDrivingImg = page.getByRole('img', { name: 'A time-delay shot of what' });
        autonomousTitle = page.locator('#MediaHighlights-1');
        autonomousDescription = page.locator('#MediaHighlights-1');

        rechargeVehicleModelTitle = page.locator('#ProductListCarousel-1');
        nextSlide = page.locator('#ProductListCarousel-1').getByLabel('Next slide');
        previousSlide = page.locator('#ProductListCarousel-1').getByLabel('Previous slide');
        EC40 = page.getByLabel('EC40', { exact: true });

        footerDescription = page.locator('#Disclaimer-1');
        backToTopButton = page.getByRole('contentinfo');

    }

}