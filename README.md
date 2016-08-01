# Basic Pi registration
This project is meant to facilitate a Raspberry pi workshop. It's a single purpose project. The basic premise of this project is to demonstrate using a Raspberry Pi as a NodeJS server.

The workshop will cover the following
* troubleshooting the Raspberry pi 3 nodejs install.
* Cloning of the web server code from github
* Running the web server
* Registering the Raspberry Pi with an external service 

## Requirements
* Raspberry Pi with an internet connection that is up to date
* Another computer that is on the same network that can reach the Raspberry pi
* Raspberry Pi with the Rasbian OS installed : [https://www.raspberrypi.org/downloads/noobs/](https://www.raspberrypi.org/downloads/noobs/)
* Raspberry Pi running in headless mode 

##Instructions to run on the Raspberry pi 3
1. First Install nodejs on the reasberry pi. The instructions to do this are below
1. Create a directory and clone this project 
  * git clone https://github.com/PeterPlatt/piRegProjectUI.git
1. Go to the directory and use nodeJS to run the server
  * npm install
  * node app.js
1. Using a computer that is on the same network do the following
  * Open up a browser and go to this url replacing the hostname with your Raspberry pi hostname or ip address and 3000 port http://{piHostName}:3000 ex : http://pi:3000
  * Should display a basic form webpage with Pi Registration  in the title 
1. Type in a message and press submit
  * Resulting page will display a UUID and a link to an AWS hosted nodeJS server that when clicked will display a JSON with that UUID and Message

## How to install nodejs on a Raspberry pi3
1. SSH to the Raspberry pi and do the following operations in the terminal
1. Add Nodejs repo to rapbian
  * curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
1. Install NodeJs
  * sudo apt-get install -y nodejs
1. Verify NodeJs code
  * node -v
  * Ex : v5.11.1


