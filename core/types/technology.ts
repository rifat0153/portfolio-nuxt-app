export type Technology = {
  id: number;
  name: string;
  description: string;
  experience: string;
  image: TechImage;
  link?: string;
  tags: Techhashtag[];
};

export type Techhashtag = string;

export type TechImage = {
  assetPath: string;
  fileType: string;
};
