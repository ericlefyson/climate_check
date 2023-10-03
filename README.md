# Local Temperature Monitoring Project

## Overview

This project is designed to monitor and display local temperature data using an ESP32 microcontroller for data acquisition, a Node.js server with Express for the back-end, and an HTML/JavaScript front-end to display the temperature data in real-time.

## Project Components

### Hardware Components

- **ESP32 Microcontroller**: The ESP32 will be used to collect temperature data from a sensor (e.g., DHT22) and send it to the Node.js server via Wi-Fi.

### Back-End

- **Node.js**: We use Node.js as the back-end environment to create a server that will handle incoming temperature data and respond to client requests.

- **Express.js**: Express is a minimalist web framework for Node.js that simplifies handling HTTP requests and routes.

### Front-End

- **HTML/CSS**: We create a basic HTML page with CSS for the user interface to display the temperature data.

- **JavaScript**: JavaScript is used to make asynchronous requests to the server and update the temperature reading in real-time.

## Setup Instructions

Follow these steps to set up and run the project:

1. **ESP32 Configuration**: Connect a temperature sensor (e.g., DHT22) to the ESP32, and configure it to read temperature data.

2. **Node.js Server**:

   - Clone this repository to your local machine.
   - Navigate to the `backend` directory.
   - Install dependencies by running `npm install`.
   - Start the server with `node server.js`.

3. **Front-End**:

   - Open the `index.html` file in your web browser.

4. **ESP32 Configuration**:

   - Program the ESP32 with code to read temperature data and send it to the server's endpoint (e.g., `/temperature`) using Wi-Fi.

5. **View Temperature Data**:

   - The temperature data from the ESP32 will be displayed in real-time on the web page.

## API Endpoints

- `/temperature`: Endpoint to receive temperature data from the ESP32. The ESP32 should send temperature data as JSON to this endpoint.

## Additional Notes

- Make sure to update the ESP32 code with the correct Wi-Fi credentials and server endpoint.
- You can customize the front-end interface and styling as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by the need to monitor local temperature data for various applications.
- Thanks to the open-source community for providing valuable tools and libraries.