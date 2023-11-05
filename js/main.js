documentBody = document.querySelector("body")

const createWikiItem = async (name) => {
    let wikiItem = document.createElement("div")
    wikiItem.classList.add("wiki-item")
    wikiItem.classList.add("container")

    let wikiHeader = document.createElement("h1")
    wikiHeader.innerText = name
    wikiHeader.classList.add("wiki-header")
    
    let wikiContent = document.createElement("div")
    wikiContent.classList.add("wiki-content")
    wikiContent.classList.add("container")
    
    let wikiText = document.createElement("p")
    wikiText.innerText = "Some description of breed"
    wikiText.classList.add("wiki-text")

    let imageContainer = document.createElement("div")
    imageContainer.classList.add("img-container")
    imageContainer.classList.add("container")
    let image = document.createElement("img")
    image.classList.add("wiki-img")
    image.src = await getPicture(name.toLowerCase())
    
    wikiItem.appendChild(wikiHeader)
    imageContainer.appendChild(image)  
    wikiContent.appendChild(imageContainer)
    wikiContent.appendChild(wikiText)
    wikiItem.appendChild(wikiContent)
    documentBody.appendChild(wikiItem)
}

const getPicture = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

    return data.message
}

createWikiItem("Corgi")
createWikiItem("Spitz")
createWikiItem("Frise")
createWikiItem("Germanshepherd")
createWikiItem("Labrador")