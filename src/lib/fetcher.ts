import type {ComicInfoObject} from "./comic_info_object";

const email: string = "a.evdokimov@innopolis.university"
const emailFieldName: string = "email"
const comicIdFieldName: string = "num"

function fetchComicId(): Promise<number> {
    const params = new URLSearchParams()

    params.append(emailFieldName, email)
    return fetch("https://fwd.innopolis.app/api/hw2?" + params.toString())
        .then(r => r.json())
}

function fetchComicInfo(comicId: number): Promise<ComicInfoObject> {
    const params = new URLSearchParams()

    params.append(comicIdFieldName, comicId.toString())

    return fetch("https://getxkcd.vercel.app/api/comic?" + params.toString())
        .then(r => r.json())
}

export async function fetchData(): Promise<ComicInfoObject> {
    const comicId: number = await fetchComicId()
    return fetchComicInfo(comicId)
}