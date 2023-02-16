/*
 */
var MobileUA = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36";
var RequestHeaders = $request.headers;

var ResponseHeaders = $response.headers;
ResponseHeaders["User-Agent"] = MobileUA;
$done({ResponseHeaders});

RequestHeaders["User-Agent"] = MobileUA;
$done({RequestHeaders});
