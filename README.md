# DT-backend-challenge
 DT Backend challenge

 I have used Express(Node), MongoDB Atlas for this challenge.Run the app by giving the command node index.js in the terminal and then read through the following.

 ## The API end points are as follows:

Open Postman and type in the following urls once you've started the app.

1. Get document based on unique id.
Choose GET from the dropdown, type in 
http://localhost:3000/api/v3/app/events?id=:event_id in the url section(replace event_id with the id you want). Hit send.

2. Insert document into the db
Choose POST from the dropdown, type in 
http://localhost:3000/api/v3/app/events in the url section. 
Choose body -> raw -> json and type in the json for the document.
Hit send.

3. Delete document based on id
Choose DELETE from the dropdown, type in 
http://localhost:3000/api/v3/app/events/:id in the url section. Hit send.

4. Update document content based on the id entered
Choose PATCH from the dropdown, type in 
http://localhost:3000/api/v3/app/events/:id in the url section.
Choose body -> raw -> json and type in the json for the document.
Hit send.

