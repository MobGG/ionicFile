import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { FilesProvider } from '../../providers/files/files';

declare var BTPrinter: any;

@IonicPage()
@Component({
	selector: 'page-printer',
	templateUrl: 'printer.html',
})
export class PrinterPage {
	printerList: any[] = [];

	constructor(
		private navCtrl: NavController,
		private file: FilesProvider,
		private loadingCtrl: LoadingController
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PrinterPage');
		// "1101001000010011100110110011100101100011101011" 1
		// "1101001110011000100100100110111001100011101011" 11
		// "1101001000010011100110110011100101100011101011" 1
		// "1101001000011001110010110010111001100011101011" 2
	}

	listPrinter() {
		// DatecsPrinter.listBluetoothDevices(devices => {
		BTPrinter.list(devices => {
			console.log('list devices');
			console.log('devices', devices);
			this.printerList = devices;
		}, error => {
			console.error('error', error);
		});
	}

	connectPrinter(printerName) {
		let loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loader.present();
		BTPrinter.connect(
			success => {
				console.log('connect');
				console.log('success', success);
				loader.dismiss();
			},
			error => {
				console.error('error', error);
				loader.dismiss();
				alert('error');
			},
			printerName
		);
	}

	disconnectPrinter() {
		BTPrinter.disconnect(
			success => {
				console.log('discconect');
				console.log('success', success);
			}, error => {
				console.error('error', error);
			}
		);
	}

	printA() {
		let mockOrderData = this.file.mockOrderData();
		let text: string = '';
		text += this.file.printBill3A(mockOrderData);
		// call files and write text file
	}

	printB() {
		let mockOrderData = this.file.mockOrderData();
		let text: string = '';
		text += this.file.printBill3B(mockOrderData);
	}

	printC() {
		let mockOrderData = this.file.mockOrderData();
		let text: string = '';
		text += this.file.printBill3C(mockOrderData);
	}

	printD() {
		let mockOrderData = this.file.mockOrderData();
		let text: string = '';
		text += this.file.printBill3D(mockOrderData);
	}

	printE() {
		let mockOrderData = this.file.mockOrderData();
		let text: string = '';
		text += this.file.printBill3E(mockOrderData);
	}

	// WIP modify PrintText possible print Thai Lang from string text
	printText() {
		let textEng: string = 'Test\nEnglish\n';
		let textTh: string = 'ทดสอบภาษาไทย';

		BTPrinter.printText(
			success => {
				console.log('printText');
				console.log('success', success);
			}, error => {
				console.error('error', error);
			}, textTh);
	}

	printF51() {
		let doc: string;
		doc = this.file.genStockDoc(null, '51');
		this.download(doc, 'F51.txt', 'text/plain');
		doc = this.file.genStockDoc('C', '51');
		this.download(doc, 'F51C.txt', 'text/plain');
	}

	printF52() {
		let doc: string;
		doc = this.file.genStockDoc(null, '52');
		this.download(doc, 'F52.txt', 'text/plain');
		doc = this.file.genStockDoc('C', '52');
		this.download(doc, 'F52C.txt', 'text/plain');
	}

	printStockSummary() {
		let doc: string;
		doc = this.file.genStockSummaryDoc();
		this.download(doc, 'StockSummary.txt', 'text/plain');
	}

	// for test gen form delete after finish dev
	download(data, filename, type) {
		let file = new Blob([data], { type: type });
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else { // Others
			let a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(() => {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}
	}

	createFileBarcode() {
		let barcodeData: string = '';
		// print printer setting
		// barcodeData += "SELFTEST\n";

		// full text example
		// barcodeData += "! 0 200 200 210 1\n";
		// barcodeData += 'BARCODE 128 1 1 50 150 10 test1\n';
		// barcodeData += 'TEXT 7 0 210 60 test1\n';
		// barcodeData += 'VBARCODE 128 1 1 50 10 200 TEST1\n';
		// barcodeData += 'VTEXT 7 0 60 140 TEST1\n';
		// // barcodeData += 'FORM\n'; // ไม่ใส่ก็ได้
		// barcodeData += 'PRINT\n';

		barcodeData += "! 0 200 200 210 1\n";
		barcodeData += 'B 128 1 1 50 150 10 test1\n';
		barcodeData += 'T 7 0 210 60 test1\n';
		barcodeData += 'VB 128 1 1 50 10 200 TEST1\n';
		barcodeData += 'VT 7 0 60 140 TEST1\n';
		barcodeData += 'PRINT\n';

		this.file.writeFile(barcodeData);
	}

	createQRcode() {
		let qrcodeData: string = '';

		qrcodeData += '! 0 200 200 600 1\n';
		// qrcodeData += 'B QR 10 100 M 2 U 10\n';
		qrcodeData += 'B QR 10 100 M 2 U 12\n';
		// qrcodeData += 'MA,https://www.youtube.com/\n';
		qrcodeData += 'MA,00020101021129370016A000000677010111011300668641397555802TH540312353037646304C8E0\n';
		// qrcodeData += 'MM,AAC-42\n';
		qrcodeData += 'ENDQR\n';
		// qrcodeData += 'T 4 0 10 400 https://www.youtube.com/\n';
		qrcodeData += 'T 4 0 10 400 00020101021129370016A000000677010111011300668641397555802TH540312353037646304C8E0\n';
		
		// qrcodeData += 'FORM\n';
		qrcodeData += 'PRINT\n';

		this.file.writeFile(qrcodeData);
	}

	printFile() {
		let pathFile = '/storage/emulated/0/spc.dat';
		// BTPrinter.printText(
		BTPrinter.printFile(
			success => {
				console.log('printFile');
				console.log('success', success);
			}, error => {
				console.error('error', error);
			}, pathFile);
	}

}
