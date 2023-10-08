# Send Messages for Forest Ranger

Our project focuses on the creation and development of an innovative software designed to provide immediate alerts about nearby wildfires. We have combined cutting-edge technology with wildfire detection systems to offer communities a vital safety tool.

Our software continuously monitors environmental conditions and accurately detects the presence of wildfires. When a nearby wildfire is detected, the system automatically triggers an alert mechanism that notifies individuals at risk via SMS messages. This feature is essential for ensuring the safety of communities by enabling them to take preventative actions quickly and effectively.

With our software, we are committed to providing a comprehensive solution for early wildfire detection and the protection of lives and properties. We take pride in contributing to community safety by empowering them to receive immediate alerts in critical situations. Our mission is to make the world a safer place and protect those who matter most."

## Requirements

- Node.js v18.18.0

## Installation

1. Clone this repository:

```bash
git clone https://github.com/ale4a/send-messages
```

Navigate to the project directory

```bash
cd send-message
```

Install the dependencies using npm:

```bash
npm install
```

Run de project

```bash
npm start
```

## Configura the .env file

This file should be have

```bash
SID=xxxxxxx
AUTH_TOKEN=xxxxxx
PHONE=xxxxxx
```

get this data using https://www.twilio.com/en-us

## Example for to access to the enpoint

```bash
http://192.168.31.30:3000/api/send-message/?lat=40.7128&long=74.0060
```

In the query params is important to send

1. lat: latitude
2. long: longitude
