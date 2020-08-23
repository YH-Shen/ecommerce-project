// function click_search_icon() {
//     let bar = document.getElementById("search_bar");
//     let disp_state = document.defaultView.getComputedStyle(bar, null).getPropertyValue("display");
//     // console.log(disp_state);
//     if (disp_state === "none") {
//         document.getElementById("search_bar").style.display = "block";
//     }
//     if (disp_state === "block") {
//         document.getElementById("search_bar").style.display = "none";
//     }
// }

// function hover_wishlist() {
//     document.getElementsByClassName("far fa-heart").class = "fas fa-heart";
// }

$(document).ready(function () {
    change_img();
    // search bar toggle
    search_toggle();
    drop_down();
    bars_menu();
    // scorlling hide/show banner

    $(window).scroll(function () {
        isScrolling = true;
    });

    setInterval(function () {
        if (isScrolling) {
            hasScrolled();
            isScrolling = false;
        }
    }, 300);

    // initialize image gallery
    create_gallery();
    manage_gallery();
    // gallery_hover();
    hover_buttons();
    img_hover();
    footer_menu();
    create_collection();
});

function search_toggle() {
    $("#search").click(function () {
        $("#search_bar").fadeToggle();
    });
}
function drop_down() {
    $("#women_tab").hover(
        function () {
            $("#women").toggle();
            $("#women_tab a").addClass("hover_active");
        },
        function () {
            $("#women").toggle();
            $("#women_tab a").removeClass("hover_active");
        }
    );
    $("#women").hover(
        function () {
            $("#women").toggle();
            $("#women_tab a").addClass("hover_active");
            // console.log("hovered");
        },
        function () {
            $("#women").toggle();
            $("#women_tab a").removeClass("hover_active");
        }
    );

    $("#men_tab").hover(
        function () {
            $("#men").toggle();
            $("#men_tab a").addClass("hover_active");
        },
        function () {
            $("#men").toggle();
            $("#men_tab a").removeClass("hover_active");
        }
    );
    $("#men").hover(
        function () {
            $("#men").toggle();
            $("#men_tab a").addClass("hover_active");
            // console.log("hovered");
        },
        function () {
            $("#men").toggle();
            $("#men_tab a").removeClass("hover_active");
        }
    );

    $("#boys_girls_tab").hover(
        function () {
            $("#boys_girls").toggle();
            $("#boys_girls_tab a").addClass("hover_active");
        },
        function () {
            $("#boys_girls").toggle();
            $("#boys_girls_tab a").removeClass("hover_active");
        }
    );
    $("#boys_girls").hover(
        function () {
            $("#boys_girls").toggle();
            $("#boys_girls_tab a").addClass("hover_active");
            // console.log("hovered");
        },
        function () {
            $("#boys_girls").toggle();
            $("#boys_girls_tab a").removeClass("hover_active");
        }
    );
}

var isScrolling;
var lastScrollStart = 0;
var dist = 5;
var bannerHeight = $("header").outerHeight();

function hasScrolled() {
    var scrollNow = $(this).scrollTop();
    if (Math.abs(scrollNow - lastScrollStart) <= dist) return;

    // if scrolled down
    if (scrollNow > lastScrollStart && scrollNow > bannerHeight) {
        $("header").addClass("scroll_hide");
        // console.log("scrolled down");
    } else {
        // if scrolled up
        $("header").removeClass("scroll_hide");
        // console.log("scrolled up");
    }
    lastScrollStart = scrollNow;
}

var tabs = 3;
var imgs_per_tab = 4;
var img_names = [
    "Slim Fit Wool Balzer",
    "Slim fit dyed linen blazer",
    "Slim fit twill broken jeans",
    "Sand split suede espadrille loafers limited edition",
    "Crew neck cotton and cashmere sweater",
    "Slim fit dyed 100% linen blazer",
    "Slim fit stone wash jeans",
    "Crew neck cotton and silk sweater",
    "Cotton/silk mock neck sweater",
    "Slim fit chinos",
    "WHITE TRAINERS WITH HEEL TAB",
    "Slim fit melange check shirt",
];
var img_names_w = [
    "Black leather jacket with seamed detail",
    "Flowing satin skirt",
    "Handcrafted wool cropped coat",
    "Blazer dress with ruffled hem",
    "Wool dressing gown coat",
    "Classic Trench Coat With Houdstooth Lining",
    "High neck cape with decorative buttons",
    "Leather half-moon bag",
    "Mid-rise skinny jeans",
    "Flat Black Chelsea Boots With Track Sole",
    "Flannel trousers with crossover waistband",
    "Total look knit trousers",
];

var img_prices = [179.0, 179.0, 69.9, 110.0, 69.9, 179.0, 79.9, 69.9, 79.9, 69.9, 130.0, 69.9];
var img_prices_w = [
    349.0,
    129.0,
    299.0,
    179.0,
    349.0,
    249.0,
    119.0,
    129.0,
    69.9,
    249.0,
    129.0,
    119.0,
];
function create_gallery() {
    for (i = 0; i < tabs; i++) {
        // create gallery tabs for Men
        jQuery("<div/>", {
            id: "gallery_tab_" + i,
            class: "gallery_tab",
        }).appendTo("#gallery");

        // create gallery tabs for Women
        jQuery("<div/>", {
            id: "gallery_tab_w_" + i,
            class: "gallery_tab_w",
        }).appendTo("#gallery_w");
        for (j = 0; j < imgs_per_tab; j++) {
            var img_idx = j + i * imgs_per_tab;
            // add 4 images to each tab
            jQuery("<div/>", {
                id: "img_" + img_idx,
                class: "gallery_imgs",
            }).appendTo("#gallery_tab_" + i);
            jQuery("<div/>", {
                id: "img_w_" + img_idx,
                class: "gallery_imgs",
            }).appendTo("#gallery_tab_w_" + i);

            jQuery("<div/>", {
                id: "img_fill_" + img_idx,
                class: "gallery_imgs_fill",
            }).appendTo("#img_" + img_idx);
            jQuery("<div/>", {
                id: "img_fill_w_" + img_idx,
                class: "gallery_imgs_fill",
            }).appendTo("#img_w_" + img_idx);

            $("#img_fill_" + img_idx).css(
                "background-image",
                "url(../img/men_g_" + img_idx + "a.jpg)"
            );
            $("#img_fill_w_" + img_idx).css(
                "background-image",
                "url(../img/women_g_" + img_idx + "a.jpg)"
            );

            // add text under each image
            jQuery("<div/>", {
                id: "img_name_" + img_idx,
                class: "gallery_imgs_name",
            }).appendTo("#img_" + img_idx);
            jQuery("<div/>", {
                id: "img_name_w_" + img_idx,
                class: "gallery_imgs_name",
            }).appendTo("#img_w_" + img_idx);

            $("#img_name_" + img_idx).text(img_names[img_idx]);
            $("#img_name_w_" + img_idx).text(img_names_w[img_idx]);

            jQuery("<div/>", {
                id: "img_price_" + img_idx,
                class: "gallery_imgs_price",
            }).appendTo("#img_" + img_idx);
            jQuery("<div/>", {
                id: "img_price_w_" + img_idx,
                class: "gallery_imgs_price",
            }).appendTo("#img_w_" + img_idx);

            $("#img_price_" + img_idx).text("$" + img_prices[img_idx]);
            $("#img_price_w_" + img_idx).text("$" + img_prices_w[img_idx]);
        }
    }
}

var current_tab = 0;

function manage_gallery() {
    $(".gallery_buttons").hover(function () {
        if (current_tab === 0) {
            $("#left").prop("disabled", true);
        } else {
            $("#left").removeAttr("disabled");
            // console.log("enabled");
        }
    });
    $("#left").click(function () {
        if (current_tab)
            // move all tabs toward left
            $("#gallery_tab_" + Math.abs(current_tab % tabs)).addClass("opa");
        $("#gallery_tab_w_" + Math.abs(current_tab % tabs)).addClass("opa");
        // current_tab--;
        current_tab = (current_tab + 1) % tabs;
        for (i = 0; i < tabs; i++) {
            $("#gallery_tab_" + i).css("transform", "translateX(" + 80 * current_tab + "vw)");
            $("#gallery_tab_w_" + i).css("transform", "translateX(" + 80 * current_tab + "vw)");
        }

        // current_tab;
        $("#gallery_tab_" + Math.abs(current_tab % tabs)).removeClass("opa");
        $("#gallery_tab_w_" + Math.abs(current_tab % tabs)).removeClass("opa");

        console.log("left", current_tab, Math.abs(current_tab % tabs));

        if (current_tab === 0) {
            $("#left").prop("disabled", true);
        }
    });

    $("#right").click(function () {
        // move all tabs toward left
        $("#gallery_tab_" + Math.abs(current_tab % tabs)).addClass("opa");
        $("#gallery_tab_w_" + Math.abs(current_tab % tabs)).addClass("opa");
        current_tab = (current_tab - 1) % tabs;
        for (i = 0; i < tabs; i++) {
            $("#gallery_tab_" + i).css("transform", "translateX(" + 80 * current_tab + "vw)");
            $("#gallery_tab_w_" + i).css("transform", "translateX(" + 80 * current_tab + "vw)");
        }

        // current_tab--;
        $("#gallery_tab_" + Math.abs(current_tab % tabs)).removeClass("opa");
        $("#gallery_tab_w_" + Math.abs(current_tab % tabs)).removeClass("opa");

        console.log("right", current_tab, Math.abs(current_tab % tabs));

        if (current_tab !== 0) {
            $("#left").prop("disabled", false);
        }
    });
}

function hover_buttons() {
    $("#choice_women").hover(
        function () {
            $("#choice_women > button").css("background-color", "#02596d");
            $("#choice_women > button").css("color", "#ffffff");
            console.log("hovered");
        },
        function () {
            $("#choice_women > button").css("background-color", "#ffffff");
            $("#choice_women > button").css("color", "#02596d");
        }
    );
    $("#choice_men").hover(
        function () {
            $("#choice_men > button").css("background-color", "#02596d");
            $("#choice_men > button").css("color", "#ffffff");
            console.log("hovered");
        },
        function () {
            $("#choice_men > button").css("background-color", "#ffffff");
            $("#choice_men > button").css("color", "#02596d");
        }
    );
}

function gallery_hover() {
    $(images).hover(
        function () {
            // $("#img_fill_" + img_idx).css(
            //     "background-image",
            //     "url(../img/man_g_" + img_idx + "b.jpg)"
            // );
            // console.log(this.attr("value"));
        },
        function () {
            // $("#img_fill_" + img_idx).css(
            //     "background-image",
            //     "url(../img/man_g_" + img_idx + "b.jpg)"
            // );
        }
    );
}
var images = "";
function img_hover() {
    // for (i = 0; i < tabs * imgs_per_tab; i++) {
    //     images += "#img_fill_" + i + ",";
    // }
    // console.log(images);

    $(".gallery_imgs_fill").hover(
        function () {
            var address = $(this).css("background-image");
            // console.log(address[address.length - 7]);
            // console.log(address);
            var new_address = address.replace("a", "b");
            // console.log(new_address);
            $(this).css("background-image", new_address);
        },
        function () {
            var address = $(this).css("background-image");
            var new_address = address.replace("b", "a");
            $(this).css("background-image", new_address);
        }
    );

    $("#left_pic_1").hover(
        function () {
            $("#left_pic_1").attr("src", "./img/linen_jacket_back.jpg");
        },
        function () {
            $("#left_pic_1").attr("src", "./img/linen_jacket.jpg");
        }
    );
    $("#left_pic_2").hover(
        function () {
            $("#left_pic_2").attr("src", "./img/linen_shirt_side.jpg");
        },
        function () {
            $("#left_pic_2").attr("src", "./img/linen_shirt.jpg");
        }
    );

    $("#left_pic_1w").hover(
        function () {
            $("#left_pic_1w").attr("src", "./img/wool_blazer_arm.jpg");
        },
        function () {
            $("#left_pic_1w").attr("src", "./img/wool_blazer.jpg");
        }
    );
    $("#left_pic_2w").hover(
        function () {
            $("#left_pic_2w").attr("src", "./img/satin_shirt_close.jpg");
        },
        function () {
            $("#left_pic_2w").attr("src", "./img/satin_shirt.jpg");
        }
    );
}

function bars_menu() {
    $("#bars").click(function (e) {
        e.stopPropagation();
        $("#bar_drop_down").show();
        // console.log("clicked");
    });

    $(window).click(function () {
        // console.log($("#bar_drop_down").is(":visible"));
        if ($("#bar_drop_down").is(":visible")) {
            $("#bar_drop_down").css("display", "none");
        }
    });
}

function footer_menu() {
    $(".footer_cols .col").click(function (e) {
        // console.log(e.target.parentNode.childNodes);
        // console.log($(this).hasClass("active"));
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }

        // console.log($(this).hasClass("active"));
        // console.log($(this).children());
    });
}

function change_img() {
    console.log(window.location.href);
}

var collect_img_names = [
    "Bomber jacket",
    "Linen Jacket",
    "Contrast knit jacket",
    "100% wool check coat",
    "100% wool houndstooth coat",
    "Navy Technical Jacket With Pockets",
    "Navy Technical Jacket",
    "Lightweight jacket with hood",
    "Limited Edition Suede Safari Jacket",
    "Extra light down gilet",
    "Contrast suede and knit gilet",
    "Light down jacket",
];
var collect_img_prices = [
    149.0,
    179.0,
    149.0,
    349.0,
    349.0,
    179.0,
    199.0,
    149.0,
    999.0,
    129.0,
    199.0,
    149.0,
];
var collect_img_num = 12;

function create_collection() {
    for (i = 0; i < collect_img_num; i++) {
        // create divs to contain image, button, name, and price
        jQuery("<figure/>", {
            id: "collect_img_" + i,
            class: "collect_imgs",
        }).appendTo(".collection_main_items");

        // fill in with image
        jQuery("<img/>", {
            id: "collect_img_fill_" + i,
            class: "collect_imgs_fill",
        }).appendTo("#collect_img_" + i);

        $("#collect_img_fill_" + i).attr("src", "../img/men_c_" + i + "a.jpg");

        // add text under each image
        jQuery("<figcaption/>", {
            id: "collect_img_name_" + i,
            class: "collect_imgs_name",
        }).appendTo("#collect_img_" + i);

        $("#collect_img_name_" + i).text(collect_img_names[i]);

        // add price for each product
        jQuery("<div/>", {
            id: "collect_img_price_" + i,
            class: "collect_imgs_price",
        }).appendTo("#collect_img_" + i);

        $("#collect_img_price_" + i).text("$" + collect_img_prices[i]);
    }
}
