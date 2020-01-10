import { ISong } from './isong';

export interface IRelease {
  name: string
  artist: string
  date: string
  description: string
  url: string
  img: string
  artistImg: string
  songs: ISong[]
}
