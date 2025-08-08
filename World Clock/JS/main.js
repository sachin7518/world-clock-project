
async function getData(place) {
    var api_key = "346a4d1320804eac9e173733d617d401";
    var url = `https://api.ipgeolocation.io/timezone?apiKey=${api_key}&location=${place}`;
    var result = await fetch(url);
    var data = await result.json();
    var datetime = data.date_time;
    document.getElementById("datetime").innerHTML = datetime;

    var countryname = data.country_name;
    document.getElementById("countryname").innerHTML = place;
}

var nameBox = document.getElementById("name");
var cname = document.getElementById("cname");

document.querySelectorAll("path").forEach(path => {
    path.addEventListener('mouseover', (e) => {
        nameBox.style.opacity = 1;
        path.style.fill = "red";

        cname.textContent = path.id;

        window.onmousemove = (e) => {
            let tooltipWidth = nameBox.offsetWidth;
            let tooltipHeight = nameBox.offsetHeight;
            let pageWidth = window.innerWidth;
            let pageHeight = window.innerHeight;

            let left = e.clientX + 10;
            let top = e.clientY + 10;

            if (left + tooltipWidth > pageWidth) {
                left = e.clientX - tooltipWidth - 10;
            }

            if (top + tooltipHeight > pageHeight) {
                top = e.clientY - tooltipHeight - 10;
            }

            nameBox.style.left = left + "px";
            nameBox.style.top = top + "px";
        };
    });

    path.addEventListener('mouseleave', () => {
        nameBox.style.opacity = 0;
        path.style.fill = "white";
    });

    path.addEventListener('click', () => {
        getData(path.id);
    });
});
