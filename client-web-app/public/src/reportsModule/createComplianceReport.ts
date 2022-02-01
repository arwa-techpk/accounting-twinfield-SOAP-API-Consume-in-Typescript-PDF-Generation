
//As you can see this is starting to become a bit bigger and bigger. The completed file would look something like this:

const PDFGenerator = require('pdfkit')
const fs = require('fs');


let themeFontBold='Helvetica-Bold'
let themeFontBoldItalic='Times-BoldItalic'
let themeFont='Helvetica';
let alertColor='#e95931';
let fontSize=12;


class ComplianceReportGenerator {
    constructor(compliance) {
        this.compliance = compliance
    }
    generateHeaders(doc) {
        // Fit the image in the dimensions, and center it both horizontally and vertically
        doc.image('./logoRikor.jpg', 200, 50, { width:200, align: 'center', valign:'center'});
        
        doc.fontSize('25').font(themeFont)
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
            .fontSize(10).font(themeFontBold)
            .text('Document Prepared for:', 100, tableTop, {bold: true})
            .text('Document Prepared By:', 350, tableTop, {bold: true})
            .moveDown().moveDown().font(themeFont)
           

        const documentPrepareFor = this.compliance.documentPrepareFor;
        const documentPrepareBy = this.compliance.documentPrepareBy;
        const franchisorRiskProfile = this.compliance.franchisorRiskProfile;
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
        .fontSize(10).fillColor('black').font(themeFontBold)
        .text('Franchisor Risk Profile:', 100, yDPFor)
        .moveDown().moveDown().font(themeFont)
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
        var img = doc.openImage('../images/footerBg.png');
        var imageHeight=(img.height/img.width)*doc.page.width;
        imageHeight=doc.page.height-imageHeight;
        doc.image('../images/footerBg.png', 0,imageHeight, { width: doc.page.width, align: 'center', valign:
'center'});
        doc
            .fontSize(16)
            .fillColor('white').font(themeFontBold)
            .text('Wade Millward', 50, imageHeight+10, {
                align: 'left'
            })
            doc
            .fontSize(16).font(themeFont)
            .text('wade.millward@rikor.io', 170, imageHeight+10, {
                align: 'left'
            })
        
            doc
            .fontSize(10)
            .text('(801) 210-0406', 50, imageHeight+30, {
                align: 'left'
            })
           let reportName=`COMPLIANCE REPORT: ${this.compliance.reportNumber}`;
            doc
            .fontSize(10)
            .text(reportName, 150,  doc.page.height-40, {
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
        .font(themeFontBold)
        doc.text('Summary Recommendations >>', {
            align: 'justify'
        }).moveDown(1);
        
        let sumRecm=this.compliance.summaryRecommendations;
        const startBold = sumRecm.indexOf('<bold>');
        const endbold = sumRecm.indexOf('</bold>');
        
        doc.fontSize('9')
        .font(themeFont)
        .text(sumRecm.slice(0, startBold-6), {
         
          continued: true
        })
        .font(themeFontBoldItalic)
        .text(sumRecm.slice(startBold+6, endbold),{continued: true})
        .font(themeFont)
        .text(sumRecm.slice(endbold+7));

        doc.moveDown(3);


    }
    secondPageAudit(doc){
        
        var firstColumnX=doc.page.margins.left;
        const tableTop = doc.y;
        

        doc
            .fontSize(10)
            .font(themeFontBold)
            .text('Compliance Audit:', firstColumnX, tableTop)
            .text('Total Policy Issues:', firstColumnX+((170+10)*1), tableTop)
            .text('Current Status Policy Issues:', firstColumnX+((170+10)*2), tableTop)
            .moveDown().moveDown()
            .font(themeFont)
           
            doc
            .fontSize(15)
            .fillColor(alertColor)
            .text(this.compliance.totalPolicyIssues, firstColumnX+((170+10)*1), tableTop+15);

            doc
            .fontSize(15)
            .fillColor(alertColor)
            .text(this.compliance.currentStatus, firstColumnX+((170+10)*2), tableTop+15)

        const complianceAudit = this.compliance.complianceAudit;
        
        let i = 0
        let yDPFor =0

        for (i = 0; i < complianceAudit.length; i++) {
            const item = complianceAudit[i]
            yDPFor = tableTop + 15 + (i * 15)

            doc
                .fontSize(10)
                .fillColor('grey')
                .text(item, firstColumnX, yDPFor)
               
        }
    }
    secondPageLiability(doc){
        
        var firstColumnX=doc.page.margins.left;
        var firstRowY=doc.y;
        var boxWidth=170;
        let boxHeight=170;
        var positionX=firstColumnX+15;
        var positionY=firstRowY +15;

        var currentColumn=firstColumnX;
        var currentRow=firstRowY;
        let columnIndex=0;
        for (let i = 0; i < this.compliance.complianceSummaryFactors.length; i++) {
            
            doc.rect(currentColumn,currentRow, boxWidth, boxHeight).fill('#2a2a2a');
                var analysis=this.compliance.complianceSummaryFactors[i].analysis;
                var colorcode=analysis=='Compliant'?'white':alertColor;

                doc.fontSize(15).fillColor('white')
                        .text(this.compliance.complianceSummaryFactors[i].name, positionX,positionY)
                        .moveDown(3).fontSize(12)
                        .text('Analysis:').moveDown(0.5).fillColor(colorcode)
                        .text(analysis);

                    
                        if(i!=0 && (i+1)%3==0){
                            positionX=firstColumnX+15;
                            currentRow=currentRow +(boxWidth+10);
                            positionY=currentRow +15;
                            currentColumn=firstColumnX;
                            columnIndex=0;
                        }else{
                            columnIndex++;
                            currentColumn=firstColumnX+((boxWidth+10)*columnIndex);
                            positionX=positionX+boxWidth+10;
                        }
        }
       
    }

    generateSecondPageFooter(doc) {
        var img = doc.openImage('../images/footer-logo.png');
        var imageHeight=(img.height/img.width)*doc.page.width;
        imageHeight=doc.page.height-imageHeight;
        doc.image('../images/footer-logo.png', doc.page.width/2, doc.page.height-doc.page.margins.bottom-45, {fit: [20, 20],  align: 'center', valign:
'center'});
            doc.fillColor('black')
            .fontSize(8)
            .text('Confidential Report | Do Not Distribute | Prepared by Rikor | Insurance Consultanctu | Proprietary Report'
            , doc.page.margins.left,  doc.page.height-doc.page.margins.bottom-20,
             {
                align: 'center'
            })               
    }

    detailedReportSummary(doc){

        
        doc.fontSize('12').font(themeFontBold)
        doc.text('Detailed Report >>', {
            align: 'justify'
        }).moveDown(1);
        let sumRecm=this.compliance.detailedReport;
        doc.fontSize('9').font(themeFont)
        .text(sumRecm);
        doc.moveDown(3);
    }
    detailedReportFactors(doc){
       
        let detailFactors=this.compliance.complianceDetailFactors;

        for (let i = 0; i < detailFactors.length; i++) {
            doc.fillColor('black').font(themeFontBold).text(detailFactors[i].name);
           
            for (let k = 0; k < detailFactors.length; k++) {
                doc.fillColor(alertColor).font(themeFont).text(detailFactors[i].analysis[k]);
                
            }
            doc.moveDown(1)
        }
    }

    generate() {
        let theOutput = new PDFGenerator ({autoFirstPage: false})
        theOutput.addPage({
            margins: {right:20}
        });

        const fileName = `Compliance- ${Math.random()}.pdf`

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
        theOutput.moveDown()
        this.secondPageLiability(theOutput);
        this.generateSecondPageFooter(theOutput);

        // Third page

        theOutput.addPage({
            margins: {
                right:50,
                left:50,
                bottom:10,
                top:50
            }
        });

        this.detailedReportSummary(theOutput);
        this.detailedReportFactors(theOutput);
        this.generateSecondPageFooter(theOutput);
        // write out file
        theOutput.end()

    }
}

module.exports = ComplianceReportGenerator