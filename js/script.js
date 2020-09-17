$(document).ready(function () {

    //Hover trên thanh menu
    $(".sub-menu").hide();
    $(".main-menu li").hover(function () {
        $(".sub-menu", this).slideDown(500);
    }).mouseleave(function () {
        $(".sub-menu", this).slideUp(500);
    });

    //Trượt go to top
    $("#go-to-top").hide()
    if ($("#go-to-top").length > 0) {
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            var h = $(window).length;
            if (e > h) {
                $("#go-to-top").fadeIn(500)
            } else {
                $("#go-to-top").fadeOut(500)
            }
        });
        $("#go-to-top").click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 1500)
        });
    }

    //Ẩn hiện nội dung chương trình tour khi nhấn vào "Xem thêm" hoặc tiêu đề
    $(".day-tour_content, .tour-info").hide();
    $(" .more").click(function () {
        $("~div", this).slideToggle("slow")
    });
    $(".day-tour_title").click(function () {
        $("~.day-tour_content", this).slideToggle()
    });

    //Ẩn hiện tab
    $(".tab-title li").click(function () {
        var id = $("a", this).attr("href").replace("#", "")
        $(" .tab-title li").removeClass("active")
        $("a", this).parent().addClass("active") //Lấy thẻ cha trực tiếp của thành phần this đang click, chính là thẻ li, thêm class "active" vào
        $(" .tab").hide()
        $(" #" + id).show()
    });
    //Khi phần thông tin tour hiện, tab "Chương trình tour" sẽ hiện
    $(".tab-title li:first-child").addClass("active");
    $(".tab:not(:first-child)").hide();

    //Nhấn vào các li của tour list, hiện ra thông tin tour đó
    $(".tour-list li a").click(function functionName() {
        var id = $(this).attr("id")
        $("div.tour-info").fadeOut(500)
        $("div#" + id).fadeIn(500)
    });

    //Hiệu ứng ẩn hiện figcaption của item phòng trong khách sạn
    //Khi trang được tải lên, ẩn tất cả các nội dung figcaption
    $("figure > figcaption").hide();
    //Khi hover lên hình ảnh phòng, figcaption của hình đó sẽ hiện, ngược lại (khi di chuột rời khỏi vùng hình)
    $("figure.room-item").hover(function functionName() {
        $("figcaption", this).slideDown(1000)
    }).mouseleave(function functionName() {
        $("figcaption", this).slideUp(500)
    });

    //Thêm class vào thành phần
    $(".tour-title").addClass(" nowrap--ellipsis")
    $(".content li > span, .tour-info__headerRight table td:first-child, caption").addClass(" heading")

});

//Khi trượt màn hình, thanh header sẽ trượt theo
window.onscroll = function () {
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("header");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        header.style.position = "fixed";
        header.style.zIndex = 2;
        header.style.opacity = 0.9;
        header.style.backgroundImage = "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)";
    } else {
        header.style.position = "relative";
        header.style.opacity = 1;
        header.style.backgroundImage = "";
    }
}

//Hàm kiểm tra dữ liệu nhập vào
function check(){
    ten=document.book.ten;
    dt=document.book.dt;
    address=document.book.address;
    if(ten.value==""){
        alert("Nhập Tên");
        ten.focus();
        return false;

    }
    if(dt.value==""){
        alert("Nhập SDT");
        dt.focus();
        return false;

    }
    if(address.value==""){
        alert("Nhập Địa Chỉ");
        address.focus();
        return false;
    }
}