import { IRelease } from './irelease';

export interface IArtist {
  name: string
  description: string
  homePage: string
  url: string
  img: string
  releases: IRelease[]
  features: IRelease[]
}
