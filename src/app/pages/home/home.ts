import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Skills, Experience, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isAboutUsPage = false;

}
