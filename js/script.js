$(document).ready(function() {
    $("img#design").click(function() {
        $("img#design").hide();
        $("div.design").append(
            "<p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.</p>"
        );
        $("div.design").append(
            "<p>Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p>"
        );
    });
    $("img#development").click(function() {
        $("img#development").hide();
        $("div.development").append(
            "<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>"
        );
        $("div.development").append(
            "<p>They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>"
        );
    });
    $("img#product").click(function() {
        $("img#product").hide();
        $("div.product").append("<p>Planning and development is iterative.</p> ");
        $("div.product").append(
            "<p>Because we are constantly coding and testing, the products we build are always ready to go live. </p>"
        );
        $("div.product").append(
            "<p>This iterative process allows for changes as business requirements evolve.</p>"
        );
    });
    $("div.design h4").hover(function() {
        $("img#design").show();
        $("div.design p").hide();
    });
    $("div.development h4").hover(function() {
        $("img#development").show();
        $("div.development p").hide();
    });
    $("div.product h4").hover(function() {
        $("img#product").show();
        $("div.product p").hide();
    });
    $(".one,.two,.three,.four,.five,.six,.seven,.eight")
        .on("mouseenter", function() {
            $(".display").removeClass();
        })
        .on("mouseleave", function() {
            $("h2").addClass("display");
        });
});