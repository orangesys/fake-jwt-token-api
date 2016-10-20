#fake-jwt-token-api

#### npm install

#### npm start

#### create consumerid

>```bash
http POST http://127.0.0.1:8124/create?rp=10d
HTTP/1.1 200 OK
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: OPTIONS, POST
Access-Control-Allow-Origin: *
Access-Control-Request-Method: *
Connection: keep-alive
Content-Type: application/json
Date: Thu, 20 Oct 2016 08:14:05 GMT
Transfer-Encoding: chunked
{
    "consumerId": "kebgaf",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmM2YxYTNiZjk3OGU0MWU3YWQ2NTdmOGVmNDVkY2Y2YSJ9.TLkEYpBlKrDAc2KEDxNO73edz-bXJ6XH1rqx8LimtkY"
}
>```
