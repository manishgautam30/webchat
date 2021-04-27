# Webchat -Application

### Online Chat Web Application to chat hosted on local server with the default port number 5500

## To Run Follow the steps below if you are using this code in the repository:

### 1.Fork repository and open it in your IDE( I Personally Used VsCode Editor).
### 2. Open a terminal and run command "npm init" and proceed to YES  
### 3. Now move to nodeserver directory or just simply run command "cd ./nodeServer/" 
### 4. Now get following dependencies installed:
 ####    a. use command "npm i nodemon"
 ####    b. use command "npm i socket.io" 
### 5. Run command "nodemon ./index.js" to start the server.
### 6. Now before you use your application ADD "Moesif Origin & CORS Changer" EXTENSION into your default browser(recommended and personally used GOOGLE CHROME) and turn it on. 
####   Link for the extension in CHROME browser -> https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc 
####   Link for the extension in CHROME browser -> https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh
####   Link for the extension in CHROME browser -> https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/
### 7. Now you are all set to GO LIVE (via VS Code Editor) || just simply goto your default browser and type the url - http://localhost:5500/ 


## If it throws an exception “execution of scripts is disabled on this system.” : Just Simply follow these Steps......
#### 1.Open Windows PowerShell with Run as Administrator
#### 2.Run this command: Set-ExecutionPolicy Unrestricted
