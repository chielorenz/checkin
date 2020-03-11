# Checkin
Clone the repo, cd into the application folder and run `npm install`. 

Update `conf/datastores.js` by adding your local databse like: 
```
adapter: require('sails-mysql'),
url: 'mysql://root:username@localhost:port/db-name',
```

Then serve with `sails lift` it will run on default `localhost:1337`. 

## Endpoints examples:
- Get all users:
`GET localhost:1337/user`

- Add a user:
`POST localhost:1337/user?name=Luca&email=luca@luca.com&province=Padova&city=Padova&state=Italy&cap=33550&lat=41.666279&long=18.242070`

- Get all tips:
`POST localhost:1337/tip`

- Upvote a tip:
`POST localhost:1337/upvote/5`

## Framework
a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Mar 10 2020 22:23:52 GMT+0100 (GMT+01:00) using Sails v1.2.3.