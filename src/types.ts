export type TImageData = {
  name: string;
  image_url: string;
  link_url?: string;
  model_name: string;
  model_version: string;
  caption: string;
  positive_prompt: string;
  negative_prompt?: string;
  image?: any;
};
