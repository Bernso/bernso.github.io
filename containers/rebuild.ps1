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
    if ($stateInfo.Host.MachineState -eq "Stopped"){
        Write-Host -ForegroundColor Red 'There has been an error starting up podman'
    }
    else {
        Write-Host -foregroundcolor green 'Podman-machine' $stateInfo.Host.MachineState
    }
}

$container = "bernso_container"
Write-Host -foregroundcolor Blue 'stopping and removing container'
podman rm -f $container 
Write-Host -foregroundcolor Blue 'removing container image'
podman image rm localhost/$container 
Write-Host -foregroundcolor Blue 'building container image'
podman build -f .\Containerfile -t $container':latest'
Write-Host -foregroundcolor Blue 'running container'
podman run --rm -d -p 8080:80 --name $container $container':latest'
podman machine stop