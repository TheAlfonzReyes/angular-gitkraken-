import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("El Hobbit", 2012, "https://2.bp.blogspot.com/-rRDFu83VHKU/UULXYjHZDGI/AAAAAAAAAt0/RxD-I1OttIY/s1600/el+hobbit+banda+sonora+de+la+pelicula+portada.jpg"),
            new Pelicula("Star Wars", 2019, "https://lumiere-a.akamaihd.net/v1/images/tros-home-ent-announce-hero-mobile_de9df93f.jpeg?region=0,0,1024,626&width=960"),
            new Pelicula("Joker", 2019, "https://www.pikaramagazine.com/wp-content/uploads/2019/11/2-870x399.jpg"),
            new Pelicula("Spiderman Homecoming", 2019, "https://i.pinimg.com/originals/94/89/16/94891627567303d8d9c8cbcb910a5811.jpg"),
            new Pelicula("Advengers End Game", 2019, "https://lumiere-a.akamaihd.net/v1/images/eu_avr-3_showcase_hero_v2_m_5acaf64a.jpeg?region=0,0,750,668"),
            new Pelicula("Frozen 2", 2019, "https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d002d07c4c48.jpeg"),
      
          ];
    }

    holaMundo (){
        return 'Hola mundo desde un servicio de Angular' ;
    }

    getPeliculas(){
        return this.peliculas;
    }

} 