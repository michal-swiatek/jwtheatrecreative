modalHeader = document.getElementById("ModalHeader");
carouselContent = document.getElementById("CarouselContent");
projectDescription = document.getElementById("ProjectDescription");

function loadContent() {
    let content = "";

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].startsWith("resources/images/")) {
            content +=  "<div class=\"carousel-item text-center" + (i === 0 ? " active" : "") + "\">\n" +
                        "<img class=\"img-fluid portfolio-image\" src=\"" + arguments[i] +
                        "\" alt=\"" + arguments[i].substr(17) + "\">\n" +
                        "</div>";
        }
        else if (arguments[i].startsWith("resources/videos/")) {
            content +=  "<div class=\"carousel-item text-center" + (i === 0 ? " active" : "") + "\">\n" +
                        "<video class=\"img-fluid portfolio-image\" autoplay loop muted>\n" +
                        "<source src=\"" + arguments[i] + "\" type=\"video/mp4\" />\n" +
                        "</video>\n" +
                        "</div>";
        }
    }

    return content;
}

function showCarouselControls(show) {
    let prev = document.getElementsByClassName("carousel-control-prev");
    let next = document.getElementsByClassName("carousel-control-next");

    if (show) {
        prev[0].innerHTML = "<span class=\"carousel-control-prev-icon\"></span>";
        next[0].innerHTML = "<span class=\"carousel-control-next-icon\"></span>";
    }
    else {
        prev[0].innerHTML = "";
        next[0].innerHTML = "";
    }
}

document.getElementById("AnnaKarenina").addEventListener("click", function(){
    modalHeader.innerText = "Anna Karenina";

    carouselContent.innerHTML = loadContent("resources/images/store1.jpg",
                                            "resources/images/store2.jpg",
                                            "resources/images/store3.jpg",
                                            "resources/images/store4.jpg");

    projectDescription.innerHTML =  "<h3 class=\"credits\">Director: Kirstie Davis<br>Set designer: Frankie Giggins</h3>\n" +
                                    "<p class=\"other lead\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea odit ducimus voluptas commodi architecto iste similique temporibus illum, quo rem vel blanditiis rerum obcaecati maxime repellendus asperiores suscipit. Quos.\n" +
                                    "</p>\n" +
                                    "<h4 class=\"text-muted\">AUB Productions<br>December 2020</h4>"

    showCarouselControls(false);
});

document.getElementById("SwanLake").addEventListener("click", function(){
    modalHeader.innerText = "Swan Lake";

    carouselContent.innerHTML = loadContent(
        "resources/images/Swan Lake Costume Assistant 2017/1.png",
        "resources/images/Swan Lake Costume Assistant 2017/2.png",
        "resources/images/Swan Lake Costume Assistant 2017/3.png",
        "resources/images/Swan Lake Costume Assistant 2017/4.png",
        "resources/images/Swan Lake Costume Assistant 2017/5.png");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Choreograper: Krzysztof Pastor<br>Set designer: Luisa Spinatelli</h3>\n" +
        "<p class=\"other lead\">Internship at National Opera in Warsaw, Poland\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">2017</h4>"

    showCarouselControls(true);
});

document.getElementById("VideoTest").addEventListener("click", function(){
    modalHeader.innerText = "Video Test";

    carouselContent.innerHTML = loadContent(
        "resources/videos/20210506_134528000_iOS.mp4");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Choreograper: Krzysztof Pastor<br>Set designer: Luisa Spinatelli</h3>\n" +
        "<p class=\"other lead\">Internship at National Opera in Warsaw, Poland\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">2017</h4>"

    showCarouselControls(false);
});
