# Docker

## How to Build a Docker Image?

For creating docker image, we need Dockerfile

> The name should be **Dockerfile**

Inside Dockerfile,
- FROM --> from what image you are using i.e. node:20
- WORKDIR --> create a work directory i.e. /calculator-app
- COPY --> copy local files into image i.e. COPY server.js .
- EXPOSE --> tell the developer, in which port the service is running i.e. EXPOSE 5000
- CMD --> execute the command i.e. CMD ["node","server.js"]

### Build it
```bash
docker build -t image-name .
```

This will build the docker image

### Run the Image in Container (No volume)
```bash
docker run -p 9002:5000 --name=container-name image-name
```

## How to Create the Docker Volume?

```bash
docker volume create <volume-name>
```

### Run the Image in Container (With Volume)
```bash
docker run -p 9002:5000 --name=whatever-name-you-want folder-name
```
## How to Check the things? 
```bash
docker <things> ls  # things refers to image, container,cvolume etc
```
It will run the image in http://localhost:9002


> For any reference, watch this detailed video: https://youtu.be/i8vnIi08UxQ
