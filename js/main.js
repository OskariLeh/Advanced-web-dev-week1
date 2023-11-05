documentBody = document.querySelector("body")
let container = document.createElement("div")
container.classList.add("container")
documentBody.appendChild(container)

const createWikiItem = async (name) => {
    

    let wikiItem = document.createElement("div")
    wikiItem.classList.add("wiki-item")

    let wikiHeader = document.createElement("h1")
    wikiHeader.innerText = name
    wikiHeader.classList.add("wiki-header")
    
    let wikiContent = document.createElement("div")
    wikiContent.classList.add("wiki-content")
    
    let wikiText = document.createElement("p")
    wikiText.innerText = await getDescription(name)
    wikiText.classList.add("wiki-text")

    let imageContainer = document.createElement("div")
    imageContainer.classList.add("img-container")
    let image = document.createElement("img")
    image.classList.add("wiki-img")
    image.src = await getPicture(name.toLowerCase())
    
    wikiItem.appendChild(wikiHeader)
    imageContainer.appendChild(image)  
    wikiContent.appendChild(imageContainer)
    wikiContent.appendChild(wikiText)
    wikiItem.appendChild(wikiContent)
    container.appendChild(wikiItem)
}

const getPicture = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

    return data.message
}

const getDescription = async (breed) => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${breed}`
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.extract)

    return data.extract
}

createWikiItem("Corgi")
createWikiItem("Spitz")
createWikiItem("Frise")
createWikiItem("Germanshepherd")
createWikiItem("Labrador")