# pasteable

$mypath = $MyInvocation.MyCommand.Path
$MyNewPath = Split-Path $mypath -Parent
Set-Location $MyNewPath


$stateInfo = podman machine info --format json | convertfrom-json

if ($stateInfo.Host.MachineState -eq "Running"){
    Write-Host -foregroundcolor Green 'Podman-machine running'
}

if ($stateInfo.Host.MachineState -ne "Running"){
    Write-Host -foregroundcolor yellow 'Podman-machine not running: Staring-up'
    podman machine start
    $stateInfo = podman machine info --format json | convertfrom-json
    Write-Host -foregroundcolor green 'Podman-machine' $stateInfo.Host.MachineState
}


podman rm -f bernso_container
podman build -f .\Containerfile -t bernso:latest
podman run --rm -d -p 8080:80 --name bernso_container bernso:latest