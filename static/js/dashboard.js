
document.querySelector("#refresh").addEventListener("click", function () {
    fetch("/api/hubs")
        .then((data) => {
            console.log(data.Hubs);
        })
        .catch(err => console.error("Error:", err));
});
