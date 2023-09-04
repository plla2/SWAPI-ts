export interface props {
  data: {
    id: number;
    image: string;
    title: string;
    text: string;
    theme: string;
    color: string;
    button: string;
    link: string;
  }[];
  changeSlide: (slide: number) => void;
  current: number;
  interval: number | null;
}
