#!/bin/bash

##### BUILD

echo
echo "BUILD STARTED"
echo

# cd portal
# docker build -t image-to-build-portal . --no-cache

# docker run --name portal-node-build -v $PWD/../deploy/dist:/deploy/dist image-to-build-portal
# docker rm portal-node-build
# docker rmi image-to-build-portal

cd ../deploy
echo
echo "NEW TAG:"
read IMAGE_TAG
IMAGE_BASE="registry.dpi.inpe.br/dgi/catalog_app"
IMAGE_FULL="${IMAGE_BASE}:${IMAGE_TAG}"

docker build -t ${IMAGE_FULL} .
sudo rm -r dist
docker push ${IMAGE_FULL}
