// import everything from fetchAPI.js
// This will allow resources to be referenced as api.BASE_URL, etc.

//import soap from 'soap';


var soap = require('soap');
var AxiosInstance=require('axios');

// var IProspectType =require('./types');

// import { AxiosInstance } from 'axios';
// import { WSDL } from 'soap';


// A WSDL in a string.
const WSDL_CONTENT = "...";

//const httpClient: AxiosInstance = /* ... instantiate ... */;
const url = 'http://example.org/SoapService.svc';
const httpClient = AxiosInstance.create({
    baseURL: 'https://api.accounting2.twinfield.com/webservices',
    timeout: 10000,
    headers: {'Content-Type': 'text/xml; charset=utf-8'}
  });


async function samplePostCall() {
  // objectToXML(object, typeName, namespacePrefix, namespaceURI, ...)
  const WSDL_CONTENT = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:twin="http://www.twinfield.com/"> <soapenv:Header> <twin:Header> <twin:AccessToken>eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjctV24wSGVKYWFka3pMTUN2N2lOVnRNblJ2YyIsImtpZCI6IjctV24wSGVKYWFka3pMTUN2N2lOVnRNblJ2YyJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnR3aW5maWVsZC5jb20vYXV0aC9hdXRoZW50aWNhdGlvbiIsImF1ZCI6Imh0dHBzOi8vbG9naW4udHdpbmZpZWxkLmNvbS9hdXRoL2F1dGhlbnRpY2F0aW9uL3Jlc291cmNlcyIsImV4cCI6MTY0MzI5MDMwNywibmJmIjoxNjQzMjg2NzA3LCJjbGllbnRfaWQiOiJ5ZWxsb3dRIiwic2NvcGUiOlsib3BlbmlkIiwib2ZmbGluZV9hY2Nlc3MiLCJ0d2YudXNlciIsInR3Zi5vcmdhbmlzYXRpb25Vc2VyIiwidHdmLm9yZ2FuaXNhdGlvbiJdLCJzdWIiOiJleUpQY21kaGJtbHpZWFJwYjI1VmMyVnlJam9pTVRFNE5USXRNU0lzSWs5eVoyRnVhWE5oZEdsdmJrbGtJam9pTW1RME0yUmxOekV0TVdGak1DMDBaakUyTFdJMU9ERXRaalU0TVRKak5tWm1OV0prSW4wPSIsImF1dGhfdGltZSI6MTY0MzA1Mzk4NywiaWRwIjoiaWRzcnYiLCJ0d2Yub3JnYW5pc2F0aW9uVXNlckNvZGUiOiIxMTg1Mi0xIiwidHdmLm9yZ2FuaXNhdGlvbklkIjoiMmQ0M2RlNzEtMWFjMC00ZjE2LWI1ODEtZjU4MTJjNmZmNWJkIiwidHdmLm9yZ2FuaXNhdGlvbkNvZGUiOiJUS0hBQkMiLCJ0d2YuY2x1c3RlclVybCI6Imh0dHBzOi8vYXBpLmFjY291bnRpbmcyLnR3aW5maWVsZC5jb20iLCJhbXIiOlsiMmZhIl19.E0AMsEQmKzwMMcVACnqx9dLgq1auFQYGr6AFC0JblyeCA5h3rDp97kMxCOvgEN94vMIJnz3eUttTfyBcPXsNe6rd2E1WS6sKQAEMv3wJ_1jZzpw2_no2fMjXIsizTBjPM5Om7_HVd8qRAnvUVpk_QrseYd0qsCeltY6D6bXpVxDdXiFvvRZM6J9ulaz6ouoxf26YXqNh7rp9-dmrqFKRzDX2vLrsh29vGeOBaRzTrxfr3YmT1jyl986ymQM2rt4Gxm4RvJu3xrPOJ5piRq6asvtCUE69MneEUCvm9UDhhx5hsgXLmJDojzwBfYYn2sTWtrqqWtF8RdclxuJ8NaBC0Q</twin:AccessToken> <twin:CompanyCode>11852T</twin:CompanyCode> </twin:Header> </soapenv:Header> <soapenv:Body> <twin:ProcessXmlDocument> <twin:xmlRequest><read><type>salesinvoice</type><office>11852T</office><code>INVOICE</code><invoicenumber>f-2022-0001</invoicenumber></read></twin:xmlRequest> </twin:ProcessXmlDocument> </soapenv:Body> </soapenv:Envelope>';

  const data = `<?xml version="1.0" ?>${WSDL_CONTENT}`;

  try {
    const response = await httpClient.post('processxml.asmx?op=ProcessXmlDocument',data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
   
  // Optionally, deserialize request and return response status.
}

samplePostCall();
// export {
//          fetchFinderXMl
// };



// document
//   .getElementById("addFinderButton")
//   .addEventListener("click", fetchFinderXMl);
// // Add event listener to the Add Product Button
