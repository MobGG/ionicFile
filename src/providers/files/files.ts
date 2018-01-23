import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { Diagnostic } from '@ionic-native/diagnostic';

@Injectable()
export class FilesProvider {

  constructor(
    public file: File,
    public diagnostic: Diagnostic,
  ) {
    // console.log('Hello FilesProvider Provider');
  }

  checkDir() {
    this.file.checkDir(this.file.externalRootDirectory, '')// Download
      // this.file.checkDir(this.file.externalRootDirectory, 'Download')// Download
      .then(_ => {
        console.log('Directory exists');
        alert('Directory ' + this.file.externalRootDirectory + 'is exists.');// Download
        // alert('Directory ' + this.file.externalRootDirectory + 'Download ' + 'is exists.');// Download
      })
      .catch(err => {
        console.warn('Directory doesnt exist', err);
        alert('Directory ' + this.file.externalRootDirectory + 'is not exists.');// Download
        // alert('Directory ' + this.file.externalRootDirectory + 'Download ' + 'is not exists.');// Download
      });
  }

  checkFile() {
    this.file.checkFile(this.file.externalRootDirectory, 'spc.dat')
      .then(res => {
        console.log('File ' + this.file.externalRootDirectory + ' spc.dat is exists');
        alert('File spc.dat is exists');
      })
      .catch(err => {
        console.warn('File ' + this.file.externalRootDirectory + ' spc.dat is not exists');
        alert('File spc.dat is not exists');
      });
  }

  writeNewFile(mockOrderData) {
    let filePath = this.file.externalRootDirectory;
    let fileName = 'spc.dat';
    let text: string = '';
    // let text = this.prepareText();
    // let text = this.billBody1(mockOrderData);
    // text += this.printBill3A(mockOrderData);
    // text += '\n';
    text += this.printBill3B(mockOrderData);
    // text += '\n';
    // text += this.printBill3C(mockOrderData);
    // text += '\n';
    // text += this.printBill3D(mockOrderData);
    // text += '\n';
    // text += this.printBill3E(mockOrderData);

    let writeOption = {
      "replace": true
    }
    this.file.writeFile(filePath, fileName, text, writeOption)
      .then(res2 => {
        console.log('write' + res2);
        alert('write dat');

      })
      .catch(err => {
        console.warn('write error:', err);
        alert('ERROR!');
      });
  }

  writeFile(text: string) {
    let filePath = this.file.externalRootDirectory;
    let fileName = 'spc.dat';
    let writeOption = {
      "replace": true
    }
    this.file.writeFile(filePath, fileName, text, writeOption)
      .then(res2 => {
        console.log('write' + res2);
        alert('write dat');

      })
      .catch(err => {
        console.warn('write error:', err);
        alert('ERROR!');
      });
  }

  writeEmpty() {
    let filePath = this.file.externalRootDirectory;
    let fileName = 'spc.dat';
    let text = '';
    let writeOption = {
      "replace": true
    }
    this.file.writeFile(filePath, fileName, text, writeOption)
      .then(res => {
        console.log('write' + res);
        alert('write empty');
      })
      .catch(err => {
        console.warn('write error:', err);
        alert('ERROR!');
      });
  }

  removeFile() {
    let filePath = this.file.externalRootDirectory;
    let fileName = 'spc.dat';
    this.file.removeFile(filePath, fileName)
      .then(res => {
        console.log(res);
        alert('remove success.');
      })
      .catch(err => {
        console.warn('remove error:', err);
        alert('ERROR!' + err);
      });
  }

  mockDataForPrint() {
    let product: any[] = [
      {
        'productCode': '111013',
        'productName': 'ฟลอเร่ขมิ้น',
        'productPrice': 1050.00,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1,
        'total': 29.16
      },
      {
        'productCode': '111021',
        'productName': 'ฟลอเร่ว่านหางจระเข้',
        'productPrice': 1050.00,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1,
        'total': 29.16
      },
      {
        'productCode': '3',
        'productName': 'aaa',
        'productPrice': 123.00,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1,
        'total': 10.00
      },
      {
        'productCode': '4',
        'productName': 'sss',
        'productPrice': 123.00,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1,
        'total': 10.00
      }
    ];
    let premiumProduct: any[] = [
      {
        'productCode': '111013',
        'premiumProductCode': '5',
        'premiumProductName': 'ddd',
        'premiumProductPrice': 100,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1
      },
      {
        'productCode': '111021',
        'premiumProductCode': '6',
        'premiumProductName': 'fff',
        'premiumProductPrice': 100,
        'discountPercent': 0.00,
        'discount': 0.00,
        'qty': 0,
        'qtyp': 1
      }
    ]
    let mockData = {
      'product': product,
      'premiumProduct': premiumProduct
    }
    return mockData
  }

  // start text helper
  // lenthai
  lengthThai(thText: string): number {
    // สระภาษาไทย พวกที่อยู่บน อยู่ล่าง และ วรรณยุกต์
    // https://unicode-table.com/en/#0E31 
    let subCharactorArray: any[] = [/\u0e31/g, /\u0e34/g, /\u0e35/g, /\u0e36/g, /\u0e37/g, /\u0e38/g, /\u0e39/g, /\u0e47/g, /\u0e48/g, /\u0e49/g, /\u0e4a/g, /\u0e4b/g, /\u0e4c/g]; // /\u002e/g = .
    let thSubCharactorQty: any[] = [];
    let thTextLength: number = 0;

    thTextLength = thText.length;
    for (let subChar of subCharactorArray) {
      thSubCharactorQty = thText.match(subChar);
      if (thSubCharactorQty !== null && thSubCharactorQty.length > 0 && thTextLength !== 0) {
        thTextLength -= thSubCharactorQty.length;
      }
    }
    return thTextLength;
  }

  // txtnum
  numberWithCommasAndDecimal(x: number): string {
    // return numberWithCommasAnd2decimal
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    // https://stackoverflow.com/questions/25127054/regex-format-string-number-with-commas-and-2-decimals-in-javascript
    var parts = x.toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // regex
    return parts.join(".");
  }

  // old txtbox
  txtbox(a, c, b): string {
    let d: any;
    let e: any;
    let tmp: any;
    for (d = "", e = this.txtDup(" ", c), d = a; this.lengthThai(d) > c;) a = d.length - 1, d = d.substr(0, a);
    a = this.lengthThai(d);
    "l" == b && (d += e.slice(a));
    "r" == b && (d = e.slice(a) + d);
    "c" == b && (b = Math.floor((c - a) / 2), tmp = this.txtDup(" ", b), d = tmp + d + tmp, 0 < c - (b + b + a) && (d += " "));
    return d;
  }

  // txtbox
  formatText(inputText: string, columnLength: number, position: string): string {
    let textAfterFormat: string;
    let space: string = this.txtDup(' ', columnLength);
    let inputTextLength: number = this.lengthThai(inputText);
    if (position === 'l') {
      textAfterFormat = inputText + space.slice(inputTextLength);
    } else if (position === 'r') {
      textAfterFormat = space.slice(inputTextLength) + inputText;
    } else if (position === 'c') {
      let spaceLength = Math.floor((columnLength - inputTextLength) / 2);
      let space = this.txtDup(' ', spaceLength);
      textAfterFormat = space + inputText + space;
      if (columnLength - (spaceLength + spaceLength + inputTextLength) > 0) {
        textAfterFormat += ' ';
      }
    }
    return textAfterFormat;
  }

  // old txtbox1
  txtbox1(a, c, b): string {
    let d: any;
    let e: any;
    let tmp: any;
    for (d = "", e = this.txtDup(" ", c), d = a; this.lengthThai(d) > c;) a = d.length - 1, d = d.substr(0, a);
    a = Math.round(1.78 * this.lengthThai(d));
    "l" == b && (d += e.slice(a));
    "r" == b && (d = e.slice(a) + d);
    "c" == b && (b = Math.floor((c - a) / 2), tmp = this.txtDup(" ", b), d = tmp + d + tmp, 0 < c - (b + b + a) && (d += " "));
    return d;
  }

  // txtbox1
  formatText1(inputText: string, columnLength: number, position: string): string {
    let textAfterFormat: string;
    let space: string = this.txtDup(' ', columnLength);
    let inputTextLength: number = Math.round(1.78 * this.lengthThai(inputText));
    if (position === 'l') {
      textAfterFormat = inputText + space.slice(inputTextLength);
    } else if (position === 'r') {
      textAfterFormat = space.slice(inputTextLength) + inputText;
    } else if (position === 'c') {
      let spaceLength = Math.floor((columnLength - inputTextLength) / 2);
      let space = this.txtDup(' ', spaceLength);
      textAfterFormat = space + inputText + space;
      if (columnLength - (spaceLength + spaceLength + inputTextLength) > 0) {
        textAfterFormat += ' ';
      }
    }
    return textAfterFormat;
  }

  // txtdup
  txtDup(anyString: string, numberOfDup: number) {
    // duplicate any input string
    let space: string = '';
    for (let b = 0; b < numberOfDup; b++) {
      space += anyString;
    }
    return space;
  }

  // end text helper

  // start gen print

  // ใบเบิก ใบคืน
  // TODO เพิ่ม loop product data
  // docType = C , docNo = 51 or 52
  genStockDoc(docType: string | null, docNo: string): string {
    let headerText: string = '';
    let pageNumber: number = 1;
    let docTypeText: string = ''; // if Confirm
    let isoIdText: string = ''; // if Confirm
    let confirmSignatureText: string = ''; // if Confirm
    let subHeaderText: string = '';

    let sumQty: number = 0, sumQtyP: number = 0;

    let doc: string = '';

    let docData: any = {
      'docCode': 'C50012180001',
      'docDate': '2015/12/18',
      'salesCode': 'C500',
      'salesName': 'นันทิดา ทองคำ',
      'srCode': 'R509',
      'srName': 'สร. นางสุนิดา พัชรพานิช',
      'products': [
        {
          'productCode': '624015',
          'productName': 'อสร. น้ำส้มกลั่น 700',
          'packingSize': '12',
          'qty': '1',
          'qtyp': '0'
        }
        , {
          'productCode': '',
          'productName': '',
          'packingSize': '',
          'qty': '',
          'qtyp': ''
        }
      ],
      'netTotal': ''
    };
    let products: any[] = [];

    headerText += this.formatText('บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', 111, 'c') + '\n';
    // type header
    if (docNo === '51') {
      docTypeText = 'ใบเบิกสินค้า (Form 51)';
    } else if (docNo === '52') {
      docTypeText = 'ใบคืนสินค้า (Form 52)';
    }
    if (docType) {
      // docTypeText += '(Confirm)\n';
      docTypeText += '(Confirm)';
      if (docNo === '51') {
        isoIdText = this.formatText('F-STK-003-19/07/99', 73, 'l');
      } else if (docNo === '52') {
        isoIdText = this.formatText('F-STK-010-01/08/58', 73, 'l');
      }
      isoIdText += this.formatText('เลขที่ ' + docData.docCode, 35, 'r') + '\n';
      confirmSignatureText = this.txtDup(' ', 10) + this.txtDup('_', 20) + this.txtDup(' ', 10) + this.txtDup('_', 20) + this.txtDup(' ', 10) + this.txtDup('_', 20) + '\n'; // ขีดเส้นสำหรับลายเซ็น 
      confirmSignatureText += this.txtDup(' ', 10) + this.formatText('พนักงานขาย', 20, 'c') + this.txtDup(' ', 10) + this.formatText('พนักงานขับรถ', 20, 'c') + this.txtDup(' ', 10) + this.formatText('ตัวแทน สร.', 20, 'c') + '\n'; // ข้อความกำกับใต้เส้น
    } else {
      // docTypeText += '\n'
    }
    docTypeText = this.formatText(docTypeText, 101, 'c') + this.formatText('Page ', 8, 'r');
    // type header

    // start sub header
    subHeaderText = this.formatText('วันที่ ' + docData.docDate, 15, 'l') + this.formatText('รหัสพนักงานขาย ' + docData.salesCode, 25, 'l') + 'ชื่อพนักงานขาย ' + docData.salesName + '\n';
    subHeaderText += this.formatText('รหัสสร. ' + docData.srCode, 25, 'l') + ' ชื่อสร. ' + docData.srName + '\n';
    subHeaderText += '|' + this.txtDup('-', 92) + '|\n';
    subHeaderText += '|' + this.formatText('ลำดับ', 5, 'c') + '|' + this.formatText('รหัส-ชื่อ สินค้า', 56, 'c') + '|' + this.formatText('บรรจุ', 10, 'c') + '|' + this.formatText('จำนวน เต็ม/เศษ', 18, 'c') + '|\n';
    subHeaderText += '|' + this.txtDup('-', 92) + '|\n';
    // end sub header

    doc += headerText + docTypeText + pageNumber + '\n' + isoIdText + subHeaderText;

    for (let i = 1; i <= 120; i++) {
      let product: any = {
        'productCode': i,
        'productName': 'product' + i,
        'packingSize': '12',
        'qty': '1',
        'qtyp': '0'
      }
      products.push(product);
    }
    console.log(products);

    // start for loop product data
    for (let i: number = 0; i < products.length; i++) {
      // console.log(product);
      sumQty += Number(products[i].qty);
      sumQtyP += Number(products[i].qtyp);
      if (i % 55 === 0 && i !== 0) {
        doc += '|' + this.txtDup('-', 92) + '|\n\n\n';
        pageNumber += 1;
        doc += headerText + docTypeText + pageNumber + '\n' + isoIdText + subHeaderText;
        doc += '|' + this.formatText(i + 1 + ' ', 5, 'r')
          + '|' + this.formatText(products[i].productCode + ' ' + products[i].productCode, 56, 'l')
          + '|' + this.formatText(products[i].packingSize, 10, 'r')
          + '|' + this.formatText(products[i].qty, 11, 'r')
          + '|' + this.formatText(products[i].qtyp, 6, 'r')
          + '|\n';
      } else {
        doc += '|' + this.formatText(i + 1 + ' ', 5, 'r')
          + '|' + this.formatText(products[i].productCode + ' ' + products[i].productCode, 56, 'l')
          + '|' + this.formatText(products[i].packingSize, 10, 'r')
          + '|' + this.formatText(products[i].qty, 11, 'r')
          + '|' + this.formatText(products[i].qtyp, 6, 'r')
          + '|\n';
      }

    }
    // end for loop product data

    doc += '|' + this.txtDup('-', 92) + '|\n';
    doc += this.formatText('รวม ' + products.length + ' รายการ', 20, 'l')
      + this.formatText('เป็นเงิน ' + this.numberWithCommasAndDecimal(1000) + ' บาท', 50, 'l')
      + this.formatText('รวมจำนวน ' + sumQty + '/' + sumQtyP, 30, 'r') + '\n\n\n';

    doc += confirmSignatureText;

    console.log(doc);
    return doc;
  }

  genStockSummaryDoc(): string {
    let doc: string = '';
    let date = new Date;
    let mockData = {
      date: date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate(),
      srCode: 'R509',
      srName: 'สร. นางสุณิตา พัชรพานิช',
      salesmanCode: 'C500',
      salesmanName: 'นันทิภาคย์ ทองดำ'
    };

    // console.log(mockData.date.getDate());
    // console.log(mockData.date.toDateString());

    doc += this.formatText('บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', 135, 'c') + '\n';
    doc += this.formatText('ใบปิดสรุปสต็อกสินค้า สร. F-STK-002-19/07/1999', 125, 'c')
      + this.formatText('Page ', 7, 'r')
      + '\n';
    doc += 'วันที่ ' + mockData.date + this.txtDup(' ', 5) + 'รหัสสร. ' + mockData.srCode + ' ' + mockData.srName + this.txtDup(' ', 5) + 'พนักงานขาย ' + mockData.salesmanCode + ' ' + mockData.salesmanName + '\n';
    doc += '|' + this.txtDup('-', 133) + '|\n';
    doc += '|' + this.txtDup(' ', 133) + '|\n';
    doc += '|' + this.txtDup(' ', 133) + '|\n';
    doc += '|' + this.txtDup('-', 133) + '|\n';

    // for (let i = 0; i < 0; i++) {

    // }
    doc += '|' + this.txtDup('-', 133) + '|\n';
    doc += '';

    console.log(doc);
    return doc;
  }

  mockOrderData() {
    let mockData = this.mockDataForPrint();
    let orderData = {
      'docCode': 'C31708010001',
      'orderDate': '01/08/2017',
      'orderDateTime': '2017/08/01 08:49:00',
      'nextMeetDate': '01/09/2017',
      'salesmanCode': 'C317',
      'salesmanName': 'ปัญญา น้อยกลาง',
      'srCode': 'R382',
      'customerCode': '31200015',
      'customerTaxId': '3220500193897',
      'customerName': 'นางอำนวย พรมนา',
      'address1': '27/2 ต.ปัตวี',
      'address2': 'อ.มะขาม จ.จันทบุรี 22000',
      'customerTel': '',
      'total': 58.32,
      'vat': 4.08,
      'product': mockData.product,
      'premiumProduct': mockData.premiumProduct,
    }
    return orderData;
  }

  // gen ใบเสร็จรับเงิน

  billHeader1(orderData, headerText) {
    let header: string = '';
    header += '! 0 200 200 490 1\n';
    header += 'LEFT\n';
    header += 'TEXT ang11bpt.cpf 0 80 0 ' + headerText + '\n';
    header += 'PCX 0 0 !<Logo1.PCX\n';
    header += 'TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) ' + orderData.docCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 75  สาขาที่ออกใบกำกับภาษี : สำนักงานใหญ่\n';
    header += 'TEXT ang10bpt.cpf 0 0 105  2156 ถนนเพชรบุรีตัดใหม่                วันที่ ' + orderData.orderDate + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 135  แขวงบางกะปิ เขตห้วยขวาง   พนักงานขาย ' + orderData.salesmanCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 165  กรุงเทพฯ10310 โทร.0-2318-0062 คลังสินค้า ' + orderData.srCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 195  ทะเบียนเลขที่ บมจ.389        รหัสลูกค้า ' + orderData.customerCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 225  เลขประจำตัวผู้เสียภาษีอากร 0107537001421\n';
    header += 'TEXT ang10bpt.cpf 0 0 255  TAX ID:' + orderData.customerTaxId + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 285  ผู้ซื้อ ' + orderData.customerName + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 315  ' + orderData.address1 + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 345  ' + orderData.address2 + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 375  โทร:' + orderData.customerTel + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 400  ชื่อพนักงานขาย ' + orderData.salesmanName + '\n';
    header += 'TEXT ang11bpt.cpf 0 0 425  ' + this.formatText1('รหัสสินค้า', 12, 'l') + ' ' + this.formatText1('ชื่อสินค้า', 36, 'l') + '\n';
    header += 'RIGHT\n';
    header += 'TEXT ang11bpt.cpf 0 0 425  จำนวน          \n';
    header += 'TEXT ang11bpt.cpf 0 0 450  ราคาขาย' + this.formatText1('ส่วนลด%', 25, 'r') + this.formatText1('ลดบาท', 16, 'r') + this.formatText1('จำนวนเงิน', 25, 'r') + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 460  ' + this.txtDup('_', 63) + '\n';
    header += 'PRINT\n';
    return header;
  }
  billHeader2(orderData, headerText) {
    let header: string = '';
    header += '! 0 200 200 380 1\n';
    header += 'LEFT\n';
    header += 'TEXT ang11bpt.cpf 0 80 0 ' + headerText + '\n';
    header += 'PCX 0 0 !<Logo1.PCX\n';
    header += 'TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) สำนักงานใหญ่\n';
    header += 'TEXT ang10bpt.cpf 0 0 75  TAX ID:0107537001421     คลัง ' + orderData.srCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 105  วันที่ ' + orderData.orderDate + ' เลขที่: ' + orderData.docCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 135  รหัส ' + orderData.customerCode + 'S/M:' + orderData.salesmanCode + ' ' + orderData.salesmanName + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 165  TAX ID:' + orderData.customerTaxId + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 195  ผู้ซื้อ ' + orderData.customerName + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 225  ' + orderData.address1 + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 255  ' + orderData.address2 + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 285  โทร:' + orderData.customerTel + '\n';
    header += 'RIGHT\n';
    header += 'TEXT ang11bpt.cpf 0 0 315  รหัส' + this.formatText1('จำนวน', 25, 'r') + this.formatText1('ราคา', 16, 'r') + this.formatText1('จำนวนเงิน', 25, 'r') + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 325  ' + this.txtDup('_', 63) + '\n';
    header += 'PRINT\n';
    return header;
  }
  billHeader3(orderData, headerText) {
    let header: string = '';
    header += '! 0 200 200 300 1\n';
    header += 'LEFT\n';
    header += 'TEXT ang11bpt.cpf 0 80 0 ' + headerText + '\n';
    header += 'PCX 0 0 !<Logo1.PCX\n';
    header += 'TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) สำนักงานใหญ่\n';
    header += 'TEXT ang10bpt.cpf 0 0 75  TAX ID:0107537001421     คลัง ' + orderData.srCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 105  วันที่ ' + orderData.orderDate + ' เลขที่: ' + orderData.docCode + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 135  รหัส ' + orderData.customerCode + 'S/M:' + orderData.salesmanCode + ' ' + orderData.salesmanName + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 165  TAX ID:' + orderData.customerTaxId + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 195  ผู้ซื้อ ' + orderData.customerName + '\n';
    header += 'TEXT ang11bpt.cpf 0 0 225  ' + this.formatText1('รหัสสินค้า', 12, 'l') + ' ' + this.formatText1('ชื่อสินค้า', 36, 'l') + '\n';
    header += 'RIGHT\n';
    header += 'TEXT ang11bpt.cpf 0 0 225  จำนวน          \n';
    header += 'TEXT ang11bpt.cpf 0 0 255  ราคาขาย' + this.formatText1('ส่วนลด%', 25, 'r') + this.formatText1('ลดบาท', 16, 'r') + this.formatText1('จำนวนเงิน', 25, 'r') + '\n';
    header += 'TEXT ang10bpt.cpf 0 0 265  ' + this.txtDup('_', 63) + '\n';
    header += 'PRINT\n';
    return header;
  }

  billBody1(orderData) {
    let body: string = '';
    // รายการสินค้า
    for (let product of orderData.product) {
      body += '! 0 200 200 80 1\n';
      body += 'LEFT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + product.productCode + ' ' + this.formatText1(product.productName, 20, 'l') + '\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + product.qty + '/' + product.qtyp + '\n';
      body += 'TEXT ang14bpt.cpf 0 0 30  '
        + this.numberWithCommasAndDecimal(product.productPrice)
        // + this.txtbox1(this.numberWithCommasAndDecimal(product.discountPercent), 20, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.discountPercent), 20, 'r')
        // + this.txtbox1(this.numberWithCommasAndDecimal(product.discount), 16, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.discount), 16, 'r')
        // + this.txtbox1(this.numberWithCommasAndDecimal(product.total), 22, 'r') + '\n';
        + this.formatText1(this.numberWithCommasAndDecimal(product.total), 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 45  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    // ของแถม
    for (let premiumProduct of orderData.premiumProduct) {
      body += '! 0 200 200 80 1\n';
      body += 'LEFT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + premiumProduct.premiumProductCode + ' ' + this.formatText1(premiumProduct.premiumProductName, 20, 'l') + '\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + premiumProduct.qty + '/' + premiumProduct.qtyp + '\n';
      body += 'TEXT ang14bpt.cpf 0 0 30  '
        // + '0.00'
        + premiumProduct.premiumProductPrice
        // + this.txtbox1('0.00', 20, 'r')
        + this.formatText1('0.00', 20, 'r')
        // + this.txtbox1('0.00', 16, 'r')
        + this.formatText1('0.00', 16, 'r')
        // + this.txtbox1(premiumProduct.productCode, 22, 'r') + '\n';
        + this.formatText1(premiumProduct.productCode, 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 45  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    return body;
  }
  billBody2(orderData) {
    let body: string = '';
    // รายการสินค้า
    for (let product of orderData.product) {
      body += '! 0 200 200 80 1\n';
      body += 'LEFT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + this.formatText1(product.productName, 20, 'l') + '\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 30  '
        + product.productCode
        + this.formatText1(product.qty + '/' + product.qtyp, 20, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.productPrice), 16, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.total), 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 45  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    // ของแถม
    for (let premiumProduct of orderData.premiumProduct) {
      body += '! 0 200 200 80 1\n';
      body += 'LEFT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  ' + this.formatText1(premiumProduct.premiumProductName, 20, 'l') + '\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 30  '
        + premiumProduct.premiumProductCode
        + this.formatText1(premiumProduct.qty + '/' + premiumProduct.qtyp, 20, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(premiumProduct.premiumProductPrice), 16, 'r')
        + this.formatText1(premiumProduct.productCode, 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 45  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    return body;
  }
  billBody3(orderData) {
    let vatNumber: number = 7;
    let body: string = '';
    body += '! 0 200 200 155 1\n';
    body += 'LEFT\n';
    body += 'TEXT ang10bpt.cpf 0 0 0  วันที่ ' + orderData.orderDate + ' เลขที่: ' + orderData.docCode + '\n';
    body += 'TEXT ang10bpt.cpf 0 0 30  รหัสลูกค้า ' + orderData.customerCode + ' S/M: ' + orderData.salesmanCode + ' ' + orderData.salesmanName + '\n';
    body += 'TEXT ang10bpt.cpf 0 0 60  ผู้ซื้อ ' + orderData.customerName + '\n';
    body += 'RIGHT\n';
    body += 'TEXT ang10bpt.cpf 0 0 90  รหัส' + this.formatText1('จำนวน', 26, 'r') + this.formatText1('ราคา', 32, 'r') + this.formatText1('จำนวนเงิน', 32, 'r') + '\n';
    body += 'TEXT ang10bpt.cpf 0 0 100  ' + this.txtDup('_', 63) + '\n';
    body += 'PRINT\n';

    for (let product of orderData.product) {
      body += '! 0 200 200 50 1\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  '
        + product.productCode
        + this.formatText1(product.qty + '/' + product.qtyp, 16, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.productPrice), 22, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(product.total), 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 15  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    for (let premiumProduct of orderData.premiumProduct) {
      body += '! 0 200 200 50 1\n';
      body += 'RIGHT\n';
      body += 'TEXT ang14bpt.cpf 0 0 0  '
        + premiumProduct.premiumProductCode
        + this.formatText1(premiumProduct.qty + '/' + premiumProduct.qtyp, 16, 'r')
        + this.formatText1(this.numberWithCommasAndDecimal(premiumProduct.premiumProductPrice), 22, 'r')
        + this.formatText1('0.00', 22, 'r') + '\n';
      body += 'TEXT ang10bpt.cpf 0 0 15  ' + this.txtDup('_', 63) + '\n';
      body += 'PRINT\n';
    }
    body += '! 0 200 200 220 1\n';
    body += 'RIGHT\n';
    body += 'TEXT ang14bpt.cpf 0 0 0  รวมเงิน' + this.formatText(this.numberWithCommasAndDecimal(orderData.total), 30, 'r') + '\n';
    body += 'TEXT ang14bpt.cpf 0 0 30  Vat  ' + vatNumber.toFixed(2) + '%' + this.formatText(this.numberWithCommasAndDecimal(orderData.vat), 30, 'r') + '\n';
    body += 'TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ' + this.formatText(this.numberWithCommasAndDecimal(orderData.total + orderData.vat), 30, 'r') + '\n';
    body += 'TEXT ang12bpt.cpf 0 0 80  =========\n';
    body += 'TEXT ang14bpt.cpf 0 0 110  สด\n';
    body += 'PRINT\n';

    return body;
  }

  billTail1(orderData, billType: string, isoId: string) {
    let vatNumber: number = 7;
    let tail: string = '';
    tail += '! 0 200 200 560 1\n'
    tail += 'RIGHT\n';
    tail += 'TEXT ang14bpt.cpf 0 0 0  รวมเงิน' + this.formatText(this.numberWithCommasAndDecimal(orderData.total), 30, 'r') + '\n';
    tail += 'TEXT ang14bpt.cpf 0 0 30  Vat  ' + vatNumber.toFixed(2) + '%' + this.formatText(this.numberWithCommasAndDecimal(orderData.vat), 30, 'r') + '\n';
    tail += 'TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ' + this.formatText(this.numberWithCommasAndDecimal(orderData.total + orderData.vat), 30, 'r') + '\n';
    tail += 'TEXT ang12bpt.cpf 0 0 80  =========\n';
    tail += 'LEFT\n';
    tail += 'TEXT ang10bpt.cpf 0 0 140  ลงชื่อ' + this.txtDup('.', 80) + 'ผู้รับเงิน/เช็ค\n';
    tail += 'TEXT ang10bpt.cpf 0 0 190  ได้รับสินค้าตามรายการในเอกสารนี้ถูกต้องครบถ้วน\n';
    tail += 'TEXT ang10bpt.cpf 0 0 250  ลงชื่อ' + this.txtDup('.', 80) + 'ผู้ส่งสินค้า\n';
    tail += 'TEXT ang10bpt.cpf 0 0 310  ลงชื่อ' + this.txtDup('.', 80) + 'พนักงานขาย\n';
    tail += 'TEXT ang10bpt.cpf 0 0 370  ลงชื่อ' + this.txtDup('.', 80) + 'ผู้รับสินค้า\n';
    tail += 'TEXT ang10bpt.cpf 0 0 410  กำหนดเยี่ยมครั้งต่อไป        ' + orderData.nextMeetDate + '           ' + billType + '\n';
    tail += 'TEXT ang10bpt.cpf 0 0 450  1 : ' + orderData.orderDateTime + '               ' + isoId + '\n';
    tail += 'PRINT\n';
    return tail;
  }
  billTail2(orderData, billType: string) {
    let vatNumber: number = 7;
    let tail: string = '';
    tail += '! 0 200 200 190 1\n';
    tail += 'RIGHT\n';
    tail += 'TEXT ang14bpt.cpf 0 0 0  รวมเงิน' + this.formatText(this.numberWithCommasAndDecimal(orderData.total), 30, 'r') + '\n';
    tail += 'TEXT ang14bpt.cpf 0 0 30  Vat  ' + vatNumber.toFixed(2) + '%' + this.formatText(this.numberWithCommasAndDecimal(orderData.vat), 30, 'r') + '\n';
    tail += 'TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ' + this.formatText(this.numberWithCommasAndDecimal(orderData.total + orderData.vat), 30, 'r') + '\n';;
    tail += 'TEXT ang12bpt.cpf 0 0 80  =========\n';
    tail += 'TEXT ang10bpt.cpf 0 0 140  1 : ' + orderData.orderDateTime + '               F-ACC-018-01/07/05\n';
    tail += 'PRINT\n';
    return tail;
  }

  printBill3A(orderData): string {
    let billText: string = '';
    // let netTotal = orderData.netTotal;
    billText += this.billHeader1(orderData, 'ใบเสร็จรับเงิน/ใบกำกับภาษี');
    billText += this.billBody1(orderData);
    billText += this.billTail1(orderData, 'สด', 'F-ACC-022-01/08/15');
    billText += this.billBody3(orderData);
    console.log('ใบเสร็จรับเงิน/ใบกำกับภาษี\n');
    console.log(billText);
    console.log('\n');
    return billText;
  }
  printBill3B(orderData): string {
    let billText: string = '';
    // let netTotal = orderData.netTotal;
    billText += this.billHeader2(orderData, 'ใบเสร็จรับเงิน/ใบกำกับภาษี(ย่อ)');
    billText += this.billBody2(orderData);
    billText += this.billTail1(orderData, 'สด', 'F-ACC-022/1-01/08/15');
    billText += this.billBody3(orderData);
    console.log('ใบเสร็จรับเงิน/ใบกำกับภาษี(ย่อ)\n');
    console.log(billText);
    console.log('\n');
    return billText;
  }
  printBill3C(orderData): string {
    let billText: string = '';
    // let netTotal = orderData.netTotal;
    billText += this.billHeader1(orderData, 'ใบส่งสินค้า/ใบกำกับภาษี');
    billText += this.billBody1(orderData);
    billText += this.billTail1(orderData, 'เซ็นต์บิล', 'F-ACC-023-01/08/15');
    billText += this.billHeader1(orderData, 'ใบเสร็จรับเงิน/สำเนาใบกำกับภาษี');
    billText += this.billBody1(orderData);
    billText += this.billTail1(orderData, 'เซ็นต์บิล', 'F-ACC-023-01/08/15');
    console.log('ใบส่งสินค้า/ใบกำกับภาษี\n');
    console.log(billText);
    console.log('\n');
    return billText;
  }
  printBill3D(orderData): string {
    let billText: string = '';
    // let netTotal = orderData.netTotal;
    billText += this.billHeader2(orderData, 'ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)');
    billText += this.billBody2(orderData);
    billText += this.billTail1(orderData, 'เซ็นต์บิล', 'F-ACC-023/1-01/08/15');
    billText += this.billHeader2(orderData, 'ใบเสร็จรับเงิน');
    billText += this.billBody2(orderData);
    billText += this.billTail1(orderData, 'เซ็นต์บิล', 'F-ACC-023/1-01/08/15');
    console.log('ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)\n');
    console.log(billText);
    console.log('\n');
    return billText;
  }
  printBill3E(orderData): string {
    let billText: string = '';
    // let netTotal = orderData.netTotal;
    billText += this.billHeader3(orderData, 'ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)');
    billText += this.billBody1(orderData);
    billText += this.billTail2(orderData, 'สด');
    billText += this.billBody3(orderData);
    console.log('ใบส่งสินค้า/ใบกำกับภาษี(ย่อ)\n');
    console.log(billText);
    console.log('\n');
    return billText;
  }

  // end gen print

  private prepareText() {
    let mockData = this.mockDataForPrint();
    let headerText: string = '';
    let headerTextForSales: string = '';
    let docTypeText: string = '';
    let text: string = '';
    let premiumNumber: string = '0.00';

    // let type: string = 'สด';
    let type: string = 'เซ็นต์บิล';

    // prepareHeader
    headerText = this.prepareHeader(type);
    // prepareHeaderForSales
    headerTextForSales = this.prepareHeaderForSales(type);
    // prepareDocTypeText
    docTypeText = this.prepareDocType(type);
    /*
      // ช่วง 1 หัวใบเสร็จ
      text += '! 0 200 200 490 1\n';
      text += 'LEFT\n';
      text += 'TEXT ang11bpt.cpf 0 80 0 ' + headerText + '\n';
      text += 'PCX 0 0 !<Logo1.PCX\n';
      text += 'TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) C31708010001\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 75  สาขาที่ออกใบกำกับภาษี : สำนักงานใหญ่\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 105  2156 ถนนเพชรบุรีตัดใหม่                วันที่ 01/08/2017\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 135  แขวงบางกะปิ เขตห้วยขวาง   พนักงานขาย C317\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 165  กรุงเทพฯ10310 โทร.0-2318-0062 คลังสินค้า R382\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 195  ทะเบียนเลขที่ บมจ.389        รหัสลูกค้า 31200015\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 225  เลขประจำตัวผู้เสียภาษีอากร 0107537001421\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 255  TAX ID:3220500193897\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 285  ผู้ซื้อ นางอำนวย  พรมนา\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 315  27/2 ต.ปัถวี\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 345  อ.มะขาม จ.จันทบุรี22000\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 375  โทร:\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 400  ชื่อพนักงานขาย ปัญญา น้อยกลาง\n';// editable
   
      text += 'TEXT ang11bpt.cpf 0 0 425  รหัสสินค้า ชื่อสินค้า\n';
      text += 'RIGHT\n';
      text += 'TEXT ang11bpt.cpf 0 0 425  จำนวน\n';
      text += 'TEXT ang11bpt.cpf 0 0 450  ราคาขาย              ส่วนลด%       ลดบาท           จำนวนเงิน\n';
      text += 'TEXT ang10bpt.cpf 0 0 460  _______________________________________________________________\n';
      text += 'PRINT\n';
      // ช่วง 2 รายการสินค้าที่ซื้อ
      // รายการวินค้า
      for (let product of mockData.product) {
        text += '! 0 200 200 80 1\n';
        text += 'LEFT\n';
        text += 'TEXT ang14bpt.cpf 0 0 0  ' + product.productCode + ' ' + product.productName + '\n';
        text += 'RIGHT\n';
        text += 'TEXT ang14bpt.cpf 0 0 0  ' + product.qty + '/' + product.qtyp + '\n';
        text += 'TEXT ang14bpt.cpf 0 0 30  ' + product.productPrice + '              ' + product.discountPercent + '         ' + product.discount + '             ' + product.total + '\n';
        text += 'TEXT ang10bpt.cpf 0 0 45  _______________________________________________________________\n';
        text += 'PRINT\n';
      }
      // ถ้ามีของแถม (premiumProduct)
      if (mockData.premiumProduct.length > 0) {
        let premiumNumber: string = '0.00';
        for (let premium of mockData.premiumProduct) {
          text += '! 0 200 200 80 1\n';
          text += 'LEFT\n';
          text += 'TEXT ang14bpt.cpf 0 0 0  ' + premium.premiumProductCode + ' ' + premium.premiumProductName + '\n';
          text += 'RIGHT\n';
          text += 'TEXT ang14bpt.cpf 0 0 0  ' + premium.qty + '/' + premium.qtyp + '\n';
          text += 'TEXT ang14bpt.cpf 0 0 30  ' + premiumNumber + '              ' + premiumNumber + '         ' + premiumNumber + '           ' + premium.productCode + '\n';
          text += 'TEXT ang10bpt.cpf 0 0 45  _______________________________________________________________\n';
          text += 'PRINT\n';
        }
      }
   
      // ช่วงที่ 3 สรุปเงิน และ ลายเซ็น
      text += '! 0 200 200 560 1\n';
      text += 'RIGHT\n';
      text += 'TEXT ang14bpt.cpf 0 0 0  รวมเงิน                         58.32\n';// editable
      text += 'TEXT ang14bpt.cpf 0 0 30  Vat  7.00%                          4.08\n';// editable
      text += 'TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ                         62.40\n';// editable
      text += 'TEXT ang12bpt.cpf 0 0 80  =========\n';
      text += 'LEFT\n';
      // ช่วงที่ 4 ท้ายบิล ลายเซ็น
      text += 'TEXT ang10bpt.cpf 0 0 140  ลงชื่อ................................................................................ผู้รับเงิน/เช็ค\n';
      text += 'TEXT ang10bpt.cpf 0 0 190  ได้รับสินค้าตามรายการในเอกสารนี้ถูกต้องครบถ้วน\n';
      text += 'TEXT ang10bpt.cpf 0 0 250  ลงชื่อ................................................................................ผู้ส่งสินค้า\n';
      text += 'TEXT ang10bpt.cpf 0 0 310  ลงชื่อ................................................................................พนักงานขาย\n';
      text += 'TEXT ang10bpt.cpf 0 0 370  ลงชื่อ................................................................................ผู้รับสินค้า\n';
      text += 'TEXT ang10bpt.cpf 0 0 410  กำหนดเยี่ยมครั้งต่อไป        01/09/2017           ' + docTypeText + '\n';//editable
      text += 'TEXT ang10bpt.cpf 0 0 450  1 : 2017/08/01 14:28:38               F-ACC-022-01/08/15\n';// editable
      text += 'PRINT\n';
      // ช่วงที่ 5 หัวใบสำหรับ sales
      text += '! 0 200 200 155 1\n';
      text += 'LEFT\n';
      text += 'TEXT ang10bpt.cpf 0 0 0  วันที่ 01/08/2017 เลขที่: C31708010001\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 30  รหัส 31200015S/M:C317 ปัญญา น้อยกลาง\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 60  ผู้ซื้อ นางอำนวย  พรมนา\n';// editable
      text += 'RIGHT\n';
      text += 'TEXT ang10bpt.cpf 0 0 90  รหัส                 จำนวน                         ราคา                  จำนวนเงิน\n';
      text += 'TEXT ang10bpt.cpf 0 0 100  _______________________________________________________________\n';
      text += 'PRINT\n';
    */
    // ช่วงที่ 6 รายการสินค้า
    for (let product of mockData.product) {
      text += '! 0 200 200 50 1\n';
      text += 'RIGHT\n';
      text += 'TEXT ang14bpt.cpf 0 0 0  ' + product.productCode + '           ' + product.qty + '/' + product.qtyp + '        ' + product.productPrice + '             ' + product.total + '\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n';
      text += 'PRINT\n';
    }
    if (mockData.premiumProduct.length > 1) {
      for (let premium of mockData.premiumProduct) {
        text += '! 0 200 200 50 1\n';
        text += 'RIGHT\n';
        text += 'TEXT ang14bpt.cpf 0 0 0  ' + premium.premiumProductCode + '           ' + premium.qty + '/' + premium.qtyp + '          ' + premiumNumber + '            ' + premium.productCode + '\n';// editable
        text += 'TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n';
        text += 'PRINT\n';
      }
    }
    // 1

    /*
      // ช่วงที่ 6 รายการสินค้า
      // 1
      text += '! 0 200 200 50 1\n';
      text += 'RIGHT\n';
      text += 'TEXT ang14bpt.cpf 0 0 0  111013           0/1        1,050.00             29.16\n';// editable
      text += 'TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n';
      text += 'PRINT\n';
      // 2
      text += "! 0 200 200 50 1\n";
      text += "RIGHT\n";
      text += "TEXT ang14bpt.cpf 0 0 0  111021           0/1        1,050.00             29.16\n";// editable
      text += "TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n";
      text += "PRINT\n";
      // ช่วงที่ 7 ราคาสุทธิ
      text += "! 0 200 200 220 1\n";
      text += "RIGHT\n";
      text += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน                         58.32\n";// editable
      text += "TEXT ang14bpt.cpf 0 0 30  Vat  7.00% 4.08\n";// editable
      text += "TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ                         62.40\n";// editable
      text += "TEXT ang12bpt.cpf 0 0 80  =========\n";
      text += "TEXT ang14bpt.cpf 0 0 110  สด\n";// editable
      text += "PRINT\n";
    */
    return text;
  }

  private vanilaPrepareText() {
    let text: string = '';
    // ช่วง 1 หัวใบเสร็จ
    text += '! 0 200 200 490 1\n';
    text += 'LEFT\n';
    text += 'TEXT ang11bpt.cpf 0 80 0 ใบเสร็จรับเงิน/ใบกำกับภาษี\n'; // example
    text += 'PCX 0 0 !<Logo1.PCX\n';
    text += 'TEXT ang10bpt.cpf 0 0 45  บริษัท สหพัฒนพิบูล จำกัด(มหาชน) C31708010001\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 75  สาขาที่ออกใบกำกับภาษี : สำนักงานใหญ่\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 105  2156 ถนนเพชรบุรีตัดใหม่                วันที่ 01/08/2017\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 135  แขวงบางกะปิ เขตห้วยขวาง   พนักงานขาย C317\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 165  กรุงเทพฯ10310 โทร.0-2318-0062 คลังสินค้า R382\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 195  ทะเบียนเลขที่ บมจ.389        รหัสลูกค้า 31200015\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 225  เลขประจำตัวผู้เสียภาษีอากร 0107537001421\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 255  TAX ID:3220500193897\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 285  ผู้ซื้อ นางอำนวย  พรมนา\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 315  27/2 ต.ปัถวี\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 345  อ.มะขาม จ.จันทบุรี22000\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 375  โทร:\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 400  ชื่อพนักงานขาย ปัญญา น้อยกลาง\n';// editable

    text += 'TEXT ang11bpt.cpf 0 0 425  รหัสสินค้า ชื่อสินค้า\n';
    text += 'RIGHT\n';
    text += 'TEXT ang11bpt.cpf 0 0 425  จำนวน\n';
    text += 'TEXT ang11bpt.cpf 0 0 450  ราคาขาย              ส่วนลด%       ลดบาท           จำนวนเงิน\n';
    text += 'TEXT ang10bpt.cpf 0 0 460  _______________________________________________________________\n';
    text += 'PRINT\n';
    // ช่วง 2 รายการสินค้าที่ซื้อ
    // เอามา loop หาสินค้าทั้งหมด เพื่อแสดง
    // 1
    text += '! 0 200 200 80 1\n';
    text += 'LEFT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  111013 ฟลอเร่ขมิ้น\n';// editable
    text += 'RIGHT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  0/1\n';// editable
    text += 'TEXT ang14bpt.cpf 0 0 30  1,050.00              0.00         0.00             29.16\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 45  _______________________________________________________________\n';
    text += 'PRINT\n';
    // 2
    text += '! 0 200 200 80 1\n';
    text += 'LEFT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  111021 ฟลอเร่ว่านหางจระเข้\n';// editable
    text += 'RIGHT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  0/1\n';// editable
    text += 'TEXT ang14bpt.cpf 0 0 30  1,050.00              0.00         0.00             29.16\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 45  _______________________________________________________________\n';
    text += 'PRINT\n';
    // ช่วงที่ 3 สรุปเงิน และ ลายเซ็น
    text += '! 0 200 200 560 1\n';
    text += 'RIGHT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  รวมเงิน                         58.32\n';// editable
    text += 'TEXT ang14bpt.cpf 0 0 30  Vat  7.00%                          4.08\n';// editable
    text += 'TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ                         62.40\n';// editable
    text += 'TEXT ang12bpt.cpf 0 0 80  =========\n';
    text += 'LEFT\n';
    // ช่วงที่ 4 ท้ายบิล ลายเซ็น
    text += 'TEXT ang10bpt.cpf 0 0 140  ลงชื่อ................................................................................ผู้รับเงิน/เช็ค\n';
    text += 'TEXT ang10bpt.cpf 0 0 190  ได้รับสินค้าตามรายการในเอกสารนี้ถูกต้องครบถ้วน\n';
    text += 'TEXT ang10bpt.cpf 0 0 250  ลงชื่อ................................................................................ผู้ส่งสินค้า\n';
    text += 'TEXT ang10bpt.cpf 0 0 310  ลงชื่อ................................................................................พนักงานขาย\n';
    text += 'TEXT ang10bpt.cpf 0 0 370  ลงชื่อ................................................................................ผู้รับสินค้า\n';
    text += 'TEXT ang10bpt.cpf 0 0 410  กำหนดเยี่ยมครั้งต่อไป        01/09/2017           สด\n';//editable
    text += 'TEXT ang10bpt.cpf 0 0 450  1 : 2017/08/01 14:28:38               F-ACC-022-01/08/15\n';// editable
    text += 'PRINT\n';
    // ช่วงที่ 5 หัวใบสำหรับ sales
    text += '! 0 200 200 155 1\n';
    text += 'LEFT\n';
    text += 'TEXT ang10bpt.cpf 0 0 0  วันที่ 01/08/2017 เลขที่: C31708010001\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 30  รหัส 31200015S/M:C317 ปัญญา น้อยกลาง\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 60  ผู้ซื้อ นางอำนวย  พรมนา\n';// editable
    text += 'RIGHT\n';
    text += 'TEXT ang10bpt.cpf 0 0 90  รหัส                 จำนวน                         ราคา                  จำนวนเงิน\n';
    text += 'TEXT ang10bpt.cpf 0 0 100  _______________________________________________________________\n';
    text += 'PRINT\n';
    // ช่วงที่ 6 รายการสินค้า
    // 1
    text += '! 0 200 200 50 1\n';
    text += 'RIGHT\n';
    text += 'TEXT ang14bpt.cpf 0 0 0  111013           0/1        1,050.00             29.16\n';// editable
    text += 'TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n';
    text += 'PRINT\n';
    // 2
    text += "! 0 200 200 50 1\n";
    text += "RIGHT\n";
    text += "TEXT ang14bpt.cpf 0 0 0  111021           0/ 1        1, 050.00             29.16\n";// editable
    text += "TEXT ang10bpt.cpf 0 0 15  _______________________________________________________________\n";
    text += "PRINT\n";
    // ช่วงที่ 7 ราคาสุทธิ
    text += "! 0 200 200 220 1\n";
    text += "RIGHT\n";
    text += "TEXT ang14bpt.cpf 0 0 0  รวมเงิน                         58.32\n";// editable
    text += "TEXT ang14bpt.cpf 0 0 30  Vat  7.00% 4.08\n";// editable
    text += "TEXT ang14bpt.cpf 0 0 60  รวมเงินสุทธิ                         62.40\n";// editable
    text += "TEXT ang12bpt.cpf 0 0 80  =========\n";
    text += "TEXT ang14bpt.cpf 0 0 110  สด\n";// editable
    text += "PRINT\n";
  }

  private prepareHeader(type) {
    if (type === 'สด') {
      return 'ใบเสร็จรับเงิน/ใบกำกับภาษี';
    } else if (type === 'เซ็นต์บิล') {
      return 'ใบส่งสินค้า/ใบกำกับภาษี';
    }
  }

  private prepareHeaderForSales(type) {
    if (type === 'สด') {
      return '';
    } else if (type === 'เซ็นต์บิล') {
      return 'ใบเสร็จรับเงิน/สำเนาใบกำกับภาษี';
    }
  }

  private prepareDocType(type) {
    if (type === 'สด') {
      return 'สด';;
    } else if (type === 'เซ็นต์บิล') {
      return 'เซ็นต์บิล';;
    }
  }


}
