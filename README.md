# meli-test

# Client
cd client/

<!-- install dependencies -->
npm i

<!-- run app - port must NOT be 8080 (server runs on 8080) -->
npm run serve -- --port ${port}

<!-- build -->
npm run build


# Server
cd server/

<!-- install dependencies -->
npm i

<!-- run serve -->
npm run pm2