FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Cloud Run defaults to PORT 8080, but app might use 3000. 
# We should ensure the app uses process.env.PORT
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
