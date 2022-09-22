// import everything from fetchAPI.js
// This will allow resources to be referenced as api.BASE_URL, etc.

//import soap from 'soap';


var soap = require('soap');
var AxiosInstance=require('axios');

var IProspectType =require('./types');



function fetchFinderXMl(){
  
const url = 'https://api.accounting2.twinfield.com/webservices/finder.asmx?op=ProcessXmlString';
const WSDL_CONTENT = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:twin="http://www.twinfield.com/"> <soapenv:Header> <twin:Header> <twin:AccessToken>eyJ0eXAiOiJJSUzI1NiIsIng1dCI6IjctV24wSGVKYWFka3pMTUN2N2lOVnRNblJ2YyIsImtpZCI6IjctV24wSGVKYWFka3pMTUN2N2lOVnRNblJ2YyJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnR3aW5maWVsZC5jb20vYXV0aC9hdXRoZW50aWNhdGlvbiIsImF1ZCI6Imh0dHBzOi8vbG9naW4udHdpbmZpZWxkLmNvbS9hdXRoL2F1dGhlbnRpY2F0aW9uL3Jlc291cmNlcyIsImV4cCI6MTY0MzI4ODMwMiwibmJmIjoxNjQzMjg0NzAyLCJjbGllbnRfaWQiOiJ5ZWxsb3dRIiwic2NvcGUiOlsib3BlbmlkIiwib2ZmbGluZV9hY2Nlc3MiLCJ0d2YudXNlciIsInR3Zi5vcmdhbmlzYXRpb25Vc2VyIiwidHdmLm9yZ2FuaXNhdGlvbiJdLCJzdWIiOiJleUpQY21kaGJtbHpZWFJwYjI1VmMyVnlJam9pTVRFNE5USXRNU0lzSWs5eVoyRnVhWE5oZEdsdmJrbGtJam9pTW1RME0yUmxOekV0TVdGak1DMDBaakUyTFdJMU9ERXRaalU0TVRKak5tWm1OV0prSW4wPSIsImF1dGhfdGltZSI6MTY0MzA1Mzk4NywiaWRwIjoiaWRzcnYiLCJ0d2Yub3JnYW5pc2F0aW9uVXNlckNvZGUiOiIxMTg1Mi0xIiwidHdmLm9yZ2FuaXNhdGlvbklkIjoiMmQ0M2RlNzEtMWFjMC00ZjE2LWI1ODEtZjU4MTJjNmZmNWJkIiwidHdmLm9yZ2FuaXNhdGlvbkNvZGUiOiJUS0hBQkMiLCJ0d2YuY2x1c3RlclVybCI6Imh0dHBzOi8vYXBpLmFjY291bnRpbmcyLnR3aW5maWVsZC5jb20iLCJhbXIiOlsiMmZhIl19.UmX72gD9zaCZ9mqZGKO452uSFOyzVmCT7MqA8grXrZ5OYO5XMdlURxM78tBuqdAoju-Vpa7Vmk-GKvwlrNfp3FMNLI2Bm8tkPuXtUFd83eLmMrGbZ5X6bQ-3FfCDuI9hR_1inP9zAWOZTNRBBq5dD1omV-JPNdlcxRl13Yc-OiMCXyQxzaZRA_-zMYwwgQosJJv1Wk6vDenMPppNdXaumn5RIHAQIHYQYe239rRHb4Y45Nxr6LlzjdT_j1Vl_kRSbLpUk3Zsg</twin:AccessToken> <twin:CompanyCode>11855T</twin:CompanyCode> </twin:Header> </soapenv:Header> <soapenv:Body> <twin:Search> <twin:type>IVT</twin:type> <twin:field>0</twin:field> <twin:firstRow>1</twin:firstRow> <twin:maxRows>10</twin:maxRows> <twin:pattern>*</twin:pattern> </twin:Search> </soapenv:Body> </soapenv:Envelope>';
console.log(WSDL_CONTENT)
  const resp=soap.createClient(url, WSDL_CONTENT, function(err, client){ //here second parameter
    if (err) throw(err);
    client.MyFunction(args, function(err, result){
        console.log(result);
    });
});
console.log(resp)
}
fetchFinderXMl();
// export {
//          fetchFinderXMl
// };



// document
//   .getElementById("addFinderButton")
//   .addEventListener("click", fetchFinderXMl);
// // Add event listener to the Add Product Button
