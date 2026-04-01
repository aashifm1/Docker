# Docker (Container Application)

<img width="600" height="300" alt="image" src="https://github.com/user-attachments/assets/c4c400d3-c984-4256-8209-c687547bcf9c" />


## How to Build a Docker Image?

For creating docker image, we need Dockerfile

> The name should be **Dockerfile**

Inside Dockerfile,
- FROM --> from what image you are using i.e. node:20
- WORKDIR --> create a work directory i.e. /calculator-app
- COPY --> copy local files into image i.e. COPY server.js .
- EXPOSE --> tell the developer, in which port the service is running i.e. EXPOSE 5000
- CMD --> execute the command i.e. CMD ["node","server.js"]

### Build the Image
```bash
docker build -t image-name .
```

This will build the docker image

<img width="1079" height="384" alt="image" src="https://github.com/user-attachments/assets/916e7a43-e520-47dc-bc85-8d2103ad7507" />


### Run the Image in Container (No volume)

Running the image will run on a container which is created on the execution of the image

```bash
docker run -p 9002:5000 --name=container-name image-name

docker run -p 9002:5000 --name=calci-v1 calculator 
```
It will run the image in http://localhost:9002

## How to Create the Docker Volume?

```bash
docker volume create <volume-name>

docker volume create calci-vol
```

### Run the Image in Container (With Volume)
```bash
docker run -p 9002:5000 -v volume-name:/folder-name --name=whatever-name-you-want folder-name

docker run -p 9002:5000 -v calci-vol:/calci-storage --name=calci-v1 calculator 
```
## How to Check the things? 
```bash
docker <things> ls  # things refers to image, container,cvolume etc
```

## How to bind mount?

BInd mount is a concept of mounting the local storage to a Container  

```bash
docker run -p 9002:5000 -v path\to\local_vault:/calci-storage --name=calci-v1 calculator  
```

> For any reference, watch this detailed video: https://youtu.be/i8vnIi08UxQ
