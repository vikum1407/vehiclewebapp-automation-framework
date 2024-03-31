const {test, expect} = require('@playwright/test')

class CrossoverEC40
{
    constructor(page){
        this.page = page;
        ec40Heading = page.locator('h1');
        
    }
}