# HomeAway
**HomeAway** is an open source vacation home reservation application.
> **This repository** is responsible for the reviews service that displays customer reviews on a particular listing and any replies made to those reviews by the host posting said listing

## Technologies
> This service is created with :
- **Node Package Manager**    v6.14.5
- **React.js / React DOM**    v16.13.1
- **Node.js**    v12.18.2
- **Moment.js**    v2.27.0
- **MongoDB**    v4.2.7
- **Mongoose**    v5.9.19
- **react-router-dom**    v5.2.0
- **styled-components**   v5.1.1

## Getting Started
> A version of this service is available on [DockerHub](https://hub.docker.com/r/jzhengcode/fec-reviews-component_web), which can be used for easier **deployment** if needed

- To **Install Required Dependencies** :
  ```npm install```

- To **seed sample data** onto the database :
  ```npm run seedDB```

- To configure AWS S3
  - Create a .config.js file in the root directory
  - Enter the following in your configuration file:
    ```
    const keyId = YOUR S3 KEYID;
    const accessKey = YOUR SECRET ACCESS KEY;

    module.exports.keyId = keyId;
    module.exports.accessKey = accessKey;
- To compile the client bundle using **Webpack** :
  ```npm run watch```

- To start the server using **Nodemon** (default port is 3002):
  ```npm run server```

## Related Projects
- [Reservation Service](https://github.com/Team-Danger/Reservation-Component) by Will Park
- [Description Service](https://github.com/Team-Danger/FEC-Description-Component) by Paul O'Day
