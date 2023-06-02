import { HerokuDesktop } from "../desktop/HerokuHomePageDT";
import { HerokuMobileApp } from "../mobile/HerokuHomePageMobile";

export const environment = {
    url:"https://the-internet.herokuapp.com/",
    testData :{},
    target: "mobile"

}

function getEnviromment(params:string) {

    switch (params) {
        case "mobile":
            return new HerokuMobileApp();
            break;
        case "desktop":
                return new HerokuDesktop();
                break;
        case "selenium":
                return new HerokuHomePageImpl();
    
        default:
            break;
    }
    
}