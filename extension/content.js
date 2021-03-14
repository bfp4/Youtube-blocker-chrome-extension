const url = window.location.href
const youtube = /youtube.com/
if(youtube.test(url)){
    let browseArea = document.querySelector(".ytd-two-column-browse-results-renderer")
    let secondary = document.getElementById("secondary")
    browseArea.style.display = "none"
    secondary.style.display = "none"
}