
//As you can see this is starting to become a bit bigger and bigger. The completed file would look something like this:

const PDFGenerator = require('pdfkit')
const fs = require('fs')

class InvoiceGenerator {
    constructor(invoice) {
        this.invoice = invoice
    }

    generateHeaders(doc) {
        const billingAddress = this.invoice.addresses.billing

       // doc
         //   .image('./company-logo.jpg',{ align: 'center'})
   // Fit the image in the dimensions, and center it both horizontally and vertically
doc.image('./logoRikor.jpg', 200, 50, { width:200, align: 'center', valign:
'center'});
           // .moveDown()  new line
            
    
        const beginningOfPage = 50
        const endOfPage = 550

                doc.fontSize('25')
        doc.text('Rikor Insurance Compilance Report', 100, 200, {
            align: 'justify'
        })

        doc.fontSize('7')
        doc.text('TM', 496, 200, {
            align: 'justify'
        })

    }

    generateTable(doc) {
        const tableTop = 270

        doc
            .fontSize(10)
            .text('Document Prepared for:', 100, tableTop, {bold: true})
            .text('Document Prepared By:', 350, tableTop, {bold: true})
            .moveDown().moveDown()
           

        const documentPrepareFor = this.invoice.documentPrepareFor;
        const documentPrepareBy = this.invoice.documentPrepareBy;
        const franchisorRiskProfile = this.invoice.franchisorRiskProfile;
        let i = 0
        let yDPFor =0

        for (i = 0; i < documentPrepareFor.length; i++) {
            const item = documentPrepareFor[i]
            yDPFor = tableTop + 25 + (i * 15)

            doc
                .fontSize(10)
                .fillColor('grey')
                .text(item, 100, yDPFor)
               
        }
         i = 0


        for (i = 0; i < documentPrepareBy.length; i++) {
            const item = documentPrepareBy[i]
            const y = tableTop + 25 + (i * 15)

            doc
                .fontSize(10)
                .fillColor('grey')
                
                .text(item, 350, y)
               
        }
        i = 0
        yDPFor=yDPFor+50
        doc
        .fontSize(10).fillColor('black')
        .text('Franchisor Risk Profile:', 100, yDPFor, {bold: true})
        .moveDown().moveDown()
        for (i = 0; i < franchisorRiskProfile.length; i++) {
            const item = franchisorRiskProfile[i]
            const y = yDPFor + 25 + (i * 15)

            doc
                .fontSize(10)
                .fillColor('grey')
                
                .text(item, 100, y)
               
        }
    }

    generateFooter(doc) {
        var img = doc.openImage('./footerBg.png');
        var imageHeight=(img.height/img.width)*doc.page.width;
        imageHeight=doc.page.height-imageHeight;
        doc.image('./footerBg.png', 0,imageHeight, { width: doc.page.width, align: 'center', valign:
'center'});
        doc
            .fontSize(16)
            .fillColor('white')
            .text('Wade Millward', 50, imageHeight+10, {
                align: 'left',
                bold: true
            })
            doc
            .fontSize(16)
            .text('wade.millward@rikor.io', 170, imageHeight+10, {
                align: 'left',
                bold: false
            })
        
            doc
            .fontSize(10)
            .text('(801) 210-0406', 50, imageHeight+30, {
                align: 'left'
            })
           
            doc
            .fontSize(10)
            .text('COMPLIANCE REPORT: V01.01', 150,  doc.page.height-40, {
                align: 'right',
                margins:{right:20}
            })  
            doc
            .fontSize(10)
            .text('Confidential Report | Do Not Distribute | Prepared by Rikor | Insurance Consultanctu | Proprietary Report', 50,  doc.page.height-20, {
                align: 'left'
            })               
    }

    secondPageSummary(doc){

        doc.fontSize('12')
        doc.text('Summary Recommendations >>', {
            align: 'justify'
        }).moveDown(1);

        doc.fontSize('9').text("Rikor users proprietary software and algorithms to analyze your policy")
        doc.moveDown(3);


    }
    secondPageAudit(doc){
        doc.text('Compliance Audit:').moveDown(1);
    }
    secondPageLiability(doc){
        
        var firstColumnX=doc.page.margins.left;
        var firstRowY=doc.page.height/2 -170;
        var boxWidth=170;
        let boxHeight=170;

        var secondRowY=firstRowY +(boxWidth+10);
        
        let secondColumnX=firstColumnX+(boxWidth+10);
        let ThirdColumnX=firstColumnX+((boxWidth+10)*2);

        
        doc.rect(firstColumnX,firstRowY, boxWidth, boxHeight)
   .fill('#2a2a2a');

   var positionX=firstColumnX+15;
    var positionY=firstRowY +15;

    
   doc.fontSize(15).fillColor('white')
        .text('Liability', positionX,positionY)
        .moveDown(3).fontSize(12)
        .text('Analysis:').moveDown(0.5)
        .text('Compliant' );

        doc.rect(secondColumnX,firstRowY, boxWidth, boxHeight)
   .fill('#2a2a2a');
 
    positionX=positionX+boxWidth+10;
    
   doc.fontSize(15).fillColor('white')
        .text('Auto', positionX,positionY)
        .moveDown(3).fontSize(12)
        .text('Analysis:').moveDown(0.5)
        .fillColor('#e95931')
        .text('Coverage Missing' );
doc.fillColor('white')
        doc.rect(ThirdColumnX,firstRowY, boxWidth, boxHeight)
   .fill('#2a2a2a');

   positionX=positionX+boxWidth+10;
  
   doc.fontSize(15).fillColor('white')
        .text('Workers Comp', positionX,positionY)
        .moveDown(3).fontSize(12)
        .text('Analysis:').moveDown(0.5)
        .fillColor('#e95931')
        .text('Coverage Missing' );

        
//second row

        
doc.rect(firstColumnX,secondRowY, boxWidth, boxHeight)
.fill('#2a2a2a');

var positionX=firstColumnX+15;
 var positionY=secondRowY +15;

 
doc.fontSize(15).fillColor('white')
     .text('Liability', positionX,positionY)
     .moveDown(3).fontSize(12)
     .text('Analysis:').moveDown(0.5)
     .text('Compliant' );

     doc.rect(secondColumnX,secondRowY, boxWidth, boxHeight)
.fill('#2a2a2a');

 positionX=positionX+boxWidth+10;
 
doc.fontSize(15).fillColor('white')
     .text('Auto', positionX,positionY)
     .moveDown(3).fontSize(12)
     .text('Analysis:').moveDown(0.5)
     .fillColor('#e95931')
     .text('Coverage Missing' );
doc.fillColor('white')
     doc.rect(ThirdColumnX,secondRowY, boxWidth, boxHeight)
.fill('#2a2a2a');

positionX=positionX+boxWidth+10;

doc.fontSize(15).fillColor('white')
     .text('Workers Comp', positionX,positionY)
     .moveDown(3).fontSize(12)
     .text('Analysis:').moveDown(0.5)
     .fillColor('#e95931')
     .text('Coverage Missing' );
    }

    generateSecondPageFooter(doc) {
     
            doc.fillColor('black')
            .fontSize(8)
            .text('Confidential Report | Do Not Distribute | Prepared by Rikor | Insurance Consultanctu | Proprietary Report'
            , doc.page.margins.left,  doc.page.height-doc.page.margins.bottom-20,
             {
                align: 'center'
            })               
    }

    generate() {
        let theOutput = new PDFGenerator ({autoFirstPage: false})
        theOutput.addPage({
            margins: {right:20}
        });

        const fileName = `../reports/Compliance- ${Math.random()}.pdf`
console.log(fileName)
        // pipe to a writable stream which would save the result into the same directory
        theOutput.pipe(fs.createWriteStream(fileName))

        this.generateHeaders(theOutput)

        theOutput.moveDown()

        this.generateTable(theOutput)

        this.generateFooter(theOutput)
        
        theOutput.addPage({
            margins: {
                right:50,
                left:50,
                bottom:20,
                top:50
            }
        });
        this.secondPageSummary(theOutput);
        this.secondPageAudit(theOutput);
        this.secondPageLiability(theOutput);
        this.generateSecondPageFooter(theOutput)
        // write out file
        theOutput.end()

    }
}

module.exports = InvoiceGenerator