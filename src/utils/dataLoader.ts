import translationsData from '../data/translations.json';
import personalData from '../data/personal.json';
import experienceData from '../data/experience.json';
import projectsData from '../data/projects.json';

export const getTranslations = (language: string) => {
  return translationsData[language as keyof typeof translationsData];
};

export const getPersonalData = () => {
  return personalData;
};

export const getExperienceData = () => {
  return experienceData;
};

export const getProjectsData = () => {
  return projectsData;
};