'use strict'



const ComplianceGenerator = require('./reportsModule/createComplianceReport.ts')

const complianceData = {
   
    documentPrepareFor:[
        'Azhar',
        'Arwa Insurance Consultancy'
    ],
    documentPrepareBy:[
        'Azhar',
        'Arwa Insurance Consultancy'
    ],
    franchisorRiskProfile:[
        'Pro Housepainting'
    ],
  
    reportNumber: 1234,
    summaryRecommendations:'Arwa uses proprietary software and algorithms to analyze your policy to best protect your business investments ',
    complianceAudit:[
        'Susan McKay', 
        'Home Pro LLC dba', 
        'Pro Housepainting',
        '88 Wood Dr',
        'Houston Tx 77039'
    ],
    totalPolicyIssues : 15,
    currentStatus: 'Non-complaint',
    complianceSummaryFactors:[
        {
            name:'Liability',
            analysis:'Compliant'
            
        },
        {
            name:'Auto',
            analysis:'Coverage Missing'
        }
    ],
    detailedReport:'Arwa uses proprietary software and algorithms to analyze your policy to best protect your business investments',
    complianceDetailFactors:[
        {
            name:'Insured',
            analysis:['Need to Verify']
        },
        {
            name:'Liability',
            analysis:['Compliant']
        },
        {
            name:'Additional Information',
            analysis:[
                'Additional Insured',
                'Certificate Holder'
            ]
        }
    ],
}

const ig = new ComplianceGenerator(complianceData);
let fileDestination = `../reports/Compliance- ${Math.random()}.pdf`
ig.generate(fileDestination)
