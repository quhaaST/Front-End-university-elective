const email = "a.evdokimov@innopolis.university"
const emailFieldName = "email"
const comicIdFieldName = "num"

const comicTitle = document.getElementById("comic-title")
const comicImage = document.getElementById("comic-img")
const publicationDate = document.getElementById("pub-date")

function fetchComicId() {
    const params = new URLSearchParams()

    params.append(emailFieldName, email)
    return fetch("https://fwd.innopolis.app/api/hw2?" + params.toString())
        .then(r => r.json())
}

function fetchComicInfo(comicId) {
    const params = new URLSearchParams()

    params.append(comicIdFieldName, comicId)

    return fetch("https://getxkcd.vercel.app/api/comic?" + params.toString())
        .then(r => r.json())
}

function handleComicData(comicInfoObj) {
    const altText = comicInfoObj.alt
    const title = comicInfoObj.safe_title
    const imageLink = comicInfoObj.img

    let currentDate = new Date(comicInfoObj.year, comicInfoObj.month, comicInfoObj.day)

    comicTitle.textContent = title

    // show image when loaded
    comicImage.alt = altText
    comicImage.src = imageLink
    comicImage.style.visibility = "visible"

    publicationDate.textContent = currentDate.toLocaleDateString()

}

document.addEventListener("DOMContentLoaded", async function() {
    // show loading progress
    publicationDate.textContent = "Loading..."

    const comicId = await fetchComicId()
    const comicData = await fetchComicInfo(comicId)
    handleComicData(comicData)
})