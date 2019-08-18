import cake from '../assets/cake.svg';
import boat from '../assets/fishing-boat.svg';
import forest from '../assets/forest.svg';
import gamepad from '../assets/game-controller.svg';
import safe from '../assets/money-box.svg';
import tent from '../assets/tent.svg';


export const texts =
  {
    navigation: {
      title: 'start bootstrap',
      sections: ['Portfolio', 'About', 'Contact']
    },
    welcome: {
      title: 'start bootstrap',
      additional: ['Web Developer', 'Graphic Artist', 'User Experience Designer']
    },
    portfolio: {
      title: 'portfolio',
      cards: [
        {
          id: 1,
          title: 'project1',
          img: {
            src: forest,
            tempStyle: {backgroundColor: 'rgb(69, 178, 155)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(191, 72, 93)'}
        },
        {
          id: 2,
          title: 'project2',
          img: {
            src: cake,
            tempStyle: {backgroundColor: 'rgb(224, 91, 74)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(31, 164, 181)'}
        },
        {
          id: 3,
          title: 'project3',
          img: {
            src: tent,
            tempStyle: {backgroundColor: 'rgb(236, 240, 241)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(19, 15, 14'}
        },
        {
          id: 4,
          title: 'project4',
          img: {
            src: gamepad,
            tempStyle: {backgroundColor: 'rgb(225, 124, 62)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(30, 131, 193)'}
        },
        {
          id: 5,
          title: 'project5',
          img: {
            src: safe,
            tempStyle: {backgroundColor: 'rgb(238, 200, 73)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(16, 55, 182)'}
        },
        {
          id: 6,
          title: 'project6',
          img: {
            src: boat,
            tempStyle: {backgroundColor: 'rgb(51, 71, 92)'}
          },
          redirect: 'URL',
          temporaryStyle: {backgroundColor: 'rgb(204, 178, 163)'}
        },
      ]
    },
    about: {
      title: 'about',
      contentText: [
        'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and Javascript as well as optional LESS stylesheets for easy customization',
        'Whether you\'re a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point! '
      ],
      downloadFile: 'src...'
    },
    contact: {
      title: 'contact me',
    },
    footer: ['location', 'around the web', 'about freelancer']
  };
