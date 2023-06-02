import { expect, Locator, Page } from '@playwright/test';
export class AddRemoveElements {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly addelementLocator: Locator;
  readonly deleteelementLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.addelementLocator = page.get('.manually-added')
    }

    add(noofElems:number){
        this.page.getByRole('button',{name: 'Add'}).click();
        for (let index = 0; index < array.length; index++) {
            
            
        }

    }

    remove(){

    }

    verifyAddedElements(expectedNumber: number){
        expect("").toHaveLength(expectedNumber);
    }


}