import { IMenu } from "../_interfaces/menu";

export const links: IMenu[] = [

  {
    link: 'dashboard',
    icon: 'dashboard',
    label: 'Tableau de bord',
    type: 'admin'
  },
  {
    link: 'users',
    icon: 'supervised_user_circle',
    label: 'Utilisateurs',
    type: 'admin'
  },
  {
    link: 'movies',
    icon: 'movie',
    label: 'Films',
    type: 'admin'
  },
  {
    link: '/public',
    icon: 'home',
    label: 'Accueil',
    type: 'public'
  },
  {
    link: 'experience',
    icon: 'person',
    label: 'Expérience',
    type: 'public'

  },
  {
    link: 'technos',
    icon: 'code',
    label: 'Techs',
    type: 'public'
  },
  {
    link: 'projects',
    icon: 'description',
    label: 'Projets',
    type: 'public'
  },
  {
    link: 'contact',
    icon: 'contact_mail',
    label: 'Contact',
    type: 'public'
  },
  {
    link: 'privacy',
    icon: 'description',
    label: 'Privacy',
    type: 'public'
  },

]
