var tb_amph = [],
    tb_billin = [],
    tb_custo = [],
    tb_dist = [],
    tb_ohist = [],
    tb_procat = [],
    tb_prod = [],
    tb_promo = [],
    tb_prov = [],
    tb_sale = [],
    tb_billt = [],
    tb_srin = [],
    tb_vanin = [],
    tb_store = [],
    tb_tdin = [],
    tb_tarin = [],
    tb_bank = [],
    tb_branch = [],
    tb_vat = [],
    tb_bptype = [],
    tb_msg = [],
    tb_test = [],
    tb_cusnew1 = [],
    tb_endday = [],
    ord_typ = [],
    v72_conf, tb_v71 = [],
    tb_v72 = [],
    tb_f54sav = [],
    tb_billcsav = [],
    tb_paysav = [],
    tb_ordersav = [],
    tb_f51sav = [],
    tb_f52sav = [],
    tb_stvan = [],
    tb_stsr = [],
    tb_billtsav = [],
    tb_cusnew = [],
    tb_keylist = [],
    tb_f51beam = [],
    tb_f52beam = [],
    tb_locsav = [],
    pg1, sani = 0,
    bbta = [104, 116, 116, 112, 58, 47, 47, 49, 50, 55, 46, 48, 46, 48, 46, 49, 58, 53, 53, 53, 53],
    htm_radio = "type='radio' ",
    htm_txt = "type='text' ",
    htm_pass = "type='password' ",
    htm_hid = "type='hidden' ",
    htm_cbox = "type='checkbox' ",
    htm_btt = "type='button' ",
    lf = "<br>",
    purl, uinp = [],
    /*lnk1 = "http://110.170.212.168/site/B2BDEV/public/tripsales_getcustomerbytrip",
    lnk2 = "http://110.170.212.168/site/B2BDEV/public/tripsales_gettriprecommend",
    lnk3 = "http://110.170.212.168/site/B2BDEV/public/insertcustomertripstatus",
    lnk4 = "http://110.170.212.168/site/B2BDEV/public/insertcustomertarget",
	lnk5 = "http://110.170.212.168/site/B2BDEV/public/checktripstatus",
	lnk6 = "http://110.170.212.168/site/B2BDEV/public/loadlatlong",
	lnk7 = "http://110.170.212.168/site/B2BDEV/public/insertlatlong",*/

    lnk1 = "https://api.sahapat.com/site/B2BDEV/public/tripsales_getcustomerbytrip",
    lnk2 = "https://api.sahapat.com/site/B2BDEV/public/tripsales_gettriprecommend",
    lnk3 = "https://api.sahapat.com/site/B2BDEV/public/insertcustomertripstatus",
    lnk4 = "https://api.sahapat.com/site/B2BDEV/public/insertcustomertarget",
    lnk5 = "https://api.sahapat.com/site/B2BDEV/public/checktripstatus",
    lnk6 = "https://api.sahapat.com/site/B2BDEV/public/loadlatlong",
    lnk7 = "https://api.sahapat.com/site/B2BDEV/public/insertlatlong",
    lnk8 = "https://api.sahapat.com/site/B2BDEV/public/tripsales_getcustomerbyamphur",
    cur = {
        custo: "",
        trip: "",
        sales: "",
        btype: "",
        cat: "",
        sr: "",
        prod: "",
        date: "",
        ordno: "",
        ord_typ: "",
        ipm: "",
        lat: "",
        lng: "",
        pg: ""
    },
    keyb = {
        obj: "txt1",
        ploc: "",
        RET_FUNC: "",
        INP_OK: ""
    },
    g_ttim = 0,
    inp_tmp1, inp_tmp2;

function loadTxtDoc(a) {
    xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    xhttp.open("GET", a, !1);
    xhttp.send();
    return xhttp.responseText
}

function loadTxtDoc1(a, c) {
    xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    xhttp.open("POST", a, !1);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(c);
    return xhttp.responseText
}

function fileSelected(input) {

    var count = document.getElementById('fileToUpload').files.length;

    document.getElementById('progress').innerHTML = "";

    for (var index = 0; index < count; index++) {

        var file = document.getElementById('fileToUpload').files[index];

        var fileSize = 0;

        if (file.size > 1024 * 1024)

            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';

        else

            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

    }

    if (input.files && input.files[0]) {
        var filerdr = new FileReader();
        filerdr.onload = function (e) {
            //$('#imgCus').attr('src', e.target.result);
            var logo = document.getElementById('imgCus');
            logo.setAttribute('src', e.target.result);
        }
        filerdr.readAsDataURL(input.files[0]);
    }

}
var minp_get = function (a) {
    var c = [],
        b = document.getElementsByName(a);
    for (a = 0; a < b.length; a++) c.push(b[a]);
    return c
},
    minp_get_chk = function (a) {
        var c = [],
            b = document.getElementsByName(a);
        for (a = 0; a < b.length; a++) b[a].checked && c.push(b[a].value);
        return c
    },
    minp_get_chki = function (a) {
        var c = [],
            b = document.getElementsByName(a);
        for (a = 0; a < b.length; a++) b[a].checked && c.push(a);
        return c
    },
    minp_htm = function (a, c, b) {
        var d = "",
            e, f;
        void 0 == b && (b = "");
        for (e = 0; e < c.length; e++) f = c[e] == b ? " checked " : "", d += "<input " + a + f + " value='" + c[e] +
            "' >" + c[e] + "<br/>";
        return d
    },
    inp_htm = function (a) {
        return "<input " + a + ">"
    },
    opt_htm = function (a, c, b) {
        var d, e = "";
        void 0 == b && (b = "");
        d = "<select " + a + ">";
        for (a = 0; a < c.length; a++) e = c[a] == b ? "selected" : "", d += "<option value='" + c[a] + "' " + e + ">" + c[a] + "</option>";
        return d + "</select>"
    },
    bt_htm = function (a, c) {
        void 0 == c && (c = "");
        return "<button " + c + ">" + a + "</button>"
    },
    imp = function (a) {
        a = String(a);
        return "" != a ? a.split(",") : []
    };

function create_btn(a, c) {
    var b = document.createElement("button");
    b.className = c;
    b.innerHTML = a;
    return b
}
var get_el = function (a) {
    return document.getElementById(a)
},
    test = function (a) {
        alert(a.innerText)
    },
    el_on = function (a) {
        document.getElementById(a).style.visibility = "visible"
    },
    el_off = function (a) {
        document.getElementById(a).style.visibility = "hidden"
    },
    set_style = function (a, c) {
        document.getElementById(a).style = c
    },
    set_w = function (a, c) {
        document.getElementById(a).style.width = c
    },
    set_h = function (a, c) {
        document.getElementById(a).style.height = c
    },
    set_p = function (a, c, b) {
        document.getElementById(a).style.top = c;
        document.getElementById(a).style.left =
            b
    },
    get_txt = function (a) {
        return document.getElementById(a).innerHTML
    },
    set_txt = function (a, c) {
        document.getElementById(a).innerHTML = c
    },
    SNum = function (a, c) {
        return a - c
    },
    get_elval = function (a) {
        return document.getElementById(a).value
    },
    get_elchk = function (a) {
        return document.getElementById(a).checked
    },
    set_elval = function (a, c) {
        document.getElementById(a).value = c
    },
    set_elfocus = function (a) {
        document.getElementById(a).focus()
    },
    chkdigi = function (a) {
        return 10 > a ? "0" + a.toString() : a.toString()
    };

function inp_num(a) {
    document.getElementById(keyb.obj).value += a
}

function inp_clr() {
    set_elval(keyb.obj, "")
}

function inp_sel(a) {
    keyb.obj = a.id;
    set_elval(a.id, "")
}

function Text_Product_Info(a) {
    return tb_prod[a][0] + " " + tb_prod[a][3] + " " + tb_prod[a][6] + " บาท "
}

function Text_Current_Stock(a) {
    var c = "";
    return c = "" == cur.ipm ? c + ("เหลือ " + set2tem(get_stk(a), tb_prod[a][0]) + " ชิ้น ") : c + ("เหลือ " + set2tem(get_stksr(a), tb_prod[a][0]) + " ชิ้น ")
}

function Check_Stock(a) {
    var c = "",
        b = 0,
        c = 0;
    ddd = new Date;
    for (var d = ddd.getDate(); c < tb_v72.length && !(d >= tb_v72[c][1] && d <= tb_v72[c][2]);) c++;
    "" == cur.ipm ? (c = chk_stk(a, get_elval("txt1") + "/" + get_elval("txt2")), 0 != c && (alert("มีของไม่พอ เหลือ " + set2tem(get_stk(a), tb_prod[a][0]) + " ชิ้น"), b = 1, 75 == cur.pg && (b = 0))) : "Y" == tb_v72[c][3] && (c = chk_stksr(a, get_elval("txt1") + "/" + get_elval("txt2")), 0 != c && (alert("มีของไม่พอ เหลือ " +
        set2tem(get_stksr(a), tb_prod[a][0]) + " ชิ้น"), b = 1, 75 == cur.pg && (b = 0)));
    return b
}

function kbinp1(a) {
    var c, b;
    keyb.ploc = a;
    el_on("PAGE3");
    keyb.INP_OK = function () {
        tb_keylist.push(keyb.ploc);
        uinp[keyb.ploc][0] = Number(get_elval("txt1"));
        uinp[keyb.ploc][1] = Number(get_elval("txt2"));
        var a;
        a = set2tem(uinp[keyb.ploc][1], tb_prod[keyb.ploc][0]).split("/");
        uinp[keyb.ploc][0] += 1 * a[0];
        uinp[keyb.ploc][1] = 1 * a[1];
        1 == Check_Stock(keyb.ploc) && (uinp[keyb.ploc][0] = 0, uinp[keyb.ploc][1] = 0);
        el_off("PAGE3");
        keyb.RET_FUNC()
    };
    c = void 0 == uinp[a][0] ? "" : uinp[a][0];
    b = void 0 == uinp[a][1] ? "" : uinp[a][1];
    a = "" + (Text_Product_Info(a) +
        Text_Current_Stock(a) + lf);
    a = a + ("<input id='txt1' value='" + c + "' type='button' onclick='inp_sel(this)' />") + ("/<input id='txt2' value='" + b + "' type='button' onclick='inp_sel(this)' /><br/><br/>");
    a += "<button class='inp' onclick='inp_num(1)'>1</button>";
    a += "<button class='inp' onclick='inp_num(2)'>2</button>";
    a += "<button class='inp' onclick='inp_num(3)'>3</button>";
    a += "<button class='inp' onclick='inp_num(4)'>4</button>";
    a += "<button class='inp' onclick='inp_num(5)'>5</button><br/>";
    a += "<button class='inp' onclick='inp_num(6)'>6</button>";
    a += "<button class='inp' onclick='inp_num(7)'>7</button>";
    a += "<button class='inp' onclick='inp_num(8)'>8</button>";
    a += "<button class='inp' onclick='inp_num(9)'>9</button>";
    a += "<button class='inp' onclick='inp_num(0)'>0</button><br/>";
    a += "<button class='inp' onclick='inp_clr()'>CLR</button>";
    a += "<button class='inp' onclick='inp_num(\"-\")'>-</button>";
    a += "<button class='inp' onclick='keyb.INP_OK()'>OK</button><br/>";
    a += print_promo(tb_prod[keyb.ploc][0], "<br/>");
    set_txt("PAGE3", a);
    set_elfocus(keyb.obj)
}

function kbinp2(a) {
    var c, b, d, e, f;
    keyb.ploc = a;
    el_on("PAGE3");
    keyb.INP_OK = function () {
        uinp[keyb.ploc][0] = Number(get_elval("txt1"));
        uinp[keyb.ploc][1] = Number(get_elval("txt2"));
        uinp[keyb.ploc][2] = Number(get_elval("txt3"));
        uinp[keyb.ploc][3] = Number(get_elval("txt4"));
        uinp[keyb.ploc][7] = Number(get_elval("txt5"));
        1 == Check_Stock(keyb.ploc) && (uinp[keyb.ploc][0] = 0, uinp[keyb.ploc][1] = 0);
        el_off("PAGE3");
        keyb.RET_FUNC()
    };
    c = void 0 == uinp[a][0] ? "" : uinp[a][0];
    b = void 0 == uinp[a][1] ? "" : uinp[a][1];
    d = void 0 == uinp[a][2] ?
        "" : uinp[a][2];
    e = void 0 == uinp[a][3] ? "" : uinp[a][3];
    f = void 0 == uinp[a][7] ? "" : uinp[a][7];
    a = "" + (Text_Product_Info(a) + Text_Current_Stock(a) + lf + lf);
    a = a + ("<input id='txt1' value='" + c + "' type='button' onclick='inp_sel(this)' />") + ("/<input id='txt2' value='" + b + "' type='button' onclick='inp_sel(this)' />");
    a += " ส่วนลด <input id='txt3' value='" + d + "' type='button' onclick='inp_sel(this)' />";
    a += "% <input id='txt4' value='" + e + "' type='button' onclick='inp_sel(this)' />บาท ";
    a += " ราคาพิเศษ <input id='txt5' value='" + f + "' type='button' onclick='inp_sel(this)' /><br/><br/>";
    a += "<button class='inp' onclick='inp_num(1)'>1</button>";
    a += "<button class='inp' onclick='inp_num(2)'>2</button>";
    a += "<button class='inp' onclick='inp_num(3)'>3</button>";
    a += "<button class='inp' onclick='inp_num(4)'>4</button>";
    a += "<button class='inp' onclick='inp_num(5)'>5</button><br/>";
    a += "<button class='inp' onclick='inp_num(6)'>6</button>";
    a += "<button class='inp' onclick='inp_num(7)'>7</button>";
    a += "<button class='inp' onclick='inp_num(8)'>8</button>";
    a += "<button class='inp' onclick='inp_num(9)'>9</button>";
    a += "<button class='inp' onclick='inp_num(0)'>0</button><br/>";
    a += "<button class='inp' onclick='inp_clr()'>CLR</button>";
    a += "<button class='inp' onclick='inp_num(\".\")'>.</button>";
    a += "<button class='inp' onclick='keyb.INP_OK()'>OK</button><br/>";
    a += print_promo(tb_prod[keyb.ploc][0], "<br/>");
    set_txt("PAGE3", a);
    set_elfocus(keyb.obj)
}

function kbinp3(a) {
    var c, b, d;
    keyb.ploc = a;
    keyb.INP_OK = function () {
        var a = get_elval("trip2");
        uinp[keyb.ploc][5] = Number(get_elval("txt1"));
        uinp[keyb.ploc][6] = Number(get_elval("txt2"));
        uinp[keyb.ploc][4] = a.substr(0, 6);
        el_off("PAGE3");
        keyb.RET_FUNC()
    };
    inp_tmp1 = function (a) {
        var c = "",
            b;
        b = get_elval("trip1");
        var d, m;
        void 0 != a && (b = tb_prod.a2d_find(a, 0), b = tb_procat.a2d_find(b[0][2], 0), b = b[0][1]);
        "all" != b && (m = tb_procat.a2d_find1(b, 1, 0));
        "all" == b && (m = "all");
        c += "สินค้า <select id='trip2' onchange='inp_tmp2();'>";
        c += "<option value=''>-Selected-</option>";
        for (b = 0; b < tb_prod.length; b++)
            if (d = tb_prod[b][2], "all" == m || d == m) c = tb_prod[b][0] != a ? c + ("<option>" + tb_prod[b][0] + " " + tb_prod[b][3] + "</option>") : c + ("<option selected='selected'>" + tb_prod[b][0] + " " + tb_prod[b][3] + "</option>");
        c += "</select>";
        set_txt("subPAGE3_1", c)
    };
    inp_tmp2 = function () {
        var a, c;
        a = void 0 == uinp[keyb.ploc][5] ? "" : uinp[keyb.ploc][5];
        c = void 0 == uinp[keyb.ploc][6] ? "" : uinp[keyb.ploc][6];
        a = "" + ("<input id='txt1' value='" + a + "' type='button' onclick='inp_sel(this)' />") +
            ("/<input id='txt2' value='" + c + "' type='button' onclick='inp_sel(this)' /><br/><br/>");
        a += "<button class='inp' onclick='inp_num(1)'>1</button>";
        a += "<button class='inp' onclick='inp_num(2)'>2</button>";
        a += "<button class='inp' onclick='inp_num(3)'>3</button>";
        a += "<button class='inp' onclick='inp_num(4)'>4</button>";
        a += "<button class='inp' onclick='inp_num(5)'>5</button><br/>";
        a += "<button class='inp' onclick='inp_num(6)'>6</button>";
        a += "<button class='inp' onclick='inp_num(7)'>7</button>";
        a += "<button class='inp' onclick='inp_num(8)'>8</button>";
        a += "<button class='inp' onclick='inp_num(9)'>9</button>";
        a += "<button class='inp' onclick='inp_num(0)'>0</button><br/>";
        a += "<button class='inp' onclick='inp_clr()'>CLR</button>";
        a += "<button class='inp' onclick='keyb.INP_OK()'>OK</button><br/>";
        set_txt("subPAGE3_2", a)
    };
    c = void 0 == uinp[a][0] ? "" : uinp[a][0];
    b = void 0 == uinp[a][1] ? "" : uinp[a][1];
    d = void 0 == uinp[a][4] ? "" : uinp[a][4];
    if ("" != c || "" != b) {
        keyb.obj = "txt2";
        a = "" + (Text_Product_Info(a) + Text_Current_Stock(a) + lf);
        a += "กลุ่ม <select id='trip1' onchange='inp_tmp1();'>";
        a += "<option value=''>-Selected-</option>";
        a += "<option value='all'>All</option>";
        res = tb_procat.a2d_getfil(1);
        for (i = 0; i < res.length; i++) a += "<option>" + res[i] + "</option>";
        a += "</select>";
        a += "<div id='subPAGE3_1'></div>";
        a += "<div id='subPAGE3_2'></div>";
        el_on("PAGE3");
        set_txt("PAGE3", a);
        "" != d && (inp_tmp1(d), inp_tmp2())
    }
}
var P1_FLOC = function () {
    //window.open("http://110.164.217.57/gps_location/cuslocation.asp?getsales=" + cur.sales + "&cuscode=" + tb_custo[cur.custo][2] + "&chkdivi=1")
    window.open("https://gps.sahapat.com/gps_location/cuslocation.asp?getsales=" + cur.sales + "&cuscode=" + tb_custo[cur.custo][2] + "&chkdivi=1")
},
    addcus1 = function () {
        //window.open("http://58.136.23.92/chanburi_test/index.php?getsales=" + cur.sales);

        window.open("https://van.sahapat.com/php/chanburi_test/index.php?getsales=" + cur.sales);
        set_txt("btn5", bt_htm(" รับร้านค้าใหม่เข้าเครื่อง ", "onclick=donext()"))
    },
    uploadFile = function (customercode, salesmancode, clat, clong, cdivisionsale) {
        var radios = document.getElementsByName("rd");
        var val = "";
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                val = radios[i].value;
            }
        }
        if (val == "") {
            alert("คุณยังไม่ได้เลือกรูปแบบการ บันทึกพิกัด");
            return false;
        }
        var count = document.getElementById('fileToUpload').files.length;
        var cus_code = customercode;
        var file_type = "";
        var file;
        if (val == "1" || val == "3") {
            if (count == 0) {
                alert("คุณยังไม่ได้เลือกรูป");
                return false;
            }
        }
        /*if (count == 0)
        {
        	alert("คุณยังไม่ได้เลือกรูป");
        	return false;
        }*/
        if (cus_code != "") {
            for (var index = 0; index < count; index++) {

                file = document.getElementById('fileToUpload').files[index];
                file_type = file.type;
            }
            var res = file_type.split("/");
            file_type = res[res.length - 1];
            getLocation();
            /*alert(customercode+salesmancode+clat+clong+cdivisionsale);
            alert(cus_code+file+file_type+cur.lat+cur.lng+salesmancode);*/
            var msgdata = ldf1(lnk7, "customercode=" + cus_code + "&gpse=" + cur.lat + "&gpsn=" + cur.lng + "&file=" + file + "&filetype=" + file_type + "&salesmancode=" + salesmancode + "&tempgpse=" + clat + "&tempgpsn=" + clong + "&cdivision=" + cdivisionsale + "&typelist=" + val);
            //cus_code = "test";
            //alert(msgdata);
            if (msgdata == "OK") {
                var fd = new FormData();
                fd.append('myFile', file); //PHP
                fd.append('cusCode', cus_code);
                xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                xhttp.open("POST", 'testsavetofile.php', !1);
                xhttp.send(fd);
                var msgimg = xhttp.responseText.split(",");
                //alert(xhttp.responseText);
                if (msgimg[0] == "OK") {
                    alert('บันทึกเรียบร้อยแล้ว');
                } else {
                    alert(msgimg[0]);
                    return false;
                }
            } else if (msgdata == "no image") {
                alert('บันทึกเรียบร้อยแล้ว');
                return false;
            } else {
                alert(msgdata);
                return false;
            }
        }
    },
    lookimg = function (ximg) {
        //alert(ximg);
        var logo = document.getElementById('imgCus');
        //alert(logo);
        logo.setAttribute('src', '');
        logo.style.display = 'block';
        if (ximg != "") {
            logo.setAttribute('src', 'http://gps.sahapatonline.com/gps_location/img/' + ximg);
        } else {
            logo.setAttribute('src', 'http://gps.sahapatonline.com/gps_location/img/noimage.jpg');
        }
    },
    cleardata = function (a) {
        localStorage.van_orderout = "";
        localStorage.van_ordersave = "";
        localStorage.van_billtsav = "";
        alert("Done")
    },
    chk_load = function (a, c) {
        loadTxtDoc1("gettbl.asp", a)
    },
    chk_imp = function (a, c, b) {
        var d = [];
        void 0 != a && "" != a && d.a2d_imp(a, c, b);
        return d
    },
    showdata = function () {
        localStorage.van_paysav = "";
        localStorage.van_billcsav = "";
        localStorage.van_lnk = 0;
        alert(localStorage.van_paysav)
    },
    showdata1 = function () {
        alert(localStorage.van_paysav)
    },
    fpoint = function (a) {
        return Math.floor(100 * a) / 100
    },
    set2tem = function (a, c) {
        var b = tb_prod.a2d_find(c, 0)[0][4],
            d = Math.floor(a %
                b);
        return Math.floor((a - d) / b) + "/" + d
    },
    tem2set = function (a, c) {
        var b = tb_prod.a2d_find(c, 0),
            d = -1;
        0 < b.length ? (b = b[0][4], d = a.split("/"), d = Number(d[0]) * b + Number(d[1])) : alert("ไม่พบ " + c);
        return d
    },
    tem2per = function (a, c) {
        var b = tb_prod.a2d_find(c, 0)[0][4],
            d = a.split("/");
        return Number(d[0]) + Number(d[1]) / b
    },
    chkset1 = function (a) {
        var c, b, d;
        c = 1 * a[0];
        b = 1 * a[1];
        d = 1 * a[2];
        a[2] = d % c;
        a[1] = b + (d - a[2]) / c;
        return a
    },
    chkset = function (a) {
        var c, b, d;
        c = 1 * a[4];
        b = 1 * a[8];
        d = 1 * a[9];
        a[9] = d % c;
        a[8] = b + (d - a[9]) / c;
        return a
    },
    mgroup = function (a) {
        var c = [],
            b = [],
            d = 0,
            e, f, g, h;
        if (0 < a.length)
            for (e = 0; e < a.length; e++)
                if (0 < b.length) {
                    for (c = d = 0; c < b.length; c++) a[e][0] == b[c][0] && (b[c][8] += Number(a[e][8]), b[c][9] += Number(a[e][9]), h = 1 * a[e][4], f = Number(b[c][8]), g = Number(b[c][9]), d = g % h, f += (g - d) / h, b[c][8] = f, b[c][9] = d, d = 1);
                    if (0 == d) {
                        c = [];
                        for (d = 0; d < a[e].length - 2; d++) c.push(a[e][d]);
                        h = 1 * a[e][4];
                        f = Number(a[e][8]);
                        g = Number(a[e][9]);
                        d = g % h;
                        f += (g - d) / h;
                        c.push(f);
                        c.push(d);
                        b.push(c)
                    }
                } else {
                    c = [];
                    for (d = 0; d < a[e].length - 2; d++) c.push(a[e][d]);
                    h = 1 * a[e][4];
                    f = Number(a[e][8]);
                    g = Number(a[e][9]);
                    d = g % h;
                    f += (g - d) / h;
                    c.push(f);
                    c.push(d);
                    b.push(c)
                }
        return b
    },
    get_lastordno = function (a) {
        var c = [],
            b, d, e, c = new Date;
        25 == a && (b = tb_ordersav.a2d_find(c.get_date(), 3));
        51 == a && (b = tb_f51sav.a2d_find(c.get_date(), 3));
        52 == a && (b = tb_f52sav.a2d_find(c.get_date(), 3));
        c = b.a2d_dist(2, "s");
        a = "";
        if (0 < c.length) {
            b = c.length - 1;
            for (e = d = 0; e < c.length; e++)
                if (12 == c[b - e].length) {
                    d = 1;
                    break
                }
            1 == d && (a = c[b - e])
        }
        return a
    },
    get_ordno = function (a) {
        var c = [],
            b = [],
            d, e, f;
        ddd = new Date;
        25 == a && (d = tb_ordersav.a2d_find(ddd.get_date(),
            3));
        51 == a && (d = tb_f51sav.a2d_find(ddd.get_date(), 3));
        52 == a && (d = tb_f52sav.a2d_find(ddd.get_date(), 3));
        b = d.a2d_dist(2, "s");
        d = ddd.get_orddate();
        for (a = 0; a < b.length; a++) e = b[a].substr(4, 4), e == d && c.push(b[a]);
        b = "0001";
        if (0 < c.length) {
            d = c.length - 1;
            e = 0;
            f = "0000";
            for (a = 0; a < c.length; a++) 12 == c[d - a].length && c[d - a] > f && (f = c[d - a], e = 1);
            1 == e && (b = add_orderno(f))
        }
        return c = cur.sales + ddd.get_orddate() + b
    },
    add_orderno = function (a) {
        var c, b, d;
        a = (Number(a.substr(8, 4)) + 1).toString();
        c = 4 - a.length;
        b = "";
        for (d = 0; d < c; d++) b += "0";
        return b +
            a
    };

function id_promo(a) {
    var c, b = [];
    c = [];
    var d;
    c = tb_prod.a2d_find(a, 0);
    "" != c[0][1] && (a = c[0][1]);
    for (c = 0; c < tb_promo.length; c++)
        if (tb_promo[c][0] == a) {
            for (j = d = 0; j < b.length; j++) b[j][1] == tb_promo[c][1] && b[j][2] == tb_promo[c][2] && (d = 1);
            0 == d && b.push(tb_promo[c])
        }
    return b
}

function promo_text(a) {
    var c, b = [],
        d, e, f, g, h;
    for (c = 0; c < a.length; c++) d = e = f = g = h = "", "" != a[c][0] && (h = " คละได้ " + a[c][0]), 0 < a[c][5] && (d = " ลด " + a[c][5] + "% "), 0 < a[c][6] && (e = " ลด " + a[c][6] + " บาท "), "Y" == a[c][3] && (f = " ทอนได้ขั้นต่ำ " + a[c][4] + " ชิ้น "), "" != a[c][7] && (g = " แถม " + a[c][7] + " " + a[c][8] + " ชิ้น "), a[c][1] == a[c][2] && b.push("ทุกๆ " +
        a[c][1] + " หีบ " + d + e + f + g + h), a[c][1] < a[c][2] && b.push(a[c][1] + " ถึง " + a[c][2] + " หีบ " + d + e + f + g + h);
    return b
}

function print_promo(a, c) {
    var b, d, e, f = "";
    b = "";
    d = id_promo(a);
    if (0 < d.length) {
        e = promo_text(d);
        for (b = 0; b < e.length; b++) f += e[b] + c;
        b = d[0][10]
    }
    if ("\n" == c) alert(b + "\n" + f);
    else return b + "<br>" + f
}
var get_order = function () {
    var a, c, b, d, e, f = [],
        g;
    for (b = 0; b < tb_prod.length; b++)
        if (a = void 0 == uinp[b][0] ? 0 : 1 * uinp[b][0], c = void 0 == uinp[b][1] ? 0 : 1 * uinp[b][1], 0 != a || 0 != c) {
            g = [];
            for (d = 0; d < tb_prod[b].length; d++) g.push(tb_prod[b][d]);
            e = 1 * tb_prod[b][4];
            d = c % e;
            c = (c - d) / e;
            a += c;
            c = d;
            g.push(a);
            g.push(c);
            f.push(g)
        }
    return f
},
    get_order_n = function () {
        var a, c, b, d, e, f, g, h, m, l, n, p = [],
            q = [];
        for (m = 0; m < tb_prod.length; m++)
            if (a = void 0 == uinp[m][0] ? 0 : 1 * uinp[m][0], c = void 0 == uinp[m][1] ? 0 : 1 * uinp[m][1], b = void 0 == uinp[m][2] ? 0 : 1 * uinp[m][2],
                d = void 0 == uinp[m][3] ? 0 : 1 * uinp[m][3], e = void 0 == uinp[m][4] ? 0 : uinp[m][4], f = void 0 == uinp[m][5] ? 0 : 1 * uinp[m][5], g = void 0 == uinp[m][6] ? 0 : 1 * uinp[m][6], h = void 0 == uinp[m][7] ? 0 : 1 * uinp[m][7], 0 != a || 0 != c) {
                q = [];
                for (l = 0; l < tb_prod[m].length; l++) q.push(tb_prod[m][l]);
                n = 1 * tb_prod[m][4];
                l = c % n;
                c = (c - l) / n;
                a += c;
                c = l;
                q.push(a);
                q.push(c);
                q.push(b);
                q.push(d);
                q.push(e);
                q.push(f);
                q.push(g);
                q.push(h);
                p.push(q)
            }
        return p
    },
    get_order1 = function (a) {
        var c, b = [];
        for (c = 0; c < a.length; c++) "" == a[c][1] && b.push(a[c]);
        return b
    },
    get_order2 = function (a) {
        var c,
            b, d = 0,
            e = [];
        for (c = 0; c < a.length; c++) "" != a[c][1] && (e.push(a[c]), b = e[d][0], e[d][0] = e[d][1], e[d][1] = b, d++);
        return e
    },
    check_orderno = function () {
        var a, c;
        a = new Date;
        var b = minp_get_chk("ra1");
        if (void 0 != localStorage.van_lastendday && "undefined" != localStorage.van_lastendday && a.get_date() <= localStorage.van_lastendday) return alert("ปิดสิ้นวันแล้ว"), 1;
        if (0 == b.length) return alert("ยังไม่เลือกประเภทการขาย"),
            1;
        1 == b[0] && (c = "A");
        2 == b[0] && (c = "B");
        3 == b[0] && (c = "C");
        4 == b[0] && (c = "D");
        5 == b[0] && (c = "E");
        a = get_elval("ordno");
        cur.ord_typ = c;
        if (3 == cur.btype) {
            if ("" == a) return alert("ใส่เลขที่บิลก่อน"), 1
        } else a = get_ordno(25);
        cur.ordno = a;
        return 0
    },
    save_order = function (a) {
        ldf1(lnk3, "salesmancode=" + cur.sales + "&tripno=" + ady.getDate() + "&tripseq=" + localStorage.van_cust1 + "&customercode=" + tb_custo[cur.custo][2] + "&gpse=" + cur.lat + "&gpsn=" + cur.lng + "&status=1");
        var c = [],
            b;
        if (0 == cur.btype || 1 == cur.btype) c = gen_order1();
        if (2 == cur.btype || 3 == cur.btype) c = gen_order2();
        for (b = 0; b < c.length; b++) c[b][2] = cur.ordno, c[b][5] = cur.sr, c[b][4] = cur.ord_typ, c[b][19] = a;
        tb_ordersav = tb_ordersav.concat(c);
        localStorage.van_ordersav = tb_ordersav.a2d_exp();
        localStorage.van_print = gen_print(c, 1);
        a = gen_print(c, 1);
        pttr(a);
        get_el("btn3").disabled = !1;
        get_el("btn4").disabled = !1;
        get_el("btn1").disabled = !0;
        get_el("btn2").disabled = !0;
        P1_SEL_3_A_NN(1)
    },
    clear_val = function () {
        var a = [],
            c, b;
        uinp = [];
        for (c = 0; c < tb_prod.length; c++) {
            a = [];
            for (b = 0; 8 > b; b++) a.push(0);
            uinp.push(a)
        }
    },
    gen_order1 = function () {
        var a, c, b, d, e, f, g, h = [],
            m = [],
            l;
        a = get_order();
        c = get_order1(a);
        a = get_order2(a);
        b = mgroup(a);
        for (l = 0; l < c.length; l++) {
            f = c[l];
            e = getpromo(f);
            d = gen_orderout1(f, 0, e, 0, 0, 0);
            if (0 < d.length)
                for (g = 0; g < d.length; g++) m.push(d[g]);
            d = gen_orderout1(f, 1, e, 0, 0, 0);
            if (0 < d.length)
                for (g = 0; g < d.length; g++) m.push(d[g])
        }
        for (l = 0; l < b.length; l++) f = b[l], e = getpromo(f), h.push(e);
        for (l = 0; l < a.length; l++) {
            f = a[l];
            g = b.a2d_find(a[l][0], 0);
            c = g[0][4] *
                g[0][8] + g[0][9];
            d = g[0][8];
            e = -1;
            for (g = 0; g < h.length; g++) h[g][0] == a[l][0] && (e = g);
            g = -1 < e ? h[e] : getpromo(f);
            d = gen_orderout1(f, 0, g, 1, c, d);
            if (0 < d.length)
                for (g = 0; g < d.length; g++) m.push(d[g])
        }
        for (l = 0; l < b.length; l++) {
            f = b[l];
            e = -1;
            for (g = 0; g < h.length; g++) h[g][0] == b[l][0] && (e = g);
            g = -1 < e ? h[e] : getpromo(f);
            d = gen_orderout1(f, 1, g, 1, 0, 0);
            if (0 < d.length)
                for (g = 0; g < d.length; g++) m.push(d[g])
        }
        return m
    },
    gen_orderout1 = function (a, c, b, d, e, f) {
        var g, h, m, l, n, p, q, r, u, y, z, C;
        g = [];
        e = [];
        f = new Date;
        h = new Date;
        h.set_date(f.getFullYear() + "/1/1");
        var B = Math.abs(f.get_day() - h.get_day());
        g = 1 * a[4];
        h = 1 * a[6];
        m = h / g;
        l = 1 * a[8];
        n = 1 * a[9] + l * g;
        p = 1 * b[5];
        q = 1 * b[6];
        r = p / 100;
        u = 1 * b[8];
        C = 1 * b[1];
        z = b[11];
        0 != r && (m *= 1 - r);
        r = 0;
        m = fpoint((m - q / g) * n);
        l = Math.floor(l / C);
        1 == z && (r = u * l);
        2 == z && (r = Math.floor(u / g * n));
        3 == z && (r = Math.floor(u / g * n));
        4 == z && (r = u);
        b = b[7];
        "" != b && (y = tb_prod.a2d_find(b, 0), g = 0 < y.length ? Number(y[0][4]) : 1E3, y = Math.floor(r / g), r -= y * g);
        0 == c && (g = [], g.push(cur.sales), g.push("25"), g.push(get_ordno(25)), g.push(f.get_date()), g.push(ord_typ), g.push(""), 0 == d ? g.push(a[0]) :
            g.push(a[1]), g.push(""), g.push(a[8]), g.push(a[9]), g.push(p.toFixed(2)), g.push(q.toFixed(2)), g.push(h.toFixed(2)), g.push(tb_custo[cur.custo][2]), g.push(B), g.push(m.toFixed(2)), g.push(f.get_fulldate()), g.push(""), g.push(""), g.push(""), e.push(g));
        "" != b && 1 == c && (g = [], g.push(cur.sales), g.push("25"), g.push(get_ordno(25)), g.push(f.get_date()), g.push(ord_typ), g.push(""), g.push(b), 0 == d ? g.push(a[0]) : g.push(a[1]), g.push(y), g.push(r), g.push("0.00"), g.push("0.00"), g.push("0.00"), g.push(tb_custo[cur.custo][2]),
            g.push(B), g.push("0.00"), g.push(f.get_fulldate()), g.push(""), g.push(""), g.push(""), e.push(g));
        return e
    },
    gen_order2 = function (a) {
        a = [];
        var c = [],
            c = [],
            b = [],
            d, e;
        a = get_order_n();
        for (d = 0; d < a.length; d++)
            if (c = a[d], c = gen_orderout2(c), 0 < c.length)
                for (e = 0; e < c.length; e++) b.push(c[e]);
        return b
    },
    gen_orderout2 = function (a) {
        var c, b, d, e, f, g, h, m, l, n;
        e = [];
        var p = [],
            q = new Date;
        b = new Date;
        b.set_date(q.getFullYear() + "/1/1");
        var r = Math.abs(q.get_day() - b.get_day());
        c = 1 * a[4];
        b = 1 * a[6];
        d = b / c;
        e = 1 * a[9] + 1 * a[8] * c;
        f = 1 * a[10];
        g = 1 * a[11];
        h = f / 100;
        m = g / c;
        0 != h && (d *= 1 - h);
        d = (d - m) * e;
        0 != a[15] && (b = 1 * a[15], d = 1 * a[15] / c, g = f = 0, d = (d - m) * e);
        c = a[12];
        "" != c && (l = tb_prod.a2d_find(c, 0), e = Number(l[0][4]), l = Number(a[14]), n = Math.floor(l / e), l -= n * e, n += Number(a[13]));
        e = [];
        e.push(cur.sales);
        e.push("25");
        e.push(get_ordno(25));
        e.push(q.get_date());
        e.push(ord_typ);
        e.push("");
        e.push(a[0]);
        e.push("");
        e.push(a[8]);
        e.push(a[9]);
        e.push(f.toFixed(2));
        e.push(g.toFixed(2));
        e.push(b.toFixed(2));
        e.push(tb_custo[cur.custo][2]);
        e.push(r);
        e.push(d.toFixed(2));
        e.push(q.get_fulldate());
        e.push("");
        e.push("");
        e.push("");
        p.push(e);
        "" != c && (0 < a[13] || 0 < a[14]) && (e = [], e.push(cur.sales), e.push("25"), e.push(get_ordno(25)), e.push(q.get_date()), e.push(ord_typ), e.push(""), e.push(c), e.push(a[0]), e.push(n), e.push(l), e.push("0.00"), e.push("0.00"), e.push("0.00"), e.push(tb_custo[cur.custo][2]), e.push(r), e.push("0.00"), e.push(q.get_fulldate()), e.push(""), e.push(""), e.push(""), p.push(e));
        return p
    },
    getpromo = function (a) {
        var c, b, d, e, f, g, h, m, l, n = [];
        if (0 < a.length) {
            c = 1 * a[4];
            b = 1 * a[8];
            d = 1 * a[9];
            f = b * c + d;
            d = -1;
            for (c = 0; c < tb_promo.length; c++)
                if (tb_promo[c][0] == a[0]) {
                    g = 1 * tb_promo[c][1];
                    h = 1 * tb_promo[c][2];
                    m = tb_promo[c][3];
                    l = 1 * tb_promo[c][4];
                    g == h && b >= g && "N" == m && (d = c, e = 1);
                    g == h && f >= l && "Y" == m && (d = c, e = 2);
                    if (b >= g && b <= h && g != h || f >= l && "Y" == m && g != h) d = c, e = 3;
                    b >= g && b <= h && g != h && "N" == m && (d = c, e = 4)
                }
            if (-1 != d) {
                for (c = 0; c < tb_promo[d].length; c++) n.push(tb_promo[d][c]);
                n.push(e)
            } else
                for (c = 0; c < tb_promo[0].length; c++) n.push(0)
        }
        return n
    },
    get_orderby = function (a) {
        var c, b, d, e = [],
            f = [];
        b = tb_ordersav.a2d_find(a, 13);
        d = b.a2d_dist(2, "s");
        d.sort();
        for (a = 0; a < d.length; a++) e = [], b = tb_ordersav.a2d_find(d[a], 2), c = b.a2d_sumfil(15), e.push(b[0][2]), e.push(b[0][3]), "C" == b[0][17] ? e.push("Cancel") : e.push(c.toFixed(2)), f.push(e);
        return f
    },
    get_order54by = function (a) {
        var c, b, d, e = [],
            f = [];
        b = tb_f54sav.a2d_find(a, 13);
        d = b.a2d_dist(2, "s");
        d.sort();
        for (a = 0; a < d.length; a++) e = [], b = tb_f54sav.a2d_find(d[a], 2), c = b.a2d_sumfil(15), e.push(b[0][2]), e.push(b[0][3]), "C" == b[0][17] ? e.push("Cancel") : e.push(c.toFixed(2)), f.push(e);
        return f
    };

function get_orddet(a) {
    return tb_ordersav.a2d_find(a, 2)
}
var clear_ord = function (a) {
    1 == confirm("ยังไม่ได้บันทึก ยืนยันไม่บันทึก") && (clear_val(), eval(a))
},
    add_spc = function (a, c) {
        var b, d, e = "";
        d = c - 2 * a.length;
        for (b = 0; b < d; b++) e += " ";
        return e + a
    },
    chk_val = function (a, c, b, d, e) {
        var f = 1;
        if (0 == e) {
            if (isNaN(a)) return alert(d + " Not a Number"), f;
            a >= c && a <= b ? f = 0 : alert(d + " Not Between " + c + " and " + b)
        }
        return f
    },
    chk_emp = function (a,
        c, b) {
        var d = 1;
        0 == b && (void 0 == a || "" == a ? alert(c + " is Empty") : d = 0);
        return d
    },
    get_sr = function () {
        var a, c, b = "";
        c = Number((new Date).get_d());
        for (a = 0; a < tb_v72.length; a++) c >= tb_v72[a][1] && c <= tb_v72[a][2] && (b = tb_v72[a][0]);
        return b
    },
    p_head1 = function (a) {
        return a = "<table width='100%'>" + ("<tr class='head'><th width='40%'>" + a + "</th><td></td></tr>") + "</table>"
    },
    put_uinp = function (a) {
        var c, b, d;
        tb_keylist = [];
        d = a.a2d_find("", 7);
        for (c = 0; c < d.length; c++) b = tb_prod.a2d_findpos(d[c][6], 0), -1 != b && (tb_keylist.push(b), uinp[b][0] =
            d[c][8], uinp[b][1] = d[c][9], uinp[b][2] = d[c][10], uinp[b][3] = d[c][11], uinp[b][7] = d[c][12]);
        d = a.a2d_findnot("", 7);
        for (c = 0; c < d.length; c++) b = tb_prod.a2d_findpos(d[c][7], 0), -1 != b && (tb_keylist.push(b), uinp[b][4] = d[c][6], uinp[b][5] = d[c][8], uinp[b][6] = d[c][9])
    },
    put_uinp1 = function (a, c) {
        var b, d;
        d = set2tem(a, c).split("/");
        b = tb_prod.a2d_findpos(c, 0); - 1 != b && (uinp[b][0] = d[0], uinp[b][1] = d[1])
    },
    put_uinp2 = function (a, c) {
        var b, d, e;
        for (b = 0; b < a.length; b++) e = tb_prod.a2d_findpos(a[b][0], 0), -1 != e ? ("+" == c && (d = tem2set(uinp[e][0] +
            "/" + uinp[e][1], a[b][0]), d += a[b][1], d = set2tem(d, a[b][0]), d = d.split("/"), uinp[e][0] = Number(d[0]), uinp[e][1] = Number(d[1])), "-" == c && (d = tem2set(uinp[e][0] + "/" + uinp[e][1], a[b][0]), d -= a[b][1], d = set2tem(d, a[b][0]), d = d.split("/"), uinp[e][0] = Number(d[0]), uinp[e][1] = Number(d[1]))) : alert("ไม่พบ " + a[b][0])
    },
    clr_uinp = function () {
        for (var a = 0; a < uinp.length; a++) uinp[a][0] = 0, uinp[a][1] = 0, uinp[a][2] = 0, uinp[a][3] = 0, uinp[a][4] = "", uinp[a][5] = 0, uinp[a][6] = 0, uinp[a][7] = 0
    },
    lenthai = function (a) {
        var c,
            b = 0,
            b = a.length;
        c = a.match(/\u0e38/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e39/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e34/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e35/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e36/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e37/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e48/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e49/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e4a/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e4b/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e31/g);
        null != c && (b -= c.length);
        c =
            a.match(/\u0e4c/g);
        null != c && (b -= c.length);
        c = a.match(/\u0e47/g);
        null != c && (b -= c.length);
        return b
    },
    txtnum = function (a) {
        var c = 0,
            b, d = "";
        if (isNaN(a)) return "0";
        b = a.toFixed(2).split(".");
        for (a = b[0].length - 1; - 1 < a; a--) 2 < c && (c = 0, d = "," + d), d = b[0][a] + d, c++;
        return d += "." + b[1]
    },
    txtbox = function (a, c, b) {
        for (var d = "", e = txtdup(" ", c), d = a; lenthai(d) > c;) a = d.length - 1, d = d.substr(0, a);
        a = lenthai(d);
        "l" == b && (d += e.slice(a));
        "r" == b && (d = e.slice(a) + d);
        "c" == b && (b = Math.floor((c - a) / 2), tmp = txtdup(" ", b), d = tmp + d + tmp, 0 < c - (b + b + a) && (d += " "));
        return d
    },
    txtbox1 = function (a, c, b) {
        for (var d = "", e = txtdup(" ", c), d = a; lenthai(d) > c;) a = d.length - 1, d = d.substr(0, a);
        a = Math.round(1.78 * lenthai(d));
        "l" == b && (d += e.slice(a));
        "r" == b && (d = e.slice(a) + d);
        "c" == b && (b = Math.floor((c - a) / 2), tmp = txtdup(" ", b), d = tmp + d + tmp, 0 < c - (b + b + a) && (d += " "));
        return d
    },
    txtdup = function (a, c) {
        var b, d = "";
        for (b = 0; b < c; b++) d += a;
        return d
    },
    getsr = function (a, c, b, d) {
        return get_cursr(b, d) + get_cur52(a, c, b, d) + get_curt(a, c, b, d) - get_cur51(a, c, b, d) - get_cur51b(a, c, b, d) + get_cur52b(a, c, b, d)
    },
    getvan =
        function (a, c, b) {
            return get_curvan(b) + get_cur51(a, c, b, "") - get_curoa(a, c, b) - get_cur52(a, c, b, "")
        },
    get_curvan = function (a) {
        var c = 0;
        a = tb_stvan.a2d_find(a, 0);
        0 < a.length && (c = Number(a[0][1]));
        return c
    },
    get_cursr = function (a, c) {
        var b, d = 0;
        b = tb_stsr.a2d_find(c, 0);
        b = b.a2d_find(a, 1);
        0 < b.length && (d = Number(b[0][2]));
        return d
    },
    get_curoa = function (a, c, b) {
        var d, e = 0,
            f = 0,
            g = 1;
        d = tb_prod.a2d_find(b, 0);
        0 < d.length && (g = Number(d[0][4]));
        d = tb_ordersav.a2d_between(a, c, 3);
        d = d.a2d_find("", 17);
        d = d.a2d_find(b, 6);
        0 < d.length && (e = d.a2d_sumfil(8),
            f = d.a2d_sumfil(9));
        return f + e * g
    },
    get_cur51b = function (a, c, b, d) {
        var e, f = 0,
            g = 0,
            h = 1;
        e = tb_prod.a2d_find(b, 0);
        0 < e.length && (h = Number(e[0][4]));
        e = tb_f51beam.a2d_between(a, c, 3);
        "" != d && (e = e.a2d_find(d, 5));
        e = e.a2d_find("C", 17);
        e = e.a2d_find(b, 6);
        0 < e.length && (f = e.a2d_sumfil(8), g = e.a2d_sumfil(9));
        return g + f * h
    },
    get_cur52b = function (a, c, b, d) {
        var e, f = 0,
            g = 0,
            h = 1;
        e = tb_prod.a2d_find(b, 0);
        0 < e.length && (h = Number(e[0][4]));
        e = tb_f52beam.a2d_between(a, c, 3);
        "" != d && (e = e.a2d_find(d, 5));
        e = e.a2d_find("C", 17);
        e = e.a2d_find(b, 6);
        0 <
            e.length && (f = e.a2d_sumfil(8), g = e.a2d_sumfil(9));
        return g + f * h
    },
    get_cur51 = function (a, c, b, d) {
        var e, f = 0,
            g = 0,
            h = 1;
        e = tb_prod.a2d_find(b, 0);
        0 < e.length && (h = Number(e[0][4]));
        e = tb_f51sav.a2d_between(a, c, 3);
        "" != d && (e = e.a2d_find(d, 5));
        e = e.a2d_find("C", 17);
        e = e.a2d_find(b, 6);
        0 < e.length && (f = e.a2d_sumfil(8), g = e.a2d_sumfil(9));
        return g + f * h
    },
    get_cur52 = function (a, c, b, d) {
        var e, f = 0,
            g = 0,
            h = 1;
        e = tb_prod.a2d_find(b, 0);
        0 < e.length && (h = Number(e[0][4]));
        e = tb_f52sav.a2d_between(a, c, 3);
        "" != d && (e = e.a2d_find(d, 5));
        e = e.a2d_find("C",
            17);
        e = e.a2d_find(b, 6);
        0 < e.length && (f = e.a2d_sumfil(8), g = e.a2d_sumfil(9));
        return g + f * h
    },
    get_curt = function (a, c, b, d) {
        var e = 0;
        a = tb_billtsav.a2d_between(a, c, 4);
        "" != d && (a = a.a2d_find(d, 1));
        a = a.a2d_find(b, 2);
        0 < a.length && (e = a.a2d_sumfil(3));
        return e
    },
    chk_stk = function (a, c) {
        var b = 0,
            d, e;
        d = get_stk(a);
        e = tem2set(c, tb_prod[a][0]);
        0 > d - e && (b = 1);
        return b
    },
    get_stk = function (a) {
        var c, b = new Date;
        c = tb_v71[0][0];
        c = c.replace(/-/g, "/");
        return getvan(c, b.get_date(), tb_prod[a][0])
    },
    get_stksr = function (a) {
        var c, b = new Date;
        c = tb_v71[0][0];
        c = c.replace(/-/g, "/");
        return getsr(c, b.get_date(), tb_prod[a][0], cur.sr)
    },
    chk_stksr = function (a, c) {
        var b = 0,
            d, e;
        d = get_stksr(a);
        e = tem2set(c, tb_prod[a][0]);
        0 > d - e && (b = 1);
        return b
    },
    get_sellbydate = function (a) {
        var c, b, d, e;
        c = tb_ordersav.a2d_find(a, 3);
        c = c.a2d_find("", 17);
        c = c.a2d_find("", 7);
        b = c.a2d_dist(2, "s");
        for (a = e = 0; a < b.length; a++) d = c.a2d_find(b[a], 2), d = d.a2d_sumfil(15), e += Number(d.toFixed(2));
        return e
    },
    r_up = function (a) {
        return a = Number((100 * a).toFixed()) / 100
    },
    del_data = function (a) {
        for (var c = new Date, b = new Date,
            d = 0; d < a; d++) c.dec_day();
        tb_ordersav = tb_ordersav.a2d_between(c.get_date(), b.get_date(), 3);
        localStorage.van_ordersav = tb_ordersav.a2d_exp();

        tb_f51sav = tb_f51sav.a2d_between(c.get_date(), b.get_date(), 3);
        localStorage.van_f51sav = tb_f51sav.a2d_exp();

        tb_f52sav = tb_f52sav.a2d_between(c.get_date(), b.get_date(), 3);
        localStorage.van_f52sav = tb_f52sav.a2d_exp();

        tb_billtsav = tb_billtsav.a2d_between(c.get_date(), b.get_date(), 4);
        localStorage.van_billtsav = tb_billtsav.a2d_exp();

        tb_billcsav = tb_billcsav.a2d_between(c.get_date(), b.get_date(), 3);
        localStorage.van_billcsav = tb_billcsav.a2d_exp();

        tb_paysav = tb_paysav.a2d_between(c.get_date(), b.get_date(), 8);
        localStorage.van_paysav = tb_paysav.a2d_exp()

        tb_locsav = tb_locsav.a2d_between(c.get_date(), b.get_date(), 8);
        localStorage.van_locsav = tb_locsav.a2d_exp()
    };
cls_ThStr = function (a) {
    this.tstr = a
};
var page00 = function () {
    void 0 == localStorage.van_cust1 && (localStorage.van_cust1 = "");
    set_txt("PAGE1", get_txt("start_page"));
    get_el("btn3").onclick = function () {
        loginpageoff()
    };
    get_el("btn4").onclick = function () {
        loginpageon()
    }
},
    loginpageon = function () {
        set_txt("PAGE1", get_txt("login_page"));
        get_el("btn1").onclick = function () {
            checkloginon()
        };
        get_el("btn2").onclick = function () {
            clslogin()
        };
        get_el("btn3").onclick = function () {
            page00()
        }
    },
    loginpageoff = function () {
        set_txt("PAGE1", get_txt("login_page"));
        get_el("btn1").onclick =
            function () {
                checklogin()
            };
        get_el("btn2").onclick = function () {
            clslogin()
        };
        get_el("btn3").onclick = function () {
            page00()
        }
    },
    page0 = function () {
        set_txt("PAGE1", get_txt("main_menu"));
        get_el("btn1").onclick = function () {
            P1_M()
        };
        get_el("btn2").onclick = function () {
            P2_M()
        };
        get_el("btn3").onclick = function () {
            P3_M()
        };
        get_el("btn4").onclick = function () {
            P4_M()
        };
        get_el("btn6").onclick = function () {
            P6_M()
        };
        get_el("btn7").onclick = function () {
            P7_M()
        };
        get_el("btn9").onclick = function () {
            P9_M()
        };
        get_el("btn11").onclick = function () {
            page00()
        }
    },
    sync = function () {
        var a, c, b = "",
            d = a = 0;
        loadtable();
        0 < tb_sale.length ? tb_sale[0][0].toUpperCase() == cur.sales && (a = 1) : a = 1;
        1 == a ? (b += "Wait" + lf, set_txt("PAGE1", b), alert("เริ่ม"), 0 == d && (c = syncpos(tb_ordersav, 18, "S", 0), a = gen_sync_ord(tb_ordersav, 18, "S", 17), syncfile1(a, "SVSTBOrderOut", ",") ? (mark_sync(tb_ordersav, c, 18, "S"), localStorage.van_ordersav = tb_ordersav.a2d_exp()) : d = 1, b += "SVSTBOrderOut" + lf, set_txt("PAGE1", b)), 0 == d && (c = syncpos(tb_f51sav, 18, "S", 1), a = gen_sync(tb_f51sav, 18, "S", 17), syncfile1(a,
            "SVSTBForm51Out", ",") ? (mark_sync(tb_f51sav, c, 18, "S"), localStorage.van_f51sav = tb_f51sav.a2d_exp()) : d = 1, b += "SVSTBForm51Out" + lf, set_txt("PAGE1", b)), 0 == d && (c = syncpos(tb_f52sav, 18, "S", 1), a = gen_sync(tb_f52sav, 18, "S", 17), syncfile1(a, "SVSTBForm52Out", ",") ? (mark_sync(tb_f52sav, c, 18, "S"), localStorage.van_f52sav = tb_f52sav.a2d_exp()) : d = 1, b += "SVSTBForm52Out" + lf, set_txt("PAGE1", b)), 0 == d && (c = syncpos(tb_cusnew, 17, "S", 0), a = gen_sync1(tb_cusnew, 17, "S", 16), syncfile1(a, "SVSTBCustNew", "|") ? (mark_sync(tb_cusnew, c, 17, "S"),
                localStorage.van_cusnew = tb_cusnew.a2d_exp1("|")) : d = 1, b += "SVSTBCustNew" + lf, set_txt("PAGE1", b)), 9 == d && (c = syncpos(tb_locsav, 4, "S", 0), a = gen_sync1(tb_locsav, 4, "S", 4), syncfile1(a, "SVSTBLocout", ",") ? mark_sync(tb_locsav, c, 4, "S") : d = 1, b += "SVSTBLocout" + lf, set_txt("PAGE1", b)), b += "Backup" + lf, set_txt("PAGE1", b), 0 == d && (syncfile(tb_ordersav, "ordersav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_f51sav, "f51sav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_f52sav, "f52sav",
                    ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_stvan, "stvan", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_stsr, "stsr", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_billtsav, "billtsav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_billcsav, "billcsav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_paysav, "paysav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_v71, "v71",
                        ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_v72, "v72", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_endday, "endday", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile(tb_cusnew, "cusnew", "|", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile0(localStorage.van_blnk, "blnk", ",") || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 == d && (syncfile0(localStorage.van_lastendday, "lastendday", ",") || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), 0 ==
                        d && (syncfile(tb_locsav, "locsav", ",", b) || (d = 1), b += "Wait..." + lf, set_txt("PAGE1", b)), txtDoc = loadTxtDoc1("lasttbl.asp", encodeURI("x=" + cur.sales + "&y=last&z=")), 0 == d ? alert("Sync สำเร็จ") : alert("Sync ไม่สำเร็จ")) : alert("ข้อมูลในเครื่องไม่ตรงกับข้อมูลที่ Login");
        menu_sync()
    },
    syncfile0 = function (a, c, b) {
        txtDoc = loadTxtDoc1("sttbl.asp", "x=" + cur.sales + "&y=" + c);
        txtDoc = loadTxtDoc1("puttbl.asp", encodeURI("x=" + cur.sales + "&y=" + c + "&z=" + a));
        txtDoc = loadTxtDoc1("endtbl.asp", "x=" + cur.sales + "&y=" + c + "&z=1");
        return "Done" == txtDoc ? 0 : 1
    },
    syncfile = function (a, c, b, d) {
        var e, f, g;
        txtDoc = loadTxtDoc1("sttbl.asp", "x=" + cur.sales + "&y=" + c);
        for (e = 0; e < a.length; e += 10) {
            d += "*";
            set_txt("PAGE1", d);
            g = "";
            for (f = 0; 10 > f; f++) e + f < a.length && (g += a.a2d_getnline2(e + f, b) + "\r\n");
            g = g.substr(0, g.length - 2);
            txtDoc = loadTxtDoc1("puttbl.asp",
                encodeURI("x=" + cur.sales + "&y=" + c + "&z=" + g))
        }
        txtDoc = loadTxtDoc1("endtbl.asp", "x=" + cur.sales + "&y=" + c + "&z=" + a.length);
        return "Done" == txtDoc ? 0 : 1
    },
    syncfile1 = function (a, c, b) {
        var d, e, f;
        txtDoc = loadTxtDoc1("sttbl.asp", "x=" + cur.sales + "&y=" + c);
        for (d = 0; d < a.length; d += 10) {
            f = "";
            for (e = 0; 10 > e; e++) d + e < a.length && (f += a.a2d_getnline2(d + e, b) + "\r\n");
            f = f.substr(0, f.length - 2);
            txtDoc = loadTxtDoc1("puttbl.asp", encodeURI("x=" + cur.sales + "&y=" + c + "&z=" + f))
        }
        txtDoc = loadTxtDoc1("endtbl1.asp", "x=" + cur.sales + "&y=" + c + "&z=" + a.length);
        return "Done" ==
            txtDoc ? 0 : 1
    },
    syncpos = function (a, c, b, d) {
        var e, f = [];
        if (0 == d)
            for (e = 0; e < a.length; e++) a[e][c] != b && f.push(e);
        if (1 == d)
            for (e = 0; e < a.length; e++) a[e][c] != b && "C" == a[e][17] && f.push(e);
        return f
    },
    gen_sync = function (a, c, b, d) {
        var e, f = [];
        for (e = 0; e < a.length; e++) a[e][c] != b && "C" == a[e][17] && f.push(a.a2d_getnline(e, d));
        return f
    },
    gen_sync1 = function (a, c, b, d) {
        var e, f = [];
        for (e = 0; e < a.length; e++) a[e][c] != b && f.push(a.a2d_getnline(e, d));
        return f
    },
    gen_sync_ord = function (a, c, b, d) {
        var e, f = [],
            g;
        g = [];
        for (e = 0; e < a.length; e++) a[e][c] != b &&
            (g = a.a2d_getnline(e, d), f.push(g), "C" == a[e][17] && (g = a.a2d_getnline(e, d), g[1] = "15", f.push(g)));
        return f
    },
    mark_sync = function (a, c, b, d) {
        for (var e = 0; e < c.length; e++) a[c[e]][b] = d
    },
    checklogin = function () {
        var a = get_elval("inp1"),
            c = get_elval("inp2"),
            a = a.toUpperCase(),
            c = c.toUpperCase();
        loadtable();
        var b = tb_sale[0][0].toUpperCase(),
            d = tb_sale[0][3].toUpperCase();
        a == b && c == d ? (cur.sales = b, page0()) : alert("ไม่ถูกต้อง")
    },
    checkloginon = function () {
        var a = [],
            c = get_elval("inp1"),
            b = get_elval("inp2"),
            c = c.toUpperCase(),
            b = b.toUpperCase();
        txtDoc = loadTxtDoc1("gettbl.asp", "c=" + c + "&x=SVSTBSalesman&z=,");
        if ("" != txtDoc) {
            a.a2d_imp(txtDoc, 4, ",");
            var d = a[0][0].toUpperCase(),
                a = a[0][3].toUpperCase();
            c == d && b == a ? (cur.sales = d, menu_sync()) : alert("ไม่ถูกต้อง")
        } else alert("ไม่ถูกต้อง")
    },
    tmpfunc1 = function () {
        location.reload()
    },
    menu_sync = function () {
        var a = "",
            c = bt_htm("ลบข้อมูลทั้งหมด", "class=a100 onclick=erasedata()"),
            b = bt_htm("Load Data", "class=a100 onclick=loaddata()"),
            d = bt_htm("Restore Last Data",
                "class=a100 onclick=restore()"),
            e = bt_htm("Sync", "class=a100 onclick=sync()"),
            f = bt_htm("ย้อนกลับ", "class=a100 onclick=tmpfunc1()"),
            g = bt_htm("ขยายพื้นที่", "class=a100 onclick=extenarea()"),
            h = new cls_table("width='100%'");
        h.row();
        h.hed("Sync Menu");
        a += h.htm() + lf;
        a += b + lf + lf;
        a += e + lf + lf;
        a += d + lf + lf;
        a += c + lf + lf;
        a += g + lf + lf;
        a += f + lf + lf;
        set_txt("PAGE1", a)
    },
    loaddata = function () {
        var a, c, b = 0;
        c = "Wait" + lf;
        set_txt("PAGE1",
            c);
        alert("เริ่ม");
        0 == b && (c += "SVSTBAmphur" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBAmphur&z=,", 2, c), "-1" != a ? localStorage.van_amph = a : b = 1);
        0 == b && (c += "SVSTBBillIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBBillIn&z=,", 5, c), "-1" != a ? localStorage.van_billin = a : b = 1);
        0 == b && (c += "SVSTBCustomer" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBCustomer&y=8&z=,", 9, c), "-1" != a ? localStorage.van_custo = a : b = 1);
        0 == b && (c += "SVSTBDistrict" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBDistrict&z=,", 2, c), "-1" !=
            a ? localStorage.van_dist = a : b = 1);
        0 == b && (c += "SVSTBProCat" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBProCat&z=,", 3, c), "-1" != a ? localStorage.van_procat = a : b = 1);
        0 == b && (c += "SVSTBProduct" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBProduct&z=,", 8, c), "-1" != a ? localStorage.van_prod = a : b = 1);
        0 == b && (c += "SVSTBPromotion" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBPromotion&z=,", 11, c), "-1" != a ? localStorage.van_promo = a : b = 1);
        0 == b && (c += "SVSTBProvince" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBProvince&z=,", 2, c), "-1" != a ? localStorage.van_prov =
            a : b = 1);
        0 == b && (c += "SVSTBSalesman" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBSalesman&z=,", 4, c), "-1" != a ? localStorage.van_sale = a : b = 1);
        0 == b && (c += "SVSTBStkBillTIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBStkBillTIn&z=,", 4, c), "-1" != a ? localStorage.van_billt = a : b = 1);
        0 == b && (c += "SVSTBStkSRIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBStkSRIn&z=,", 3, c), "-1" != a ? localStorage.van_srin = a : b = 1);
        0 == b && (c += "SVSTBStkVanIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBStkVanIn&z=,", 2, c), "-1" != a ? localStorage.van_vanin = a : b = 1);
        0 == b && (c += "SVSTBStore" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBStore&z=,", 2, c), "-1" != a ? localStorage.van_store = a : b = 1);
        0 == b && (c += "SVSTBTargetDateIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBTargetDateIn&z=,", 2, c), "-1" != a ? localStorage.van_tdin = a : b = 1);
        0 == b && (c += "SVSTBTargetIn" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBTargetIn&z=,", 4, c), "-1" != a ? localStorage.van_tarin = a : b = 1);
        0 == b && (c += "SVSTBBank" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBBank&z=,", 2, c), "-1" != a ? localStorage.van_bank = a : b = 1);
        0 == b && (c += "SVSTBBranch" +
            lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBBranch&z=,", 3, c), "-1" != a ? localStorage.van_branch = a : b = 1);
        0 == b && (c += "SVSTBVat" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBVat&z=,", 1, c), "-1" != a ? localStorage.van_vat = a : b = 1);
        0 == b && (c += "SVSTBBillPayType" + lf, set_txt("PAGE1", c), a = ckloaddata("SVSTBBillPayType&z=,", 3, c), "-1" != a ? localStorage.van_bptype = a : b = 1);
        0 == b && (c += "Form51beam" + lf, set_txt("PAGE1", c), a = ckloaddata("Form51beam&z=,", 19, c), "-1" != a ? localStorage.van_f51beam = a : b = 1);
        0 == b && (c += "Form52beam" + lf, set_txt("PAGE1",
            c), a = ckloaddata("Form52beam&z=,", 19, c), "-1" != a ? localStorage.van_f52beam = a : b = 1);
        tb_custo.a2d_imp(localStorage.van_custo, 9, ",");
        oplist = [];
        a = [];
        c = "";
        var d = tb_custo.a2d_dist(0, "n");
        for (i = 0; 32 > i; i++) oplist.push(i + "");
        for (i = 0; i < d.length; i++)
            if (99 != d[i]) {
                c = d[i] + "|";
                a = tb_custo.a2d_find(d[i], 0);
                for (o = 0; o < a.length; o++) c += a[o][2] + "|";
                c = c.substring(0, c.length - 1);
                oplist[d[i]] = c
            }
        localStorage.van_oplist = oplist.a2d_exp();
        localStorage.van_cust1 = 1;
        0 == b ? alert("Load สำเร็จ") : alert("Load ไม่สำเร็จ");
        menu_sync()
    },
    ckloaddata = function (a, c, b) {
        var d = "",
            e = "",
            f = "-1",
            g, h;
        try {
            e = loadTxtDoc1("gettbls.asp", "c=" + cur.sales + "&x=" + a);
            for (g = 0; g < e; g += 50) h = loadTxtDoc1("gettbl2.asp", "c=" + cur.sales + "&x=" + a + "&j=" + g), d += h, b += "*", set_txt("PAGE1", b);
            e = loadTxtDoc1("gettbls0.asp", "c=" + cur.sales + "&x=" + a);
            "" != d ? (d = d.substr(0, d.length - 1), tb_test = [], tb_test.a2d_imp(d, c, ","), tb_test.length == e && (f = d)) : f = ""
        } catch (m) {
            alert(m.message)
        }
        return f
    },
    ckloaddata1 = function (a, c, b, d) {
        var e = "",
            f, g = "-1",
            h, m;
        f = loadTxtDoc1("gettbls1.asp", "c=" +
            cur.sales + "&x=" + a + "&z=" + c);
        for (h = 0; h < f; h += 50) m = loadTxtDoc1("gettbl3.asp", "c=" + cur.sales + "&x=" + a + "&z=" + c + "&j=" + h), e += m, d += "*", set_txt("PAGE1", d);
        "" != e ? (e = e.substr(0, e.length - 1), tb_test = [], tb_test.a2d_imp(e, b, c), tb_test.length == f && (g = e)) : g = "";
        return g
    },
    loadtable = function () {
        tb_amph.a2d_imp(localStorage.van_amph, 2, ",");
        tb_billin.a2d_imp(localStorage.van_billin, 5, ",");
        tb_custo.a2d_imp(localStorage.van_custo, 9, ",");
        tb_dist.a2d_imp(localStorage.van_dist, 2, ",");
        tb_procat.a2d_imp(localStorage.van_procat, 3,
            ",");
        tb_prod.a2d_imp(localStorage.van_prod, 8, ",");
        tb_promo.a2d_imp(localStorage.van_promo, 11, ",");
        tb_prov.a2d_imp(localStorage.van_prov, 2, ",");
        tb_sale.a2d_imp(localStorage.van_sale, 4, ",");
        tb_billt.a2d_imp(localStorage.van_billt, 4, ",");
        tb_srin.a2d_imp(localStorage.van_srin, 3, ",");
        tb_vanin.a2d_imp(localStorage.van_vanin, 2, ",");
        tb_store.a2d_imp(localStorage.van_store, 2, ",");
        tb_tdin.a2d_imp(localStorage.van_tdin, 2, ",");
        tb_tarin.a2d_imp(localStorage.van_tarin, 4, ",");
        tb_bank.a2d_imp(localStorage.van_bank,
            2, ",");
        tb_branch.a2d_imp(localStorage.van_branch, 3, ",");
        localStorage.van_vat = "7";
        tb_vat.a2d_imp(localStorage.van_vat, 1, ",");
        tb_bptype.a2d_imp(localStorage.van_bptype, 3, ",");
        void 0 == localStorage.van_blnk && (localStorage.van_blnk = 0);
        tb_paysav = chk_imp(localStorage.van_paysav, 10, ",");
        tb_billcsav = chk_imp(localStorage.van_billcsav, 9, ",");
        tb_v72 = chk_imp(localStorage.van_v72, 4, ",");
        tb_endday = chk_imp(localStorage.van_endday, 14, ",");
        tb_f51sav = chk_imp(localStorage.van_f51sav, 19, ",");
        tb_f52sav = chk_imp(localStorage.van_f52sav,
            19, ",");
        tb_f54sav = chk_imp(localStorage.van_f54sav, 19, ",");
        tb_ordersav = chk_imp(localStorage.van_ordersav, 20, ",");
        tb_billtsav = chk_imp(localStorage.van_billtsav, 5, ",");
        tb_stvan = chk_imp(localStorage.van_stvan, 2, ",");
        tb_stsr = chk_imp(localStorage.van_stsr, 3, ",");
        tb_v71 = chk_imp(localStorage.van_v71, 1, ",");
        tb_cusnew = chk_imp(localStorage.van_cusnew, 18, "|");
        tb_f51beam = chk_imp(localStorage.van_f51beam, 19, ",");
        tb_f52beam = chk_imp(localStorage.van_f52beam, 19, ",");
        tb_locsav = chk_imp(localStorage.van_locsav, 5, ",");
        addnewcus();
        var a, c, b;
        for (c = 0; c < tb_prod.length; c++) {
            a = [];
            for (b = 0; 8 > b; b++) a.push(0);
            uinp.push(a)
        }
        purl = eval("String.fromCharCode(" + bbta.toString() + ")");
        oplist.a2d_imp(localStorage.van_oplist, 1, ",")
    },
    restore = function () {
        var a, c, b = "",
            d = 0;
        c = a = loadTxtDoc1("checklast.asp", "c=" + cur.sales);
        1 == confirm("ข้อมูลสุดท้ายที่ sync คือวันที่ " + c + " คืนค่า ?") && (b +=
            "Restore" + lf, set_txt("PAGE1", b), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_ordersav", ",", 20, b), "-1" != a ? localStorage.van_ordersav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_f51sav", ",", 19, b), "-1" != a ? localStorage.van_f51sav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_f52sav", ",", 19, b), "-1" != a ? localStorage.van_f52sav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_stvan", ",", 2, b), "-1" != a ? localStorage.van_stvan = a : d = 1),
            0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_stsr", ",", 3, b), "-1" != a ? localStorage.van_stsr = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_billtsav", ",", 5, b), "-1" != a ? localStorage.van_billtsav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_billcsav", ",", 9, b), "-1" != a ? localStorage.van_billcsav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_paysav", ",", 10, b), "-1" != a ? localStorage.van_paysav = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1",
                b), a = ckloaddata1(c + "_v71", ",", 1, b), "-1" != a ? localStorage.van_v71 = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_v72", ",", 4, b), "-1" != a ? localStorage.van_v72 = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_endday", ",", 14, b), "-1" != a ? localStorage.van_endday = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_cusnew", "|", 18, b), "-1" != a ? localStorage.van_cusnew = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_blnk", ",", 1, b), "-1" != a ? localStorage.van_blnk =
                    a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_lastendday", ",", 1, b), "-1" != a ? localStorage.van_lastendday = a : d = 1), 0 == d && (b += "Wait..." + lf, set_txt("PAGE1", b), a = ckloaddata1(c + "_locsav", ",", 5, b), "-1" != a ? localStorage.van_locsav = a : d = 1), loadTxtDoc1("wlog.asp", encodeURI("x=" + cur.sales + "&y=relog&z=")), 0 == d ? alert("Restore สำเร็จ") : alert("Restore ไม่สำเร็จ"));
        menu_sync()
    },
    erasedata = function () {
        var a = "",
            c = bt_htm("ยืนยัน",
                "id=btn1"),
            b = bt_htm("ยกเลิก", "id=btn2"),
            a = a + ("ลบข้อมูลทั้งหมด?" + lf),
            a = a + ("ใส่คำว่า 'clear'<input type=text id=txt1>" + lf);
        set_txt("PAGE1", a + (c + b));
        get_el("btn2").onclick = function () {
            menu_sync()
        };
        get_el("btn1").onclick = function () {
            var a = get_elval("txt1"),
                a = a.toUpperCase();
            "CLEAR" == a && (localStorage.van_ordersav = "", localStorage.van_f51sav = "", localStorage.van_f52sav =
                "", localStorage.van_stvan = "", localStorage.van_stsr = "", localStorage.van_billtsav = "", localStorage.van_billcsav = "", localStorage.van_paysav = "", localStorage.van_v71 = "", localStorage.van_v72 = "", localStorage.van_endday = "", localStorage.van_cusnew = "", localStorage.van_blnk = 0, localStorage.van_lastendday = 0, alert("Done"));
            menu_sync()
        }
    },
    sort_by_row = function (a, c) {
        var b = a.a2d_getfil(c);
        alert(b[0])
    },
    clslogin = function () {
        set_elval("inp1", "");
        set_elval("inp2", "")
    },
    sync1 = function () {
        var a, c, b = "";
        loadtable();
        c = syncpos(tb_ordersav,
            18, "S", 0);
        a = gen_sync_ord(tb_ordersav, 18, "S", 17);
        syncfile1(a, "SVSTBOrderOut", ",") && mark_sync(tb_ordersav, c, 18, "S");
        localStorage.van_ordersav = tb_ordersav.a2d_exp();
        b += "SVSTBOrderOut" + lf;
        set_txt("PAGE1", b);
        c = syncpos(tb_f51sav, 18, "S", 1);
        a = gen_sync(tb_f51sav, 18, "S", 17);
        syncfile1(a, "SVSTBForm51Out", ",") && mark_sync(tb_f51sav, c, 18, "S");
        localStorage.van_f51sav = tb_f51sav.a2d_exp();
        b += "SVSTBForm51Out" + lf;
        set_txt("PAGE1", b);
        c = syncpos(tb_f52sav, 18, "S", 1);
        a = gen_sync(tb_f52sav, 18, "S", 17);
        syncfile1(a, "SVSTBForm52Out",
            ",") && mark_sync(tb_f52sav, c, 18, "S");
        localStorage.van_f52sav = tb_f52sav.a2d_exp();
        b += "SVSTBForm52Out" + lf;
        set_txt("PAGE1", b);
        c = syncpos(tb_cusnew, 17, "S", 0);
        a = gen_sync1(tb_cusnew, 17, "S", 14);
        syncfile1(a, "SVSTBCustNew", "|") && mark_sync(tb_cusnew, c, 17, "S");
        localStorage.van_cusnew = tb_cusnew.a2d_exp1("|");
        b += "SVSTBCustNew" + lf;
        set_txt("PAGE1", b);
        alert("Done")
    },
    extenarea = function () {
        var a, c;
        localStorage.van_tmp = "";
        for (a = 0; 1E3 > a; a++) c += "1234567890";
        for (a = 0; 100 > a; a++) localStorage.van_tmp += c;
        alert("Done");
        localStorage.van_tmp =
            ""
    },
    P1_M = function () {
        var a, c = "",
            b = new Date;
        if (0 == tb_v71.length) alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป");
        else if (void 0 != localStorage.van_lastendday && "undefined" != localStorage.van_lastendday && b.get_date() <= localStorage.van_lastendday) alert("ปิดสิ้นวันแล้ว");
        else if (tmp2 = b.getDate(), tmp5 = "" + oplist[tmp2], tmp6 = tmp5.split("|"), 1 > oplist1.length) alert("ไม่มีร้านในทริป");
        else {
            cur.pg = 1;
            var b = bt_htm("กลับ", "id=btn1"),
                d = bt_htm(" เปิดงานขาย ", "onclick=P1_SEL()"),
                e = bt_htm(" พิกัดร้าน ", "onclick=P1_FLOC()");
            bt_htm(" แผนที่ ", "onclick=addcus2()");
            var f = bt_htm(" เยี่ยม ", "id=btn6"),
                g = bt_htm(" >>> ", "id=btn7"),
                h = bt_htm(" <<< ", "id=btn8"),
                m = bt_htm(" แสดงร้านแนะนำ", "id=btn9"),
                l = new cls_table("width='100%'");
            l.row("id='head'");
            l.hed("Customer_Trip_" + tmp2, "width='1%'");
            l.col("");
            c += l.htm();
            "" == localStorage.van_cust1 && (localStorage.van_cust1 = 0);
            tmp3 = 1 * localStorage.van_cust1;
            //alert(tmp3);
            tmp5 = oplist1[tmp3];
            tmp6 = tmp5.split(" ");
            i = tb_custo.a2d_findpos(tmp6[1], 2);
            cur.custo =
                i;
            getLocation();
            //alert(tb_custo);
            //alert(tb_custo[cur.custo][2]);
            var latlong = ldf1(lnk6, "&customercode=" + tb_custo[cur.custo][2]);
            //alert(latlong);
            if (latlong != "no") {
                latlong = JSON.parse(latlong);
                for (vv = 0; vv < latlong.length; vv++) clat = latlong[vv].clat, clong = latlong[vv].clong, cimg = latlong[vv].cus_img, cdivisionsale = latlong[vv].divisionsale;
            } else {
                clat = "";
                clong = "";
                cimg = "";
                cdivisionsale = "";
            }
            l = new cls_table("width='100%'");
            l.row();
            l.col("ID");
            l.col(tb_custo[i][2]);
            l.row();
            l.col("NAME");
            l.col(tb_custo[i][3]);
            l.row();
            l.col("ADDRESS");
            l.col(tb_custo[i][4]);
            l.row();
            l.col("TYPE");
            l.col(tb_custo[i][5]);
            l.row();
            l.col("LATITUDE,LONGITUDE");
            if (clat != "") {
                l.col(clat + "," + clong);
            } else {
                l.col('ไม่มีพิกัดกรุณาเปิด gps นอกร้านค้า');
            }
            c += l.htm();
            /*if(cimg != ""){
            	c += "<div><img src='http://110.164.217.57/gps_location/img/"+cimg+"' id='imgCus' alt='รูปร้านค้า' width='150' height='150'></div>";
            }else{
            	c += "<div><img src='http://110.164.217.57/gps_location/img/noimage.jpg' id='imgCus' alt='ไม่มีรูปร้านค้า' width='150' height='150'></div>";
            }*/
            c += "<span id=btnlookimg></span>";
            c += "<div><img id='imgCus' width='150' height='150'></div>";
            c += "<input type='file' name='fileToUpload' id='fileToUpload' onchange='fileSelected(this);' accept='image/*' /><span id='progress'></span><span id=btnsavelatlong></span><br>";
            c += "<span><input type='radio' name='rd' value='1'>รูปอย่างเดียว</span><input type='radio' name='rd' value='2'> พิกัดอย่างเดียว <input type='radio' name='rd' value='3'> รูปและพิกัด<br>";
            c = c + (b + d + e + "<span id=btn5></span>" + f + "<br>" + m + h + g) + "<div id=adv></adv>";
            set_txt("PAGE1", c);
            var logo = document.getElementById('imgCus');
            logo.setAttribute('src', '');
            document.getElementById('imgCus').style.display = 'none';
            set_txt("btn5", bt_htm(" สร้างร้านค้าใหม่ ", "onclick=addcus1()"));
            set_txt("btnsavelatlong", bt_htm("บันทึกพิกัด", "onclick=uploadFile(" + tb_custo[cur.custo][2] + ",'" + cur.sales + "','" + clat + "','" + clong + "','" + cdivisionsale + "')"));
            set_txt("btnlookimg", bt_htm("ดูรูป", "onclick=lookimg('" + cimg + "')"));
            get_el("btn1").onclick = function () {
                page0()
            };
            get_el("btn6").onclick = function () {
                get_el("btn6").disabled = !0;
                getLocation();
                ldf1(lnk3, "salesmancode=" + cur.sales + "&tripno=" + ady.getDate() + "&tripseq=" + localStorage.van_cust1 + "&customercode=" + tb_custo[cur.custo][2] + "&gpse=" + cur.lat + "&gpsn=" + cur.lng + "&status=3");
                get_el("btn6").disabled = !1;
                tmp3 = 1 * localStorage.van_cust1;
                tmp5 = "" + oplist[tmp2];
                tmp6 = tmp5.split("|");
                //tmp3++;
                tmp3 < oplist1.length ? (localStorage.van_cust1 = tmp3, P1_M()) : alert("ร้านสุดท้ายแล้ว")
            };
            get_el("btn7").onclick = function () {
                tmp3 = 1 * localStorage.van_cust1;
                tmp5 = "" + oplist[tmp2];
                tmp6 = tmp5.split("|");
                tmp3++;
                tmp3 < oplist1.length ? (localStorage.van_cust1 = tmp3, P1_M()) : alert("ร้านสุดท้ายแล้ว")
            };
            get_el("btn8").onclick = function () {
                tmp3 = 1 * localStorage.van_cust1;
                tmp5 = "" + oplist[tmp2];
                tmp6 = tmp5.split("|");
                tmp3--;
                0 <= tmp3 ? (localStorage.van_cust1 = tmp3, P1_M()) : alert("ร้านแรก");
                P1_M()
            };
            get_el("btn9").onclick =
                function () {
                    var c = loadTxtDoc1(lnk2, "salesman_code=" + cur.sales + "&trip_no=" + ady.getDate()),
                        c = JSON.parse(c);
                    avv = "";
                    avv += "<fieldset><legend>ร้านค้าแนะนำ</legend>";
                    var b = new cls_table;
                    for (i = 0; i < c.length; i++) c1 = c[i].customer_code, c2 = c[i].status, a = tb_custo.a2d_findpos(c1, 2), c3 = -1 == a ? "ไม่พบ" : tb_custo[a][3], b.row("onclick=otrr('" + a + "')"), b.col(c1 + " " + c3), b.col(c2);
                    avv += b.htm();
                    avv += "</fieldset>";
                    set_txt("adv", avv)
                }
        }
    },
    P1_MM =
        function () {
            var a = new Date;
            0 == tb_v71.length ? alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป") : void 0 != localStorage.van_lastendday && "undefined" != localStorage.van_lastendday && a.get_date() <= localStorage.van_lastendday ? alert("ปิดสิ้นวันแล้ว") : (cur.pg = 1, set_txt("PAGE1",
                get_txt("P1_M")), set_txt("btn5", bt_htm(" สร้างร้านค้าใหม่ ", "onclick=addcus1()")), a = tb_custo.a2d_dist(0, "n"), a.unshift("All"), a.unshift("-Selected-"), a = opt_htm("id='trip'", a), set_txt("opt1", a), a = [], a.push("-Selected-"), a = opt_htm("class='sfw' id='custo'", a), set_txt("opt2", a), get_el("btn1").onclick = function () {
                    page0()
                }, get_el("btn3").onclick = function () {
                    var a, b, d, e = 0,
                        f = [];
                    d = get_elval("v5");
                    f.push("-Selected-");
                    for (a = 0; a < tb_custo.length; a++) b =
                        tb_custo[a][2] + " " + tb_custo[a][3], null != b.match(d) && (e = 1, f.push(b));
                    el_off("subPAGE1");
                    set_txt("btn2", "");
                    set_txt("btn4", "");
                    1 == e ? (a = opt_htm("class='sfw' id='custo'", f), set_txt("opt2", a), get_el("custo").onchange = function () {
                        var a;
                        a = get_elval("custo");
                        "-Selected-" != a ? (a = a.split(" "), a = tb_custo.a2d_findpos(a[0], 2), cur.custo = a, el_on("subPAGE1"), set_txt("v1", tb_custo[a][2]), set_txt("v2", tb_custo[a][3]), set_txt("v3", tb_custo[a][4]), set_txt("v4", tb_custo[a][5]), set_txt("btn2", bt_htm(" เปิดงานขาย ",
                            "onclick=P1_SEL()")), set_txt("btn4", bt_htm(" พิกัดร้าน ", "onclick=P1_FLOC()"))) : (el_off("subPAGE1"), set_txt("btn2", ""), set_txt("btn4", ""))
                    }) : alert("ไม่พบ")
                }, get_el("trip").onchange = function () {
                    var a, b, d = [];
                    b = get_elval("trip");
                    cur.trip = b;
                    d.push("-Selected-");
                    for (a = 0; a < tb_custo.length; a++) "All" != b && b != tb_custo[a][0] || d.push(tb_custo[a][2] + " " + tb_custo[a][3]);
                    a = opt_htm("class='sfw' id='custo'", d);
                    set_txt("opt2", a);
                    el_off("subPAGE1");
                    get_el("custo").onchange = function () {
                        var a, c;
                        c = get_elval("custo");
                        "99" == get_elval("trip") ? (a = c.split(" "), a = tb_custo.a2d_findpos(a[0], 2), cur.custo = a, addcus(c)) : "-Selected-" != c ? (a = c.split(" "), a = tb_custo.a2d_findpos(a[0], 2), cur.custo = a, el_on("subPAGE1"), set_txt("v1", tb_custo[a][2]), set_txt("v2", tb_custo[a][3]), set_txt("v3", tb_custo[a][4]), set_txt("v4", tb_custo[a][5]), set_txt("btn2", bt_htm(" เปิดงานขาย ", "onclick=P1_SEL()")), set_txt("btn4", bt_htm(" พิกัดร้าน ",
                            "onclick=P1_FLOC()"))) : (el_off("subPAGE1"), set_txt("btn2", ""))
                    }
                })
        },
    P1_SEL = function () {
        set_txt("PAGE1", get_txt("P1_SEL"));
        get_el("btn1").onclick = function () {
            P1_SEL_1()
        };
        get_el("btn2").onclick = function () {
            P17_5()
        };
        get_el("btn3").onclick = function () {
            var tripstatus = "";
            //getLocation();
            tripstatus = ldf1(lnk5, "salesmancode=" + cur.sales + "&tripno=" + ady.getDate() + "&tripseq=" + localStorage.van_cust1 + "&customercode=" + tb_custo[cur.custo][2]);
            if (tripstatus == "no") {
                alert("ยังไม่ได้กดเยี่ยมร้านค้า");
                return false;
            } else {
                //tripstatus = JSON.parse(tripstatus);
                P1_SEL_3()
                /*
                for (i = 0; i < c.length; i++) t = a + " " + c[i].customer_code + " " + c[i].customer_name, oplist1.push(t)*/
            }
            //alert("in ขาย" +"sale : " + cur.sales + ady.getDate() + localStorage.van_cust1 + tb_custo[cur.custo][2]);
        };
        get_el("btn4").onclick = function () {
            P1_SEL_4()
        };
        get_el("btn5").onclick = function () {
            P1_M()
        }
    },
    P1_SEL_3 = function () {
        set_txt("PAGE1", get_txt("P1_SEL_3"));
        get_el("btn0").onclick = function () {
            P1_SEL_3_A(0)
        };
        get_el("btn1").onclick = function () {
            P1_SEL_3_A(1)
        };
        get_el("btn2").onclick =
            function () {
                P1_SEL_3_A(2)
            };
        get_el("btn3").onclick = function () {
            P1_SEL_3_A(3)
        };
        get_el("btn4").onclick = function () {
            P1_SEL()
        };
        get_el("btn5").onclick = function () {
            page0()
        }
    },
    P1_SEL_1 = function () {
        var a, c, b, d, e = 0,
            f = 0,
            g, h;
        set_txt("PAGE1", get_txt("bill_collection"));
        set_txt("v1", tb_custo[cur.custo][3]);
        b = tb_billin.a2d_find(tb_custo[cur.custo][2], 0);
        d = tb_billcsav.a2d_find(tb_custo[cur.custo][2], 0);
        d = d.a2d_find(0, 5);
        f = d.a2d_sumfil(2);
        e = b.a2d_sumfil(4);
        c = "<table width='100%' border='1'><tr><th>Doc</th><th>Amount</th><th>Pay</th></tr>";
        for (a = 0; a < b.length; a++) d = tb_billcsav.a2d_find(b[a][1], 1), d = d.a2d_sumfil(2), h = b[a][4] - d, g = "<input name='ckbill' type='checkbox' value='" + a + "'>", b[a][4] == d && (g = ""), c += "<tr align='right'><td>" + g + b[a][1] + "</td><td>" + h.toFixed(2) + "</td><td>" + d.toFixed(2) + "</td></tr>";
        c += "<tr align='right'><td>Total</td><td>" + e.toFixed(2) + "</td><td>" + f.toFixed(2) + "</td></tr>";
        set_txt("tbl1", c + "</table><br>");
        get_el("btn1").onclick = function () {
            P1_SEL()
        };
        get_el("btn2").onclick = function () {
            P1_SEL_1_PAY("PAGE1")
        };
        get_el("btn3").onclick =
            function () {
                P1_SEL_1_CLR()
            };
        get_el("btn4").onclick = function () {
            P1_SEL_1_ADD()
        }
    },
    P1_SEL_1_PAY = function (a) {
        var c, b, d = 0,
            e, f = [],
            g = [];
        a = minp_get_chk("ckbill");
        if (0 == a.length) alert("ยังไม่ได้เลือกบิล");
        else {
            b = tb_billin.a2d_find(tb_custo[cur.custo][2], 0);
            for (c = 0; c < a.length; c++) e = tb_billcsav.a2d_find(b[a[c]][1], 1), e = e.a2d_sumfil(2), d += b[a[c]][4] - e, f.push(b[a[c]]);
            set_txt("PAGE1", get_txt("paybill"));
            set_txt("ttb", d.toFixed(2));
            set_elval("nbill", a.length);
            set_elval("ttbill", d.toFixed(2));
            b = get_el("bank");
            for (c = 0; c < tb_bank.length; c++) a = document.createElement("option"), a.text = tb_bank[c][1], a.value = tb_bank[c][0], b.add(a, null);
            get_el("che_bra").onkeyup = function () {
                var a = tb_branch.a2d_find(get_elval("bank"), 0).a2d_find(get_elval("che_bra"), 1);
                0 < a.length && set_txt("brantxt", a[0][2])
            };
            get_el("btn1").onclick = function () {
                P1_SEL_1()
            };
            get_el("btn2").onclick = function () {
                var a = "",
                    b = "",
                    d = "",
                    e = "",
                    p = "",
                    q = "",
                    r = "",
                    u, y, z, C = new Date,
                    b = get_elval("amt1"),
                    a = get_elval("amt2"),
                    b = "" == b ? 0 : Number(b),
                    a = "" == a ? 0 : Number(a);
                if (isNaN(b) || isNaN(a)) alert("Not Number");
                else if (u = b + a, y = Number(get_elval("ttbill")), z = Number(get_elval("nbill")), y == u && 0 < u) {
                    0 < a && (d = "1," + a + "," + d + "," + e + "," + p + "," + q + "," + r + "," + tb_custo[cur.custo][2] + "," + C.get_date() + "," + localStorage.van_blnk, g.a2d_addline(d));
                    if (0 < b) {
                        d = get_elval("che_no");
                        a = chk_emp(d, "Cheque No.", 0);
                        e = get_elval("ch_date");
                        e = e.replace(/-/g, "/");
                        a = chk_emp(e, "Date", a);
                        p = get_elval("bank");
                        a = chk_emp(p, "Bank", a);
                        q = get_elval("che_bra");
                        a = chk_emp(q, "Branch", a);
                        r = get_elval("che_accno");
                        a = chk_emp(r, "Account No.", a);
                        if (1 == a) return;
                        d = "2," + b + "," + d + "," + e + "," + p + "," + q + "," + r + "," + tb_custo[cur.custo][2] + "," + C.get_date() + "," + localStorage.van_blnk;
                        g.a2d_addline(d)
                    }
                    for (c = 0; c < f.length; c++) d = 1 < z ? tb_custo[cur.custo][2] + "," + f[c][1] + "," + f[c][4] + "," + C.get_date() + "," + localStorage.van_blnk + ",0," + f[c][3] + "," + f[c][4] + "," : tb_custo[cur.custo][2] + "," + f[c][1] + "," + u + "," + C.get_date() + "," + localStorage.van_blnk + ",0," + f[c][3] + "," + f[c][4] + ",", tb_billcsav.a2d_addline(d);
                    tb_paysav = tb_paysav.concat(g);
                    localStorage.van_blnk++;
                    localStorage.van_paysav = tb_paysav.a2d_exp();
                    localStorage.van_billcsav = tb_billcsav.a2d_exp();
                    g = [];
                    P1_SEL_1()
                } else alert("จำนวนเงินไม่ถูกต้อง")
            }
        }
    },
    P1_SEL_1_CLR = function () {
        var a, c;
        if (1 == confirm("Clear Pay")) {
            c = tb_billcsav.a2d_find(tb_custo[cur.custo][2], 0);
            c = c.a2d_find(0, 5);
            if (0 < c.length)
                for (a = 0; a < c.length; a++) tb_paysav.a2d_finddel(c[a][4], 9), tb_billcsav.a2d_finddel(c[a][4],
                    4);
            localStorage.van_paysav = tb_paysav.a2d_exp();
            localStorage.van_billcsav = tb_billcsav.a2d_exp();
            P1_SEL_1()
        }
    },
    P1_payment = function () {
        var a, c, b;
        a = minp_get_chk("ra1");
        if (void 0 == a[0]) alert("ยังไม่เลือกประเภทการขาย");
        else if (3 == a[0] || 4 == a[0]) alert("ไม่ได้ขายสด");
        else {
            c = get_txt("v8");
            set_txt("PAGE1", get_txt("paybill"));
            set_txt("ttb", c);
            a = get_el("bank");
            for (i = 0; i < tb_bank.length; i++) b = document.createElement("option"), b.text = tb_bank[i][1], b.value = tb_bank[i][0], a.add(b, null);
            get_el("che_bra").onkeyup = function () {
                var a = tb_branch.a2d_find(get_elval("bank"), 0).a2d_find(get_elval("che_bra"), 1);
                0 < a.length && set_txt("brantxt", a[0][2])
            };
            get_el("btn1").onclick = function () {
                P1_SEL_3_A_NN(1)
            };
            get_el("btn2").onclick = function () {
                var a = "",
                    b = "",
                    f = "",
                    g = "",
                    h = "",
                    m = "",
                    l = "",
                    n, p = [],
                    q = new Date,
                    b = get_elval("amt1"),
                    a = get_elval("amt2"),
                    b = "" == b ? 0 : Number(b),
                    a = "" ==
                        a ? 0 : Number(a);
                if (isNaN(b) || isNaN(a)) alert("Not Number");
                else if (n = b + a, c == n && 0 < n) {
                    0 < a && (f = "1," + a + "," + f + "," + g + "," + h + "," + m + "," + l + "," + tb_custo[cur.custo][2] + "," + q.get_date() + "," + localStorage.van_blnk, p.a2d_addline(f));
                    if (0 < b) {
                        f = get_elval("che_no");
                        a = chk_emp(f, "Cheque No.", 0);
                        g = get_elval("ch_date");
                        g = g.replace(/-/g, "/");
                        a = chk_emp(g, "Date", a);
                        h = get_elval("bank");
                        a = chk_emp(h, "Bank", a);
                        m = get_elval("che_bra");
                        a = chk_emp(m, "Branch", a);
                        l = get_elval("che_accno");
                        a = chk_emp(l, "Account No.", a);
                        if (1 == a) return;
                        f = "2," +
                            b + "," + f + "," + g + "," + h + "," + m + "," + l + "," + tb_custo[cur.custo][2] + "," + q.get_date() + "," + localStorage.van_blnk;
                        p.a2d_addline(f)
                    }
                    f = tb_custo[cur.custo][2] + "," + get_lastordno(25) + "," + n + "," + q.get_date() + "," + localStorage.van_blnk + ",1," + q.get_date() + "," + n + ",";
                    tb_billcsav.a2d_addline(f);
                    tb_paysav = tb_paysav.concat(p);
                    localStorage.van_blnk++;
                    localStorage.van_paysav = tb_paysav.a2d_exp();
                    localStorage.van_billcsav = tb_billcsav.a2d_exp();
                    b = paypos(tb_ordersav, 2, get_lastordno(25));
                    mark_sync(tb_ordersav, b, 19, "1");
                    get_el("btn2").disabled = !0;
                    ldf1(lnk3, "salesmancode=" + cur.sales + "&tripno=" + ady.getDate() + "&tripseq=" + localStorage.van_cust1 + "&customercode=" + tb_custo[cur.custo][2] + "&gpse=" + cur.lat + "&gpsn=" + cur.lng + "&status=3");
                    get_el("btn2").disabled = !1;
                    P1_SEL_3_A_NN(1)
                } else alert("จำนวนเงินไม่ถูกต้อง")
            }
        }
    },
    P1_SEL_4 = function () {
        set_txt("PAGE1", get_txt("order_list"));
        clr_uinp();
        var a, c;
        void 0 != x ? cur.btype = x : x = cur.btype;
        set_txt("v1", tb_custo[cur.custo][3]);
        var b = get_orderby(tb_custo[cur.custo][2]);
        c = new cls_table("width='100%' border='1''");
        c.row();
        c.hed("Order", "width='33%'");
        c.hed("Date", "width='33%'");
        c.hed("Price");
        for (a = 0; a < b.length; a++) c.row("class='mov' onclick='P1_SEL_3_det(\"" + b[a][0] + "\")' align='right'"), c.col(b[a][0]), c.col(b[a][1]), c.col(b[a][2]);
        set_txt("tbl1", c.htm());
        get_el("btn1").onclick = function () {
            P1_SEL_3()
        }
    },
    P1_SEL_3_A = function (a) {
        set_txt("PAGE1", get_txt("order_list"));
        clr_uinp();
        var c = 1 + Number(tb_vat[0]) / 100,
            b;
        void 0 != a ? cur.btype =
            a : a = cur.btype;
        set_txt("v1", tb_custo[cur.custo][3]);
        var d = get_orderby(tb_custo[cur.custo][2]);
        b = new cls_table("width='100%' border='1''");
        b.row();
        b.hed("Order", "width='33%'");
        b.hed("Date", "width='33%'");
        b.hed("Price");
        for (a = 0; a < d.length; a++) b.row("class='mov' onclick='P1_SEL_3_det(\"" + d[a][0] + "\")' align='right'"), b.col(d[a][0]), b.col(d[a][1]), b.col(r_up(d[a][2] * c).toFixed(2));
        set_txt("tbl1", b.htm());
        get_el("btn1").onclick = function () {
            P1_SEL_3()
        };
        get_el("btn2").onclick = function () {
            P1_SEL_3_A_1()
        }
    },
    P1_SEL_3_det =
        function (a) {
            var c, b = bt_htm("ก่อนหน้า", "onclick='P1_SEL_3_A()'"),
                d = bt_htm("Cancel", "onclick='P1_SEL_3_can(\"" + a + "\")'"),
                e = bt_htm("Copy", "onclick='P1_SEL_3_cop(\"" + a + "\")'");
            set_txt("PAGE1", get_txt("tp_flist"));
            set_txt("m_head", a);
            c = get_orddet(a);
            a = new cls_table("width='100%' border='1'");
            a.row();
            a.hed("No.", "width='1%'");
            a.hed("Code", "width='1%'");
            a.hed("ชื่อ");
            a.hed("แถมให้", "width='1%'");
            a.hed("จำนวน",
                "width='1%'");
            a.hed("บรรจุ", "width='1%'");
            a.hed("ราคาหีบ", "width='1%'");
            a.hed("ลด%", "width='1%'");
            a.hed("ลดบาท", "width='1%'");
            a.hed("ราคา", "width='1%'");
            for (i = 0; i < c.length; i++) idp = tb_prod.a2d_find(c[i][6], 0), a.row("align='right'"), a.col(1 + i), a.col(c[i][6]), a.col(idp[0][3], "align='left'"), a.col(c[i][7]), a.col(c[i][8] + "/" + c[i][9], "align='center'"), a.col(idp[0][4]), a.col(c[i][12]), a.col(c[i][10]),
                a.col(c[i][11]), a.col(c[i][15]);
            set_txt("tbl1", a.htm());
            set_txt("mbtn1", b + d + e);
            set_txt("mbtn2", b + d + e)
        },
    P1_SEL_3_can = function (a) {
        if (1 == confirm("ยืนยันยกเลิกบิล") && !(0 >= tb_ordersav.length)) {
            var c, b = new Date;
            c = tb_ordersav.a2d_findpos(a, 2);
            if ("" != tb_ordersav[c][18]) alert("ยกเลิกไม่ได้");
            else {
                for (i = 0; i < tb_ordersav.length; i++) tb_ordersav[i][2] == a && (tb_ordersav[i][17] = "C",
                    tb_ordersav[i][3] = b.get_date(), c = tb_billcsav.a2d_find(a, 1), 0 < c.length && (tb_paysav.a2d_finddel(c[0][4], 9), tb_billcsav.a2d_finddel(c[0][4], 4), localStorage.van_paysav = tb_paysav.a2d_exp(), localStorage.van_billcsav = tb_billcsav.a2d_exp()));
                localStorage.van_ordersav = tb_ordersav.a2d_exp();
                P1_SEL_3_A()
            }
        }
    },
    P1_SEL_3_cop = function (a) {
        a = tb_ordersav.a2d_find(a, 2);
        put_uinp(a);
        P1_SEL_3_A_1(1)
    },
    conf_clr_ord = function () {
        1 == confirm("ยังไม่ได้บันทึก ยืนยันไม่บันทึก") &&
            (clear_val(), P1_SEL_3_A())
    },
    P1_SEL_3_A_1 = function (a) {
        set_txt("PAGE1", get_txt("newbill"));
        cur.sr = "";
        tb_keylist = [];
        var c, b, d, e = get_sr(),
            f = bt_htm("ก่อนหน้า", "onclick='conf_clr_ord()'"),
            g = bt_htm("ดูรายการ", "onclick='P1_SEL_3_A_1(1)'"),
            h = bt_htm("ถัดไป", "onclick='P1_SEL_3_A_1N()'");
        set_txt("v2", get_ordno(25));
        b = get_el("sr");
        for (c = 0; c < tb_store.length; c++) d = document.createElement("option"), d.text = tb_store[c][0],
            b.add(d, null);
        "" != e && (b.value = e, cur.sr = e);
        b.onchange = function () {
            cur.sr = get_elval("sr")
        };
        e = tb_procat.a2d_getfil(1);
        b = get_el("pcat");
        for (c = 0; c < e.length; c++) d = document.createElement("option"), d.text = e[c], b.add(d, null);
        b.onchange = function () {
            P1_SEL_3_A_1C()
        };
        set_txt("mbtn1", f + g + h);
        set_txt("mbtn2", f + g + h);
        1 == a && (set_elval("pcat", "View"), P1_SEL_3_A_1C())
    },
    P1_SEL_3_A_1C = function () {
        var a, c = "";
        a = get_elval("pcat");
        "All" != a && "View" != a && (a = tb_procat.a2d_find1(a, 1, 0));
        0 == cur.btype && (c += auto_view1(a));
        1 == cur.btype &&
            (c += auto_view(a));
        2 == cur.btype && (c += manual_view(a));
        3 == cur.btype && (c += manual_view(a));
        set_txt("tbl1", c)
    },
    P1_SEL_3_A_1N = function () {
        var a, c = 0,
            b, d, e, f;
        e = new Date;
        d = cur.sr;
        if ("" == d) alert("ยังไม่ได้เลือก สร.");
        else {
            set_txt("PAGE1", get_txt("promotion"));
            b = 0 == cur.btype || 1 == cur.btype ? gen_order1() : gen_order2();
            f = tb_store.a2d_dist(0, "s");
            d = opt_htm("id='sr'", f, d);
            set_txt("opt1", d);
            a = "<table width='100%' border='1'><tr><th width='1%'>รหัส</th><th>ชื่อ</th><th width='1%'>แถมให้</th><th width='1%'>จำนวน</th><th width='1%'>บรรจุ</th><th width='1%'>ราคาหีบ</th><th width='1%'>ลด%</th><th width='1%'>ลดบาท</th><th width='1%'>ราคา</th></tr>";
            for (f = 0; f < b.length; f++) d = tb_prod.a2d_find(b[f][6], 0), a = 0 < d.length ? a + ("<tr align='right'><td>" + b[f][6] + "</td><td align='left' onclick='print_promo(" + b[f][6] + ',"\\n")\'>' + d[0][3] + "</td><td>" + b[f][7] + "</td><td>" + b[f][8] + "/" + b[f][9] + "</td><td>" + d[0][4] + "</td><td>" + b[f][12] + "</td><td>" + b[f][10] + "</td><td>" + b[f][11] + "</td><td>" + b[f][15] + "</td></tr>") : a + ("<tr align='right'><td>" + b[f][6] + "</td><td align='left' onclick='print_promo(" + b[f][6] + ',"\\n")\'>ไม่พบ</td><td>' + b[f][7] + "</td><td>" +
                b[f][8] + "/" + b[f][9] + "</td><td>9999</td><td>" + b[f][12] + "</td><td>" + b[f][10] + "</td><td>" + b[f][11] + "</td><td>" + b[f][15] + "</td></tr>"), c += Number(b[f][15]);
            set_txt("tbl1", a + "</table>");
            set_txt("v1", get_ordno(25));
            set_txt("v2", tb_custo[cur.custo][3]);
            set_txt("v4", e.get_date());
            set_txt("v5", b.length);
            set_txt("v6", c.toFixed(2));
            for (f = 0; f < b.length; f++) 0 == b[f][15] && (d = tb_prod.a2d_find(b[f][6], 0), c = tb_prod.a2d_findpos(b[f][6], 0), -1 < c && (e = chk_stk(c, b[f][8] + "/" + b[f][9]), 0 != e && alert(b[f][6] + " " + d[0][3] + " มีของไม่พอ เหลือ " +
                set2tem(get_stk(c), tb_prod[c][0]) + " ชิ้น")));
            get_el("btn1").onclick = function () {
                conf_clr_ord()
            };
            get_el("btn2").onclick = function () {
                P1_SEL_3_A_1(1)
            };
            get_el("btn3").onclick = function () {
                P1_SEL_3_A_NN()
            };
            get_el("sr").onchange = function () {
                cur.sr = get_elval("sr")
            }
        }
    },
    P1_SEL_3_A_NN = function (a) {
        var c, b, d, e, f = Number(tb_vat[0]);
        if (0 == cur.btype || 1 == cur.btype) c = gen_order1();
        if (2 == cur.btype || 3 == cur.btype) c = gen_order2();
        b = c.a2d_sumfil(15);
        d = f / 100 * b;
        c = Number(b.toFixed(2)) + Number(d.toFixed(2));
        e = cur.sr;
        "" == e ? e = cur.sr : cur.sr = e;
        set_txt("PAGE1", get_txt("confirm"));
        set_txt("v1", get_ordno(25));
        set_txt("v2", tb_custo[cur.custo][3]);
        set_txt("sr", e);
        set_txt("v5", b.toFixed(2));
        set_txt("v6", f.toFixed(2));
        set_txt("v7", d.toFixed(2));
        set_txt("v8", c.toFixed(2));
        void 0 == a ? (get_el("btn1").disabled = !1, get_el("btn2").disabled = !1, get_el("btn3").disabled = !0, get_el("btn4").disabled = !0) : (get_el("btn1").disabled = !0, get_el("btn2").disabled = !0, get_el("btn3").disabled = !1, get_el("btn4").disabled = !1, get_el(cur.ord_typ).checked = !0);
        get_el("btn1").onclick = function () {
            P1_SEL_3_A_1N()
        };
        get_el("btn2").onclick = function () {
            0 == check_orderno() && save_order(0)
        };
        get_el("btn3").onclick = function () {
            0 == check_orderno() && P1_payment()
        };
        get_el("btn4").onclick = function () {
            clear_val();
            P1_SEL_3_A()
        };
        if (0 == cur.btype || 1 == cur.btype || 2 == cur.btype) set_elval("ordno", get_ordno(25)), get_el("ordno").disabled = !0
    },
    auto_view = function (a) {
        var c, b, d = 0,
            e, f, g, h;
        c = "<table width='100%' border='1'><tr><th width='1%'>รหัส</th><th>ชื่อ</th><th width='1%'>เต็ม</th><th width='1%'>เศษ</th></tr>";
        keyb.RET_FUNC = P1_SEL_3_A_1C;
        for (b = 0; b < tb_prod.length; b++) {
            e = tb_prod[b][2];
            f = void 0 == uinp[b][0] ? "" : uinp[b][0];
            g = void 0 == uinp[b][1] ? "" : uinp[b][1];
            0 == f && 0 == g || d++;
            h = "<tr id='mov" + b + "' class='mov' onclick='kbinp1(" + b + ")' align='right'><td>" + tb_prod[b][0] + "</td><td align='left'>" + tb_prod[b][3] + "</td><td>" + f + "</td><td>" + g + "</td></tr>";
            if ("All" == a || e == a) c += h;
            "View" != a || 0 == f && 0 == g || (c += h)
        }
        c += "</table>";
        return c += "Num:" + d
    },
    auto_view1 = function (a) {
        var c = "",
            b, d = 0,
            e, f, g, h, m, l = new Date,
            n;
        n = tb_v71[0][0];
        n = n.replace(/-/g,
            "/");
        c += "<table width='100%' border='1'><tr><th width='1%'>รหัส</th><th>ชื่อ</th><th width='1%'>เต็ม</th><th width='1%'>เศษ</th><th width='1%'>เป้า</th></tr>";
        keyb.RET_FUNC = P1_SEL_3_A_1C;
        for (b = 0; b < tb_prod.length; b++) {
            e = tb_prod[b][2];
            f = void 0 == uinp[b][0] ? "" : uinp[b][0];
            g = void 0 == uinp[b][1] ? "" : uinp[b][1];
            0 == f && 0 == g || d++;
            h = "<tr id='mov" + b + "' class='mov' onclick='kbinp1(" + b + ")' align='right'><td>" + tb_prod[b][0] +
                "</td><td align='left'>" + tb_prod[b][3] + "</td><td>" + f + "</td><td>" + g + "</td>";
            if ("All" == a || e == a) e = tb_tarin.a2d_find(tb_prod[b][0], 1), 0 < e.length && (m = e[0][2] - get_curoa(n, l.get_date(), e[0][1]), c += h + "<td align='center'>" + set2tem(m, e[0][1]) + "</td></tr>");
            "View" != a || 0 == f && 0 == g || (e = tb_tarin.a2d_find(tb_prod[b][0], 1), 0 < e.length && (m = e[0][2] - get_curoa(n, l.get_date(), e[0][1]), c += h + "<td align='center'>" + set2tem(m, e[0][1]) + "</td></tr>"))
        }
        c += "</table>";
        return c += "Num:" + d
    },
    manual_view = function (a) {
        var c, b, d = 0,
            e, f, g,
            h, m, l, n, p;
        c = "<table width='100%' border='1'><tr><th width='1%'>รหัส</th><th>ชื่อ</th><th width='1%'>แถม</th><th width='1%'>เต็ม</th><th width='1%'>เศษ</th><th width='1%'>ลด%</th><th width='1%'>ลดบาท</th></tr>";
        keyb.RET_FUNC = P1_SEL_3_A_1C;
        for (b = 0; b < tb_prod.length; b++) {
            e = tb_prod[b][2];
            f = void 0 == uinp[b][0] ? "" : uinp[b][0];
            g = void 0 == uinp[b][1] ? "" : uinp[b][1];
            h = void 0 == uinp[b][2] ? "" :
                uinp[b][2];
            m = void 0 == uinp[b][3] ? "" : uinp[b][3];
            l = void 0 == uinp[b][4] ? "" : uinp[b][4];
            n = void 0 == uinp[b][5] ? "" : uinp[b][5];
            p = void 0 == uinp[b][6] ? "" : uinp[b][6];
            0 == f && 0 == g || d++;
            h = "<tr id='mov" + b + "' class='mov' align='right'><td>" + tb_prod[b][0] + "</td><td align='left' onclick='kbinp2(" + b + ")'>" + tb_prod[b][3] + "</td><td onclick='kbinp3(" + b + ")'>" + l + "(" + n + "/" + p + ")</td><td>" + f + "</td><td>" + g + "</td><td>" + h + "</td><td>" + m + "</td></tr>";
            if ("All" == a || e == a) c += h;
            "View" != a || 0 == f && 0 == g || (c += h)
        }
        c += "</table>";
        return c += "Num:" +
            d
    },
    addcus = function (a) {
        var c, b, d = tb_custo.a2d_dist(0, "n");
        c = a.split(" ");
        a = bt_htm("ก่อนหน้า", "onclick=P1_M()");
        var e = bt_htm("บันทึก", "onclick=chkcus()");
        set_txt("PAGE1", get_txt("ADD_CUS"));
        set_txt("v3", c[0]);
        c = tb_custo.a2d_find(c[0], 3);
        set_elval("v2", c[0][1]);
        c = get_el("v1");
        for (b = 0; b < d.length; b++) 99 != d[b] && (option = document.createElement("option"), option.text = d[b], c.add(option, null));
        d = "<select id=v6><option value=''>-จังหวัด-</option>";
        for (b = 0; b < tb_prov.length; b++) d += "<option value='" + tb_prov[b][0] + "'>" + tb_prov[b][1] + "</option>";
        set_txt("cus_opt1", d + "</select>");
        set_txt("cus_opt2", "<select id=v7><option value=''>-อำเภอ-</option></select>");
        set_txt("cus_opt3", "<select id=v8><option value=''>-ตำบล-</option></select>");
        set_txt("v10", "<select id=v101><option value='C'>เงินสด</option><option value='R'>เซ็นบิล</option><option value='Q'>เช็ค</option></select>");
        set_txt("btsp", a + e);
        get_el("v6").onchange = function () {
            set_txt("cus_opt3", "<select id=v8><option value=''>-ตำบล-</option></select>");
            var a = get_elval("v6"),
                c;
            c = "<select id=v7><option value=''>-อำเภอ-</option>";
            for (b = 0; b < tb_amph.length; b++) tmp1 = tb_amph[b][0], tmp1 = tmp1.slice(0, 2), tmp1 == a && (c += "<option value='" + tb_amph[b][0] + "'>" + tb_amph[b][1] + "</option>");
            c += "</select>";
            set_txt("cus_opt2", c);
            get_el("v7").onchange = function () {
                var a = get_elval("v7"),
                    c;
                c = "<select id=v8><option value=''>-ตำบล-</option>";
                for (b = 0; b < tb_dist.length; b++) tmp1 = tb_dist[b][0], tmp1 = tmp1.slice(0, 4), tmp1 == a && (c += "<option value='" + tb_dist[b][0] + "'>" + tb_dist[b][1] + "</option>");
                c += "</select>";
                set_txt("cus_opt3", c)
            }
        }
    },
    chkcus = function () {
        var a = get_elval("v91"),
            c = get_elval("v41");
        if ("" == get_elval("v1")) alert("ยังไม่ได้เลือกทริป");
        else if ("" == get_elval("v2")) alert("ยังไม่ได้ใส่ Div");
        else if ("" == get_elval("v4")) alert("ยังไม่ได้ใส่ชื่อ");
        else if ("" == get_elval("v5")) alert("ยังไม่ได้ใส่ที่อยู่");
        else if ("" == get_elval("v6")) alert("ยังไม่ได้เลือกจังหวัด");
        else if ("" == get_elval("v7")) alert("ยังไม่ได้เลือกอำเภอ");
        else if ("" == get_elval("v8")) alert("ยังไม่ได้เลือกตำบล");
        else if ("" == c) alert("ยังไม่ได้ใส่เลขประจำตัวประชาชน");
        else if (isNaN(c)) alert("เลขประจำตัวประชาชนไม่ใช่ตัวเลข");
        else if (13 != c.length) alert("เลขประจำตัวประชาชนไม่เท่ากับ 13 หลัก");
        else if ("" == get_elval("v42")) alert("ยังไม่ได้ใส่สาขา");
        else if ("" == get_elval("v43")) alert("ยังไม่ได้ใส่เบอร์โทร");
        else if ("" == a) alert("ยังไม่ได้ใส่รหัสรหัสไปรษณีย์");
        else if (isNaN(a)) alert("รหัสไปรษณีย์ไม่ใช่ตัวเลข");
        else if (5 != a.length) alert("รหัสไปรษณีย์ไม่เท่ากับ 5 หลัก");
        else {
            var c = [],
                b;
            c.push(get_txt("v3"));
            c.push(get_elval("v4"));
            c.push(get_elval("v5"));
            b = tb_prov.a2d_find(get_elval("v6"), 0);
            b = b[0][1];
            c.push(get_elval("v6"));
            c.push(b);
            b = tb_amph.a2d_find(get_elval("v7"), 0);
            b = b[0][1];
            c.push(get_elval("v7"));
            c.push(b);
            b = tb_dist.a2d_find(get_elval("v8"), 0);
            b = b[0][1];
            c.push(get_elval("v8"));
            c.push(b);
            c.push(a);
            c.push(get_elval("v2"));
            c.push(cur.sales);
            c.push(get_elval("v101"));
            c.push(get_elval("v1"));
            c.push(get_elval("v43"));
            c.push(get_elval("v41"));
            c.push(get_elval("v42"));
            c.push("");
            tb_cusnew.push(c);
            localStorage.van_cusnew = tb_cusnew.a2d_exp1("|");
            addnewcus();
            a = tb_custo.a2d_findpos(get_txt("v3"), 2);
            cur.custo = a;
            P1_SEL()
        }
    },
    addnewcus = function () {
        var a, c;
        for (a = 0; a < tb_cusnew.length; a++) c = tb_custo.a2d_findpos(tb_cusnew[a][0], 2), -1 != c && (tb_custo[c][0] = tb_cusnew[a][13], tb_custo[c][3] = tb_cusnew[a][1], tb_custo[c][4] = tb_cusnew[a][2] + " ต." + tb_cusnew[a][8] + " อ." + tb_cusnew[a][6] + " จ." + tb_cusnew[a][4] + " " + tb_cusnew[a][9], tb_custo[c][7] = tb_cusnew[a][14], tb_custo[c][8] =
            tb_cusnew[a][15])
    },
    P1_SEL_1_ADD = function () {
        var a = "",
            c = bt_htm("ก่อนหน้า", "onclick='P1_SEL_1()' "),
            b = bt_htm("เพิ่ม", "onclick='chk_addbill()' "),
            a = a + p_head1("เพิ่ม Bill"),
            a = a + ("Customer: " + tb_custo[cur.custo][3] + lf),
            d = new cls_table("width='100%'");
        d.row();
        d.col("Customer Code:", "width=1%");
        d.col(tb_custo[cur.custo][2]);
        d.row();
        d.col("เลขที่บิล");
        d.col("<input type='text' id='v1'>");
        d.row();
        d.col("วันที่บิล");
        d.col("<input type='date' id='v2'>");
        d.row();
        d.col("จำนวนเงิน");
        d.col("<input type='text' id='v3'>");
        a += d.htm();
        a += c + b + lf;
        set_txt("PAGE1", a)
    },
    chk_addbill = function () {
        var a, c, b, d;
        d = tb_custo[cur.custo][2];
        a = get_elval("v1");
        c = get_elval("v2");
        c = c.replace(/-/g, "/");
        b = get_elval("v3");
        "" == a ? alert("เลขที่บิลว่าง") : "" == c ? alert("วันที่บิลว่าง") :
            "" == b ? alert("จำนวนเงินว่าง") : isNaN(b) ? alert("ไม่ใช่จำนวนเงิน") : (tb_billin.a2d_addline(d + "," + a + ",1," + c + "," + b), P1_SEL_1())
    },
    gen_print = function (a, c) {
        var b = "";
        "A" == a[0][4] && (b = print_3A(a));
        "B" == a[0][4] && (b = print_3B(a));
        "C" == a[0][4] && (b = print_3C(a));
        "D" == a[0][4] && (b = print_3D(a));
        "E" == a[0][4] && (b = print_3E(a));
        return b
    },
    print_3A = function (a) {
        var c = "",
            b = a.a2d_sumfil(15),
            c = c + p3_head1(a, "ใบเสร็จรับเงิน/ใบกำกับภาษี"),
            c = c + p3_body1(a),
            c = c + p3_tail(b, "สด", "F-ACC-022-01/08/15");
        return c += p3_body3(a)
    },
    print_3B = function (a) {
        var c = "",
            b = a.a2d_sumfil(15),
            c = c + p3_head2(a, "ใบเสร็จรับเงิน/ใบกำกับภาษี(ย่อ)"),
            c = c + p3_body2(a),
            c = c + p3_tail(b, "สด", "F-ACC-022/1-01/08/15");
        return c += p3_body3(a)
    },
    print_3C = function (a) {
        var c = "",
            b = a.a2d_sumfil(15),
            c = c + p3_head1(a, "ใบส่งสินค้า/ใบกำกับภาษี"),
            c = c + p3_body1(a),
            c = c + p3_tail(b, "เซ็นต์บิล", "F-ACC-023-01/08/15"),
            c = c + p3_head1(a, "ใบเสร็จรับเงิน/สำเนาใบกำกับภาษี"),
            c = c + p3_body1(a);
        return c += p3_tail(b, "เซ็นต์บิล", "F-ACC-023-01/08/15")
    },
    print_3D = function (a) {
        var c = "",
            b = a.a2d_sumfil(15),
            c = c + p3_head2(a, "ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)"),
            c = c + p3_body2(a),
            c = c + p3_tail(b, "เซ็นต์บิล", "F-ACC-023/1-01/08/15"),
            c = c + p3_head2(a, "ใบเสร็จรับเงิน"),
            c = c + p3_body2(a);
        return c += p3_tail(b, "เซ็นต์บิล", "F-ACC-023/1-01/08/15")
    },
    print_3E = function (a) {
        var c = "",
            b = a.a2d_sumfil(15),
            c = c + p3_head3(a, "ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)"),
            c = c + p3_body1(a),
            c = c + p3_tail1(b, "สด");
        return c += p3_body3(a)
    },
    p3_tail = function (a, c, b) {
        var d = "",
            e = new Date,
            f = new Date,
            g = Number(tb_vat[0]),
            h = g / 100 * a;
        a = Number(a.toFixed(2));
        var h = Number(h.toFixed(2)),
            m;
        m = e.get_date().split("/");
        f.setFullYear(m[0], m[1], m[2]);
        d += "! 0 200 200 560 1\nRIGHT\n";
        d += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน" + txtbox(txtnum(a), 30, "r") + "\n";
        d += "TEXT ang14bpt.cpf 0 0 30  Vat  " + g.toFixed(2) + "%" + txtbox(txtnum(h), 30, "r") + "\n";
        d += "TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ" + txtbox(txtnum(a + h), 30, "r") + "\n";
        d += "TEXT ang12bpt.cpf 0 0 80  =========\n";
        d += "LEFT\n";
        d += "TEXT ang10bpt.cpf 0 0 140  ลงชื่อ" +
            txtdup(".", 80) + "ผู้รับเงิน/เช็ค\n";
        d += "TEXT ang10bpt.cpf 0 0 190  ได้รับสินค้าตามรายการในเอกสารนี้ถูกต้องครบถ้วน\n";
        d += "TEXT ang10bpt.cpf 0 0 250  ลงชื่อ" + txtdup(".", 80) + "ผู้ส่งสินค้า\n";
        d += "TEXT ang10bpt.cpf 0 0 310  ลงชื่อ" + txtdup(".", 80) + "พนักงานขาย\n";
        d += "TEXT ang10bpt.cpf 0 0 370  ลงชื่อ" + txtdup(".", 80) + "ผู้รับสินค้า\n";
        d += "TEXT ang10bpt.cpf 0 0 410  กำหนดเยี่ยมครั้งต่อไป        " + f.get_date1() + "           " +
            c + "\n";
        d += "TEXT ang10bpt.cpf 0 0 450  1 : " + e.get_fulldate() + "               " + b + "\n";
        return d += "PRINT\n"
    },
    p3_tail1 = function (a, c) {
        var b = "",
            d = new Date,
            e = new Date,
            f = Number(tb_vat[0]),
            g = f / 100 * a;
        a = Number(a.toFixed(2));
        var g = Number(g.toFixed(2)),
            h;
        h = d.get_date().split("/");
        e.setFullYear(h[0], h[1], h[2]);
        b += "! 0 200 200 190 1\nRIGHT\n";
        b += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน" + txtbox(txtnum(a), 30, "r") + "\n";
        b += "TEXT ang14bpt.cpf 0 0 30  Vat  " + f.toFixed(2) + "%" + txtbox(txtnum(g),
            30, "r") + "\n";
        b += "TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ" + txtbox(txtnum(a + g), 30, "r") + "\n";
        b += "TEXT ang12bpt.cpf 0 0 80  =========\n";
        b += "TEXT ang10bpt.cpf 0 0 140  1 : " + d.get_fulldate() + "               F-ACC-018-01/07/05\n";
        return b += "PRINT\n"
    },
    p3_head1 = function (a, c) {
        var b = "",
            d, e, f, g, h, m, l, n, p = "",
            q = "",
            r;
        d = a[0][0];
        e = a[0][2];
        f = a[0][3];
        g = a[0][5];
        h = a[0][13];
        m = tb_custo.a2d_find(h, 2);
        l = m[0][4].split(" ");
        r = Math.floor(l.length / 2);
        for (n = 0; n < r; n++) p +=
            l[n] + " ";
        for (n = r; n < l.length; n++) q += l[n] + " ";
        b += "! 0 200 200 490 1\nLEFT\n";
        b += "TEXT ang11bpt.cpf 0 80 0 " + c + "\n";
        b += "PCX 0 0 !<Logo1.PCX\n";
        b += "TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) " + e + "\n";
        b += "TEXT ang10bpt.cpf 0 0 75  สาขาที่ออกใบกำกับภาษี : สำนักงานใหญ่\n";
        b += "TEXT ang10bpt.cpf 0 0 105  2156 ถนนเพชรบุรีตัดใหม่                วันที่ " + dmy(f) + "\n";
        b += "TEXT ang10bpt.cpf 0 0 135  แขวงบางกะปิ เขตห้วยขวาง   พนักงานขาย " + d + "\n";
        b += "TEXT ang10bpt.cpf 0 0 165  กรุงเทพฯ10310 โทร.0-2318-0062 คลังสินค้า " +
            g + "\n";
        b += "TEXT ang10bpt.cpf 0 0 195  ทะเบียนเลขที่ บมจ.389        รหัสลูกค้า " + h + "\n";
        b += "TEXT ang10bpt.cpf 0 0 225  เลขประจำตัวผู้เสียภาษีอากร 0107537001421\n";
        b += "TEXT ang10bpt.cpf 0 0 255  TAX ID:" + m[0][8] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 285  ผู้ซื้อ " +
            m[0][3] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 315  " + p + "\n";
        b += "TEXT ang10bpt.cpf 0 0 345  " + q + "\n";
        b += "TEXT ang10bpt.cpf 0 0 375  โทร:" + m[0][7] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 400  ชื่อพนักงานขาย " + tb_sale[0][1] + "\n";
        b += "TEXT ang11bpt.cpf 0 0 425  " + txtbox1("รหัสสินค้า", 12, "l") + " " + txtbox1("ชื่อสินค้า", 36, "l") + "\n";
        b += "RIGHT\n";
        b += "TEXT ang11bpt.cpf 0 0 425  จำนวน          \n";
        b += "TEXT ang11bpt.cpf 0 0 450  ราคาขาย" + txtbox1("ส่วนลด%", 25, "r") + txtbox1("ลดบาท", 16, "r") + txtbox1("จำนวนเงิน", 25, "r") + "\n";
        b += "TEXT ang10bpt.cpf 0 0 460  " + txtdup("_", 63) + "\n";
        return b += "PRINT\n"
    },
    p3_head2 = function (a, c) {
        var b = "",
            d = new Date,
            e, f, g, h, m, l, n, p = "",
            q = "",
            r;
        e = a[0][0];
        f = a[0][2];
        g = a[0][5];
        h = a[0][13];
        m = tb_custo.a2d_find(h, 2);
        l = m[0][4].split(" ");
        r = Math.floor(l.length / 2);
        for (n = 0; n < r; n++) p += l[n] + " ";
        for (n = r; n < l.length; n++) q += l[n] + " ";
        b += "! 0 200 200 380 1\nLEFT\n";
        b += "TEXT ang11bpt.cpf 0 80 0 " + c + "\n";
        b += "PCX 0 0 !<Logo1.PCX\n";
        b += "TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) สำนักงานใหญ่\n";
        b += "TEXT ang10bpt.cpf 0 0 75  TAX ID:0107537001421     คลัง " + g + "\n";
        b += "TEXT ang10bpt.cpf 0 0 105  วันที่ " + d.get_date1() + " เลขที่: " + f + "\n";
        b += "TEXT ang10bpt.cpf 0 0 135  รหัส " + h + "S/M:" + e + " " + tb_sale[0][1] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 165  TAX ID:" + m[0][8] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 195  ผู้ซื้อ " + m[0][3] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 225  " + p + "\n";
        b += "TEXT ang10bpt.cpf 0 0 255  " +
            q + "\n";
        b += "TEXT ang10bpt.cpf 0 0 285  โทร:" + m[0][7] + "\n";
        b += "RIGHT\n";
        b += "TEXT ang11bpt.cpf 0 0 315  รหัส" + txtbox1("จำนวน", 25, "r") + txtbox1("ราคา", 16, "r") + txtbox1("จำนวนเงิน", 25, "r") + "\n";
        b += "TEXT ang10bpt.cpf 0 0 325  " + txtdup("_", 63) + "\n";
        return b += "PRINT\n"
    },
    p3_head3 = function (a, c) {
        var b = "",
            d = new Date,
            e, f, g, h, m, l, n, p;
        e = a[0][0];
        f = a[0][2];
        g = a[0][5];
        h = a[0][13];
        m = tb_custo.a2d_find(h,
            2);
        l = m[0][4].split(" ");
        p = Math.floor(l.length / 2);
        for (n = 0; n < p; n++);
        for (n = p; n < l.length; n++);
        b += "! 0 200 200 300 1\nLEFT\n";
        b += "TEXT ang11bpt.cpf 0 80 0 " + c + "\n";
        b += "PCX 0 0 !<Logo1.PCX\n";
        b += "TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) สำนักงานใหญ่\n";
        b += "TEXT ang10bpt.cpf 0 0 75  TAX ID:0107537001421     คลัง " +
            g + "\n";
        b += "TEXT ang10bpt.cpf 0 0 105  วันที่ " + d.get_date1() + " เลขที่: " + f + "\n";
        b += "TEXT ang10bpt.cpf 0 0 135  รหัส " + h + "S/M:" + e + " " + tb_sale[0][1] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 165  TAX ID:" + m[0][8] + "\n";
        b += "TEXT ang10bpt.cpf 0 0 195  ผู้ซื้อ " + m[0][3] + "\n";
        b += "TEXT ang11bpt.cpf 0 0 225  " + txtbox1("รหัสสินค้า", 12, "l") + " " + txtbox1("ชื่อสินค้า",
            36, "l") + "\n";
        b += "RIGHT\n";
        b += "TEXT ang11bpt.cpf 0 0 225  จำนวน          \n";
        b += "TEXT ang11bpt.cpf 0 0 255  ราคาขาย" + txtbox1("ส่วนลด%", 25, "r") + txtbox1("ลดบาท", 16, "r") + txtbox1("จำนวนเงิน", 25, "r") + "\n";
        b += "TEXT ang10bpt.cpf 0 0 265  " + txtdup("_", 63) + "\n";
        return b += "PRINT\n"
    },
    p3_body1 = function (a) {
        var c = "",
            b, d, e;
        for (b = 0; b < a.length; b++) d = tb_prod.a2d_find(a[b][6],
            0), 0 < d.length ? (e = Number(d[0][6]), d = d[0][3]) : (e = 1, d = "ไม่พบ"),
            c += "! 0 200 200 80 1\n",
            c += "LEFT\n",
            c += "TEXT ang14bpt.cpf 0 0 0  " + a[b][6] + " " + txtbox1(d, 20, "l") + "\n",
            c += "RIGHT\n",
            c += "TEXT ang14bpt.cpf 0 0 0  " + a[b][8] + "/" + a[b][9] + "\n",
            c = 0 != Number(a[b][15]) ?
                c + ("TEXT ang14bpt.cpf 0 0 30  " + txtnum(e) + " " + txtbox1(a[b][10], 20, "r") + txtbox1(a[b][11], 16, "r") + txtbox1(txtnum(Number(a[b][15])), 22, "r") + "\n") :
                c + ("TEXT ang14bpt.cpf 0 0 30  " + txtnum(e) + " " + txtbox1(a[b][10], 20, "r") + txtbox1(a[b][11], 16, "r") + txtbox1(a[b][7], 22, "r") + "\n"),
            c += "TEXT ang10bpt.cpf 0 0 45  " + txtdup("_", 63) + "\n",
            c += "PRINT\n";
        return c
    },
    p3_body2 = function (a) {
        var c = "",
            b, d, e;
        for (b = 0; b < a.length; b++)
            d = tb_prod.a2d_find(a[b][6]
                , 0), 0 < d.length ? (e = Number(d[0][6]), d = d[0][3]) : (e = 1, d = "ไม่พบ"),
                c += "! 0 200 200 80 1\n",
                c += "LEFT\n",
                c += "TEXT ang14bpt.cpf 0 0 0  " + txtbox1(d, 20, "l") + "\n",
                c += "RIGHT\n",
                c = 0 != Number(a[b][15]) ?
                    c + ("TEXT ang14bpt.cpf 0 0 30  " + a[b][6] + txtbox1(a[b][8] + "/" + a[b][9], 20, "r") + txtbox1(txtnum(e), 16, "r") + txtbox1(txtnum(Number(a[b][15])), 22, "r") + "\n") :
                    c + ("TEXT ang14bpt.cpf 0 0 30  " + a[b][6] + txtbox1(a[b][8] + "/" + a[b][9], 20, "r") + txtbox1(txtnum(e), 16, "r") + txtbox1(a[b][7], 22, "r") + "\n"),
                c += "TEXT ang10bpt.cpf 0 0 45  " + txtdup("_", 63) + "\n",
                c += "PRINT\n";
        return c
    },
    p3_body3 = function (a) {
        var c = "",
            b = new Date,
            d, e, f, g;
        d = a[0][0];
        e = a[0][2];
        f = a[0][13];
        g = tb_custo.a2d_find(f, 2);
        c += "! 0 200 200 155 1\nLEFT\n";
        c += "TEXT ang10bpt.cpf 0 0 0  วันที่ " + b.get_date1() + " เลขที่: " +
            e + "\n";
        c += "TEXT ang10bpt.cpf 0 0 30  รหัส " + f + "S/M:" + d + " " + tb_sale[0][1] + "\n";
        c += "TEXT ang10bpt.cpf 0 0 60  ผู้ซื้อ " + g[0][3] + "\n";
        c += "RIGHT\n";
        c += "TEXT ang10bpt.cpf 0 0 90  รหัส" + txtbox1("จำนวน", 26, "r") + txtbox1("ราคา", 32, "r") + txtbox1("จำนวนเงิน", 32, "r") + "\n";
        c += "TEXT ang10bpt.cpf 0 0 100  " + txtdup("_", 63) + "\n";
        c += "PRINT\n";

        for (d = b = 0; d < a.length; d++)
            b += Number(a[d][15]),
                e = tb_prod.a2d_find(a[d][6], 0),
                e = 0 < e.length ? Number(e[0][6]) : 1,
                c += "! 0 200 200 50 1\n", c += "RIGHT\n",
                c += "TEXT ang14bpt.cpf 0 0 0  " + a[d][6] + txtbox1(a[d][8] + "/" + a[d][9], 16, "r") + txtbox1(txtnum(e), 22, "r") + txtbox1(txtnum(Number(a[d][15])), 22, "r") + "\n",
                c += "TEXT ang10bpt.cpf 0 0 15  " + txtdup("_", 63) + "\n",
                c += "PRINT\n";

        a = Number(tb_vat[0]);
        d = r_up(a / 100 * b);
        c += "! 0 200 200 220 1\n";
        c += "RIGHT\n";
        c += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน" + txtbox(txtnum(b), 30, "r") + "\n";
        c += "TEXT ang14bpt.cpf 0 0 30  Vat  " + a.toFixed(2) + "%" + txtbox(txtnum(d), 30, "r") + "\n";
        c += "TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ" + txtbox(txtnum(b + d), 30, "r") + "\n";
        c += "TEXT ang12bpt.cpf 0 0 80  =========\n";
        c += "TEXT ang14bpt.cpf 0 0 110  สด\n";
        return c += "PRINT\n"
    },
    paypos = function (a, c, b) {
        var d, e = [];
        for (d = 0; d < a.length; d++) a[d][c] == b && e.push(d);
        return e
    },
    P2_M = function () {
        if (0 == tb_v71.length) alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป");
        else {
            var a = tb_v71[0][0],
                a = a.replace(/-/g, "/"),
                c = tb_v71[1][0],
                c = c.replace(/-/g, "/");
            set_txt("PAGE1", get_txt("P2_M"));
            var b;
            b = "<table width='100%' border='1' ><tr><th>วันที่</th><th>จุดที่</th><th>เยี่ยม</th><th>ซื้อ</th></tr>";
            endday_re();
            c = tb_endday.a2d_between(a, c, 0);
            for (a = 0; a < c.length; a++) b += "<tr class='mov' align='center' onclick='P2_SHOW(\"" + c[a][0] + "\")'><td>" + c[a][0] + "</td><td>" + c[a][1] +
                "</td><td>" + c[a][6] + "</td><td>" + c[a][9] + "</td></tr>";
            set_txt("tbl1", b + "</table>");
            get_el("btn1").onclick = function () {
                page0()
            };
            get_el("btn2").onclick = function () {
                P2_NEW()
            }
        }
    },
    P2_NEW = function () {
        var a, c, b, d, e = new Date;
        a = new Date;
        c = tb_v71[0][0];
        c = c.replace(/-/g, "/");
        b = tb_v71[1][0];
        b = b.replace(/-/g, "/");
        e.set_date(c);
        a.set_date(b);
        d = Math.abs(e.get_day() - a.get_day());
        set_txt("PAGE1", get_txt("P2_NEW"));
        tb_custo.a2d_dist(0, "n");
        set_txt("v1", tb_sale[0][0]);
        set_txt("v2", get_sr());
        set_txt("v3", tb_sale[0][1]);
        set_elval("mstart",
            "0");
        set_elval("mstop", "0");
        set_txt("runtxt", "0");
        c = get_el("date");
        for (a = 0; a < d; a++) b = document.createElement("option"), b.text = e.get_date(), c.add(b, null), e.add_day();
        c = get_el("trip");
        for (a = 1; 30 > a; a++) b = document.createElement("option"), b.text = a, c.add(b, null);
        c = get_el("st_hh");
        for (a = 0; 24 > a; a++) b = document.createElement("option"), b.text = chkdigi(a), c.add(b, null);
        c.value = "08";
        c = get_el("st_mm");
        for (a = 0; 60 > a; a++) b = document.createElement("option"), b.text = chkdigi(a), c.add(b, null);
        c.value = "00";
        c = get_el("sp_hh");
        for (a = 0; 24 > a; a++) b = document.createElement("option"), b.text = chkdigi(a), c.add(b, null);
        c.value = "17";
        c = get_el("sp_mm");
        for (a = 0; 60 > a; a++) b = document.createElement("option"), b.text = chkdigi(a), c.add(b, null);
        c.value = "00";
        c = get_el("vit");
        for (a = 0; 100 > a; a++) b = document.createElement("option"), b.text = a, c.add(b, null);
        get_el("btn1").onclick = function () {
            P2_M()
        };
        get_el("btn2").onclick = function () {
            P2_SAV()
        };
        get_el("mstart").onkeyup = function () {
            P2_NEW_C()
        };
        get_el("mstop").onkeyup = function () {
            P2_NEW_C()
        };
        get_el("date").onchange =
            function () {
                var a = get_elval("date"),
                    c = 1 + Number(tb_vat[0]) / 100;
                tb_v71[0][0].replace(/-/g, "/");
                var b = saless(a);
                set_txt("sum1txt", b[0]);
                set_txt("sum2txt", b[1]);
                var d, b = tb_ordersav.a2d_find(a, 3),
                    b = b.a2d_find("", 17);
                d = b.a2d_dist(13, "s");
                set_txt("buytxt", d.length);
                b = b.a2d_sumfil(15);
                set_txt("moneytxt", (b * c).toFixed(2));
                b = tb_endday.a2d_find(a, 0);
                0 < b.length && alert("วัน ซ้ำ")
            };
        get_el("trip").onchange = function () {
            var a = tb_v71[0][0],
                a = a.replace(/-/g, "/"),
                b = tb_v71[1][0],
                b = b.replace(/-/g,
                    "/"),
                c = get_elval("trip");
            0 < tb_endday.a2d_between(a, b, 0).a2d_find(c, 1).length && alert("Trip ซ้ำ")
        }
    },
    P2_NEW_C = function () {
        var a = get_elval("mstart"),
            a = get_elval("mstop") - a;
        isNaN(a) && (a = "Error");
        set_txt("runtxt", a)
    },
    P2_SAV = function () {
        var a, c, b, d, e, f, g, h, m, l, n, p, q, r, u, y = tb_v71[0][0],
            y = y.replace(/-/g, "/"),
            z = tb_v71[1][0],
            z = z.replace(/-/g, "/");
        a = get_elval("date");
        c = get_elval("trip");
        b = get_elval("st_hh");
        d = get_elval("st_mm");
        e = get_elval("sp_hh");
        f = get_elval("sp_mm");
        g = get_elval("vit");
        h = get_elval("mstart");
        m = get_elval("mstop");
        l = get_txt("buytxt");
        n = get_txt("runtxt");
        p = get_txt("moneytxt");
        q = get_txt("sum1txt");
        r = get_txt("sum2txt");
        if ("0.00" == p) alert("ยอดเป็น 0.00");
        else if ("" == a) alert("ยังไม่เลือกวัน");
        else if ("" == c) alert("ยังไม่เลือกทริป");
        else if (u = tb_endday.a2d_find(a, 0), 0 < u.length) alert("วัน ซ้ำ");
        else if (u = tb_endday.a2d_between(y, z, 0).a2d_find(c, 1), 0 < u.length) alert("Trip ซ้ำ");
        else if (isNaN(h)) alert("ไมล์เริ่มไม่ใช่ตัวเลข");
        else if (isNaN(m)) alert("ไมล์จบไม่ใช้ตัวเลข");
        else {
            tb_endday.a2d_addline(a + "," + c + "," + b + "," + d + "," + e + "," + f + "," + g + "," + h + "," + m + "," + l + "," + n + "," + p + "," + q + "," + r);
            localStorage.van_endday =
                tb_endday.a2d_exp();
            c = new Date;
            b = new Date;
            y = tb_v71[0][0];
            y = y.replace(/-/g, "/");
            c.set_date(y);
            b.set_date(a);
            y = Math.abs(c.get_day() - b.get_day());
            for (b = 0; b <= y; b++) tb_ordersav.a2d_findset1(c.get_date(), 3, "X", 18), tb_f51sav.a2d_findset2(c.get_date(), 3, "X", 18), tb_f52sav.a2d_findset2(c.get_date(), 3, "X", 18), c.add_day();
            void 0 != localStorage.van_lastendday && "undefined" != localStorage.van_lastendday ? localStorage.van_lastendday < a && (localStorage.van_lastendday = a) : localStorage.van_lastendday = a;
            localStorage.van_ordersav =
                tb_ordersav.a2d_exp();
            localStorage.van_f51sav = tb_f51sav.a2d_exp();
            localStorage.van_f52sav = tb_f52sav.a2d_exp();
            P2_M()
        }
    },
    P2_SHOW = function (a) {
        set_txt("PAGE1", get_txt("P2_SHOW"));
        tb_custo.a2d_dist(0, "n");
        var c = tb_endday.a2d_find(a, 0);
        set_txt("v1", tb_sale[0][0]);
        set_txt("v2", get_sr());
        set_txt("v3", tb_sale[0][1]);
        set_txt("v4", c[0][0]);
        set_txt("v5", c[0][1]);
        set_txt("v6", c[0][2]);
        set_txt("v7", c[0][3]);
        set_txt("v8", c[0][4]);
        set_txt("v9", c[0][5]);
        set_txt("v10", c[0][6]);
        set_txt("v11", c[0][9]);
        set_txt("v12",
            c[0][12]);
        set_txt("v13", c[0][13]);
        set_txt("v14", c[0][7]);
        set_txt("v15", c[0][8]);
        set_txt("v16", c[0][11]);
        set_txt("v17", c[0][10]);
        get_el("btn1").onclick = function () {
            P2_M()
        };
        get_el("btn2").onclick = function () {
            P2_PRN(a)
        }
    },
    endday_re = function () {
        var a = [],
            c = [],
            b, d = 0,
            e = tb_endday.a2d_dist(0, "s");
        for (b = 0; b < e.length; b++) a = tb_endday.a2d_find(e[b], 0), a = a[0], a[12] = d, d += Number(a[6]), c.push(a);
        tb_endday = c;
        localStorage.van_endday = tb_endday.a2d_exp()
    },
    saless = function (a) {
        var c = [],
            b = 0,
            d = 0,
            b = tb_v71[0][0],
            b = b.replace(/-/g,
                "/");
        tb_v71[1][0].replace(/-/g, "/");
        a = tb_endday.a2d_between(b, a, 0);
        b = a.a2d_sumfil(6);
        d = a.a2d_sumfil(9);
        c.push(b);
        c.push(d);
        return c
    },
    markpos = function (a, c, b, d) {
        var e, f = [];
        if (0 == d)
            for (e = 0; e < a.length; e++) a[e][c] == b && f.push(e);
        if (1 == d)
            for (e = 0; e < a.length; e++) a[e][c] == b && "C" == a[e][17] && f.push(e);
        return f
    },
    P2_PRN = function (a) {
        var c, b = "",
            d, e, f, g, h, m, l, n, p, q, r, u, y, z, C, B, I = 0,
            G = 0;
        c = tb_v71[0][0];
        c = c.replace(/-/g, "/");
        p = tb_endday.a2d_find(a, 0);
        z = Number(tb_vat[0]);
        C = 1 + z / 100;
        d = tb_ordersav.a2d_between(c, a, 3);
        d = d.a2d_find("",
            17);
        d = d.a2d_find("", 7);
        q = u = r = 0;
        e = d.a2d_dist(2, "s");
        for (c = 0; c < e.length; c++) d = tb_ordersav.a2d_find(e[c], 2), d = d.a2d_find("", 17), d = d.a2d_find("", 7), amt = d.a2d_sumfil(15), amt = Number(amt.toFixed(2)), m = P2_maxp(d) - amt, m = Number(m.toFixed(2)), q += m, f = z / 100 * amt, f = Number(f.toFixed(2)), amt += f, amt = Number(amt.toFixed(2)), "A" == d[0][4] || "B" == d[0][4] ? (g = amt, h = 0) : (g = 0, h = amt), tb_custo.a2d_find(d[0][13], 2), r += g, u += h;
        y = r + u;
        d = tb_ordersav.a2d_find(a, 3);
        d = d.a2d_find("", 17);
        d = d.a2d_dist(2, "s");
        b += txtbox("บริษัท สหพัฒนพิบูล จำกัด (มหาชน)",
            135, "c") + "\n";
        b += txtbox("รายงานการปฏิบัติงาน", 125, "c") + txtbox("Page 1", 10, "r") + "\n";
        b += txtbox("F-STK-001-19/07/1999", 100, "l") + txtbox(tb_sale[0][0], 35, "r") + "\n";
        b += txtbox("จุดปฏิบัติงานที่ " + p[0][1], 21, "l") + txtbox("พนักงานขาย " + tb_sale[0][0] + " " + tb_sale[0][1], 94, "l") + txtbox("วันที่ " +
            dmy(p[0][0]), 20, "r") + "\n";
        b += "เริ่มเวลา " + p[0][2] + ":" + p[0][3] + " น." + txtdup(" ", 5) + "เลิกเวลา " + p[0][4] + ":" + p[0][5] + " น." + txtdup(" ", 5) + "เยี่ยม " + p[0][6] + " ร้าน ซื้อ " + p[0][9] + " ร้าน " + txtdup(" ", 5) + "สั่งซื้อ " + d.length + " ใบ\n";
        b += "ไมล์เริ่ม " +
            p[0][7] + txtdup(" ", 10) + " ไมล์เลิก " + p[0][8] + txtdup(" ", 10) + " รวมวิ่ง " + p[0][10] + "\n";
        b += "|" + txtdup("-", 133) + "|\n";
        b += "|" + txtbox("ลำดับ", 6, "c") + "|" + txtbox("ใบรายงานการจำหน่าย", 19, "c") + "|" + txtbox("ส่วนลด", 9, "c") + "|" + txtbox("ขายสด", 14, "c") + "|" + txtbox("ขายเชื่อ",
            16, "c") + "|" + txtbox("จำนวนเงิน", 18, "c") + "|" + txtbox("%ต่อเป้า", 8, "c") + "|" + txtbox("ร้านค้า", 36, "c") + "|\n";
        b += "|" + txtdup("-", 133) + "|\n";
        p = tb_tarin.a2d_sumfil(3);
        d = tb_ordersav.a2d_find(a, 3);
        d = d.a2d_find("", 7);
        a = n = l = 0;
        e = d.a2d_dist(2, "s");
        for (c = 0; c < e.length; c++) d = tb_ordersav.a2d_find(e[c], 2), d = d.a2d_find("", 7), B = 1 == d[0][19] ? "*" : " ", "C" != d[0][17] && (amt = d.a2d_sumfil(15), amt = Number(amt.toFixed(2)),
            m = P2_maxp(d) - amt, m = Number(m.toFixed(2)), a += m, f = z / 100 * amt, f = Number(f.toFixed(2)), amt += f, amt = Number(amt.toFixed(2)), "A" == d[0][4] || "B" == d[0][4] || "E" == d[0][4] ? (g = amt, h = 0) : (g = 0, h = amt), f = tb_custo.a2d_find(d[0][13], 2), l += g, n += h, g = 0 != g ? txtnum(g) : "", h = 0 != h ? txtnum(h) : "", b += "|" + txtbox(1 + c + " ", 6, "r") + "|" + txtbox(B + d[0][2], 19, "c") + "|" + txtbox(txtnum(m), 9, "r") + "|" + txtbox(g, 14, "r") + "|" + txtbox(h, 16, "r") + "|" + txtbox("", 18, "r") + "|" + txtbox("", 8, "r") + "|" + txtbox(d[0][13] + " " + f[0][3], 36, "l") + "|\n");
        m = l + n;
        for (c = 0; c < e.length; c++) d =
            tb_ordersav.a2d_find(e[c], 2), d = d.a2d_find("", 7), B = 1 == d[0][19] ? "*" : " ", "C" == d[0][17] && (h = d.a2d_sumfil(15), h = Number(h.toFixed(2)), f = P2_maxp(d) - h, f.toFixed(2), f = z / 100 * h, f = Number(f.toFixed(2)), h += f, h = Number(h.toFixed(2)), "A" == d[0][4] || "B" == d[0][4] || "E" == d[0][4] ? (g = h, h = 0) : g = 0, f = tb_custo.a2d_find(d[0][13], 2), I += g, G += h, b += "|" + txtbox(1 + c + " ", 6, "r") + "|" + txtbox(B + d[0][2], 19, "c") + "|" + txtbox("Cancel", 9, "c") + "|" + txtbox("", 14, "r") + "|" + txtbox("", 16, "r") + "|" + txtbox("(" + txtnum(g + h) + ")", 18, "r") + "|" + txtbox("", 8, "r") +
                "|" + txtbox(d[0][13] + " " + f[0][3], 36, "l") + "|\n");
        b += "|" + txtdup("-", 133) + "|\n";
        b += "|" + txtbox("  ขายวันนี้", 26, "l") + "|" + txtbox(txtnum(a), 9, "r") + "|" + txtbox(txtnum(l), 14, "r") + "|" + txtbox(txtnum(n), 16, "r") + "|" + txtbox(txtnum(m), 18, "r") + "|" + txtbox("", 8, "r") + "|" + txtbox("รวมบิลยกเลิก", 36, "l") + "|\n";
        b += "|" + txtbox("  ขายสะสมถึงวันนี้",
            26, "l") + "|" + txtbox(txtnum(q), 9, "r") + "|" + txtbox(txtnum(r), 14, "r") + "|" + txtbox(txtnum(u), 16, "r") + "|" + txtbox(txtnum(y), 18, "r") + "|" + txtbox(txtnum(y / p * 100) + "%", 8, "r") + "|" + txtbox(txtnum(I + G) + " บาท", 36, "l") + "|\n";
        b += "|" + txtdup("-", 133) + "|\n";
        b += "|" + txtbox("  เป้าหมาย", 26, "l") + "|" + txtbox("", 9, "r") + "|" + txtbox("", 14, "r") + "|" + txtbox("", 16, "r") + "|" + txtbox(txtnum(p), 18, "r") + "|" + txtbox("100.00%", 8, "r") + "|" + txtbox("", 36, "c") + "|\n";
        b += "|" + txtdup("-", 133) + "|\n";
        b += "|" + txtbox("  ขายวันนี้ (ไม่Vat)", 26, "l") + "|" + txtbox("", 9, "r") + "|" + txtbox(txtnum(l / C), 14, "r") + "|" + txtbox(txtnum(n / C), 16, "r") + "|" + txtbox(txtnum(m / C), 18, "r") + "|" + txtbox("", 8, "r") + "|" + txtbox("", 36, "c") + "|\n";
        b += "|" + txtbox("  ขายสะสมถึงวันนี้ (ไม่Vat)", 26, "l") + "|" + txtbox("", 9, "r") + "|" + txtbox(txtnum(r / C), 14, "r") + "|" + txtbox(txtnum(u / C), 16, "r") + "|" +
            txtbox(txtnum(y / C), 18, "r") + "|" + txtbox("", 8, "r") + "|" + txtbox("", 36, "c") + "|\n";
        b += "|" + txtdup("-", 133) + "|\n";
        b = b + "\n\n" + (txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + "     หมายเหตุ:*คือขายสดชำระเช็ค\n");
        b += txtdup(" ", 10) + txtbox("ผู้ส่งบิล(พนักงานขาย)", 20, "c") + txtdup(" ", 10) +
            txtbox("ผู้ส่งบิล(พนักงานผู้ช่วย)", 20, "c") + txtdup(" ", 10) + txtbox("ผู้รับบิล(สร. / เดโป้)", 20, "c") + "\n";
        b += txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____",
            20, "c") + "\n";
        localStorage.van_print = b;
        alert(b);
        pttr(b);
        alert("เตรียมข้อมูลเรียบร้อยแล้ว")
    },
    P2_maxp = function (a) {
        var c = 0,
            b, d;
        for (b = 0; b < a.length; b++) d = tb_prod.a2d_find(a[b][6], 0), d = a[b][8] * d[0][6] + a[b][9] * d[0][6] / d[0][4], d = Number(d.toFixed(2)), c += d;
        return c = Number(c.toFixed(2))
    },
    dmy = function (a) {
        var c = new Date;
        c.set_date(a);
        return c.get_date1()
    },
    P3_M = function () {
        var a = new Date;
        if (0 ==
            tb_v71.length) alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป");
        else {
            set_txt("PAGE1", get_txt("P3_M"));
            var c, b, d, e, f, g, h, m, l, n;
            if (0 < tb_paysav.length) {
                tb_paysav.a2d_find(a.get_date(), 8);
                c = tb_billcsav.a2d_find(a.get_date(), 3);
                g = c.a2d_dist(0, "s");
                b = "<table width='100%' border='1'><tr><th>Customer</th><th>Date</th><th>Cheque</th><th>Cash</th></tr>";
                if (void 0 !== g.length) {
                    for (d = 0; d < g.length; d++) {
                        l = m = 0;
                        e = c.a2d_find(g[d], 0);
                        n = e.a2d_dist(4, "s");
                        for (e = 0; e < n.length; e++)
                            for (h = tb_paysav.a2d_find(n[e], 9), f = 0; f < h.length; f++) 1 == h[f][0] ? m += Number(h[f][1]) : l += Number(h[f][1]);
                        b += "<tr align='right'><td align='center'>" + tb_custo.a2d_find1(g[d], 2, 3) + "</td><td align='center'>" + a.get_date1() + "</td><td>" + l.toFixed(2) + "</td><td>" + m.toFixed(2) + "</td></tr>"
                    }
                    b += "</table>"
                }
                set_txt("tbl1", b)
            }
            get_el("btn1").onclick = function () {
                page0()
            };
            get_el("btn2").onclick = function () {
                P3_Total()
            }
        }
    },
    P3_Total = function () {
        set_txt("PAGE1", get_txt("P3_Total"));
        var a = new Date,
            c, b, d, e, f, g = new Date;
        c = new Date;
        b = tb_v71[0][0];
        b = b.replace(/-/g, "/");
        d = tb_v71[1][0];
        d = d.replace(/-/g, "/");
        g.set_date(b);
        c.set_date(d);
        f = Math.abs(g.get_day() - c.get_day());
        b = tb_store.a2d_dist(0, "s");
        d = get_el("sr");
        for (c = 0; c < b.length; c++) e = document.createElement("option"), e.text = b[c], d.add(e, null);
        d = get_el("day");
        for (c = 0; c < f; c++) e = document.createElement("option"), e.text = g.get_date(), d.add(e, null), g.add_day();
        d.value = a.get_date();
        P3_Total_update(a.get_date());
        get_el("day").onchange = function () {
            var a = get_elval("day");
            P3_Total_update(a)
        };
        get_el("btn1").onclick = function () {
            P3_M()
        };
        get_el("btn2").onclick = function () {
            P3_PRN()
        }
    },
    get_bil = function (a, c, b, d) {
        a = tb_ordersav.a2d_between(a, c, 3);
        a = a.a2d_find("", 17);
        0 == d && (a = a.a2d_find("0", 19));
        1 == d && (a = a.a2d_find("1", 19));
        a = a.a2d_find(b, 4);
        a = a.a2d_dist(2, "s");
        return a.length
    },
    get_inv = function (a, c, b) {
        a = tb_billcsav.a2d_between(a, c, 3);
        a = a.a2d_find(b, 5);
        a = a.a2d_dist(1, "s");
        return a.length
    },
    get_amt_ord =
        function (a, c, b, d) {
            var e = Number(tb_vat[0]),
                f, g;
            a = tb_ordersav.a2d_between(a, c, 3);
            a = a.a2d_find("", 17);
            0 == d && (a = a.a2d_find("0", 19));
            1 == d && (a = a.a2d_find("1", 19));
            a = a.a2d_find(b, 4);
            b = 0;
            c = a.a2d_dist(2, "s");
            for (d = 0; d < c.length; d++) g = a.a2d_find(c[d], 2), g = g.a2d_sumfil(15), g = Number(g.toFixed(2)), f = e / 100 * g, f = Number(f.toFixed(2)), f = g + f, f = Number(f.toFixed(2)), b += f;
            return b = Number(b.toFixed(2))
        },
    get_amt_pay = function (a, c, b, d) {
        var e = 0;
        a = tb_billcsav.a2d_between(a, c, 3);
        a = a.a2d_find(d, 5);
        a = a.a2d_dist(4, "s");
        for (d = 0; d <
            a.length; d++) c = tb_paysav.a2d_find(a[d], 9), c = c.a2d_find(b, 0), e += c.a2d_sumfil(1);
        return e
    },
    P3_Total_update = function (a) {
        var c, b, d, e, f, g, h, m, l, n, p, q, r, u;
        u = tb_v71[0][0];
        u = u.replace(/-/g, "/");
        b = get_bil(a, a, "A", 2);
        b += get_bil(a, a, "B", 2);
        b += get_bil(a, a, "E", 2);
        l = get_inv(a, a, 0);
        c = get_bil(u, a, "A", 2);
        c += get_bil(u, a, "B", 2);
        c += get_bil(u, a, "E", 2);
        c -= b;
        m = get_inv(u, a, 0);
        m -= l;
        d = get_amt_ord(a, a, "A", 0);
        d += get_amt_ord(a, a, "B", 0);
        d += get_amt_ord(a, a, "E", 0);
        n = get_amt_ord(u, a, "A", 0);
        n += get_amt_ord(u, a, "B", 0);
        n += get_amt_ord(u,
            a, "E", 0);
        n -= d;
        e = get_amt_pay(a, a, "2", 0);
        f = get_amt_pay(a, a, "1", 0);
        g = get_amt_pay(u, a, "2", 0);
        g -= e;
        h = get_amt_pay(u, a, "1", 0);
        h -= f;
        p = get_amt_pay(a, a, "1", 1);
        r = get_amt_pay(a, a, "2", 1);
        q = get_amt_pay(u, a, "1", 1);
        q -= p;
        a = get_amt_pay(u, a, "2", 1);
        a -= r;
        set_txt("v1", b);
        set_txt("v2", r.toFixed(2));
        set_txt("v3", (d + p).toFixed(2));
        set_txt("v4", l);
        set_txt("v5", e.toFixed(2));
        set_txt("v6", f.toFixed(2));
        set_txt("v7", (r + e).toFixed(2));
        set_txt("v8", (d + f + p).toFixed(2));
        set_txt("v9", c);
        set_txt("v10", a.toFixed(2));
        set_txt("v11", (n +
            q).toFixed(2));
        set_txt("v12", m);
        set_txt("v13", g.toFixed(2));
        set_txt("v14", h.toFixed(2));
        set_txt("v15", (g + a).toFixed(2));
        set_txt("v16", (h + q + n).toFixed(2));
        set_txt("v17", c + b);
        set_txt("v18", (a + r).toFixed(2));
        set_txt("v19", (n + d + q + p).toFixed(2));
        set_txt("v20", m + l);
        set_txt("v21", (g + e).toFixed(2));
        set_txt("v22", (h + f).toFixed(2));
        set_txt("v23", (g + e + a + r).toFixed(2));
        set_txt("v24", (h + f + n + d + q + p).toFixed(2))
    },
    P3_PRN = function () {
        var a = "",
            c, b, d, e, f, g, h, m, l, n, p;
        c = "";
        var q, r, u, y, z, C, B, I, G, K, J, w;
        w = get_elval("day");
        e = get_elval("sr");
        d = tb_endday.a2d_find((new Date).get_date(), 0);
        if (1 > d.length) alert("ยังไม่ได้ปิดสิ้นวัน");
        else if ("" == e) alert("ยังไม่ได้เลือก สร.");
        else {
            q = new Date;
            d = tb_v71[0][0];
            d = d.replace(/-/g, "/");
            q.setDate(w);
            C = get_amt_pay(d, w, "2", 0);
            B = get_amt_pay(d, w, "1", 0);
            r = get_amt_ord(w, w, "A", 1);
            r += get_amt_ord(w, w, "B", 1);
            r += get_amt_ord(w,
                w, "E", 1);
            tbce = get_amt_ord(d, w, "A", 1);
            tbce += get_amt_ord(d, w, "B", 1);
            tbce += get_amt_ord(d, w, "E", 1);
            tbce -= r;
            I = get_amt_pay(w, w, "1", 1);
            G = get_amt_pay(d, w, "1", 1);
            G -= I;
            K = get_amt_pay(w, w, "2", 1);
            J = get_amt_pay(d, w, "2", 1);
            J -= K;
            q = get_amt_ord(w, w, "A", 0);
            q += get_amt_ord(w, w, "B", 0);
            q += get_amt_ord(w, w, "E", 0);
            z = get_amt_ord(d, w, "A", 0);
            z += get_amt_ord(d, w, "B", 0);
            z += get_amt_ord(d, w, "E", 0);
            z -= q;
            u = get_bil(w, w, "A", 2);
            u += get_bil(w, w, "B", 2);
            u += get_bil(w, w, "E", 2);
            u += get_inv(w, w, 0);
            y = get_bil(d, w, "A", 2);
            y += get_bil(d, w, "B", 2);
            y +=
                get_bil(d, w, "E", 2);
            y += get_inv(d, w, 0);
            y -= u;
            h = tb_store.a2d_find(e, 0);
            0 < h.length && (c = h[0][1]);
            var D, E, A, v, F, H, a = a + (String.fromCharCode(27, 64) + "\n"),
                a = a + (txtbox("บริษัท สหพัฒนพิบูล จำกัด (มหาชน)", 135, "c") + "\n"),
                a = a + (txtbox("ใบส่งเงิน (ส่วนที่ 1 สำหรับแผนกบัญชีลูกหนี้)",
                    135, "c") + "\n"),
                a = a + (txtbox("     F-DBT-012-19/07/1999", 135, "l") + "\n"),
                a = a + (txtbox("รายละเอียดร้านค้าแต่ละบิล", 115, "c") + txtbox("วันที่ " + dmy(w), 20, "r") + "\n"),
                a = a + (txtbox("     พนักงานขาย " + tb_sale[0][0] + " " + tb_sale[0][1], 50, "l") + txtbox("สร. " + e + " " + c, 50, "l") + "\n"),
                a = a + ("|" + txtdup("-", 133) +
                    "|\n"),
                a = a + ("|" + txtbox("ร้านค้า", 31, "c") + "|" + txtbox("ใบส่งสินค้า", 14, "c") + "|" + txtbox("วันที่บิล", 10, "c") + "|" + txtbox("จำนวนเงิน", 12, "c") + "|" + txtbox("ธนาคาร(สาขา) เลขที่เช็ค เลขบัญชี วันที่เช็ค",
                    36, "c") + "|" + txtbox("จ่ายเช็ค", 12, "c") + "|" + txtbox("จ่ายเงินสด", 12, "c") + "|\n"),
                a = a + ("|" + txtdup("-", 133) + "|\n"),
                a = a + ("|" + txtbox("     รวมส่งเงินขายสด รอบนี้", 31, "l") + txtbox(txtnum(q), 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n"),
                a = a + ("|" +
                    txtbox("     - - - - - - - - - -", 31, "l") + txtbox("- - - - -", 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n");
            n = p = 0;
            d = tb_billcsav.a2d_find(w, 3);
            e = d.a2d_dist(0, "s");
            for (c = 0; c < e.length; c++)
                for (b = d.a2d_find(e[c], 0), b = b.a2d_find(1, 5), f = b.a2d_dist(4, "s"), b = 0; b < f.length; b++) {
                    g = tb_billcsav.a2d_find(f[b], 4);
                    h = tb_paysav.a2d_find(f[b], 9);
                    for (v = F = H = D = A = 0; v < h.length; v++) 1 == h[v][0] && (m = Number(h[v][1]), l = 0), 2 == h[v][0] && (l = Number(h[v][1]), m =
                        0, A++), F += m, H += l;
                    g.length > D && (D = g.length);
                    A > D && (D = A);
                    E = [];
                    for (v = 0; v < D; v++) A = [], A.push(""), A.push(""), E.push(A);
                    for (v = 0; v < g.length; v++) E[v][0] = txtbox(g[v][1], 14, "c") + "|" + txtbox(dmy(g[v][6]), 10, "c") + "|" + txtbox(txtnum(Number(g[v][7])), 12, "r");
                    n += F;
                    p += H;
                    A = 0;
                    if (0 == H) E[A][1] = txtbox("", 36, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox(txtnum(F), 12, "r");
                    else
                        for (v = 0; v < h.length; v++) 2 == h[v][0] && (l = Number(h[v][1]), m = 0, g = h[v][4] + " " + h[v][5] + " " + h[v][2] + " " + h[v][6] + " " + dmy(h[v][3]), 0 == A && (m = F), E[A][1] = txtbox(g, 36, "l") +
                            "|" + txtbox(txtnum(l), 12, "r") + "|" + txtbox(txtnum(m), 12, "r"), A++);
                    for (v = 0; v < D; v++) 0 == v && 0 == b ? (h = e[c], h = tb_custo.a2d_find(h, 2), h = txtbox(h[0][3], 21, "l") + txtbox(h[0][2], 10, "r")) : h = txtdup(" ", 31), a += "|" + h + "|" + E[v][0] + "|" + E[v][1] + "|\n"
                }
            a += "|" + txtbox("     รวมส่งเงินรับเช็ค รอบนี้", 31, "l") + txtbox(txtnum(r), 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12,
                "l") + "|" + txtbox("", 12, "l") + "|\n";
            a += "|" + txtbox("     - - - - - - - - - -", 31, "l") + txtbox("- - - - -", 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n";
            n = p = 0;
            d = tb_billcsav.a2d_find(w, 3);
            e = d.a2d_dist(0, "s");
            for (c = w = 0; c < e.length; c++)
                for (b = d.a2d_find(e[c], 0), b = b.a2d_find(0, 5), f = b.a2d_dist(4, "s"), b = 0; b < f.length; b++) {
                    g = tb_billcsav.a2d_find(f[b], 4);
                    h = tb_paysav.a2d_find(f[b], 9);
                    for (v = F = H = D = A = 0; v < h.length; v++) 1 == h[v][0] && (m = Number(h[v][1]),
                        l = 0), 2 == h[v][0] && (l = Number(h[v][1]), m = 0, A++), F += m, H += l;
                    g.length > D && (D = g.length);
                    A > D && (D = A);
                    E = [];
                    for (v = 0; v < D; v++) A = [], A.push(""), A.push(""), E.push(A);
                    for (v = 0; v < g.length; v++) E[v][0] = txtbox(g[v][1], 14, "c") + "|" + txtbox(dmy(g[v][6]), 10, "c") + "|" + txtbox(txtnum(Number(g[v][7])), 12, "r"), w += Number(g[0][2]);
                    n += F;
                    p += H;
                    A = 0;
                    if (0 == H) E[A][1] = txtbox("", 36, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox(txtnum(F), 12, "r");
                    else
                        for (v = 0; v < h.length; v++) 2 == h[v][0] && (l = Number(h[v][1]), m = 0, g = h[v][4] + " " + h[v][5] + " " + h[v][2] + " " + h[v][6] +
                            " " + dmy(h[v][3]), 0 == A && (m = F), E[A][1] = txtbox(g, 36, "l") + "|" + txtbox(txtnum(l), 12, "r") + "|" + txtbox(txtnum(m), 12, "r"), A++);
                    for (v = 0; v < D; v++) 0 == v && 0 == b ? (h = e[c], h = tb_custo.a2d_find(h, 2), h = txtbox(h[0][3], 21, "l") + txtbox(h[0][2], 10, "r")) : h = txtdup(" ", 31), a += "|" + h + "|" + E[v][0] + "|" + E[v][1] + "|\n"
                }
            a += "|" + txtbox("     รวมส่งเงินเชื่อ รอบก่อน", 31, "l") + txtbox(txtnum(n + p) + "(" + txtnum(w) + ")", 16, "r") + txtbox("", 10,
                "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n";
            a += "|" + txtbox("     - - - - - - - - - -", 31, "l") + txtbox("- - - - -", 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n";
            a += "|" + txtbox("     รวมรับคืน", 31, "l") + txtbox(txtnum(0), 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") +
                "|\n";
            a += "|" + txtbox("     - - - - - - - - - -", 31, "l") + txtbox("- - - - -", 16, "r") + txtbox("", 10, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "l") + "|" + txtbox("", 12, "l") + "|\n";
            a += "|" + txtdup("-", 133) + "|\n";
            a += "|" + txtbox("     รวมส่งเงินวันนี้", 31, "l") + txtbox(u + " บิล    ", 26, "r") + "|" + txtbox(txtnum(n + p + q + r), 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox(txtnum(p + K), 12, "r") + "|" + txtbox(txtnum(n + I +
                q), 12, "r") + "|\n";
            a += "|" + txtdup("-", 133) + "|\n";
            a += "|" + txtbox("     ยอดส่งเงินสะสมยกมา", 31, "l") + txtbox(y + " บิล    ", 26, "r") + "|" + txtbox(txtnum(z + tbce + C + B - n - p), 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox(txtnum(J + C - p), 12, "r") + "|" + txtbox(txtnum(z + B - n + G), 12, "r") + "|\n";
            a += "|" + txtbox("     รวมยอดส่งเงินสะสม", 31, "l") + txtbox(y +
                u + " บิล    ", 26, "r") + "|" + txtbox(txtnum(z + tbce + q + r + B + C), 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox(txtnum(J + C + K), 12, "r") + "|" + txtbox(txtnum(z + B + q + G + I), 12, "r") + "|\n";
            a += "|" + txtdup("-", 133) + "|\n";
            a += "|" + txtbox("     ซื้อดราฟท์วันนี้", 57, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox("0.00", 12, "r") + "|\n";
            a += "|" + txtbox("     ซื้อดราฟท์สะสม",
                57, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox("0.00", 12, "r") + "|\n";
            a += "|" + txtbox("     เงินสดคงเหลือยกไป", 57, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox("", 36, "l") + "|" + txtbox("", 12, "r") + "|" + txtbox(txtnum(z + B + q + I + G), 12, "r") + "|\n";
            a += "|" + txtdup("-", 133) + "|\n";
            a = a + "\n\n" + (txtbox("หมายเหตุ", 18, "c") + "1.สร./เดโป้ ได้รับเงินสด/เช็ค จากพนักงานขายของบริษัท ต้องตรวจสอบความถูกต้อง ตรงกับ ใบเสร็จรับเงินชั่วคราว แล้วลงลายมือชื่อเป็นหลักฐาน\n");
            a += txtbox("", 18, "c") + "2.จ่ายเช็ค 1 ฉบับ เพื่อเป็นการชำระหนี้ของร้านเพียงร้านเดียวเท่านั่น\n";
            a += txtbox("", 18, "c") + "3.รายละเอียดในใบส่งเงินส่วนที่ 1 และส่วนที่ 2 ต้องตรงกัน\n";
            a += txtbox("", 18, "c") + "4.พนักงานขายต้องคีย์ใบส่งเงิน และส่งเข้าบริษัททุกวัน\n";
            a += "\n\n";
            a += txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + "\n";
            a += txtdup(" ", 10) + txtbox("ผู้ส่งเงิน/เช็ค",
                20, "c") + txtdup(" ", 10) + txtbox("ผู้รับเงิน/เช็ค", 20, "c") + txtdup(" ", 10) + txtbox("ผู้จัดการ/ซุปเปอร์", 20, "c") + txtdup(" ", 10) + txtbox("แผนกบัญชีลูกหนี้", 20, "c") + "\n";
            a += txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____",
                20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + "\n";
            localStorage.van_print = a;
            alert(a);
            pttr(a);
            alert("เตรียมข้อมูลเรียบร้อยแล้ว")
        }
    },
    P4_M = function () {
        0 == tb_v71.length ? alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป") :
            (set_txt("PAGE1", get_txt("P4_M")), get_el("btn1").onclick = function () {
                P4_1()
            }, get_el("btn2").onclick = function () {
                P4_2()
            }, get_el("btn3").onclick = function () {
                P4_3()
            }, get_el("btn6").onclick = function () {
                P4_6()
            }, get_el("btn8").onclick = function () {
                page0()
            }, cur.ipm = "")
    },
    P4_1 = function () {
        var a = "",
            c, b, d, e = bt_htm("ย้อนกลับ", "onclick='P4_M()'"),
            f = tb_billt.a2d_dist(0, "s"),
            a = a + p_head1("Confirm Bill Tรับสินค้าเข้าสร."),
            a = a + (e + lf),
            a = a + "Doc. Code : 21",
            g = new cls_table("width='100%' border='1'");
        g.row();
        g.hed("Bill T No.");
        g.hed("วันที่");
        g.hed("Flag");
        for (c = 0; c < f.length; c++) b = tb_billtsav.a2d_find(f[c], 0), 0 < b.length ? (b = b[0][4], d = "C") : d = b = "", g.row("class='mov' align='center' onclick=\"P4_1det('" + f[c] + "')\""), g.col(f[c]), g.col(b), g.col(d);
        a += g.htm();
        a += "Rec:" + f.length + lf;
        set_txt("PAGE1", a + e)
    },
    P4_1det = function (a) {
        var c = "",
            b, d, e = bt_htm("ย้อนกลับ", "onclick='P4_1()'");
        d = 0 < tb_billtsav.a2d_find(a, 0).length ? bt_htm("Clear", "onclick=P4_1_clr()") : bt_htm("Confirm", "onclick=P4_1_conf('" + a + "')");
        var f = tb_billt.a2d_find(a, 0),
            c = c + p_head1("Confirm Bill Tรับสินค้าเข้าสร."),
            c = c + (e + d + lf);
        b = new cls_table("width='100%'");
        b.row();
        b.col("Bill T No.:<span id='billtno'>" + a + "</span>");
        b.col("สร.:<span id='srno'>" + f[0][1] + "</span>", "align='right'");
        var c = c + b.htm(),
            g = new cls_table("width='100%' border='1'");
        g.row();
        g.hed("รหัส");
        g.hed("ชื่อ");
        g.hed("จำนวน");
        for (a = 0; a < f.length; a++) b = tb_prod.a2d_find(f[a][2], 0), g.row(), g.col(f[a][2]), g.col(b[0][3]), g.col(set2tem(f[a][3], f[a][2]), "align='center'");
        c += g.htm();
        c += "Rec:" + f.length + lf;
        c += e + d + lf;
        set_txt("PAGE1", c)
    },
    P4_1_conf = function (a) {
        var c, b = new Date;
        get_txt("billtno");
        var d = tb_billt.a2d_find(a, 0);
        for (a = 0; a < d.length; a++) c = d[a], c.push(b.get_date()), tb_billtsav.push(c), localStorage.van_billtsav =
            tb_billtsav.a2d_exp();
        P4_1()
    },
    P4_1_clr = function () {
        var a = get_txt("billtno");
        tb_billtsav.a2d_finddel(a, 0);
        localStorage.van_billtsav = tb_billtsav.a2d_exp();
        P4_1()
    },
    P4_2 = function () {
        cur.pg = 42;
        clr_uinp();
        set_txt("PAGE1", get_txt("tp_flist"));
        var a, c, b, d, e, f = bt_htm("ย้อนกลับ", "onclick='P4_M()'"),
            g = bt_htm("เพิ่ม", "onclick='P4_2_ADD(0,\"\")'");
        set_txt("m_head", "Confirm ใบเบิกสินค้าขึ้นรถ");
        b = tb_f51sav;
        e = b.a2d_dist(2, "s");
        e.sort();
        a = "<table width='100%' border='1'><tr><th>Request No.</th><th>วันที่</th><th>Flag</th></tr>";
        for (c = 0; c < e.length; c++) d = b.a2d_find(e[c], 2), a += "<tr class='mov' align='center' onclick='P4_2_VE(\"" + e[c] + "\")' ><td>" + e[c] + "</td><td>" + d[0][3] + "</td><td>" + d[0][17] + "</td></tr>";
        set_txt("tbl1", a + "</table>");
        set_txt("mbtn1", f + g)
    },
    P4_2_VE = function (a) {
        var c;
        c = tb_f51sav.a2d_find(a, 2);
        put_uinp(c);
        P4_2_ADD(1, a)
    },
    conf_clr_51 = function () {
        1 == confirm("ยังไม่ได้บันทึก ยืนยันไม่บันทึก") &&
            (clear_val(), P4_2())
    },
    P4_2_ADD = function (a, c) {
        cur.ipm = "1";
        set_txt("PAGE1", get_txt("newbill"));
        var b, d, e, f = get_sr(),
            g = bt_htm("ย้อนกลับ", "onclick='conf_clr_51()'"),
            h = bt_htm("ดูรายการ", "onclick='P4_2_ADD(1,\"" + c + "\")'"),
            m = bt_htm("บันทึก", "onclick='P4_2_SAV(\"" + c + "\",51)'"),
            l = "",
            n = "";
        "" != c ? (l = bt_htm("Confirm", "onclick='P4_2_CONF(\"" + c + "\",51)'"), n = bt_htm("พิมพ์", "onclick='P4_2_PRN(\"" +
            c + "\",51)'")) : tb_keylist = [];
        e = get_el("sr");
        for (b = 0; b < tb_store.length; b++) d = document.createElement("option"), d.text = tb_store[b][0], e.add(d, null);
        "" != f && (e.value = f, cur.sr = f);
        e.onchange = function () {
            cur.sr = get_elval("sr")
        };
        d = get_ordno(51);
        "" != c && (d = c, b = tb_f51sav.a2d_find(d, 2), e.value = b[0][5]);
        set_txt("v2", d);
        cur.btype = 1;
        e = get_el("pcat");
        for (b = 0; b < tb_procat.length; b++) d = document.createElement("option"), d.text = tb_procat[b][1], e.add(d, null);
        e.onchange = function () {
            P1_SEL_3_A_1C()
        };
        set_txt("mbtn1", g + h + m + n + l);
        set_txt("mbtn2", g + h + m + n + l);
        1 == a && (set_elval("pcat", "View"), P1_SEL_3_A_1C())
    },
    P4_2_SAV = function (a, c) {
        var b;
        "" == get_elval("sr") ? alert("ยังไม่ได้เลือก สร.") : (b = get_fdata(), gen_form(a, b, 3, c), 51 == c && P4_2(), 52 == c && P4_3())
    },
    P4_2_CONF = function (a, c) {
        var b = new Date,
            d;
        if (51 == c) {
            for (d = 0; d < tb_f51sav.length; d++) tb_f51sav[d][2] == a && "C" != tb_f51sav[d][17] && (tb_f51sav[d][17] = "C", tb_f51sav[d][3] = b.get_date());
            localStorage.van_f51sav = tb_f51sav.a2d_exp();
            P4_2()
        }
        if (52 == c) {
            for (d = 0; d < tb_f52sav.length; d++) tb_f52sav[d][2] == a && "C" != tb_f52sav[d][17] && (tb_f52sav[d][17] = "C", tb_f52sav[d][3] = b.get_date());
            localStorage.van_f52sav = tb_f52sav.a2d_exp();
            P4_3()
        }
    },
    P4_3 = function () {
        cur.pg = 43;
        clr_uinp();
        set_txt("PAGE1", get_txt("tp_flist"));
        var a, c, b, d, e, f = bt_htm("ย้อนกลับ", "onclick='P4_M()'"),
            g = bt_htm("เพิ่ม", "onclick='P4_3_ADD(0,\"\")'");
        set_txt("m_head", "ป้อนใบคืนสินค้าเข้า สร");
        b = tb_f52sav;
        e = b.a2d_dist(2, "s");
        e.sort();
        a = "<table width='100%' border='1'><tr><th>Request No.</th><th>วันที่</th><th>Flag</th></tr>";
        for (c = 0; c < e.length; c++) d = b.a2d_find(e[c], 2), a += "<tr class='mov' align='center' onclick='P4_3_VE(\"" + e[c] + "\")' ><td>" + e[c] + "</td><td>" + d[0][3] + "</td><td>" + d[0][17] + "</td></tr>";
        set_txt("tbl1", a + "</table>");
        set_txt("mbtn1", f + g)
    },
    P4_3_VE = function (a) {
        var c;
        c = tb_f52sav.a2d_find(a, 2);
        put_uinp(c);
        P4_3_ADD(1, a)
    },
    conf_clr_52 = function () {
        1 == confirm("ยังไม่ได้บันทึก ยืนยันไม่บันทึก") &&
            (clear_val(), P4_3())
    },
    P4_3_ADD = function (a, c) {
        cur.ipm = "";
        set_txt("PAGE1", get_txt("newbill"));
        var b, d, e, f = get_sr(),
            g = bt_htm("ย้อนกลับ", "onclick='conf_clr_52()'"),
            h = bt_htm("ดูรายการ", "onclick='P4_3_ADD(1,\"" + c + "\")'"),
            m = bt_htm("บันทึก", "onclick='P4_2_SAV(\"" + c + "\",52)'"),
            l = "",
            n = "";
        "" != c ? (l = bt_htm("Confirm", "onclick='P4_2_CONF(\"" + c + "\",52)'"), n = bt_htm("พิมพ์", "onclick='P4_2_PRN(\"" +
            c + "\",52)'")) : tb_keylist = [];
        e = get_el("sr");
        for (b = 0; b < tb_store.length; b++) d = document.createElement("option"), d.text = tb_store[b][0], e.add(d, null);
        "" != f && (e.value = f);
        d = get_ordno(52);
        "" != c && (d = c, b = tb_f52sav.a2d_find(d, 2), e.value = b[0][5]);
        set_txt("v2", d);
        cur.btype = 1;
        e = get_el("pcat");
        for (b = 0; b < tb_procat.length; b++) d = document.createElement("option"), d.text = tb_procat[b][1], e.add(d, null);
        e.onchange = function () {
            P1_SEL_3_A_1C()
        };
        set_txt("mbtn1", g + h + m + n + l);
        set_txt("mbtn2", g + h + m + n + l);
        1 == a && (set_elval("pcat", "View"),
            P1_SEL_3_A_1C())
    },
    get_fdata1 = function () {
        var a, c, b, d = [];
        for (a = 0; a < tb_keylist.length; a++)
            if (c = void 0 == uinp[tb_keylist[a]][0] ? 0 : uinp[tb_keylist[a]][0], b = void 0 == uinp[tb_keylist[a]][1] ? 0 : uinp[tb_keylist[a]][1], 0 != c || 0 != b) d.push(tb_prod[tb_keylist[a]][0]), d.push(c), d.push(b);
        return d
    },
    get_fdata = function () {
        var a, c, b, d = [];
        for (a = 0; a < tb_prod.length; a++)
            if (c = void 0 == uinp[a][0] ? 0 : uinp[a][0], b = void 0 == uinp[a][1] ? 0 : uinp[a][1], 0 != c || 0 != b) d.push(tb_prod[a][0]), d.push(c), d.push(b);
        return d
    },
    gen_form = function (a, c,
        b, d) {
        var e, f, g = new Date,
            h = get_elval("sr");
        if ("" == a) a = get_ordno(d);
        else {
            if (51 == d) {
                e = tb_f51sav.a2d_find(a, 2);
                if ("C" == e[0][17]) return;
                tb_f51sav = e = tb_f51sav.a2d_findnot(a, 2)
            }
            if (52 == d) {
                e = tb_f52sav.a2d_find(a, 2);
                if ("C" == e[0][17]) return;
                tb_f52sav = e = tb_f52sav.a2d_findnot(a, 2)
            }
        }
        for (e = 0; e < c.length; e += b) f = cur.sales + "," + d + "," + a + "," + g.get_date() + ",0," + h + "," + c[e] + ",," + c[e + 1] + "," + c[e + 2] + ",0.00,0.00,0.00,,0,0.00," + g.get_fulldate() + ",,", 51 == d && tb_f51sav.a2d_addline(f), 52 == d && tb_f52sav.a2d_addline(f);
        51 == d && (localStorage.van_f51sav =
            tb_f51sav.a2d_exp());
        52 == d && (localStorage.van_f52sav = tb_f52sav.a2d_exp())
    },
    P4_6 = function () {
        var a = new Date,
            c = new Date,
            b, d;
        b = tb_v71[0][0];
        b = b.replace(/-/g, "/");
        a.set_date(b);
        c = Math.abs(a.get_day() - c.get_day());
        clr_uinp();
        put_uinp2(tb_stvan, "+");
        for (b = 0; b <= c; b++) d = getp_order(a.get_date()), put_uinp2(d, "-"), pp2 = getp_f51(a.get_date()), put_uinp2(pp2, "+"), pp3 = getp_f52(a.get_date()), put_uinp2(pp3, "-"), a.add_day();
        P4_6_ADD(1, "")
    },
    getp_order = function (a) {
        var c, b = [],
            d, e = tb_ordersav.a2d_find(a, 3),
            e = e.a2d_find("",
                17),
            f = e.a2d_dist(6, "s");
        for (a = 0; a < f.length; a++) tmp = e.a2d_find(f[a], 6), d = tem2set(tmp.a2d_sumfil(8) + "/" + tmp.a2d_sumfil(9), f[a]), c = [], c.push(f[a]), c.push(d), b.push(c);
        return b
    },
    getp_f51 = function (a) {
        var c, b = [],
            d, e = tb_f51sav.a2d_find(a, 3),
            e = e.a2d_find("C", 17),
            f = e.a2d_dist(6, "s");
        for (a = 0; a < f.length; a++) tmp = e.a2d_find(f[a], 6), d = tem2set(tmp.a2d_sumfil(8) + "/" + tmp.a2d_sumfil(9), f[a]), c = [], c.push(f[a]), c.push(d), b.push(c);
        return b
    },
    getp_f52 = function (a) {
        var c, b = [],
            d, e = tb_f52sav.a2d_find(a, 3),
            e = e.a2d_find("C",
                17),
            f = e.a2d_dist(6, "s");
        for (a = 0; a < f.length; a++) tmp = e.a2d_find(f[a], 6), d = tem2set(tmp.a2d_sumfil(8) + "/" + tmp.a2d_sumfil(9), f[a]), c = [], c.push(f[a]), c.push(d), b.push(c);
        return b
    },
    P4_6_ADD = function (a, c) {
        set_txt("PAGE1", get_txt("newbill"));
        var b, d, e, f = get_sr(),
            g = bt_htm("ย้อนกลับ", "onclick='P4_M()'");
        e = get_el("sr");
        for (b = 0; b < tb_store.length; b++) d = document.createElement("option"), d.text = tb_store[b][0], e.add(d, null);
        "" != f && (e.value = f);
        d = get_ordno(52);
        "" != c && (d = c, b = tb_f51sav.a2d_find(d,
            2), e.value = b[0][5]);
        set_txt("v2", d);
        cur.btype = 1;
        e = get_el("pcat");
        for (b = 0; b < tb_procat.length; b++) d = document.createElement("option"), d.text = tb_procat[b][1], e.add(d, null);
        e.onchange = function () {
            P1_SEL_3_A_1C()
        };
        set_txt("mbtn1", g);
        set_txt("mbtn2", g);
        1 == a && (set_elval("pcat", "View"), P1_SEL_3_A_1C())
    },
    P4_2_PRN = function (a, c) {
        var b = "",
            d = "",
            e = "",
            f, g, h = 1,
            m = "",
            l, n = 0,
            p;
        g = txtbox("บริษัท สหพัฒนพิบูล จำกัด (มหาชน)",
            111, "c") + "\n";
        51 == c && (l = tb_f51sav.a2d_find(a, 2), f = "ใบเบิกสินค้า (Form 51)");
        52 == c && (l = tb_f52sav.a2d_find(a, 2), f = "ใบคืนสินค้า (Form 52)");
        "C" == l[0][17] && (f += "(Confirm)", 51 == c && (d += txtbox("F-STK-003-19/07/99", 73, "l")), 52 == c && (d += txtbox("F-STK-010-01/08/58", 73, "l")), d += txtbox("เลขที่ " + a, 35, "r") + "\n"
            , m += txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + "\n", m += txtdup(" ", 10) + txtbox("พนักงานขาย", 20, "c") + txtdup(" ", 10) + txtbox("พนักงานขับรถ", 20, "c") + txtdup(" ", 10) + txtbox("ตัวแทน สร.", 20, "c") + "\n");
        f = txtbox(f, 101, "c") + txtbox("Page ", 8, "r");
        p = tb_store.a2d_find(l[0][5], 0);
        0 < p.length && (e = p[0][1]);
        d += txtbox("วันที่ " + l[0][3], 15, "l") + txtbox("รหัสพนักงานขาย " +
            tb_sale[0][0], 25, "l") + "ชื่อพนักงานขาย " + tb_sale[0][1] + "\n";
        d += txtbox("", 15, "l") + txtbox("รหัสสร. " + l[0][5], 25, "l") + " ชื่อสร. " + e + "\n";
        d += "|" + txtdup("-", 92) + "|\n";
        d += "|" + txtbox("ลำดับ", 5, "c") + "|" + txtbox("รหัส-ชื่อ สินค้า", 56, "c") + "|" + txtbox("บรรจุ", 10, "c") +
            "|" + txtbox("จำนวน เต็ม/เศษ", 18, "c") + "|\n";
        d += "|" + txtdup("-", 92) + "|\n";
        for (i = 0; i < l.length; i++) 0 == i % 55 && (1 < h && (b += "|" + txtdup("-", 92) + "|\n\n\n"), b += g, b += f + h + "\n", b += d, h++), e = tb_prod.a2d_find(l[i][6], 0), n += e[0][5] * l[i][9] + e[0][6] * l[i][8], b += "|" + txtbox(1 + i + " ", 5, "r") + "|" + txtbox(l[i][6] + " " + e[0][3], 56, "l") + "|" + txtbox(e[0][4], 10, "r") + "|" + txtbox(l[i][8], 11, "r") + "|" + txtbox(l[i][9], 6, "r") + "|\n";
        b += "|" + txtdup("-", 92) + "|\n";
        b += txtbox("รวม " +
            l.length + " รายการ", 20, "l") + txtbox("เป็นเงิน " + txtnum(n) + " บาท", 50, "l") + txtbox("รวมจำนวน " + l.a2d_sumfil(8) + "/" + l.a2d_sumfil(9), 30, "r") + "\n\n\n";
        b += m;
        localStorage.van_print = b;
        alert(b);
        pttr(b);
        alert("เตรียมข้อมูลเรียบร้อยแล้ว")
    },
    P6_M = function () {
        if (0 == tb_v71.length) alert("ยังไม่ได้ตั้งค่าวันเริ่ม-สิ้นสุดทริป");
        else {
            var a = "",
                c = bt_htm("1.Stock Card", "class='a100' onclick= 'P6_1()' "),
                b = bt_htm("ย้อนกลับ", "class='a100' onclick= 'page0()' "),
                d = new cls_table("width='100%'");
            d.row();
            d.hed("Stock Card");
            a += d.htm();
            a += lf + c + lf + lf;
            set_txt("PAGE1", a + b)
        }
    },
    P6_1 = function () {
        var a = "",
            c, b = bt_htm("ย้อนกลับ", "onclick='P6_M()' "),
            a = a + (p_head1("Stock Card") + lf),
            d = new cls_table("width='100%' border='1'");
        d.row();
        d.hed("รหัส");
        d.hed("ชื่อ");
        d.row("class=mov  onclick='P6_1_1()'");
        d.col(cur.sales);
        d.col(tb_sale[0][1]);
        for (c = 0; c < tb_store.length; c++) d.row("class=mov onclick='P6_1_2(\"" + c + "\")'"), d.col(tb_store[c][0]), d.col(tb_store[c][1]);
        a += d.htm();
        a += b + lf;
        set_txt("PAGE1", a)
    },
    P6_1_1 = function () {
        var a = "",
            c, b = bt_htm("ย้อนกลับ", "onclick='P6_1()' "),
            d = bt_htm("พิมพ์", "onclick='P6_PRNVAN()' "),
            a = a + (p_head1("Stock Card") + lf),
            a = a + (b + d + lf),
            a = a + (cur.sales +
                ":" + tb_sale[0][1] + lf),
            e = new cls_table("width='100%' border='1'");
        e.row();
        e.hed("Group Id:Group Name");
        e.hed("ยกมา");
        e.hed("รับเข้า");
        e.hed("ขาย");
        e.hed("แถม");
        e.hed("เหลือ");
        for (c = 0; c < tb_procat.length; c++) v1 = tb_procat[c][0] + ":" + tb_procat[c][1], e.row("align=right class=mov onclick=P6_1_11(" + c + ")"), e.col(v1, "align=left"), e.col(""), e.col(""), e.col(""), e.col(""), e.col("");
        a += e.htm() + lf;
        a += b + d +
            lf;
        set_txt("PAGE1", a)
    },
    P6_1_11 = function (a) {
        var c = "",
            b, d, e = bt_htm("ย้อนกลับ", "onclick=P6_1_1() ");
        void 0 == a && (a = cur.cat);
        cur.cat = a;
        var c = c + (p_head1("Stock Card") + lf),
            c = c + (e + lf),
            c = c + (cur.sales + ":" + tb_sale[0][1] + lf),
            c = c + (tb_procat[a][0] + ":" + tb_procat[a][1] + lf),
            f = new cls_table("width=100% border=1");
        f.row();
        f.hed("Product Id:Product Name");
        f.hed("บรรจุ");
        f.hed("ยกมา");
        f.hed("รับเข้า");
        f.hed("ขาย");
        f.hed("แถม");
        f.hed("เหลือ");
        var g = tb_prod.a2d_find(tb_procat[a][0], 2);
        for (a = 0; a < g.length; a++) b = g[a][0] + ":" + g[a][3], d = g[a][4], f.row("align=right class=mov onclick=P6_1_111(" + a + ")"), f.col(b, "align=left"), f.col(d), f.col(""), f.col(""), f.col(""), f.col(""), f.col("");
        c += f.htm() + lf;
        c += e + lf;
        set_txt("PAGE1", c)
    },
    P6_1_111 = function (a) {
        var c = "",
            b, d = bt_htm("ย้อนกลับ", "onclick=P6_1_11() ");
        void 0 == a && (a = cur.prod);
        cur.prod = a;
        b = tb_prod.a2d_find(tb_procat[cur.cat][0], 2);
        var c = c + (p_head1("Stock Card") + lf),
            c = c + (d + lf),
            c = c + (cur.sales + ":" + tb_sale[0][1] + lf),
            c = c + (tb_procat[cur.cat][0] + ":" + tb_procat[cur.cat][1] + lf),
            c = c + (b[a][0] + ":" + b[a][3] + lf),
            e = new cls_table("width=100% border=1");
        e.row();
        e.hed("วันที่");
        e.hed("รับเข้า");
        e.hed("ขาย");
        e.hed("แถม");
        e.hed("เหลือ");
        b = us_byday(b[a][0]);
        for (a = 0; a < b.length; a++) e.row("align=right class=mov onclick=P6_1_1111('" +
            b[a][0] + "')"), e.col(b[a][0], "align=left"), e.col(b[a][1]), e.col(b[a][2]), e.col(b[a][3]), e.col(b[a][4]);
        c += e.htm() + lf;
        c += d + lf;
        set_txt("PAGE1", c)
    },
    P6_1_1111 = function (a) {
        var c = "",
            b, d = bt_htm("ย้อนกลับ", "onclick=P6_1_111() ");
        void 0 == a && (a = cur.date);
        cur.date = a;
        var e = tb_prod.a2d_find(tb_procat[cur.cat][0], 2),
            c = c + (p_head1("Stock Card") + lf),
            c = c + (d + lf),
            c = c + (cur.sales + ":" + tb_sale[0][1] + lf),
            c = c + (tb_procat[cur.cat][0] + ":" + tb_procat[cur.cat][1] + lf),
            c = c + (e[cur.prod][0] + ":" +
                e[cur.prod][3] + lf),
            c = c + (a + lf),
            e = new cls_table("width=100% border=1");
        e.row();
        e.hed("Doc");
        e.hed("เลขที่เอกสาร");
        e.hed("รับเข้า");
        e.hed("ขาย");
        e.hed("แถม");
        b = us_byday1(a);
        for (a = 0; a < b.length; a++) e.row("align=right"), e.col(b[a][0], "align=left"), e.col(b[a][1]), e.col(b[a][2]), e.col(b[a][3]), e.col(b[a][4]);
        c += e.htm() + lf;
        c += d + lf;
        set_txt("PAGE1", c)
    },
    P6_1_2 = function (a) {
        var c = "",
            b, d =
                bt_htm("ย้อนกลับ", "onclick=P6_1() "),
            e = bt_htm("พิมพ์", "onclick='P6_PRNSR()' ");
        void 0 == a && (a = cur.sr);
        cur.sr = a;
        var c = c + (p_head1("Stock Card") + lf),
            c = c + (d + e + lf),
            c = c + (tb_store[a][0] + ":" + tb_store[a][1] + lf),
            f = new cls_table("width=100% border=1");
        f.row();
        f.hed("Group Id:Group Name");
        f.hed("ยกมา");
        f.hed("รับเข้า");
        f.hed("ขาย");
        f.hed("แถม");
        f.hed("เหลือ");
        for (a = 0; a < tb_procat.length; a++) b = tb_procat[a][0] + ":" + tb_procat[a][1], f.row("align=right class=mov onclick=P6_1_22(" + a + ")"), f.col(b, "align=left"), f.col(""), f.col(""), f.col(""), f.col("0.00"), f.col("");
        c += f.htm() + lf;
        c += d + e + lf;
        set_txt("PAGE1", c)
    },
    P6_1_22 = function (a) {
        var c = "",
            b, d, e = bt_htm("ย้อนกลับ", "onclick=P6_1_2() ");
        void 0 == a && (a = cur.cat);
        cur.cat = a;
        var c = c + (p_head1("Stock Card") + lf),
            c = c + (e + lf),
            c = c + (tb_store[cur.sr][0] + ":" + tb_store[cur.sr][1] + lf),
            c = c + (tb_procat[a][0] +
                ":" + tb_procat[a][1] + lf),
            f = new cls_table("width=100% border=1");
        f.row();
        f.hed("Product Id:Product Name");
        f.hed("บรรจุ");
        f.hed("ยกมา");
        f.hed("รับเข้า");
        f.hed("ขาย");
        f.hed("แถม");
        f.hed("เหลือ");
        var g = tb_prod.a2d_find(tb_procat[a][0], 2);
        for (a = 0; a < g.length; a++) b = g[a][0] + ":" + g[a][3], d = g[a][4], f.row("align=right class=mov onclick=P6_1_222(" + a + ")"), f.col(b, "align=left"), f.col(d),
            f.col(""), f.col(""), f.col(""), f.col("0/0"), f.col("");
        c += f.htm() + lf;
        c += e + lf;
        set_txt("PAGE1", c)
    },
    P6_1_222 = function (a) {
        var c = "",
            b, d = bt_htm("ย้อนกลับ", "onclick=P6_1_22() ");
        void 0 == a && (a = cur.prod);
        cur.prod = a;
        b = tb_prod.a2d_find(tb_procat[cur.cat][0], 2);
        var c = c + (p_head1("Stock Card") + lf),
            c = c + (d + lf),
            c = c + (tb_store[cur.sr][0] + ":" + tb_store[cur.sr][1] + lf),
            c = c + (tb_procat[cur.cat][0] + ":" + tb_procat[cur.cat][1] + lf),
            c = c + (b[a][0] + ":" + b[a][3] + lf),
            e = new cls_table("width=100% border=1");
        e.row();
        e.hed("วันที่");
        e.hed("รับเข้า");
        e.hed("ขาย");
        e.hed("แถม");
        e.hed("เหลือ");
        b = stock_byday(b[a][0], tb_store[cur.sr][0]);
        for (a = 0; a < b.length; a++) e.row("align=right class=mov onclick=P6_1_2222('" + b[a][0] + "')"), e.col(b[a][0], "align=left"), e.col(b[a][1]), e.col(b[a][2]), e.col(""), e.col(b[a][3]);
        c += e.htm() + lf;
        c += d + lf;
        set_txt("PAGE1", c)
    },
    P6_1_2222 = function (a) {
        var c = "",
            b, d = bt_htm("ย้อนกลับ",
                "onclick=P6_1_222() ");
        void 0 == a && (a = cur.date);
        cur.date = a;
        var e = tb_prod.a2d_find(tb_procat[cur.cat][0], 2),
            c = c + (p_head1("Stock Card") + lf),
            c = c + (d + lf),
            c = c + (tb_store[cur.sr][0] + ":" + tb_store[cur.sr][1] + lf),
            c = c + (tb_procat[cur.cat][0] + ":" + tb_procat[cur.cat][1] + lf),
            c = c + (e[cur.prod][0] + ":" + e[cur.prod][3] + lf),
            c = c + (a + lf),
            e = new cls_table("width=100% border=1");
        e.row();
        e.hed("Doc");
        e.hed("เลขที่เอกสาร");
        e.hed("รับเข้า");
        e.hed("ขาย");
        e.hed("แถม");
        b = store_byday1(a);
        for (a = 0; a < b.length; a++) e.row("align=right"), e.col(b[a][0], "align=left"), e.col(b[a][1]), e.col(b[a][2]), e.col(b[a][3]), e.col(b[a][4]);
        c += e.htm() + lf;
        c += d + lf;
        set_txt("PAGE1", c)
    },
    us_sum_grp = function (a) {
        var c = yt2 = yt3 = yt4 = yt5 = 0,
            b, d = [],
            e = tb_stvan,
            f = get_mix_free(),
            g = get_mix_ord(),
            h = get_mix_f51(),
            m = get_mix_f52(),
            l = tb_prod.a2d_find(a, 2);
        for (a = 0; a < l.length; a++) b = e.a2d_find(l[a][0], 0), c += get_sum_per(b, 0, 1), b = g.a2d_find(l[a][0], 3), yt2 += get_sum_per(b,
            3, 4), b = h.a2d_find(l[a][0], 3), yt3 += get_sum_per(b, 3, 4), b = m.a2d_find(l[a][0], 3), yt4 += get_sum_per(b, 3, 4), b = f.a2d_find(l[a][0], 3), yt5 += get_sum_per(b, 3, 4);
        d.push(c);
        d.push(yt3);
        d.push(yt2 + yt4);
        d.push(yt5);
        d.push(c - yt2 + yt3 - yt4 - yt5);
        return d
    },
    us_getp = function (a) {
        var c = [],
            b = y2 = y3 = y4 = y5 = 0,
            b = tb_stvan,
            b = b.a2d_find(a, 0),
            b = get_sum_prod(b, 0, 1),
            d = get_mix_free(),
            d = d.a2d_find(a, 3);
        y5 = get_sum_prod(d, 3, 4);
        d = get_mix_ord();
        d = d.a2d_find(a, 3);
        y2 = get_sum_prod(d, 3, 4);
        d = get_mix_f51();
        d = d.a2d_find(a, 3);
        y3 = get_sum_prod(d, 3, 4);
        d = get_mix_f52();
        d = d.a2d_find(a, 3);
        y4 = get_sum_prod(d, 3, 4);
        c.push(set2tem(b, a));
        c.push(set2tem(y3, a));
        c.push(set2tem(y2 + y4, a));
        c.push(set2tem(y5, a));
        c.push(set2tem(b - y2 + y3 - y4 - y5, a));
        return c
    },
    us_byday = function (a) {
        var c = tb_stvan,
            c = c.a2d_find(a, 0),
            b = get_sum_prod(c, 0, 1),
            c = get_mix_free(),
            c = c.a2d_find(a, 3),
            d = get_mix_ord(),
            d = d.a2d_find(a, 3),
            e = get_mix_f51(),
            e = e.a2d_find(a, 3),
            f = get_mix_f52(),
            f = f.a2d_find(a, 3),
            g, h = [],
            m = [],
            l, n, p, q, r = 0;
        g = d.concat(e, f, c).a2d_dist(0, "s");
        h.push("ยกมา");
        h.push(set2tem(b,
            a));
        h.push("0/0");
        h.push("0/0");
        h.push(set2tem(b, a));
        m.push(h);
        r = b;
        for (b = 0; b < g.length; b++) h = [], l = d.a2d_find(g[b], 0), l = get_sum_prod(l, 3, 4), n = e.a2d_find(g[b], 0), n = get_sum_prod(n, 3, 4), p = f.a2d_find(g[b], 0), p = get_sum_prod(p, 3, 4), q = c.a2d_find(g[b], 0), q = get_sum_prod(q, 3, 4), r += n - p - l - q, h.push(g[b]), h.push(set2tem(n, a)), h.push(set2tem(l + p, a)), h.push(set2tem(q, a)), h.push(set2tem(r, a)), m.push(h);
        return m
    },
    us_byday1 = function (a) {
        var c = tb_prod.a2d_find(tb_procat[cur.cat][0], 2)[cur.prod][0],
            b = tb_stvan,
            b = b.a2d_find(c,
                0);
        get_sum_prod(b, 0, 1);
        var d = get_mix_free(),
            d = d.a2d_find(c, 3),
            e = get_mix_ord(),
            e = e.a2d_find(c, 3),
            f = get_mix_f51(),
            f = f.a2d_find(c, 3),
            g = get_mix_f52(),
            g = g.a2d_find(c, 3),
            b = [],
            h = [],
            m;
        m = e.a2d_find(a, 0);
        if (0 < m.length)
            for (e = 0; e < m.length; e++) b = [], b.push("25"), b.push(m[e][2]), b.push("0/0"), b.push(set2tem(m[e][4], c)), b.push("0/0"), h.push(b);
        f = f.a2d_find(a, 0);
        if (0 < f.length)
            for (e = 0; e < f.length; e++) b = [], b.push("51"), b.push(f[e][2]), b.push(set2tem(f[e][4], c)), b.push("0/0"), b.push("0/0"), h.push(b);
        g = g.a2d_find(a, 0);
        if (0 < g.length)
            for (e = 0; e < g.length; e++) b = [], b.push("52"), b.push(g[e][2]), b.push("0/0"), b.push(set2tem(g[e][4], c)), b.push("0/0"), h.push(b);
        a = d.a2d_find(a, 0);
        if (0 < a.length)
            for (e = 0; e < a.length; e++) b = [], b.push("25"), b.push(a[e][2]), b.push("0/0"), b.push("0/0"), b.push(set2tem(a[e][4], c)), h.push(b);
        return h
    },
    sr_sum_grp = function (a, c) {
        var b, d = yt2 = yt3 = yt4 = 0,
            e, f = [],
            g = tb_stsr.a2d_find(c, 0),
            h = get_mix_bt(),
            h = h.a2d_find(c, 1),
            m = get_mix_f51(),
            m = m.a2d_find(c, 1),
            l = get_mix_f52(),
            l = l.a2d_find(c, 1),
            n = tb_prod.a2d_find(a, 2);
        for (b = 0; b < n.length; b++) e = g.a2d_find(n[b][0], 1), d += get_sum_per(e, 1, 2), e = h.a2d_find(n[b][0], 3), yt2 += get_sum_per(e, 3, 4), e = m.a2d_find(n[b][0], 3), yt3 += get_sum_per(e, 3, 4), e = l.a2d_find(n[b][0], 3), yt4 += get_sum_per(e, 3, 4);
        f.push(d);
        f.push(yt2 + yt4);
        f.push(yt3);
        f.push(d + yt2 + yt4 - yt3);
        return f
    },
    stock_getp = function (a, c) {
        var b = [],
            d = y2 = y3 = y4 = y5 = 0,
            d = tb_stsr.a2d_find(c, 0),
            d = d.a2d_find(a, 1),
            d = get_sum_prod(d, 1, 2),
            e = get_mix_bt(),
            e = e.a2d_find(c, 1),
            e = e.a2d_find(a, 3);
        y2 = get_sum_prod(e, 3, 4);
        e = get_mix_f51();
        e = e.a2d_find(c,
            1);
        e = e.a2d_find(a, 3);
        y3 = get_sum_prod(e, 3, 4);
        e = get_mix_f52();
        e = e.a2d_find(c, 1);
        e = e.a2d_find(a, 3);
        y4 = get_sum_prod(e, 3, 4);
        b.push(set2tem(d, a));
        b.push(set2tem(y2 + y4, a));
        b.push(set2tem(y3, a));
        b.push(set2tem(d + y2 + y4 - y3, a));
        return b
    },
    stock_byday = function (a, c) {
        var b = tb_stsr.a2d_find(c, 0),
            b = b.a2d_find(a, 1),
            d = get_sum_prod(b, 1, 2),
            b = get_mix_bt(),
            b = b.a2d_find(c, 1),
            b = b.a2d_find(a, 3),
            e = get_mix_f51(),
            e = e.a2d_find(c, 1),
            e = e.a2d_find(a, 3),
            f = get_mix_f52(),
            f = f.a2d_find(c, 1),
            f = f.a2d_find(a, 3),
            g, h = [],
            m = [],
            l, n, p, q = 0;
        g = b.concat(e,
            f).a2d_dist(0, "s");
        h.push("ยกมา");
        h.push(set2tem(d, a));
        h.push("0/0");
        h.push(set2tem(d, a));
        m.push(h);
        q = d;
        for (d = 0; d < g.length; d++) h = [], l = b.a2d_find(g[d], 0), l = get_sum_prod(l, 3, 4), n = e.a2d_find(g[d], 0), n = get_sum_prod(n, 3, 4), p = f.a2d_find(g[d], 0), p = get_sum_prod(p, 3, 4), q += l + p - n, h.push(g[d]), h.push(set2tem(l + p, a)), h.push(set2tem(n, a)), h.push(set2tem(q, a)), m.push(h);
        return m
    },
    store_byday1 = function (a) {
        var c = tb_prod.a2d_find(tb_procat[cur.cat][0], 2)[cur.prod][0],
            b = tb_store[cur.sr][0],
            d = tb_stvan,
            d = d.a2d_find(c, 0);
        get_sum_prod(d, 0, 1);
        var e = get_mix_bt(),
            e = e.a2d_find(b, 1),
            e = e.a2d_find(c, 3),
            f = get_mix_f51(),
            f = f.a2d_find(b, 1),
            f = f.a2d_find(c, 3),
            d = get_mix_f52(),
            d = d.a2d_find(b, 1),
            d = d.a2d_find(c, 3),
            b = [],
            g = [],
            h;
        h = e.a2d_find(a, 0);
        if (0 < h.length)
            for (e = 0; e < h.length; e++) b = [], b.push("T"), b.push(h[e][2]), b.push(set2tem(h[e][4], c)), b.push("0/0"), b.push("0/0"), g.push(b);
        f = f.a2d_find(a, 0);
        if (0 < f.length)
            for (e = 0; e < f.length; e++) b = [], b.push("51"), b.push(f[e][2]), b.push("0/0"), b.push(set2tem(f[e][4], c)), b.push("0/0"),
                g.push(b);
        a = d.a2d_find(a, 0);
        if (0 < a.length)
            for (e = 0; e < a.length; e++) b = [], b.push("52"), b.push(a[e][2]), b.push(set2tem(a[e][4], c)), b.push("0/0"), b.push("0/0"), g.push(b);
        return g
    },
    range_only = function (a, c) {
        var b, d = [],
            e = tb_v71[0].toString(),
            e = e.replace(/-/g, "/"),
            f = tb_v71[1].toString(),
            f = f.replace(/-/g, "/");
        for (b = 0; b < a.length; b++) tmp = a[b][c].toString(), e <= tmp && tmp <= f && d.push(a[b]);
        return d
    },
    get_mix_f51 = function () {
        var a, c, b = [],
            d, e, f = range_only(tb_f51sav, 3),
            f = f.a2d_find("C", 17);
        if (0 < f.length)
            for (a = 0; a < f.length; a++) c = [], d = f[a][8], e = f[a][9], d = tem2set(d + "/" + e, f[a][6]), c.push(f[a][3]), c.push(f[a][5]), c.push(f[a][2]), c.push(f[a][6]), c.push(d), b.push(c);
        return b
    },
    get_mix_f52 = function () {
        var a, c, b = [],
            d, e, f = range_only(tb_f52sav, 3),
            f = f.a2d_find("C", 17);
        if (0 < f.length)
            for (a = 0; a < f.length; a++) c = [], d = f[a][8], e = f[a][9], d = tem2set(d + "/" + e, f[a][6]), c.push(f[a][3]), c.push(f[a][5]), c.push(f[a][2]), c.push(f[a][6]), c.push(d), b.push(c);
        return b
    },
    get_mix_ord = function () {
        var a, c, b = [],
            d, e, f = range_only(tb_ordersav, 3),
            f = f.a2d_find("", 17),
            f = f.a2d_find("", 7);
        if (0 < f.length)
            for (a = 0; a < f.length; a++) c = [], d = f[a][8], e = f[a][9], d = tem2set(d + "/" + e, f[a][6]), c.push(f[a][3]), c.push(f[a][5]), c.push(f[a][2]), c.push(f[a][6]), c.push(d), b.push(c);
        return b
    },
    get_mix_free = function () {
        var a, c, b = [],
            d, e, f = range_only(tb_ordersav, 3),
            f = f.a2d_find("", 17),
            f = f.a2d_findnot("", 7);
        if (0 < f.length)
            for (a = 0; a < f.length; a++) c = [], d = f[a][8], e = f[a][9], d = tem2set(d + "/" + e, f[a][6]), c.push(f[a][3]), c.push(f[a][5]), c.push(f[a][2]), c.push(f[a][6]), c.push(d), b.push(c);
        return b
    },
    get_mix_bt =
        function () {
            var a, c, b = [],
                d = range_only(tb_billtsav, 4);
            if (0 < d.length)
                for (a = 0; a < d.length; a++) c = [], c.push(d[a][4]), c.push(d[a][1]), c.push(d[a][0]), c.push(d[a][2]), c.push(d[a][3]), b.push(c);
            return b
        },
    get_sum_per = function (a, c, b) {
        var d = 0;
        0 < a.length && (b = a.a2d_sumfil(b), a = a[0][c], d = tem2per(set2tem(b, a), a));
        return Number(d)
    },
    get_sum_prod = function (a, c, b) {
        c = 0;
        0 < a.length && (c = a.a2d_sumfil(b));
        return Number(c)
    },
    P6_PRNVAN = function () {
        var a, c = "",
            b, d, e, f, g, h, m = 0,
            l = 1,
            n = new Date,
            p = tb_v71[0][0],
            p = p.replace(/-/g, "/"),
            q =
                txtbox("บริษัท สหพัฒนพิบูล จำกัด (มหาชน)", 135, "c") + "\n",
            r = txtbox("ใบแจ้งคืนสินค้าสำรองหน่วยรถ (Form54)", 125, "c") + txtbox("Page ", 7, "r"),
            u = "พนักงานขาย " + tb_sale[0][0] + " " + tb_sale[0][1] +
                txtdup(" ", 5) + "วันที่ " + n.get_date() + txtdup(" ", 5) + "GD.FROM" + txtdup("_", 10) + txtdup(" ", 5) + "GD.TO" + txtdup("_", 10) + "\n",
            u = u + ("รหัสหน่วย 0" + txtbox("โดยขนส่ง", 120, "c") + "\n"),
            u = u + ("|" + txtdup("-", 117) + "|\n"),
            u = u + ("|" + txtbox("ลำดับ", 5, "c") + "|" + txtbox("รหัส", 10, "c") + "|" + txtbox("ชื่อสินค้า", 43, "c") +
                "|" + txtbox("จำนวนสินค้าที่แจ้ง", 18, "c") + "|" + txtbox("สินค้าที่เสียหาย", 18, "c") + "|" + txtbox("จำนวนสินค้าที่รับคืน", 18, "c") + "|\n"),
            u = u + ("|" + txtbox("", 5, "c") + "|" + txtbox("", 10, "c") + "|" + txtbox("", 43, "c") + "|" + txtbox("เต็ม/เศษ",
                11, "c") + "|" + txtbox("หน่วย", 6, "c") + "|" + txtbox("เต็ม/เศษ", 11, "c") + "|" + txtbox("หน่วย", 6, "c") + "|" + txtbox("เต็ม/เศษ", 11, "c") + "|" + txtbox("หน่วย", 6, "c") + "|\n"),
            u = u + ("|" + txtdup("-", 117) + "|\n");
        for (a = 0; a < tb_prod.length; a++)
            if (b = tb_prod[a][0], d = get_curvan(b), e = get_curoa(p, n.get_date(), b), f = get_cur51(p, n.get_date(), b, ""), g = get_cur52(p, n.get_date(), b, ""), h = d + f - e - g, 0 !=
                d || 0 != e || 0 != f || 0 != g) 0 == m % 55 && (1 < l && (c += "|" + txtdup("-", 117) + "|\n\n\n"), c += q, c += r + l + "\n", c += u, l++), c += "|" + txtbox(1 + m + " ", 5, "r") + "|" + txtbox(b, 10, "r") + "|" + txtbox(tb_prod[a][3], 43, "l") + "|" + txtbox(set2tem(h, b), 11, "c") + "|" + txtbox(tb_prod[a][4], 6, "r") + "|" + txtbox("", 11, "c") + "|" + txtbox(tb_prod[a][4], 6, "r") + "|" + txtbox("", 11, "c") + "|" + txtbox(tb_prod[a][4], 6, "r") + "|\n", m++;
        c += "|" + txtdup("-", 117) + "|\n";
        localStorage.van_print = c;
        pttr(c);
        alert("เตรียมข้อมูลเรียบร้อยแล้ว")
    },
    P6_PRNSR = function () {
        var a, c = "",
            b, d, e, f, g, h, m, l, n = 0,
            p = 1,
            q = new Date,
            r = tb_v71[0][0],
            r = r.replace(/-/g, "/"),
            u = tb_store[cur.sr][0],
            y = tb_store[cur.sr][1],
            z = txtbox("บริษัท สหพัฒนพิบูล จำกัด (มหาชน)", 135, "c") + "\n",
            C = txtbox("ใบปิดสรุปสต็อกสินค้า สร. F-STK-002-19/07/1999",
                125, "c") + txtbox("Page ", 7, "r"),
            B = "วันที่ " + q.get_date() + txtdup(" ", 5) + "รหัสสร. " + u + " " + y + txtdup(" ", 5) + "พนักงานขาย " + tb_sale[0][0] + " " + tb_sale[0][1] + "\n",
            B = B + ("|" + txtdup("-", 133) + "|\n"),
            B = B + ("|" + txtbox("ลำดับ", 4, "c") + "|" + txtbox("รหัส", 8, "c") + "|" + txtbox("ชื่อสินค้า", 30, "c") + "|" + txtbox("ขนาด",
                5, "c") + "|" + txtbox("คงเหลือ", 8, "c") + "|" + txtbox("สด.ส่ง", 8, "c") + "|" + txtbox("รับคืนจาก", 8, "c") + "|" + txtbox("รับโอนสด", 8, "c") + "|" + txtbox("หน่วยคืน", 8, "c") + "|" + txtbox("หน่วยเบิก", 8, "c") + "|" + txtbox("รวม สด.", 8, "c") + "|" + txtbox("รายการ",
                    9, "c") + "|" + txtbox("คงเหลือ", 9, "c") + "|\n"),
            B = B + ("|" + txtbox("", 4, "c") + "|" + txtbox("", 8, "c") + "|" + txtbox("", 30, "c") + "|" + txtbox("บรรจุ", 5, "c") + "|" + txtbox("ยกมา", 8, "c") + "|" + txtbox("จากบริษัท", 8, "c") + "|" + txtbox("ร้านค้า", 8, "c") + "|" + txtbox("จาก CR.", 8, "c") + "|" + txtbox("สด.เข้าสร.", 8, "c") + "|" + txtbox("สด.จากสร.",
                8, "c") + "|" + txtbox("ใน สร.", 8, "c") + "|" + txtbox("ปรับปรุง", 9, "c") + "|" + txtbox("ฝากหลังปป", 9, "c") + "|\n"),
            B = B + ("|" + txtdup("-", 133) + "|\n");
        for (a = 0; a < tb_prod.length; a++)
            if (b = tb_prod[a][0], d = get_cursr(b, u), e = get_curt(r, q.get_date(), b, u), f = get_cur51(r, q.get_date(), b, u), g = get_cur52(r, q.get_date(), b, u), m = get_cur51b(r, q.get_date(), b, u), l = get_cur52b(r, q.get_date(), b, u), h = d - f + g + e - m + l, 0 != d || 0 != e || 0 != f || 0 != g ||
                0 != m || 0 != l) 0 == n % 56 && (1 < p && (c += "|" + txtdup("-", 133) + "|\n\n\n"), c += z, c += C + p + "\n", c += B, p++), c += "|" + txtbox(1 + n + " ", 4, "r") + "|" + txtbox(b, 8, "r") + "|" + txtbox(tb_prod[a][3], 30, "l") + "|" + txtbox(tb_prod[a][4], 5, "r") + "|" + txtbox(set2tem(d, b), 8, "c") + "|" + txtbox(set2tem(e, b), 8, "c") + "|" + txtbox("", 8, "c") + "|" + txtbox("", 8, "c") + "|" + txtbox(set2tem(g + l, b), 8, "c") + "|" + txtbox(set2tem(f + m, b), 8, "c") + "|" + txtbox(set2tem(h, b), 8, "c") + "|" + txtbox("", 9, "c") + "|" + txtbox("", 9, "c") + "|\n", n++;
        c += "|" + txtdup("-", 133) + "|\n";
        c += txtdup(" ", 10) +
            "รหัสสร. " + u + " " + y + txtdup(" ", 5) + "พนักงานขาย " + tb_sale[0][0] + " " + tb_sale[0][1] + txtdup(" ", 5) + "วันที่ ____/____/____ ถึง ____/____/____\n\n";
        c += txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_", 20) + "\n";
        c += txtdup(" ", 10) + txtbox("พนักงานขาย", 20, "c") + txtdup(" ", 10) +
            txtbox("ตัวแทน สร.", 20, "c") + txtdup(" ", 10) + txtbox("ผู้ตรวจสอบ", 20, "c") + txtdup(" ", 10) + txtbox("สต็อก", 20, "c") + "\n";
        c += txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____", 20, "c") + txtdup(" ", 10) + txtbox("วันที่____/____/____",
            20, "c") + "\n";
        localStorage.van_print = c;
        pttr(c);
        alert("เตรียมข้อมูลเรียบร้อยแล้ว")
    },
    P7_M = function () {
        set_txt("PAGE1", get_txt("P7_M"));
        get_el("btn1").onclick = function () {
            P7_1()
        };
        get_el("btn2").onclick = function () {
            P7_2()
        };
        get_el("btn3").onclick = function () {
            P7_3()
        };
        get_el("btn4").onclick = function () {
            P7_4()
        };
        get_el("btn5").onclick = function () {
            P7_5()
        };
        get_el("btn7").onclick = function () {
            P7_6()
        };
        get_el("btn6").onclick = function () {
            page0()
        }
    },
    P7_1 = function () {
        var a = "",
            c = "";
        set_txt("PAGE1", get_txt("tp_flist"));
        set_txt("m_head", "Setup วันเริ่ม - สิ้นสุด Trip");
        var b = bt_htm("ย้อนกลับ", "onclick='P7_M()'"),
            d = bt_htm("ตั้งค่า", "id='btnset'");
        void 0 != localStorage.van_v71 && "" != localStorage.van_v71 && (tb_v71 = chk_imp(localStorage.van_v71, 1, ","), a = tb_v71[0],
            c = tb_v71[1]);
        var e = new cls_table;
        e.row();
        e.col("วันเริ่มต้น", "align='right'");
        e.col("<input type='date' id='date1' value='" + a + "'>");
        e.row();
        e.col("วันสิ้นสุด", "align='right'");
        e.col("<input type='date' id='date2' value='" + c + "'>");
        set_txt("tbl1", e.htm());
        set_txt("mbtn1", b + d);
        get_el("btnset").onclick = function () {
            var a, b, c = [];
            a = get_elval("date1");
            b = get_elval("date2");
            c.push(a);
            c.push(b);
            localStorage.van_v71 =
                c.toString();
            tb_v71 = chk_imp(localStorage.van_v71, 1, ",");
            del_data(30);
            P7_M()
        }
    },
    P7_2 = function () {
        set_txt("PAGE1", get_txt("tp_flist"));
        set_txt("m_head", "Setup_Trip_การขาย");
        var a = bt_htm("ย้อนกลับ", "onclick='P7_M()'"),
            c = bt_htm("เพิ่ม", "onclick='P7_2_ADD()'"),
            b = new cls_table("width='100%' border='1'");
        b.row();
        b.hed("ชื่อ");
        b.hed("จาก");
        b.hed("ถึง");
        b.hed("F");
        for (i = 0; i < tb_v72.length; i++) b.row("class='mov' onclick='P7_2_ADD(" + i + ")' align='center'"), b.col(tb_v72[i][0]), b.col(tb_v72[i][1]), b.col(tb_v72[i][2]), b.col(tb_v72[i][3]);
        set_txt("tbl1", b.htm());
        set_txt("mbtn1", a + c)
    },
    P7_2_ADD = function (a) {
        var c = "",
            b, d, e, f, g;
        void 0 != a && (b = tb_v72[a][0], d = tb_v72[a][1], e = tb_v72[a][2], f = tb_v72[a][3]);
        d = 0 != d ? d : "";
        e = 0 != e ? e : "";
        f = inp_htm("id='ck1' type='checkbox' " + ("Y" == f ? "checked" : ""));
        var h = tb_store.a2d_dist(0, "s");
        h.unshift("-สร-");
        b = opt_htm("id='sr'", h, b);
        h = [];
        h.push("-เริ่ม-");
        for (g = 1; 32 > g; g++) h.push(g);
        d = opt_htm("id='d1'", h, d);
        h = [];
        h.push("-สิ้นสุด-");
        for (g = 1; 32 > g; g++) h.push(g);
        e = opt_htm("id='d2'", h, e);
        h = bt_htm("ย้อนกลับ", "onclick='P7_2()'");
        g = bt_htm("บันทึก", "id='72save'");
        var m = bt_htm("ลบ", "id='72del'"),
            c = c + ("<input type='hidden' id='xx' value='" + a + "'>") + "<table width='100%'>",
            c = c + "<tr class='head'><th>Edit Trip การขาย</th></tr>",
            c = c + "</table>",
            c = c + ("สร." + b + " วันที่ " + d + " วันที่ " + e + f + " ทำ stock<br>"),
            c = c + (h + g);
        void 0 != a && (c += m);
        set_txt("PAGE1", c);
        void 0 != a && (get_el("72del").onclick = function () {
            var a = get_elval("xx");
            0 == isNaN(a) && (tb_v72.a2d_delline(a), localStorage.van_v72 = tb_v72.a2d_exp(), P7_2())
        });
        get_el("72save").onclick = function () {
            var a, b, c, d, e;
            e = get_elval("xx");
            a = get_elval("sr");
            b = Number(get_elval("d1"));
            c = Number(get_elval("d2"));
            if ("-สร-" ==
                a) alert("ยังไม่ได้เลือก สร.");
            else if (isNaN(b)) alert("ยังไม่ได้เลือกวัน");
            else if (isNaN(c)) alert("ยังไม่ได้เลือกวัน");
            else if (b > c) alert("วันเริ่ม > วันสิ้นสุด");
            else {
                for (d = 0; d < tb_v72.length; d++) {
                    if (b >= tb_v72[d][1] && b <= tb_v72[d][2]) {
                        alert("ช่วงซ้ำ");
                        alert(b + " " + tb_v72[d][1]);
                        return
                    }
                    if (c >= tb_v72[d][1] && c <= tb_v72[d][2]) {
                        alert("ช่วงซ้ำ");
                        alert(c + " " + tb_v72[d][1]);
                        return
                    }
                }
                d = get_elchk("ck1");
                a = a + "," + b + "," + c + "," + (1 == d ? "Y" : "");
                isNaN(e) ? tb_v72.a2d_addline(a) : tb_v72.a2d_setline(e, a);
                localStorage.van_v72 = tb_v72.a2d_exp();
                P7_2()
            }
        }
    },
    P7_3 = function () {
        var a, c, b = "";
        a = new Date;
        var d = bt_htm("ย้อนกลับ",
            "onclick='P7_M()'"),
            e = bt_htm("UpStock", "id='btup'"),
            b = b + p_head1("Update Stock รถจาก HO"),
            b = b + (d + e);
        c = new cls_table("width='100%'");
        c.row();
        c.col("Doc. Code : 00");
        c.col(cur.sales);
        c.col(a.get_date());
        var b = b + c.htm(),
            f = new cls_table("width='100%' border='1'");
        f.row();
        f.hed("รหัส");
        f.hed("ชื่อ");
        f.hed("จำนวน");
        for (a = 0; a < tb_vanin.length; a++) c = tb_prod.a2d_find(tb_vanin[a][0], 0), f.row(), f.col(c[0][0]), f.col(c[0][3]),
            f.col(set2tem(tb_vanin[a][1], c[0][0]), "align='center'");
        b += f.htm();
        b += "Rec:" + tb_vanin.length + "<br>";
        set_txt("PAGE1", b + (d + e));
        get_el("btup").onclick = function () {
            tb_stvan = tb_vanin;
            localStorage.van_stvan = tb_stvan.a2d_exp();
            P7_M()
        }
    },
    P7_4 = function () {
        var a, c = "",
            b = bt_htm("ย้อนกลับ", "onclick='P7_M()'"),
            d = tb_srin.a2d_dist(0, "s"),
            c = c + p_head1("Update Stock สร.จาก HO"),
            c = c + "Doc. Code : 00 ",
            e = new cls_table("width='100%' border='1'");
        e.row();
        e.hed("ชื่อสร.");
        e.hed("วันที่");
        e.hed("Flag");
        for (a = 0; a < d.length; a++) e.row("class='mov' onclick=\"P7_4det('" + d[a] + "')\""), e.col(d[a]), e.col(""), e.col("");
        c += e.htm();
        c += "Rec:" + d.length + "<br>";
        set_txt("PAGE1", c + b)
    },
    P7_4det = function (a) {
        var c = "",
            b;
        b = new Date;
        var d = bt_htm("ย้อนกลับ", "onclick='P7_4()'"),
            e = bt_htm("UpStock", "id='btup'"),
            f = bt_htm("UpStock", "id='btup1'"),
            g = tb_srin.a2d_find(a, 0),
            c = c + p_head1("Update Stock สร.จาก HO"),
            c = c + (d + e),
            e = new cls_table("width='100%'");
        e.row();
        e.col("Doc. Code : 00");
        e.col(a);
        e.col(b.get_date());
        c += e.htm();
        e = new cls_table("width='100%' border='1'");
        e.row();
        e.hed("รหัส");
        e.hed("ชื่อ");
        e.hed("จำนวน");
        for (a = 0; a < g.length; a++) b = tb_prod.a2d_find(g[a][1], 0), e.row(), e.col(b[0][0]), e.col(b[0][3]), e.col(set2tem(g[a][2], g[a][1]), "align='center'");
        c += e.htm();
        c += "Rec:" + g.length + "<br>";
        set_txt("PAGE1", c + (d + f));
        get_el("btup").onclick = function () {
            tb_stsr =
                tb_srin;
            localStorage.van_stsr = tb_stsr.a2d_exp();
            P7_M()
        };
        get_el("btup1").onclick = function () {
            tb_stsr = tb_srin;
            localStorage.van_stsr = tb_stsr.a2d_exp();
            P7_M()
        }
    },
    P7_5 = function () {
        cur.pg = 75;
        var a = "",
            c = bt_htm("ย้อนกลับ", "onclick='P7_M()'"),
            b = bt_htm("บันทึก", "id='btsav'"),
            d = tb_store.a2d_dist(0, "s");
        d.unshift("Van");
        d.unshift("-เลือก-");
        d = opt_htm("id='opt1'", d);
        a += p_head1("ปรับค่ายอดยกมา");
        a += c + b + lf;
        a += d + lf;
        a += "<div id='opt2'></div><div id='tbl1'></div>";
        a += c + lf;
        set_txt("PAGE1", a);
        get_el("btsav").onclick = function () {
            var a, b, c, d;
            a = get_elval("opt1");
            if ("-เลือก-" !== a) {
                "Van" == a ? tb_stvan = [] : tb_stsr.a2d_finddel(a, 0);
                for (b = 0; b < uinp.length; b++) c = uinp[b][0], d = uinp[b][1], 0 == c && 0 == d || gen_stsr(a, tb_prod[b][0], c + "/" + d);
                "Van" == a ? localStorage.van_stvan = tb_stvan.a2d_exp() : localStorage.van_stsr = tb_stsr.a2d_exp()
            }
            P7_M()
        };
        get_el("opt1").onchange = function () {
            var a, b;
            b = "";
            var c;
            set_txt("opt2",
                "");
            set_txt("tbl1", "");
            a = get_elval("opt1");
            clr_uinp();
            if ("-เลือก-" != a) {
                if ("Van" == a)
                    for (c = 0; c < tb_stvan.length; c++) put_uinp1(tb_stvan[c][1], tb_stvan[c][0]);
                else
                    for (a = tb_stsr.a2d_find(a, 0), c = 0; c < a.length; c++) put_uinp1(a[c][2], a[c][1]);
                b += "กลุ่ม" + lf;
                b += "<select class='sfw' id='pcat'><option value=''>-Selected-</option><option value='All'>All</option><option value='View'>View</option></select>" + lf;
                set_txt("opt2", b);
                cur.btype = 1;
                a = tb_procat.a2d_getfil(1);
                b = get_el("pcat");
                for (c = 0; c < a.length; c++) option = document.createElement("option"), option.text = a[c], b.add(option, null);
                set_elval("pcat", "View");
                P1_SEL_3_A_1C();
                b.onchange = function () {
                    P1_SEL_3_A_1C()
                }
            }
        }
    },
    P17_5 = function () {
        cur.pg = 75;
        var a = "",
            c = bt_htm("ย้อนกลับ", "onclick='P1_SEL()'"),
            b = bt_htm("บันทึก", "id='btsav'"),
            d = [];
        d.unshift("Van");
        d.unshift("-เลือก-");
        d = opt_htm("id='opt1'", d);
        a += p_head1("ปรับตั้งเป้าหมาย");
        a += c + b + lf;
        a += d + lf;
        a += "<div id='opt2'></div><div id='tbl1'></div>";
        a += c + lf;
        set_txt("PAGE1", a);
        get_el("btsav").onclick = function () {
            var a, b, c;
            a = get_elval("opt1");
            if ("-เลือก-" !== a)
                for ("Van" == a && (tb_stvan = []), a = 0; a < uinp.length; a++) b = uinp[a][0], c = uinp[a][1], 0 == b && 0 == c || loadTxtDoc1(lnk4, "salesman_code=" + cur.sales + "&customer_code=" + tb_custo[cur.custo][2] + "&product_code=" + tb_prod[a][0] + "&quantity_pack=" + b + "&quantity_scrap=" + c);
            P1_SEL()
        };
        get_el("opt1").onchange = function () {
            var a, b;
            b =
                "";
            var c;
            set_txt("opt2", "");
            set_txt("tbl1", "");
            a = get_elval("opt1");
            clr_uinp();
            if ("-เลือก-" != a) {
                if ("Van" != a)
                    for (a = tb_stsr.a2d_find(a, 0), c = 0; c < a.length; c++) put_uinp1(a[c][2], a[c][1]);
                b += "กลุ่ม" + lf;
                b += "<select class='sfw' id='pcat'><option value=''>-Selected-</option><option value='All'>All</option><option value='View'>View</option></select>" + lf;
                set_txt("opt2", b);
                cur.btype = 1;
                a = tb_procat.a2d_getfil(1);
                b = get_el("pcat");
                for (c = 0; c < a.length; c++) option = document.createElement("option"),
                    option.text = a[c], b.add(option, null);
                set_elval("pcat", "View");
                P1_SEL_3_A_1C();
                b.onchange = function () {
                    P1_SEL_3_A_1C()
                }
            }
        }
    },
    gen_stsr = function (a, c, b) {
        var d = [];
        b = tem2set(b, c);
        d.push(c);
        d.push(b);
        "Van" == a ? tb_stvan.push(d) : (d.unshift(a), tb_stsr.push(d))
    },
    P8_M = function () {
        var a = "",
            c;
        c = bt_htm("1.Customer", "class='a100' onclick='P8_1()'");
        var b = bt_htm("2.Product&Promotion", "class='a100' onclick='P8_2()'"),
            d = bt_htm("3.ระบุประเภทอุปกรณ์",
                "class='a100' onclick='P8_3()'"),
            e = bt_htm("Back", "onclick='page0()'"),
            f = new cls_table("width='100%'");
        f.row();
        f.hed("Master Maintenance");
        f.row();
        f.col(c);
        f.row();
        f.col(b);
        f.row();
        f.col(d);
        f.row();
        f.col(e);
        a += f.htm();
        b = [];
        for (c = 0; 10 > c; c++) b.push(c);
        a += opt_htm("id='ab'", b);
        set_txt("PAGE1", a)
    },
    P8_1 = function () {
        var a = "",
            c = new cls_table("width='100%'");
        c.row("id='head'");
        c.hed("Customer", "width='1%'");
        c.col("");
        a += c.htm();
        set_txt("PAGE1", a);
        c = [];
        c.a2d_imp("1,2,3,4,5,6,7,8", 2, ",");
        var b, d, a = "";
        c.a2d_delline(1);
        c.a2d_addline("9,0");
        for (b = 0; b < c.length; b++) {
            for (d = 0; d < c[0].length; d++) a += c[b][d] + ",";
            a += "<br>"
        }
        set_txt("PAGE1", a);
        alert(c.a2d_exp());
        a = [];
        a.a2d_imp("1,2,3,4,5,6,7,8", 2, ",");
        alert(a.a2d_findnot("5", 0));
        alert(a.a2d_exp())
    },
    P8_2 = function () {
        var a = "",
            c = new cls_table("width='100%'");
        c.row("id='head'");
        c.hed("Product&Promotion", "width='1%'");
        c.col("");
        a += c.htm();
        set_txt("PAGE1", a)
    },
    P8_3 = function () {
        var a = [],
            c = "",
            b = new cls_table("width='100%'");
        b.row("id='head'");
        b.hed("ระบุประเภทอุปกรณ์",
            "width='1%'");
        b.col("");
        c += b.htm();
        b = new cls_table("width='100%' name='t1'");
        b.row();
        b.col("1", "onclick='TP8_31(this)'");
        b.col("2", "onclick='TP8_31(this)'");
        b.row();
        b.col("3", "onclick='TP8_31(this)'");
        b.col("4", "onclick='TP8_31(this)'");
        c += b.htm();
        a.push("Printer1");
        a.push("Printer2");
        c += minp_htm(htm_radio + "name='ra1'", a, "Printer2");
        c += bt_htm("Save", "onclick='TP8_3()'");
        set_txt("PAGE1", c)
    },
    TP8_3 = function () {
        var a, c;
        c = minp_get("ra1");
        for (a = 0; a < c.length; a++) alert(c[a].value + "," + c[a].checked + ":");
        c = minp_get_chk("ra1");
        for (a = 0; a < c.length; a++) alert(c[a]);
        var b = document.getElementsByName("t1"),
            d = b[0].rows.length,
            e = b[0].rows[0].cells.length;
        for (a = 0; a < d; a++)
            for (c = 0; c < e; c++) alert(b[0].rows[a].cells[c].textContent)
    },
    TP8_31 = function (a) {
        alert(a.innerText)
    },
    P9_M = function () {
        var a = bt_htm("ยืนยัน", "id=btn1"),
            c = bt_htm("ยกเลิก", "id=btn2"),
            b;
        b = "ลบข้อมูลให้เหลือ 30 วันย้อนหลัง?" +
            lf;
        b += "ใส่คำว่า 'clear30'<input type=text id=txt1>" + lf;
        set_txt("PAGE1", b + (a + c));
        get_el("btn2").onclick = function () {
            page0()
        };
        get_el("btn1").onclick = function () {
            var a = get_elval("txt1"),
                a = a.toUpperCase();
            "CLEAR30" == a && (del_data(30), alert("Done"));
            page0()
        }
    };

function getLocation() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition, showError) : (cur.lat = 0, cur.lng = 0, tb_locsav.a2d_addline(cur.ordno + "," + tb_custo[cur.custo][2] + "," + cur.lat + "," + cur.lng + ","), localStorage.van_locsav = tb_locsav.a2d_exp())
}

function showPosition(a) {
    cur.lat = a.coords.latitude;
    cur.lng = a.coords.longitude;
    tb_locsav.a2d_addline(cur.ordno + "," + tb_custo[cur.custo][2] + "," + cur.lat + "," + cur.lng + ",");
    localStorage.van_locsav = tb_locsav.a2d_exp()
}

function showError(a) {
    cur.lat = 0;
    cur.lng = 0;
    tb_locsav.a2d_addline(cur.ordno + "," + tb_custo[cur.custo][2] + "," + cur.lat + "," + cur.lng + ",");
    localStorage.van_locsav = tb_locsav.a2d_exp()
}
var addcus2 = function () {
    getLocation();
    window.open("map.php?x1=" + cur.lat + "&y1=" + cur.lng + "&x2=" + cur.lat + "&y2=" + cur.lng)
},
    donext = function () {
        ady = new Date;
        var a = loadTxtDoc("loadnewcus.asp?getsales=" + cur.sales),
            c = [],
            b = [];
        alert('tripseq : ' + localStorage.van_cust1);
        if ("" != a) {
            c.a2d_imp(a, 9, "|");
            tmp2 = ady.getDate();
            tmp3 = 1 * localStorage.van_cust1;
            for (i = 0; i < oplist1.length; i++) b.push(oplist1[i]);
            oplist1 = [];
            for (i = 0; i < b.length; i++) i == tmp3 && oplist1.push(c[0][0] + " " + c[0][2] + " " + c[0][3]), oplist1.push(b[i]);
            tb_custo = tb_custo.concat(c);
            localStorage.van_custo = tb_custo.a2d_exp()
        }
        loadTxtDoc("killnewcus.asp?getsales=" +
            cur.sales);
        set_txt("btn5", "");
        alert("Done");
        P1_M()
    },
    oplist = [],
    oplist1 = [],
    P7_6 = function () {
        opt_t = [];
        var a = "";
        ady = new Date;
        var c = bt_htm("ล้าง", "id=btn1"),
            b = bt_htm("ค่าเริ่มต้น", "id=btn2"),
            d = bt_htm("เพิ่ม", "id=btn3");
        bt_htm("บันทึกชั่วคราว", "id=btn4");
        var e = bt_htm("ออก", "id=btn5");
        bt_htm("บันทึกถาวร",
            "id=btn6");
        var f = bt_htm("ค่าเริ่มต้น-", "id=btn7"),
            g = new cls_table("width='100%'");
        g.row("id='head'");
        g.hed("Today_Trip_" + ady.getDate(), "width='1%'");
        g.col("");
        a += g.htm();
        a += "<div id='cusl1'></div><div id='cusamp'></div><div id='cusl2'></div>";
        a += c + b + f + d + e;

        opt_amphur = [];
        opt_amphur.push("-เลือกอำเภอ-");
        var vanamp = localStorage.van_amph;
        var vanamp = vanamp.split(',');
        while (vanamp[0]) {
            $result = (vanamp.splice(0, 2));
            opt_amphur.push($result[0] + ' ' + $result[1]);
        }

        //opt_amphur.push("-เลือกอำเภอ-");
        var cusamp = opt_htm("class='sfw' id='cusamphur'", opt_amphur);

        opt_t.push("-Selected-");
        for (o = 1; 31 > o; o++)
            for (c = loadTxtDoc1(lnk1, "salesman_code=" + cur.sales + "&trip_no=" + o), c = JSON.parse(c), i = 0; i < c.length; i++) t = o + " " + c[i].customer_code + " " + c[i].customer_name, opt_t.push(t);

        // test for select by amphur
        //for (c = loadTxtDoc1(lnk8, "salesman_code=" + cur.sales + "&amphur_code=2210"), c = JSON.parse(c), i = 0; i < c.length; i++) t = c[i].trip_no + " " + c[i].customer_code + " " + c[i].customer_name, opt_t.push(t);

        c = opt_htm("class='sfw' id='custo'",
            opt_t);

        set_txt("PAGE1", a);
        set_txt("cusamp", cusamp);
        set_txt("cusl2", c);

        t = "";
        for (i = 0; i < oplist1.length; i++) t += 1 + i + "." + oplist1[i] + "<br>";
        set_txt("cusl1", t);
        get_el("btn1").onclick = function () {
            oplist1 = [];
            set_txt("cusl1", "");
            localStorage.van_cust1 = 0
        };
        get_el("btn2").onclick = function () {
            ldf();
            //alert('ค่าเริ่มต้น');
            localStorage.van_cust1 = 0;
            t = "";
            for (i = 0; i < oplist1.length; i++) t += 1 + i + "." + oplist1[i] + "<br>";
            // oplist1 customer ตามทริป 
            /*alert(t)
            alert(localStorage.van_cust1);*/
            set_txt("cusl1", t)
        };
        get_el("btn7").onclick = function () {
            ldf2();
            localStorage.van_cust1 = 0;
            t = "";
            for (i = 0; i < oplist1.length; i++) t += 1 + i + "." + oplist1[i] + "<br>";
            set_txt("cusl1",
                t)
        };
        get_el("btn3").onclick = function () {
            ttco = get_elval("custo");
            if ("-Selected-" != ttco) {
                for (i = k = 0; i < oplist1.length; i++)
                    if (ttco == oplist1[i]) {
                        k = 1;
                        break
                    }
                if (1 == k) return alert("ซ้ำ"), 0;
                oplist1.push(ttco);
                t = "";
                for (i = 0; i < oplist1.length; i++) t += 1 + i + "." + oplist1[i] + "<br>";
                set_txt("cusl1", t)
            }
        };
        get_el("btn4").onclick = function () {
            tmp2 = ady.getDate();
            for (i = 0; i < oplist1.length; i++) tmp1 = "" + oplist1[i], tmp = tmp1.split(" "), tmp3 = "" + oplist[tmp[0]], tmp3 = tmp3.replace(tmp[1], "x"), tmp3 = tmp3.replace("|x|", "|"), tmp3 =
                tmp3.replace("|x", ""), oplist[tmp[0]] = tmp3;
            tmp3 = "" + oplist[tmp2];
            tmp6 = tmp3.indexOf("|");
            0 < tmp6 && (tmp3 = tmp3.substr(tmp6), oplist[0] += tmp3);
            t = "" + tmp2;
            for (i = 0; i < oplist1.length; i++) tmp1 = "" + oplist1[i], tmp = tmp1.split(" "), t += "|" + tmp[1];
            oplist[tmp2] = t;
            alert("บันทึกแล้ว");
            P7_6()
        };
        get_el("btn5").onclick = function () {
            P7_M()
        };

        get_el("cusamphur").onchange = function () {
            opt_t = [];
            opt_t.push("-Selected-");
            var valueSelected = this.value.split(" ");
            var ampcode = valueSelected[0];
            for (c = loadTxtDoc1(lnk8, "salesman_code=" + cur.sales + "&amphur_code=" + ampcode), c = JSON.parse(c), i = 0; i < c.length; i++) t = c[i].trip_no + " " + c[i].customer_code + " " + c[i].customer_name, opt_t.push(t);
            c = opt_htm("class='sfw' id='custo'", opt_t);
            get_el('custo').options.length = 0;
            set_txt("cusl2", c);
        };
    };

function ldf() {
    var a = loadTxtDoc1(lnk1, "salesman_code=" + cur.sales + "&trip_no=" + ady.getDate()),
        a = JSON.parse(a);
    oplist1 = [];
    for (i = 0; i < a.length; i++) t = ady.getDate() + " " + a[i].customer_code + " " + a[i].customer_name, oplist1.push(t)
    //alert(t);
}

function ldf2() {
    var a = ady.getDate();
    1 < a && a--;
    var c = loadTxtDoc1(lnk1, "salesman_code=" + cur.sales + "&trip_no=" + a),
        c = JSON.parse(c);
    oplist1 = [];
    for (i = 0; i < c.length; i++) t = a + " " + c[i].customer_code + " " + c[i].customer_name, oplist1.push(t)
}

function otrr(a) {
    if (-1 == a) return alert("ไม่พบร้าน"), 0;
    alert(tb_custo[a][2] + " " + tb_custo[a][3]);
    cur.custo = a;
    P1_SEL()
}

function ldf1(a, c) {
    var b;
    try {
        b = loadTxtDoc1(a, c)
    } catch (d) {
        b = ""
    }
    //alert(b);
    return b
};
Array.prototype.a2d_sumfil = function (a) {
    var c, b = 0,
        d;
    for (c = 0; c < this.length; c++) d = void 0 == this[c][a] ? 0 : this[c][a], b += Number(d);
    return b = Number(b.toFixed(2))
};
Array.prototype.a2d_sumvat = function (a, c) {
    var b, d = 0,
        e;
    for (b = 0; b < this.length; b++) e = void 0 == this[b][a] ? 0 : this[b][a], e = Number(e) * c, e = Number(e.toFixed(2)), d += e;
    return d = Number(d.toFixed(2))
};
Array.prototype.a2d_dist = function (a, c) {
    var b, d = [],
        e = [],
        f;
    if (0 < this.length) {
        for (b = 0; b < this.length; b++) d.push(this[b][a]);
        "n" === c ? d.sort(SNum) : d.sort();
        f = d[0];
        e.push(f);
        for (b = 1; b < d.length; b++) d[b] != f && (e.push(d[b]), f = d[b])
    }
    return e
};
Array.prototype.a2d_find = function (a, c) {
    var b, d = [];
    for (b = 0; b < this.length; b++) this[b][c] == a && d.push(this[b]);
    return d
};
Array.prototype.a2d_between = function (a, c, b) {
    var d, e = [];
    for (d = 0; d < this.length; d++) this[d][b] >= a && this[d][b] <= c && e.push(this[d]);
    return e
};
Array.prototype.a2d_sortby = function (a) {
    var c, b, d = [],
        e = 0,
        f = [];
    b = this.a2d_getfil(a);
    for (a = 0; a < b.length; a++) {
        for (c = 1 + a; c < b.length; c++) b[c] < b[e] && (e = c);
        c = b[a];
        b[a] = b[e];
        b[e] = c;
        d.push(e)
    }
    for (a = 0; a < b.length; a++) f.push(this[d[a]]);
    return f
};
Array.prototype.a2d_findpos = function (a, c) {
    var b, d = -1;
    for (b = 0; b < this.length; b++)
        if (this[b][c] == a) {
            d = b;
            break
        }
    return d
};
Array.prototype.a2d_ct = function () {
    return this.length
};
Array.prototype.a2d_addline = function (a) {
    a = a.split(",");
    this.push(a)
};
Array.prototype.a2d_delline = function (a) {
    this.splice(a, 1)
};
Array.prototype.a2d_showline = function (a) {
    alert(this[a])
};
Array.prototype.a2d_getline = function (a) {
    return this[a]
};
Array.prototype.a2d_getnline = function (a, c) {
    var b, d = [];
    for (b = 0; b < c; b++) d.push(this[a][b]);
    return d
};
Array.prototype.a2d_getnline1 = function (a, c, b) {
    var d, e = "";
    for (d = 0; d < c; d++) e += this[a][d] + b;
    return e = e.slice(0, -1)
};
Array.prototype.a2d_getnline2 = function (a, c) {
    var b, d = "";
    for (b = 0; b < this[a].length; b++) d += this[a][b] + c;
    return d = d.slice(0, -1)
};
Array.prototype.a2d_setline = function (a, c) {
    var b, d = c.split(",");
    for (b = 0; b < this[0].length; b++) this[a][b] = d[b]
};
Array.prototype.a2d_getfil = function (a) {
    var c, b = [];
    for (c = 0; c < this.length; c++) b.push(this[c][a]);
    return b
};
Array.prototype.a2d_imp = function (a, c, b) {
    var d = 1,
        e = 0;
    a = String(a);
    b = "" != a ? a.split(b) : [];
    this.splice(0, this.length);
    this.push([]);
    for (a = 0; a < b.length; a++) this[e].push(b[a]), d++ , d > c && (this.push([]), d = 1, e++);
    1 < this.length && this.pop()
};
Array.prototype.a2d_exp = function () {
    return this.toString()
};
Array.prototype.a2d_exp1 = function (a) {
    var c, b, d = "";
    for (c = 0; c < this.length; c++)
        for (b = 0; b < this[c].length; b++) d += this[c][b] + a;
    return d = d.slice(0, -1)
};
Array.prototype.a2d_findnot = function (a, c) {
    var b, d = [];
    for (b = 0; b < this.length; b++) this[b][c] != a && d.push(this[b]);
    return d
};
Array.prototype.a2d_find1 = function (a, c, b) {
    var d, e;
    for (d = 0; d < this.length; d++)
        if (this[d][c] == a) {
            e = this[d][b];
            break
        }
    return e
};
Array.prototype.a2d_finddel = function (a, c) {
    var b, d;
    d = this.a2d_findnot(a, c);
    this.splice(0, this.length);
    for (b = 0; b < d.length; b++) this.push(d[b])
};
Array.prototype.a2d_findset = function (a, c, b, d) {
    for (var e = 0; e < this.length; e++) this[e][c] == a && (this[e][d] = b)
};
Array.prototype.a2d_findset1 = function (a, c, b, d) {
    for (var e = 0; e < this.length; e++) this[e][c] == a && "" == this[e][d] && (this[e][d] = b)
};
Array.prototype.a2d_findset2 = function (a, c, b, d) {
    for (var e = 0; e < this.length; e++) this[e][c] == a && "" == this[e][d] && "C" == this[e][17] && (this[e][d] = b)
};
Array.prototype.a2d_copy = function (a) {
    for (var c = 0; c < a.length; c++) this.push(a[c])
};
var pttr = function (a) {
    a = a.split("\n");
    try {
        loadTxtDoc1(purl + "/sta", "doc=start");
        for (var c = 0; c < a.length; c++) loadTxtDoc1(purl + "/print", "doc=" + encodeURI(a[c]));
        loadTxtDoc1(purl + "/stp", "doc=stop")
    } catch (b) { }
};
cls_table = function (a) {
    void 0 == a && (a = "");
    this.ww = "<table " + a + ">";
    this.crow = 0;
    this.row = function (a) {
        void 0 == a && (a = "");
        this.ww = 0 == this.crow ? this.ww + ("<tr " + a + ">") : this.ww + ("</tr><tr " + a + ">");
        this.crow++
    };
    this.col = function (a, b) {
        void 0 == b && (b = "");
        this.ww += "<td " + b + ">" + a + "</td>"
    };
    this.hed = function (a, b) {
        void 0 == b && (b = "");
        this.ww += "<th " + b + ">" + a + "</th>"
    };
    this.htm = function () {
        return this.ww += "</table>"
    }
};
Date.prototype.get_fulldate = function () {
    var a, c, b, d, e, f;
    b = chkdigi(this.getFullYear());
    a = chkdigi(1 + this.getMonth());
    c = chkdigi(this.getDate());
    d = chkdigi(this.getHours());
    e = chkdigi(this.getMinutes());
    f = chkdigi(this.getSeconds());
    return b + "/" + a + "/" + c + " " + d + ":" + e + ":" + f
};
Date.prototype.get_date = function () {
    var a, c, b;
    b = chkdigi(this.getFullYear());
    a = chkdigi(1 + this.getMonth());
    c = chkdigi(this.getDate());
    return b + "/" + a + "/" + c
};
Date.prototype.get_date1 = function () {
    var a, c;
    c = chkdigi(this.getFullYear());
    a = chkdigi(1 + this.getMonth());
    return chkdigi(this.getDate()) + "/" + a + "/" + c
};
Date.prototype.get_orddate = function () {
    var a, c;
    chkdigi(this.getFullYear());
    a = chkdigi(1 + this.getMonth());
    c = chkdigi(this.getDate());
    return a + c
};
Date.prototype.get_day = function () {
    var a;
    a = this.getTime();
    return Math.floor(a / 864E5)
};
Date.prototype.add_day = function () {
    this.setDate(this.getDate() + 1)
};
Date.prototype.dec_day = function () {
    this.setDate(this.getDate() - 1)
};
Date.prototype.set_date = function (a) {
    a = a.split("/");
    this.setFullYear(a[0], a[1] - 1, a[2])
};
Date.prototype.get_d = function () {
    return chkdigi(this.getDate())
};