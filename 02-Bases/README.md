````
 Personalizacion de POWERSHELL
````

# 1. instalacion powerShell y terminal 

 >  En la tienda windows installamos las apps

# 2.1. instalamos Oh My Posh del Sitio oficial: 
 > https://ohmyposh.dev/docs 

# 2.1.2 En Nueva Powershell ejecutamos:
### Install Oh My Posh:
> winget install JanDeDobbeleer.OhMyPosh -s winget

### Generamos un perfil:
> New-Item -Path $PROFILE -Type File -Force

### Abrimos rchivo de configuracion:
> notepad $PROFILE 

### En el archivo de configuracion abierto pegamos:

    oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/froczh.omp.json" | Invoke-Expression

    Import-Module -Name Terminal-Icons

# 3.0 Instalamos la fuente: (Hack Nerd Fon)
 > https://www.nerdfonts.com/font-downloads 

# 4.0 En powerShell -> configuracion in json -> agregamos:

    "defaults": {
        "fontFace": "Hack Nerd Font",
        "fontSize": 10 
    },

# 5.0 En VsCode AGREGAMOS FUNETE -> esta linea : 
    "terminal.integrated.fontFamily": "Hack Nerd Font"

# 6.0 instalamos los iconos
> Repositorio GitHub Terminal Icons: https://github.com/devblackops/Termin... 

> Install-Module -Name Terminal-Icons -Repository PSGallery





