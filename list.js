let list = []

function handleCreateClick() {
let today = new Date()
  let timestamp = Date.parse(today)
 list.push({
   Title: "",
 Body:"",
 Created: timestamp,
 Updated:timestamp,
})
location.assign(`/editnote.html#${id}`)
}

let updateInfo = lastUpdated(list)
document.querySelector("h1").innerHTML=updateInfo


document.querySelector("#create-new-list-item").addEventListener('click', handleCreateClick)



