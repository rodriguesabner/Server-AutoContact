
# Auto Contact

Add contacts directly from your server to your smartphone


## Tech Stack

**Server:** Node, Express

**Client:** https://play.google.com/store/apps/details?id=com.kingaspx.contatoswhatsapp

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/kingaspx/Server-AutoContact
```

Go to the project directory

```bash
  cd server-autocontact
```

Install dependencies

```bash
  npm install
  //or
  yarn install
```

Start the server

```bash
  npm run start
  //or
  yarn start
```

  
## API Reference

#### Get all contacts

```http
  GET /api/contacts
```

#### Create contact(s)

```http
  POST /api/contacts
```

#### CURL Example

```shell
curl --request POST \
  --url http://localhost:4747/api/contacts \
  --header 'Content-Type: application/json' \
  --data '{	
	"contacts": [		
		{"name": "Jhon Doe", "phone": "123456789"}
	]
}'
```

  
## Demo

![Peek 2021-05-06 10-17](https://user-images.githubusercontent.com/40338524/117304567-4438ef80-ae54-11eb-9a4a-82bafd639eed.gif)

  
## Feedback

If you have any feedback, please reach out to us at abnerodrigs@gmail.com

## Follow Me

<a href="https://instagram.com/rodriguesabner_"><img src="https://img.shields.io/badge/instagram-E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white"/></a>

  
## Donate


#### PIX
![Bradesco Pix](https://user-images.githubusercontent.com/40338524/117305365-11dbc200-ae55-11eb-9ee7-a57070e35c59.jpg)

#### Paypal
https://www.paypal.com/donate/?business=R75XW28TWYFAJ&currency_code=BRL

  
