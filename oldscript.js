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
            c =
                c + p3_body2(a),
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
            0), 0 < d.length ? (e = Number(d[0][6]), d = d[0][3]) : (e = 1, d = "ไม่พบ"), c += "! 0 200 200 80 1\n", c += "LEFT\n", c += "TEXT ang14bpt.cpf 0 0 0  " + a[b][6] + " " + txtbox1(d, 20, "l") + "\n", c += "RIGHT\n", c += "TEXT ang14bpt.cpf 0 0 0  " + a[b][8] + "/" + a[b][9] + "\n", c = 0 != Number(a[b][15]) ? c + ("TEXT ang14bpt.cpf 0 0 30  " + txtnum(e) + " " + txtbox1(a[b][10], 20, "r") + txtbox1(a[b][11], 16, "r") + txtbox1(txtnum(Number(a[b][15])), 22, "r") + "\n") : c + ("TEXT ang14bpt.cpf 0 0 30  " + txtnum(e) + " " + txtbox1(a[b][10], 20, "r") + txtbox1(a[b][11],
                16, "r") + txtbox1(a[b][7], 22, "r") + "\n"), c += "TEXT ang10bpt.cpf 0 0 45  " + txtdup("_", 63) + "\n", c += "PRINT\n";
        return c
    },
    p3_body2 = function (a) {
        var c = "",
            b, d, e;
        for (b = 0; b < a.length; b++) d = tb_prod.a2d_find(a[b][6], 0), 0 < d.length ? (e = Number(d[0][6]), d = d[0][3]) : (e = 1, d = "ไม่พบ"), c += "! 0 200 200 80 1\n", c += "LEFT\n", c += "TEXT ang14bpt.cpf 0 0 0  " + txtbox1(d, 20, "l") + "\n", c += "RIGHT\n", c = 0 != Number(a[b][15]) ? c + ("TEXT ang14bpt.cpf 0 0 30  " + a[b][6] + txtbox1(a[b][8] + "/" + a[b][9], 20, "r") + txtbox1(txtnum(e),
            16, "r") + txtbox1(txtnum(Number(a[b][15])), 22, "r") + "\n") : c + ("TEXT ang14bpt.cpf 0 0 30  " + a[b][6] + txtbox1(a[b][8] + "/" + a[b][9], 20, "r") + txtbox1(txtnum(e), 16, "r") + txtbox1(a[b][7], 22, "r") + "\n"), c += "TEXT ang10bpt.cpf 0 0 45  " + txtdup("_", 63) + "\n", c += "PRINT\n";
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
        for (d = b = 0; d <
            a.length; d++) b += Number(a[d][15]), e = tb_prod.a2d_find(a[d][6], 0), e = 0 < e.length ? Number(e[0][6]) : 1, c += "! 0 200 200 50 1\n", c += "RIGHT\n", c += "TEXT ang14bpt.cpf 0 0 0  " + a[d][6] + txtbox1(a[d][8] + "/" + a[d][9], 16, "r") + txtbox1(txtnum(e), 22, "r") + txtbox1(txtnum(Number(a[d][15])), 22, "r") + "\n", c += "TEXT ang10bpt.cpf 0 0 15  " + txtdup("_", 63) + "\n", c += "PRINT\n";
        a = Number(tb_vat[0]);
        d = r_up(a / 100 * b);
        c += "! 0 200 200 220 1\n";
        c += "RIGHT\n";
        c += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน" + txtbox(txtnum(b),
            30, "r") + "\n";
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
        "C" == l[0][17] && (f += "(Confirm)", 51 == c && (d += txtbox("F-STK-003-19/07/99", 73, "l")), 52 == c && (d += txtbox("F-STK-010-01/08/58", 73, "l")), d += txtbox("เลขที่ " + a, 35, "r") + "\n", m += txtdup(" ", 10) + txtdup("_", 20) + txtdup(" ", 10) + txtdup("_",
            20) + txtdup(" ", 10) + txtdup("_", 20) + "\n", m += txtdup(" ", 10) + txtbox("พนักงานขาย", 20, "c") + txtdup(" ", 10) + txtbox("พนักงานขับรถ", 20, "c") + txtdup(" ", 10) + txtbox("ตัวแทน สร.", 20, "c") + "\n");
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
    }