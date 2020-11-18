FROM httpd:2.4

# contatact in case someone needs info
LABEL maintainer = "email"  

COPY . /usr/local/apache2/htdocs

# BUILD Dockerfile
#-> Docker build -t “mywebsite”:”1” .
# mywebsite name of the the container that I decide    
# t is tag is the version that allows us to define after “:”
# . means current folder
# Docker build -t “mywebsite”:”1”  -f ./Dockerfile2 .
# -f to defile which Dockerfile to use
# RUN Docker file
#-> Docker run -d -p 80:80 mywebsite:1