export type GalleryImage = {
  src: string;
  alt: string;
  orientation: string;
  caption?: string;
  location?: string;
};

export type UseLightboxReturn = {
  lightboxIndex: number | null;
  current: GalleryImage | null;
  open: (index: number) => void;
  close: () => void;
  prev: () => void;
  next: () => void;
};
