# Bernso Local Development

```ps1
# build
podman build -f .\Containerfile -t bernso:latest
# run
podman run --rm -d -p 8080:80 --name bernso_container bernso:latest
# check
podman ps
# destroy
podman rm -f bernso_container
```

Rebuild from scratch

```ps1
podman rm -f bernso_container ; `
podman build -f .\Containerfile -t bernso:latest ; `
podman run --rm -d -p 8080:80 --name bernso_container bernso:latest
```
