import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }


  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }
  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }
 
  ngOnInit() {
    this.getAnimes();
  }

}
