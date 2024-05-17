export class Anime {
    id:number;
    name:string;
    description:string;
    rating:string;
    episode:number;
    categorie:string; 
    studio:string;
    img:string;

    constructor(id:number, name:string, description:string, rating:string, episode:number, categorie:string, studio:string,img:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.episode = episode;
        this.categorie = categorie;
        this.studio = studio;
        this.img = img;
    }
}
