module.exports = {
    url: 'https://spoonacular.com/',
    elements: {
       // after login user quick navigate
        userPhoto :{
           selector: '//img[6]',
           locateStrategy: 'xpath',},
        //green button on login
       greenButt: 'div[class="green button"]',
       //email input on login
       emailIn: 'input[name="email"]',
       //password in on login 
       passIn: 'input[name="password"]',
       //sign in button
       signIn: 'button[type="submit"]',
       //after login nav bar
       navBar :'ul[id="subNavigation"]',
       //recipe button
       recipeBut: '//li[text()="My Recipes"]',
       recipeBan2: '#psng1',
       //recipe box banner
       recipeBan: '//h2[text()="My Recipe Boxes"]', 
       //add recipe box button
       addRecBox: 'img[src="/application/frontend/images/add.svg"]',
       //recipe input field
       boxNameIn: 'input[id="newRecipeBoxName"]',
       //add recipe box button
       okButBox: 'div[class="button blue"]'
        
    
    
    
    
    }


}