/* eslint-disable import/prefer-default-export */

import {
  createScoutAction,
  createScoutSection,
  createScoutPage,
} from 'scoutbar';
import ARTICLE_DATA from '../AppData/articles';

import PROJECTS_DATA from '../AppData/projects';

export const actions = (theme: () => void) => [
  createScoutAction({
    label: 'Home',
    href: '/',
    keyboardShortcut: ['h'],
  }),

  createScoutAction({
    label: 'Resume',
    href: '/resume',
    keyboardShortcut: ['r'],
  }),
  createScoutAction({
    label: 'Contact Me',
    href: '/contact',
    keyboardShortcut: ['c'],
  }),

  createScoutSection({
    label: 'About Okosodo Hanorah',

    children: [
      createScoutAction({
        label: 'About Okosodo Hanorah',
        href: '/about',
        keyboardShortcut: ['a'],
      }),
      createScoutAction({
        label: "Okosodo Hanorah's Reads",
        href: '/about#reads',
      }),
      createScoutAction({
        label: 'Playlist',
        href: '/about#playlist',
      }),

    ],
  }),

  createScoutSection({
    label: 'BY hanorah',

    children: [
      createScoutPage({
        label: 'Projects',
        children: PROJECTS_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),

      createScoutPage({
        label: 'Articles',
        children: ARTICLE_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
    ],
  }),

  createScoutSection({
    label: 'Preference',

    children: [
      createScoutAction({
        label: 'Change Theme',
        action: () => theme(),
        keyboardShortcut: ['meta', 'l'],
      }),
    ],
  }),
];
