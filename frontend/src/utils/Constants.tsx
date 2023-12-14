import React from 'react';
import {
  TfiList,
  TfiLayoutGrid2,
  TfiSearch,
  TfiClose,
  TfiArrowCircleRight,
  TfiArrowCircleLeft,
  TfiStar,
} from 'react-icons/tfi';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export interface MenuItem {
  name: string;
  icon: React.ReactNode; // You can refine this type based on the actual type of your icons
}

export const menu: MenuItem[] = [
  { name: 'List', icon: <TfiList /> },
  { name: 'Grid', icon: <TfiLayoutGrid2 /> },
];

export const icons = {
  github: (
    <Link to='/'>
      <FaGithubAlt />
    </Link>
  ),
  search: <TfiSearch />,
  close: <TfiClose />,
  arrowLeft: <TfiArrowCircleLeft />,
  arrowRight: <TfiArrowCircleRight />,
  star: <TfiStar />,
};

export const url = {
  github: 'https://github.com/',
};

export const api = {
  base_endpoint: 'http://localhost:4000',
};

export const pagination = [
  { page: 1, startIndex: 1 },
  { page: 2, startIndex: 11 },
  { page: 3, startIndex: 21 },
];
