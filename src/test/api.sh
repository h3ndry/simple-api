curl --request GET \
  --url http://localhost:1377/customers | jq

# Create Customers
curl --request POST \
  --url http://localhost:1377/customers \
  --header 'Content-Type: application/json' \
  --data '{ "firstName": "John", "lastName": "Doe", "email": "doe@ex.com", "address": {  "city": "One City",  "province": " One Province",  "country": "Hoho",  "zipCode": "0000" } }' \
  | jq

curl --request POST \
  --url http://localhost:1377/customers \
  --header 'Content-Type: application/json' \
  --data '{ "firstName": "Marry", "lastName": "Smith", "email": "smith@ex.com", "address": {  "city": "Perry",  "province": "Vurari",  "country": "Herere",  "zipCode": "9880" } }' \
  | jq


curl --request POST \
  --url http://localhost:1377/customers \
  --header 'Content-Type: application/json' \
  --data '{ "firstName": "Veri", "lastName": "Yoyo", "email": "doe@tt.com", "address": {  "city": "gagaie",  "province": "yoeiwa",  "country": "wewe",  "zipCode": "0808" } }' \
  | jq


curl --request POST \
  --url http://localhost:1377/customers \
  --header 'Content-Type: application/json' \
  --data '{ "firstName": "Rari", "lastName": "Sazi", "email": "sazi@err.com", "address": {  "city": "One City",  "province": " One Province",  "country": "country",  "zipCode": "0000" } }' \
  | jq
