let lists = []
let listId = location.hash.substring(1)

let list = lists.find(function(list){
  return list.id === listId
  
  })
  

function handleCreateClick() {
let today = new Date()
  let timestamp = Date.parse(today)
 lists.push({
  id: uuidv4(),
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



