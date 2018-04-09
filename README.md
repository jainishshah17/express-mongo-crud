Node.js, Express & MongoDB: Simple Add, Edit, Delete, View (CRUD)
========

A simple and basic CRUD application (Create, Read, Update, Delete) using Node.js, Express, MongoDB & EJS Templating Engine.

**Start MongoDB server**

```
sudo service mongod start
```

**Check MongoDB server status**

```
sudo service mongod status
```

**Go to MongoDB shell**

```
mongod
```

**Show databases**

```
show dbs
```

**Create database named "test"**

```
use test
```

**Create collection(table) named "users"**

```
> db.users.insert({name:"Jainish Shah", age:27, email:"jainishshah@yahoo.com"})
> db.users.insert({name:"Elon Mask", age:46, email:"elonm@tesla.com"})
> db.users.insert({name:"Jack Ma", age:53, email:"jackm@alibaba.com"})
```

**Query collection**

```
> db.users.find().pretty()
{
	"_id" : ObjectId("5acad2bc9cf54e14bc589de9"),
	"name" : "Jainish Shah",
	"age" : 27,
	"email" : "jainishshah@yahoo.com"
}
{
	"_id" : ObjectId("5acad2c39cf54e14bc589dea"),
	"name" : "Elon Mask",
	"age" : 46,
	"email" : "elonm@tesla.com"
}
{
	"_id" : ObjectId("5acad2ca9cf54e14bc589deb"),
	"name" : "Jack Ma",
	"age" : 53,
	"email" : "jackm@alibaba.com"
}
```
