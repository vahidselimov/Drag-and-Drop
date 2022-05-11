let lists = document.querySelectorAll('.list')
let zones = document.querySelectorAll('.dropzone')
lists.forEach(listss => {
    listss.addEventListener('dragstart', (e))
    e.dataTransfer.setData("text", e.target.id)
    listss.classList.add("element-opacity")
    listss.addEventListener('dragend', () => {
        console.log("Drag process is finished by me");
        listss.classList.remove("element-opacity")

    })

})


zones.forEach(zone => {
    zone.addEventListener('dragenter', function (e) {
        e.console.log('Ap204');
        ;
    })
})
