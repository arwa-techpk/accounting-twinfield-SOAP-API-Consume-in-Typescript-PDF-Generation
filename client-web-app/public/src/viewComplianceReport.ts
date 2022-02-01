'use strict'



const ComplianceGenerator = require('./reportsModule/createComplianceReport.ts')

const complianceData = {
   
    documentPrepareFor:[
        'Susan McKay', 
        'Home Pro LLC dba', 
        'Pro Housepainting',
        '88 Wood Dr',
        'Houston Tx 77039'],
    documentPrepareBy:[
        'Wade Millward',
        'Rikor Insurance Consultancy',
        'wade.milward@rikor.io',
        '801-210-0406'
    ],
    franchisorRiskProfile:[
        'Pro Housepainting'
    ],
  
    reportNumber: 1234,
    summaryRecommendations:'Rikor uses proprietary software and algorithms to analyze your policy to best protect your business investments from risks inherent to your industry. The following issues have been summarized here, but detailed recommendations are included in this report. The representative who sent you this report will help you move forward. These recommendations will <bold> protect you and your franchisor </bold> meet your minimum insurance requirements',
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
        },
        {
            name:'Workers Comp',
            analysis:'Coverage Missing'
        },
        {
            name:'Umbrella',
            analysis:'Coverage Missing'
        },
        {
            name:'EPLI',
            analysis:'Too Low'
        },
        {
            name:'Crime',
            analysis:'Coverage Missing'
        }
    ],
    detailedReport:'Rikor has produced this detailed report to indicate the field values that either expose your franchise to risk or do not meet the insurance requirements of your franshisor. This analysis is not generic, these values are tailored to your franchise and the riske profiel set by the franhisor.',
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
            name:'Auto',
            analysis:[
                'Non-compliant',
                'Need hired & non-owned auto',
                'Need any auto coverage'
            ]
        },
        {
            name:'Work Comp',
            analysis:[
                'Non-compliant',
                'Need in-force workers compensation policy'
            ]
        },
        {
            name:'Umbrella',
            analysis:[
                'Non-compliant',
                'Need in-force umbrella or excess liability policy in the amount of $1,000,000'
            ]
        },
        {
            name:'EPLI',
            analysis:[
                'Non-compliant',
                'Need coverage equal to or greater than $1,000,000'
            ]
        },
        {
            name:'Crime',
            analysis:[
                'Non-compliant',
                'Need coverage equal to or greater than $100,000'
            ]
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