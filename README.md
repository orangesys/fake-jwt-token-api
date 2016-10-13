#fake-jwt-token-api

#### npm install

#### npm start

#### get consumerid

```bash
curl 127.0.0.1:8124/?rp=40d
```

```
{"consumerId":" pmcyry"}
```

#### get jwt
```bash
http 127.0.0.1:8124/consumers/pmcyry/jwt
```
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json
Date: Thu, 13 Oct 2016 04:20:49 GMT
Transfer-Encoding: chunked

{
    "consumer_id": "976d25ea-5a90-48cc-96ac-edf59a71ad1e",
    "created_at": 1476332449495,
    "id": "e56fa3f3-eb13-459b-ad7e-51528df20068",
    "key": "14e553f3-3190-4966-8b7b-da750de62c71",
    "secret": "3b610df9-9c6d-45d9-934d-7929aeb3c7b4"
}
```
