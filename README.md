# football-is-good

## **Football is Good App Documentation Routes**

```
List of Routes for User
```

Route         | HTTP | Header(s) | Body | Description
--------------|------|-----------|------|------------
/signin       |POST  |none       |name:String<br>(**Required**),<br>email:String<br>(**Required**),<br>password:String<br> (**Required**)|Sign in to the app
/signout      |POST   |none      |none|Sign out from the app

```
List of Routes Football Players Information
```

Route                  | HTTP | Header(s) | Params | Description
-----------------------|------|-----------|------|------------
/football/teams        |GET   |api-key    |name:String<br>(**Required**),<br>tag:String<br>(**Required**),<br>venue:String<br> (**Required**),<br>website:String<br>(**Required**) |Get all the list of teams player
/football/teams/:teamID |GET  |api-key    |name:String<br>(**Required**),<br>position:String<br>(**Required**),<br>nationality:String<br> (**Required**)  |Get all the list of teams profile

```
List of Routes Football's News
```

Route                                  | HTTP | Header(s) | Params | Description
---------------------------------------|------|-----------|--------|------------
/news/google-news/:title/:language     |GET   |api-key    |title:String<br>(**Required**),<br>language:String<br>(**Required**)  |Get all the list of news with certain language
/news/top-headlines/:country/:category |GET   |api-key    |country:String<br>(**Required**),<br>category:String<br>(**Required**)  |Get all the list of top headlines with certain country and category of teams
/news/google-news/:keyword/:language   |GET   |api-key    |keyword:String<br>(**Required**),<br>language:String<br>(**Required**)  |Get all the list of news with certain keyword and language

### **Setup**
To run this project, install it locally using npm:

```
$ npm init -y
$ npm install
    and install all required packages that you may need

```

