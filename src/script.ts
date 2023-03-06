import { ComicInfoObject, fetchData } from "./fetcher";

const comicTitle: HTMLHeadingElement | null = document.getElementById("comic-title") as HTMLHeadingElement
const comicImage: HTMLImageElement | null = document.getElementById("comic-img") as HTMLImageElement
const publicationDate: HTMLParagraphElement | null = document.getElementById("pub-date") as HTMLParagraphElement

function handleComicData(comicInfoObj: ComicInfoObject): void {
    const altText: string = comicInfoObj.alt
    const title: string = comicInfoObj.safe_title
    const imageLink: string = comicInfoObj.img
    const year: number = +(comicInfoObj.year)
    const month: number = +(comicInfoObj.month)
    const day: number = +(comicInfoObj.day)

    // month value is decreased due to the Date months numeration
    let currentDate: Date = new Date(year, month - 1, day)

    if (comicTitle) {
        comicTitle.textContent = title
    }

    if (comicImage) {
        // show image when loaded
        comicImage.alt = altText
        comicImage.src = imageLink
        comicImage.style.visibility = "visible"
    }

    if (publicationDate) {
        publicationDate.textContent = currentDate.toLocaleDateString()
    }
}

document.addEventListener("DOMContentLoaded", async function() {
    // show loading progress
    if (publicationDate) {
        publicationDate.textContent = "Loading..."
    }

    const comicData: ComicInfoObject = await fetchData()
    handleComicData(comicData)
})