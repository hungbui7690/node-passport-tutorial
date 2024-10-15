- express
- express-session
- passport
- passport-local
- bcryptjs


### express-session
The `express-session` package enables us to create sessions and set cookies when our users are logged in. This allows the login to persist across multiple pages of the application.


```js
app.use(session({ 
   secret: process.env.SECRET
}));
```


```js
app.use(passport.initialize());
app.use(passport.session());
```



