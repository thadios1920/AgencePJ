import { PricesCatering } from "./prices-catering";
import { PricesRoom } from "./prices-room";


export class HotelClass {


    constructor(
        public name? :string,
        public image?:string,
        public ville?:string,
        public categorie?:string,
        public avis?:string,
        public rate?:number, 
        public etoile?:number,
        public pricesRoom?:PricesRoom,
        public pricesCatering?:PricesCatering,
        public id?:number
    ){

    }
}
