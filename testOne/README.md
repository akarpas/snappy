You have an array of user ids:


```var users = [“928g9”, “928g8”, “928d9”, “926g9”]```


You need to perform a database query for each of the user ids. The database query will return one user object that has the following structure:


{
  “Username”: “someString”,
  “Id”: “someString”,
  “Email”: “someEmail”,
  “firstName”: “Bill”,
  “lastName”: “Jones”
}


The database query is asynchronous and it will take X seconds to perform each query.


Using Javascript and any library that you feel comfortable with, write a program that for each entry in the users array, perform the query and with the result, send an email. Once the email is sent or failed, print a message to the console with the result returned.


Consider that the asynchronous method to call the database query is already abstracted in a method named getUserById.


Also consider that the asynchronous method to send emails is already abstracted in a method named sendEmail that returns a string with only the status. The status is 200 if the email was sent correctly and 500 if it failed.

