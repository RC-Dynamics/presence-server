# presence-server
The serve for Presence using [KNoT](https://www.knot.cesar.org.br).

## Installation
In order to install the dependencies you only need to run:

`npm install`

It also need to have installed [NodeJS](https://nodejs.org) and [MongoDB](https://www.mongodb.com). It's working with `NodeJS v8.0.0` and `MongoDB v3.12.13`.

## Usage
1. `config.js` file into `/api/config` folder. This file needs to exports a JSON as it shows below.
```javascript
module.exports = {
	db: '', // URL to the database
	cesar_server: '', // URL to CESAR server
	user_uuid: '', // User UUID
	user_token: '', // User Token
	thing_uuid: '' // Thing UUID
}
```
2. KNoT-Gateway running and connected to the KNoT-Cloud;
3. At least one KNoT-Thing running and connected to KNoT-Gateway;
4. MongoDB running (run `mongod` on terminal);
5. To start the server run `node app.js` or `npm start`;
