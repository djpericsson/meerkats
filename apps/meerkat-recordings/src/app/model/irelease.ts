import { ISong } from './isong';

export interface IRelease {
  name: string
  artist: string
  date: string
  url: string
  img: string
  artistImg: string
  songs: ISong[]
  id: string
}
