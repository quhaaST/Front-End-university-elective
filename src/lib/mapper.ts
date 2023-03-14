import type {ComicInfoObject} from "./comic_info_object";

export function mapDate(comicData: ComicInfoObject): Date {
    const year: number = +(comicData.year)
    const month: number = +(comicData.month)
    const day: number = +(comicData.day)

    return new Date(year, month - 1, day)
}