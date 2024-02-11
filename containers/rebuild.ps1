# pasteable
podman machine start
podman rm -f bernso_container
podman build -f .\Containerfile -t bernso:latest
podman run --rm -d -p 8080:80 --name bernso_container bernso:latest