# lucas-rest-api
node.js CRUD APi

Install the dependecies from the package.json first with 'npm install' before running the API locally

HOW TO USE
1) Register new user
- Send POST request to /users with parameters as defined in the task requirement in JSON format

2) Get access token for existing user
-  Send POST request to /auth with parameter 'username' (case sensitive) in JSON format. System will return access token for usage of the rest of the API functions
 
3) Add auth token into request header
- Under "Authorization" property in request header, add the access token with prefix 'bearer' separated by blank space

For the rest of the API routes, please refer to the ./api/routes.config.js
