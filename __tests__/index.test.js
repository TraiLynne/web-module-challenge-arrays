import functions from '../index';
// import{originalFlavors}from '../index';
let originalFlavors;
let newFlavors;
let seasonalFlavors;
let regionalFlavors;

beforeEach(()=>{
    originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"];

    newFlavors = [
        "Date night",
        "U.S.S Butterscotch (Stranger Things special)",
        "Honey Almond",
        "Mint Chocolate Chip",
        "Chocolate",
        "Oreo® Cookies'n Cream",
        "Chocolate Chip",
        "Pralines 'n Cream",
        "Very Berry Strawberry",
        "Chocolate Chip Cookie Dough",
        "Old Fashioned Butter Pecan",
        "Jamoca®",
        "Jamoca® Almond Fudge",
        "Reese's® Peanut Butter Cup",
        "Rocky Road",
        "Peanut Butter ’n Chocolate",
        "Gold Medal Ribbon®",
        "World Class® Chocolate",
        "Cherries Jubilee",
        "Chocolate Fudge",
        "Daiquiri Ice",
        "Rainbow Sherbet",
        "Rainbow Swirl"
    ] 
    
    seasonalFlavors = [
        "America's Birthday Cake",
        "Baseball Nut®",
        "Blueberry Cheesecake",
        "Bourbon Street Pecan Pie",
        "Brownie Bar Mashup",
        "Cherry Cordial with Kisses",
        "Chocolate Mousse Royale",
        "French Vanilla",
        "Eggnog",
        "German Chocolate Cake",
        "Icing on the Cake",
        "Love Potion #31",
        "New York Cheesecake",
        "Nutty Coconut",
        "Peppermint",
        "Strawberry Cheesecake",
        "Rock ’n Pop Swirl",
        "Reese’s Peanut Butter Cup",
        "Trick Oreo Treat",
        "Winter White Chocolate",
        "made with Snickers®",
        "made with M&M's®",
        "Heath®",
        "Mango Tango"
    ]
    
    regionalFlavors = [
        "Pink Bubblegum",
        "Caramel Macchiato",
        "York Peppermint Pattie",
        "Cotton Candy",
        "Orange Sherbet",
        "Grape Ice",
        "Watermelon Ice",
        "Miami Vice Sorbet",
        "Splish Splash®",
        "Wild 'n Reckless Sherbet",
        "Lemon Custard",
        "Oregon Blackberry",
        "Bananas ‘n Strawberries",
        "Mississippi Mud",
        "Rum Raisin",
        "Creole Cream Cheese",
        "Chocolate Almond",
        "Fudge Brownie",
        "Banana Nut",
        "Black Walnut",
        "Cotton Candy Crackle",
        "Quarterback Crunch",
        "Chocolate Chocolate Chip Cheesecake",
        "Caramel 'n' Cookies"
    ]
})

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});
describe('copy', ()=>{
    it('copy returns array', ()=>{
        expect(functions.copy(originalFlavors)).toEqual(originalFlavors);
    })
});
describe('is31Flavors', ()=>{
    it('is31Flavours returns true', ()=>{
        expect(functions.is31Flavors(originalFlavors)).toBe(true);
    })
});
describe('addFlavor', ()=>{
    it('addFlavor returns array with new flavor at beginning', ()=>{
        expect(functions.addFlavor(originalFlavors, 'Rainbow Sherbert')).toEqual([
            'Rainbow Sherbert',
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
            'Vanilla Burnt Almond'
          ]);
    })
});
describe('removeLastFlavor', ()=>{
    it('removeLastFlavor returns array with last flavor removed', ()=>{
        expect(functions.removeLastFlavor(originalFlavors)).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
          ]);
    })
});
describe('getFlavorByIndex', ()=>{
    it('getFlavorByIndex returns string at index', ()=>{
        expect(functions.getFlavorByIndex(originalFlavors, 2)).toBe("Burgundy Cherry");
    })
});

describe('removeFlavorByName', ()=>{
    it('removeFlavorByName returns array with specified removed', ()=>{
        expect(functions.removeFlavorByName(originalFlavors, 'Vanilla')).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            "Vanilla Burnt Almond"
          ]);
    })
});

describe('filterByWord', ()=>{
    it('filterByWord returns a new array items containing word', ()=>{
        expect(functions.filterByWord(originalFlavors, 'Chocolate')).toEqual([
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon'
          ]);
    })
});

describe('getAverageWordLength', () => {
    it('getAverageWordLength returns the average number of words in an array', () => {
        expect(functions.getAverageWordLength(originalFlavors)).toEqual(1.8387096774193548);
    });
});

describe('getRandomFlavors', () => {
    it('getRandomFlavors randomly select a total of 31 flavors and stores it in an array called randomFlavors', () => {
        expect(functions.getRandomFlavors([
            originalFlavors, 
            newFlavors, 
            seasonalFlavors, 
            regionalFlavors], 31)).toHaveLength(31);
    });
});