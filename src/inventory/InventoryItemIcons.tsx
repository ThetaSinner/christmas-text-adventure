import {InventoryItemType} from "./InventoryItemType";
import Cake from './svg/001-cake.svg'
import Cookies from './svg/002-cookies.svg'
import CandyCane from './svg/003-candy cane.svg'
import Champagne from './svg/004-champagne.svg'
import Donut from './svg/005-donut.svg'
import GingerbreadMan from './svg/006-gingerbread man.svg'
import Cider from './svg/007-cider.svg'
import ChocolateFudge from './svg/008-chocolate fudge.svg'
import Cookies2 from './svg/009-cookies.svg'
import Eggnog from './svg/010-eggnog.svg'
import FruitCake from './svg/011-fruit cake.svg'
import ApplePie from './svg/012-apple pie.svg'
import Pudding from './svg/013-pudding.svg'
import HotChocolate from './svg/014-hot chocolate.svg'
import MulledWine from './svg/015-mulled wine.svg'
import RoastedChicken from './svg/016-roasted chicken.svg'
import ApplePie2 from './svg/017-apple pie.svg'
import Ribs from './svg/018-ribs.svg'
import MashedPotato from './svg/019-mashed potato.svg'
import Brownie from './svg/020-brownie.svg'
import IceCream from './svg/021-ice cream.svg'
import Candy from './svg/022-candy.svg'
import Chestnut from './svg/023-chestnut.svg'
import ChocolateBar from './svg/024-chocolate bar.svg'
import Stew from './svg/025-stew.svg'
import CinnamonRoll from './svg/026-cinnamon roll.svg'
import Berries from './svg/027-berries.svg'
import Cocoa from './svg/028-cocoa.svg'
import Sausage from './svg/029-sausage.svg'
import Pancakes from './svg/030-pancakes.svg'
import GingerbreadHouse from './svg/031-gingerbread house.svg'
import Cocktail from './svg/032-cocktail.svg'
import Tea from './svg/033-tea.svg'
import JuiceBox from './svg/034-juice box.svg'
import Coffee from './svg/035-coffee.svg'
import Shrimp from './svg/036-Shrimp.svg'
import Beer from './svg/037-beer.svg'
import Fish from './svg/038-fish.svg'
import Lollipop from './svg/039-lollipop.svg'
import Soda from './svg/040-soda.svg'
import FriedRice from './svg/041-fried rice.svg'
import Smoothie from './svg/042-smoothie.svg'
import Salad from './svg/043-salad.svg'
import Soup from './svg/044-soup.svg'
import Nougat from './svg/045-nougat.svg'
import CheeseSlice from './svg/046-cheese slice.svg'
import Biscuit from './svg/047-biscuit.svg'
import Syrup from './svg/048-syrup.svg'
import Bread from './svg/049-bread.svg'
import Cupcake from './svg/050-cupcake.svg'

export default function getInventoryIcon(item: InventoryItemType) {
    switch (item) {
        case InventoryItemType.Cake:
            return Cake
        case InventoryItemType.Cookies:
            return Cookies
        case InventoryItemType.CandyCane:
            return CandyCane
        case InventoryItemType.Champagne:
            return Champagne
        case InventoryItemType.Donut:
            return Donut
        case InventoryItemType.GingerbreadMan:
            return GingerbreadMan
        case InventoryItemType.Cider:
            return Cider
        case InventoryItemType.ChocolateFudge:
            return ChocolateFudge
        case InventoryItemType.Cookies2:
            return Cookies2
        case InventoryItemType.Eggnog:
            return Eggnog
        case InventoryItemType.FruitCake:
            return FruitCake
        case InventoryItemType.ApplePie:
            return ApplePie
        case InventoryItemType.Pudding:
            return Pudding
        case InventoryItemType.HotChocolate:
            return HotChocolate
        case InventoryItemType.MulledWine:
            return MulledWine
        case InventoryItemType.RoastedChicken:
            return RoastedChicken
        case InventoryItemType.ApplePie2:
            return ApplePie2
        case InventoryItemType.Ribs:
            return Ribs
        case InventoryItemType.MashedPotato:
            return MashedPotato
        case InventoryItemType.Brownie:
            return Brownie
        case InventoryItemType.IceCream:
            return IceCream
        case InventoryItemType.Candy:
            return Candy
        case InventoryItemType.Chestnut:
            return Chestnut
        case InventoryItemType.ChocolateBar:
            return ChocolateBar
        case InventoryItemType.Stew:
            return Stew
        case InventoryItemType.CinnamonRoll:
            return CinnamonRoll
        case InventoryItemType.Berries:
            return Berries
        case InventoryItemType.Cocoa:
            return Cocoa
        case InventoryItemType.Sausage:
            return Sausage
        case InventoryItemType.Pancakes:
            return Pancakes
        case InventoryItemType.GingerbreadHouse:
            return GingerbreadHouse
        case InventoryItemType.Cocktail:
            return Cocktail
        case InventoryItemType.Tea:
            return Tea
        case InventoryItemType.JuiceBox:
            return JuiceBox
        case InventoryItemType.Coffee:
            return Coffee
        case InventoryItemType.Shrimp:
            return Shrimp
        case InventoryItemType.Beer:
            return Beer
        case InventoryItemType.Fish:
            return Fish
        case InventoryItemType.Lollipop:
            return Lollipop
        case InventoryItemType.Soda:
            return Soda
        case InventoryItemType.FriedRice:
            return FriedRice
        case InventoryItemType.Smoothie:
            return Smoothie
        case InventoryItemType.Salad:
            return Salad
        case InventoryItemType.Soup:
            return Soup
        case InventoryItemType.Nougat:
            return Nougat
        case InventoryItemType.CheeseSlice:
            return CheeseSlice
        case InventoryItemType.Biscuit:
            return Biscuit
        case InventoryItemType.Syrup:
            return Syrup
        case InventoryItemType.Bread:
            return Bread
        case InventoryItemType.Cupcake:
            return Cupcake
    }
}
