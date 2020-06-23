# Pitch-Finder

**Author**: Sean Murray, Sarah Shatto, Edgar Romero, Jonathon Lee
**Version**: 1.0.3

## Overview:
An app designed to connect players with open pickup games around in their local area.

## Getting Started:

### Step 1:
Once you have cloned the repo in the command line run:

```console
$ npm i
$ touch .env
```
### Step 2:
In the directory open the **.env** file and insert the following:

```
PORT=<openport>
DATABASE=db-url
AUTH0_DOMAIN=from-auth0
AUTH0_CLIENT_ID=from-auth0
AUTH0_CLIENT_SECRET=from-auth0
SECRET=express-sessions-secret
PARKS_API_KEY=seattle-parks-API-key
```

### Step 3:
From the root directory on the command line run the following commands:

```console
$ psql
```
```sql
# CREATE DATABASE dbname;
# \q
```
```console
$ psql -d dbname -f schema.sql
```
### Step 4:
To start the server run the following in the terminal:

```console
$ npm start
```

## Architecture:


### Libraries Used:
 - Express
 - EJS
 - dotenv
 - superagent
 - pg
 - express-sessions
 - passport
 - passport-auth0
 - method-override

## Change Log:

 - 06-19-2020 1600 App now uses OAUTH for user accounts and restricted route access.
 - 06-22-22 1800 App has ability to create and display events to the user and store them in the DB.
 
