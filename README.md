## DevTinder

- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route= / Body > RouteChildren
- Create an outlet in your body Component
- Create a footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials: true
- Whenever you're making API call so pass axios => {withCredentials:true}
- install react-redux + @reducxjs/toolkit 
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- you should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on saveing the profile
- New Page- See all my connections
- New Page - See all my connection Requests
- Accept or reject connetion request


Remaining : 
- Send/ignore user card from
- signup new user
- E2E testing


# Deployment:

- Signup on AWS
- Launch instance
- give permissions for key
- do ssh into VM
- Install Node with exact version
- Git clone
- Frontend
  - npm install -> Installs dependencies
  - npm run build
  - sudo apt update
  - sudp apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - Enable port :80 of your instance
- Backend
  - allowed ec2 instance public IP on mongodb server
  - npm install pm2 -g
  - pm2 start npm -- start
  - pm2 logs (to check logs), pm2 list(to check list) - pm2 flush <name> (flushes logs)
  - pm2 stop <name>, pm2 delete <name>
  - TO start pm2 with a name: pm2 start npm --name "devtinder-backend" --start
  - config nginx - /etc/nginx/sites-available/default
  - restart nginx - sudo systemctl restart nginx
  - modify the BASE_URL in fronted project to "/api"
  


fronetend = http://3.27.95.229/
backend = http://3.27.95.229:3000/

Domain name = devtinder.com => 3.27.95.229

# Adding a custom domain name

    - purchased ddomain name from godaddy
    - signup on cloudflare & add a new domain name
    - change the nameservers on godaddy and point it to cloudflare
    - wait for sometime till the nameservers on godaddy are updated 

Frontend = devtinder.com
Backend - devtinder.com:7777 => devtinder.con/api






