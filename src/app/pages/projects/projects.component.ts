import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: any[];
  venobox: any;
  title = 'Projects';

  constructor(private _dataS: ProjectService) {}

  ngOnInit() {
    this._dataS.getAllprojects().subscribe((res) => {
      this.projects = res.data;
      console.log(this.projects); // Log to ensure correct data format
    });
  }

  ngAfterViewInit() {
    console.log('after view init');
    this.onMouse('portfolio-link', 'portfolio-img');
    this.onMouse('teamTraveler-link', 'teamTraveler-img');
    this.onMouse('mautic-link', 'mautic-img');
    this.onMouse('pokedex-link', 'pokedex-img');
    this.onMouse('riddle-link', 'riddle-img');
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  detailOnClick(project: any) {
    this.projects
      .filter(
        (item) => item.detailIsDisplayed && item.id != project.id
      )
      .map((elem) => (elem.detailIsDisplayed = false));
    project.detailIsDisplayed = !project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink)
      .on('mouseenter', function () {
        $('#' + idImage).css('opacity', '0.3');
        $('#' + idLink).css('opacity', '1');
      })
      .on('mouseleave', function () {
        $('#' + idImage).css('opacity', '1');
        $('#' + idLink).css('opacity', '0');
      });

    $('#' + idImage)
      .on('mouseenter', function () {
        $('#' + idImage).css('opacity', '0.3');
        $('#' + idLink).css('opacity', '1');
      })
      .on('mouseleave', function () {
        $('#' + idImage).css('opacity', '1');
        $('#' + idLink).css('opacity', '0');
      });
  }
}
