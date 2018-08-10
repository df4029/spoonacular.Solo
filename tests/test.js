let login ={
    user: 'df4029',
    pass: 'foodisgood',
}
let recipe ={
    frenchBox: 'French Cooking'
}

let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()
    },
'login to spoonacular': function(browser){
    pageObject
    //login to spoonacular
    .waitForElementVisible('@greenButt', 1000, 'see green butt')
    .click('@greenButt')
    //type in username and pass
    .waitForElementVisible('@emailIn', 1000, 'see email signin')
    .waitForElementVisible('@passIn', 1000, 'see password')
    .waitForElementVisible('@signIn', 1000, 'see signin button')
    .click('@emailIn')
    .setValue('@emailIn', login.user)
    .click('@passIn')
    .setValue('@passIn', login.pass)
    .click('@signIn')
    //check to see if logged in. 
    .waitForElementVisible('@navBar', 1000, 'see nav bar')},

    'go to recipes and create a recipe box': function(browser){
        //go to recipe after logging in
        pageObject
        .waitForElementVisible('@navBar', 1000, 'see nav bar')
        .waitForElementVisible('@recipeBan2',1000, 'see recipe banner')
        .moveToElement('@recipeBan2', 5, 5)
        //.waitForElementVisible('@recipeBut', 1000, 'see recipe button')
        .click('@recipeBan2')
        //check to see if at recipe page
        //.waitForElementVisible('@recipeBan', 1000, 'see My Recipes Box')
        .waitForElementVisible('@addRecBox', 1000, 'see add box button')
        //add recpie box
        .click('@addRecBox')
        .waitForElementVisible('@boxNameIn', 1000, 'see recipe name input')
        .click('@boxNameIn')
        //create French Cooking Box 
        .setValue('@boxNameIn', recipe.frenchBox)
        .waitForElementVisible('@okButBox', 1000, 'see ok button')
        .click('@okButBox')
        browser.pause(5000)},
    }