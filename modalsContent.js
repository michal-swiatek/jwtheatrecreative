modalHeader = document.getElementById("ModalHeader");
carouselContent = document.getElementById("CarouselContent");
projectDescription = document.getElementById("ProjectDescription");

function loadContent() {
    let content = "";

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].startsWith("resources/images/")) {
            content += "<div class=\"carousel-item text-center" + (i === 0 ? " active" : "") + "\">\n" +
                "<img class=\"img-fluid portfolio-image\" src=\"" + arguments[i] +
                "\" alt=\"" + arguments[i].substr(17) + "\">\n" +
                "</div>";
        } else if (arguments[i].startsWith("resources/videos/")) {
            content += "<div class=\"carousel-item text-center" + (i === 0 ? " active" : "") + "\">\n" +
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
    } else {
        prev[0].innerHTML = "";
        next[0].innerHTML = "";
    }
}

/*  Anna Karenina   */
document.getElementById("AnnaKarenina").addEventListener("click", function() {
    modalHeader.innerText = "Anna Karenina";

    carouselContent.innerHTML = loadContent("resources/images/Anna Karenina Costume Design 2021/AKD.jpg ",
        "resources/images/Anna Karenina Costume Design 2021/Anna Karenina Dress.jpg",
        "resources/images/Anna Karenina Costume Design 2021/Anna Karenina design.png");

    projectDescription.innerHTML = "<p class=\"other lead\">Historical dress design inspired by Anna Karenina" + "<br>" +
        "Russia, the 1870s \n" + "<br>" + "Design interpreted by Meg Hardy" +
        "</p>\n" +
        "<h4 class=\"text-muted\">May 2021</h4>"

    showCarouselControls(true);
});

/*  Swan Lake   */
document.getElementById("SwanLake").addEventListener("click", function() {
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

/*  Hollywood   */
document.getElementById("Hollywood").addEventListener("click", function() {
    modalHeader.innerText = "Golden Age of Hollywood";

    carouselContent.innerHTML = loadContent(
        "resources/images/Golden Hollywood Photoshoot stylist 2019/julia-wojciechowski-055-edit_orig.jpg",
        "resources/images/Golden Hollywood Photoshoot stylist 2019/julia-wojciechowski-101-edit_orig.jpg");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Photo credit: Avid Photographers</h3>\n" +
        "<p class=\"other lead\">A photoshoot realised in collaboration with Avid Photographers (@avidphotographers) exploring the photography style in the 1930s.\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">June 2021</h4>"

    showCarouselControls(true);
});

/*  Hard Times   */
document.getElementById("HardTimes").addEventListener("click", function() {
    modalHeader.innerText = "Hard Times";

    carouselContent.innerHTML = loadContent(
        "resources/images/Hard Times 2020 Scenic Artist/1.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/2.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/3.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/4.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/5.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/6.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/7.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/8.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/9.jfif",
        "resources/images/Hard Times 2020 Scenic Artist/10.jfif");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Director: Kirstie Davis<br>Set designer: Frankie Giggins</h3>\n" +
        "<p class=\"other lead\">A photoshoot realised in collaboration with Avid Photographers (@avidphotographers) exploring the photography style in the 1930s.\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">AUB Productions<br>December 2020</h4>"

    showCarouselControls(true);
});

/*  Little Revolution   */
document.getElementById("LittleRevolution").addEventListener("click", function() {
    modalHeader.innerText = "Little Revolution";

    carouselContent.innerHTML = loadContent(
        "resources/images/Little Revolution 2020 Scenic Artist/store1.jpg",
        "resources/images/Little Revolution 2020 Scenic Artist/store2.jpg",
        "resources/images/Little Revolution 2020 Scenic Artist/store3.jpg",
        "resources/images/Little Revolution 2020 Scenic Artist/store4.jpg",
        "resources/images/Little Revolution 2020 Scenic Artist/thumbnail (3).jfif");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Choreograper: Krzysztof Pastor<br>Set designer: Luisa Spinatelli</h3>\n" +
        "<p class=\"other lead\">Internship at National Opera in Warsaw, Poland\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">2017</h4>"

    showCarouselControls(true);
});

/*  Cherry Orchard   */
document.getElementById("CherryOrchard").addEventListener("click", function() {
    modalHeader.innerText = "The Cherry Orchard";

    carouselContent.innerHTML = loadContent(
        "resources/images/The Cherry Orchard 2020 Scenic Artist/3.jpg",
        "resources/images/The Cherry Orchard 2020 Scenic Artist/thumbnail (2).jfif",
        "resources/images/The Cherry Orchard 2020 Scenic Artist/thumbnail.jfif");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Director: Jonathan Martin<br>Set designer: Frankie Giggins</h3>\n" +
        "<p class=\"other lead\">The Cherry Orchard by A. Chekhov\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">AUB Productions<br>December 2020</h4>"

    showCarouselControls(true);
});

/*  Puppet   */
document.getElementById("Puppet").addEventListener("click", function() {
    modalHeader.innerText = "Puppetry";

    carouselContent.innerHTML = loadContent(
        "resources/images/Natalia 2021 Puppet Maker/Natalia.jpg");

    projectDescription.innerHTML =
        "<h3 class=\"credits\"></h3>\n" +
        "<p class=\"other lead\">Puppetry<br>A puppet realised as part of my final project at the university. Inspired by the artwork of Natalia Goncharova and the aesthetics of Russian folklore.\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">June 2021</h4>"

    showCarouselControls(false);
});

/*  Solitude   */
document.getElementById("Solitude").addEventListener("click", function() {
    modalHeader.innerText = "Solitude";

    carouselContent.innerHTML = loadContent(
        "resources/images/Solitude Costume Designer 2019/poster.png",
        "resources/images/Solitude Costume Designer 2019/screenshot 1.jpg",
        "resources/images/Solitude Costume Designer 2019/screenshot 3.jpg",
        "resources/images/Solitude Costume Designer 2019/ss.jpg",
        "resources/images/Solitude Costume Designer 2019/ss2.jpg",
        "resources/images/Solitude Costume Designer 2019/ss3.jpg");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Producer: Alix Li<br>Production designer: Benjamyn Lyall</h3>\n" +
        "<p class=\"other lead\">Solitude by Pei-Ying Chen\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">June 2019</h4>"

    showCarouselControls(false);
});

/*  Alba   */
document.getElementById("Alba").addEventListener("click", function() {
    modalHeader.innerText = "The House of Bernarda Alba";

    carouselContent.innerHTML = loadContent(
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/house1.jpg",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/house2.jpg",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/house3.jpg",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/house4.jpg",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/house5.jpg",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/2.jfif",
        "resources/images/The House of Bernarda Alba 2020 Scenic Artist/thumbnail.jfif");

    projectDescription.innerHTML =
        "<h3 class=\"credits\">Producer: Alix Li<br>Production designer: Benjamyn Lyall</h3>\n" +
        "<p class=\"other lead\">Solitude by Pei-Ying Chen\n" +
        "</p>\n" +
        "<h4 class=\"text-muted\">June 2019</h4>"

    showCarouselControls(false);
});

document.getElementById("VideoTest").addEventListener("click", function() {
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