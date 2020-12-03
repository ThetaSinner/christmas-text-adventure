export enum InventoryItemType {
    Empty,
    Cake,
    Cookies,
    CandyCane,
    Champagne,
    Donut,
    GingerbreadMan,
    Cider,
    ChocolateFudge,
    Cookies2,
    Eggnog,
    FruitCake,
    ApplePie,
    Pudding,
    HotChocolate,
    MulledWine,
    RoastedChicken,
    ApplePie2,
    Ribs,
    MashedPotato,
    Brownie,
    IceCream,
    Candy,
    Chestnut,
    ChocolateBar,
    Stew,
    CinnamonRoll,
    Berries,
    Cocoa,
    Sausage,
    Pancakes,
    GingerbreadHouse,
    Cocktail,
    Tea,
    JuiceBox,
    Coffee,
    Shrimp,
    Beer,
    Fish,
    Lollipop,
    Soda,
    FriedRice,
    Smoothie,
    Salad,
    Soup,
    Nougat,
    CheeseSlice,
    Biscuit,
    Syrup,
    Bread,
    Cupcake
}

export function getItemTypeName(itemType: InventoryItemType) {
    switch (itemType) {
        case InventoryItemType.Empty:
            return "Empty"
        case InventoryItemType.Cake:
            return "Cake"
        case InventoryItemType.Cookies:
            return "Cookies"
        case InventoryItemType.CandyCane:
            return "CandyCane"
        case InventoryItemType.Champagne:
            return "Champagne"
        case InventoryItemType.Donut:
            return "Donut"
        case InventoryItemType.GingerbreadMan:
            return "GingerbreadMan"
        case InventoryItemType.Cider:
            return "Cider"
        case InventoryItemType.ChocolateFudge:
            return "ChocolateFudge"
        case InventoryItemType.Cookies2:
            return "Cookies2"
        case InventoryItemType.Eggnog:
            return "Eggnog"
        case InventoryItemType.FruitCake:
            return "FruitCake"
        case InventoryItemType.ApplePie:
            return "ApplePie"
        case InventoryItemType.Pudding:
            return "Pudding"
        case InventoryItemType.HotChocolate:
            return "HotChocolate"
        case InventoryItemType.MulledWine:
            return "MulledWine"
        case InventoryItemType.RoastedChicken:
            return "RoastedChicken"
        case InventoryItemType.ApplePie2:
            return "ApplePie2"
        case InventoryItemType.Ribs:
            return "Ribs"
        case InventoryItemType.MashedPotato:
            return "MashedPotato"
        case InventoryItemType.Brownie:
            return "Brownie"
        case InventoryItemType.IceCream:
            return "IceCream"
        case InventoryItemType.Candy:
            return "Candy"
        case InventoryItemType.Chestnut:
            return "Chestnut"
        case InventoryItemType.ChocolateBar:
            return "ChocolateBar"
        case InventoryItemType.Stew:
            return "Stew"
        case InventoryItemType.CinnamonRoll:
            return "CinnamonRoll"
        case InventoryItemType.Berries:
            return "Berries"
        case InventoryItemType.Cocoa:
            return "Cocoa"
        case InventoryItemType.Sausage:
            return "Sausage"
        case InventoryItemType.Pancakes:
            return "Pancakes"
        case InventoryItemType.GingerbreadHouse:
            return "GingerbreadHouse"
        case InventoryItemType.Cocktail:
            return "Cocktail"
        case InventoryItemType.Tea:
            return "Tea"
        case InventoryItemType.JuiceBox:
            return "JuiceBox"
        case InventoryItemType.Coffee:
            return "Coffee"
        case InventoryItemType.Shrimp:
            return "Shrimp"
        case InventoryItemType.Beer:
            return "Beer"
        case InventoryItemType.Fish:
            return "Fish"
        case InventoryItemType.Lollipop:
            return "Lollipop"
        case InventoryItemType.Soda:
            return "Soda"
        case InventoryItemType.FriedRice:
            return "FriedRice"
        case InventoryItemType.Smoothie:
            return "Smoothie"
        case InventoryItemType.Salad:
            return "Salad"
        case InventoryItemType.Soup:
            return "Soup"
        case InventoryItemType.Nougat:
            return "Nougat"
        case InventoryItemType.CheeseSlice:
            return "CheeseSlice"
        case InventoryItemType.Biscuit:
            return "Biscuit"
        case InventoryItemType.Syrup:
            return "Syrup"
        case InventoryItemType.Bread:
            return "Bread"
        case InventoryItemType.Cupcake:
            return "Cupcake"
    }
}
