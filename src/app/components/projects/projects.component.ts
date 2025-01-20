import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ProjectCardComponent } from '../common/project-card/project-card.component';
import { Project } from '../../models/project.model';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  projects: Project[] = [
    {
      name: 'Brain Tumor Detection & Classification using YOLOv10',
      image: 'https://img.youtube.com/vi/-vk_K5Dpbu4/mqdefault.jpg',
      link:"https://youtu.be/-vk_K5Dpbu4",
      description: 'In this video I will be doing brain tumor detection and classification using state of the art computer vision model, YOLO v10. I would also be giving introduction on how to create annotations for your custom datasets to use with YOLO. ',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/Computer-Vision/tree/main/brain_tumor_detection',
      type:'youtube'
    },
    {
      name: 'Stroke Prediction End To End Machine Learning Project',
      image: 'https://img.youtube.com/vi/vSP1uSWQ9P8/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=vSP1uSWQ9P8&t=189s",
      description: 'In this project I will be making an end-to-end machine learning web application using Flask & React. we would be first doing an exploratory data analysis, then pick the right model from 3 models. Then we would proceed to train the final model on our dataset and use it to make API Then we would create user interface using React and connect it to backend through API which would be used to get predictions.',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/sroke-prediction-end-to-end-ml-app',
      type:'youtube'
    },
    {
      name: 'Recommendation System Using Huggingface Transformers',
      image: 'https://img.youtube.com/vi/Y_CwkmGkZAI/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=Y_CwkmGkZAI&t=8s",
      description: 'In this project I try to make a recommendation system using hugginface transformers. Basically a recommendation system using llm. Here, we compare the embeddings for movie description with the embeddings for users requirement to find the match.',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/NLP-Projects/tree/main/Reccomendation%20System%20Using%20Transformers',
      type:'youtube'
    },
    {
      name: 'Live Multi Color Recognition using OpenCV & Python',
      image: 'https://img.youtube.com/vi/Av345p5H_yM/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=Av345p5H_yM",
      description: 'In this project, I will see how we can recognize multiple colors live using OpenCV & Python',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/Computer-Vision/blob/main/color-detection/main.py',
      type:'youtube'
    },
    {
      name: 'Virtual Mouse Using Hand Gesture Recognition',
      image: 'https://img.youtube.com/vi/4NmwNEYtL1s/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=4NmwNEYtL1s&t=5s",
      description: 'In this project, I demonstrate how to make a Virtual Mouse Using Hand Gesture Recognition leveraging the capabilities of MediaPipe (Computer Vision library) Hands Module & OpenCV in Python language.',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/Computer-Vision/tree/main/live_mouse_control_using_hand_gestures',
      type:'youtube'
    },
    {
      name: 'Build your own llama3 Chatbot in 20 min using Ollama & Flask',
      image: 'https://img.youtube.com/vi/tTAGL39GUm0/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=tTAGL39GUm0",
      description: 'In this project, I would teach how to make a chatbot using the llama3 model from Meta, which is the most powerful open-source LLM in its category. We will be using Ollama to run the llama3 model and get responses.',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/NLP-Projects/tree/main/llama3-chatbot-ollama/static',
      type:'youtube'
    },
    {
      name: 'Sentiment Analysis Using Twitter Data In Python',
      image: 'https://img.youtube.com/vi/JY4xXo3ILJ0/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=JY4xXo3ILJ0&t=11s",
      description: 'In this project, I will guide you through the process of using logistic regression for sentiment classification, covering essential concepts, NLP data preprocessing techniques, and step-by-step implementation. ',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/sentiment-analysis',
      type:'youtube'
    },
    {
      name: 'Volume & Brightness Control using Hand Gestures',
      image: 'https://img.youtube.com/vi/sU6xaTSkl8I/mqdefault.jpg',
      link:"https://www.youtube.com/watch?v=sU6xaTSkl8I",
      description: 'In this project, I demonstrate how to implement volume and brightness control using your fingers leveraging the capabilities of MediaPipe (Computer Vision library) Hands Module & OpenCV in Python language. ',
      action1: 'Demo',
      action2: 'Check on Github',
      githubLink: 'https://github.com/Deepakdj007/Computer-Vision/blob/main/volume_and_brightness_control/volume_brightness_control.py',
      type:'youtube'
    },
  ];
  cardWidth!: number;
  mutationObserver!: MutationObserver;

  @ViewChild('projectCards') projectCardsRef!: ElementRef;

  ngAfterViewInit() {
    this.calculateCardWidth();
  }
  ngOnDestroy() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  scrollLeft() {
    const projectCards: HTMLElement = this.projectCardsRef.nativeElement;
    projectCards.scrollTo({
      left: projectCards.scrollLeft - this.cardWidth, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const projectCards: HTMLElement = this.projectCardsRef.nativeElement;
    projectCards.scrollTo({
      left: projectCards.scrollLeft + this.cardWidth + 30, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }

  calculateCardWidth() {
    const firstProjectCard =
      this.projectCardsRef.nativeElement.querySelector('app-project-card');
    if (firstProjectCard) {
      this.cardWidth = firstProjectCard.offsetWidth - 30;
    }
  }
}
