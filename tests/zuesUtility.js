function OpenPage(){
    console.log("Starting The Open Page to start the testing")
    let page;
    const plversion = 2;
    if (plversion === 2) {
        page.goTO();
        console.log("Using the PL Version 2")
    } else {
        console.log("Using the PL Version other than 2")
        page.visit();
    }

}

function CheckTitle(){

}

module.exports = {OpenPage,CheckTitle}