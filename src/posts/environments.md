---
title: Building a developer environment
description: Create a clean development environment for high productivity.
date: '2022-9-20'
image: /images/macbook-code.jpg
categories:
    - Python
    - Node
    - Chocolatey
    - Homebrew
published: true
---

![Macbook code editor](/images/macbook-code.jpg)

## Contents

-   [Introduction](#introduction)
-   [Windows](#windows)
-   [macOS](#macos)
-   [Linux](#linux)

## <a id="introduction">Introduction</a>

This tutorial covers the installation process for several popular developer tools, such as Python, Node.js, and the compiler toolchain for C/C++, using system package managers. It also explains how to create and manage virtual environments for Python.

### What is a virtual environment?

If not specified, the _package installer for Python_ (`pip`) will place all external modules inside the `site-packages/` directory of the base Python installation. This can become problematic for the following reasons:

1. **System pollution:** Linux and macOS have preinstalled Python versions that each OS uses for internal tasks. Changing the versions of any system-relevant packages may have unintended effects on OS behavior. Updating the OS could also overwrite some of the package installations.

2. **Dependency conflicts:** Different projects may require different versions of the same package. If all packages are centralized, then certain projects may break unexpectedly.

Virtual environments sidestep these issues by creating sandboxed directories that store all packages for individual projects. These directories also contain symlinks to the relevant Python binaries so that the project can be run with a specific Python version. By activating a virtual environment, you tell the system to point to this directory whenever running the Python executable.

## <a id="windows">Windows</a>

> **_NOTE:_** The following commands require PowerShell, which has more advanced functionality than the command prompt (`cmd`). To run installation scripts in Windows, you must use a shell with administrator privileges. Search for "PowerShell" in the Windows search box, right-click the application, and select "Run as administrator."

### Chocolatey

[Chocolatey](https://chocolatey.org/) is a community-driven general package manager for Windows. With one command, this tool eliminates the need for installation wizards.

The developers of Chocolatey created a script to automate the installation process. As stated above, to run a script downloaded from the internet, we need to change the security permissions in PowerShell. (This will also be needed later to install the full developer toolchain. See the PowerShell tutorial for more information on security policies.) In an administrative shell, execute the following commands:

```ps1
Set-ExecutionPolicy RemoteSigned
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
```

Download and run the installation script:

```ps1
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Refresh the shell environment:

```ps1
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
```

Confirm `choco` installation:

```ps1
choco --version
```

### Python

Unlike macOS and Linux, Windows does not come prepackaged with Python. Users have the option to manually install a specific Python version or use [pyenv-win](https://github.com/pyenv-win/pyenv-win) to manage multiple installations on the same machine.

#### Pyenv

In an administrative shell, install pyenv with `choco`:

```ps1
choco install pyenv-win
```

Refresh the shell environment:

```ps1
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
```

Confirm installation:

```ps1
pyenv --version
```

> **_NOTE:_** Before proceeding, you must reorder the `$Path` environment variable to give higher precedence to the binaries stored under pyenv. Otherwise, by default, Windows will search for the Python binaries in its AppData directory. This can be accomplished from the command line, however, I recommend using the environment variable dialog, which can be found via the Windows search box.

After reordering the environment variables, refresh the shell environment:

```ps1
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
```

At this point, you are ready to setup Python. To print a list of available Python installations:

```ps1
pyenv install --list
# restrict output to a specific major Python version
pyenv install --list | Select-String "3.11"
```

Install a specific version of Python:

```ps1
# 3.11.3 as an example
pyenv install 3.11.3
```

Set the global Python version, which will be the Python distribution normally referenced by shell programs:

```ps1
pyenv global 3.11.3
```

Confirm that python and pip point to the correct executables:

```ps1
(Get-Command python).Source ; (Get-Command pip).Source
```

You should see two paths returned that resemble `C:\Users\user\.pyenv\shims\python` and `C:\Users\user\.pyenv\shims\pip`. If not, you may have to recheck your environment variables.

Now, you can run Python:

```ps1
python --version
```

#### Virtual Environments

Unfortunately, pyenv-win does not include the normal pyenv utility for managing virtual environments. Windows users need to follow the traditional approach to create a sandboxed environment:

```ps1
# env can have any name
python -m venv C:\path\to\env
```

This will reference the Python version set by pyenv `global` or `local` and create a new directory that contains the Python executable and any site packages installed via `pip`. Note that once created, the virtual environment directory cannot be moved to another location. Many developers choose to store their environments in a dedicated sub-directory of their project folder.

To activate the environment:

```ps1
C:\path\to\env\Scripts\Activate.ps1
```

To deactivate:

```ps1
deactivate
```

### Node.js

Node.js is a popular JavaScript runtime used for server-side programming or desktop app development.

#### NVM

Similar to Python, Node.js has a version manager (nvm) that was created for macOS and Linux, and later cloned for Windows (nvm-windows). Using nvm allows developers to manage multiple versions of Node.js on one machine, eliminating conflicts between projects with different requirements.

To install nvm, first ensure that there are no pre-existing versions of Node.js installed on the machine, as this may cause conflicts. Then, in an administrative shell, run the automated install script:

```ps1
choco install nvm
```

Refresh the shell environment:

```ps1
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
```

Confirm nvm installation:

```ps1
nvm --version
```

Install the latest version of Node.js:

```ps1
nvm install latest
```

Check to see the Node.js available versions:

```ps1
nvm list
```

Activate the desired Node.js version:

```ps1
nvm use 18.4.0
```

Confirm Node.js activation:

```ps1
node --version
```

### Git

Git is a toolchain used for version control of code repositories. To install git:

```ps1
choco install git
```

## <a id="macos">macOS</a>

### Homebrew

Similar to Chocolatey, Homebrew is the standard general package manager for macOS.

To install Homebrew (the system may prompt for your user password):

```zsh
sudo curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash
```

Update the `PATH` variable to locate the `brew` binaries by modifying the special environment file `~/.zshrc`:

```zsh
touch ~/.zshrc
open -e ~/.zshrc
```

```zsh
# brew
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Confirm successful installation:

```zsh
brew doctor
```

If the command `brew` is unrecognized, then there may have been an issue with the installation, probably related to the Xcode command line tools. Unfortunately, this will need to be fixed before proceeding to the next steps.

### Python

Although macOS comes prepackaged with Python, it is recommended to reserve that installation for system usage. For this reason, pyenv provides an easy way to manage multiple versions of Python on one machine.

#### Pyenv

To install pyenv, as well as its convenient virtual environment tool, run the following automated installation scripts:

```zsh
brew install pyenv
brew install pyenv-virtualenv
```

Refresh the environment:

```zsh
source ~/.zshrc
```

Confirm pyenv installation:

```zsh
pyenv --version
```

To see a list of available Python installations:

```zsh
pyenv install --list
# restrict output to a major Python version
pyenv install --list | grep "3.11"
```

Install a version of Python:

```zsh
# 3.11.3 as an example
pyenv install 3.11.3
```

Set the global Python version, which will become the default Python for your shell:

```zsh
pyenv global 3.11.3
```

Before running Python, we need to add the `.pyenv` root directory to the system `$PATH` and initialize the utility on shell startup. To do so, open the shell environment files with the default text editor:

```zsh
open -e ~/.zshrc
```

Append the following lines:

```zsh
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Save and close both documents, then refresh the environment and check the `python` and `pip` executables:

```zsh
source ~/.zshrc
which python && which pip
```

Now you can run Python!

#### Virtual Environments

Pyenv also provides an easy way to create and manage virtual environments. To create a new environment named "env":

```zsh
# assuming you navigated inside the project directory
pyenv local env
```

To deactivate the environment:

```zsh
source deactivate
```

### Node.js

As mentioned above, Node.js is a popular JavaScript runtime that can be easily managed with nvm.

#### NVM

To install nvm:

```zsh
brew install nvm
```

Confirm installation:

```zsh
command -v nvm
```

If nothing returns, you may need to add the following lines to `~/.zshrc`:

```zsh
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

Refresh the environment:

```zsh
source ~/.zshrc
```

Install the latest stable version of Node:

```zsh
nvm install stable
```

Confirm Node installation:

```zsh
node --version
```

### Git

Git is a toolchain used for version control of code repositories. To install git:

```zsh
brew install git
```

## <a id="linux">Linux</a>

> **_NOTE:_** This tutorial only covers Debian flavors of Linux, e.g., Ubuntu, Pop_OS!.

Before installing any software, it is good practice to update, and possibly upgrade, the existing system packages:

```zsh
sudo apt update && sudo apt upgrade -y
```

### Python

#### Pyenv

To install `pyenv`, first install its dependencies:

```zsh
sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl
```

Then, execute the `pyenv` installer:

```zsh
curl https://pyenv.run | bash
```

Before running Python, we need to add the `.pyenv` root directory to the system `$PATH` and initialize the utility on shell startup. To do so, open the shell environment files with the default text editor:

```zsh
open -e ~/.zshrc
```

Append the following lines:

```zsh
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

```zsh
source ~/.zshrc
```

Confirm `pyenv` installation:

```zsh
pyenv --version
```

To see a list of all Python versions available for installation:

```zsh
pyenv install --list
# restrict list output to a major Python version
pyenv install --list | grep "3.11"
```

Install Python:

```zsh
# 3.11.3 as an example
pyenv install 3.11.3
```

Set the global Python version:

```zsh
pyenv global 3.11.3
```

Confirm that `python` and `pip` point to the correct executables:

```zsh
which python && which pip
```

Now, you can use Python!

### Node.js

#### NVM

To install nvm, run the automated script:

```zsh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Refresh the environment and confirm installation:

```zsh
source ~/.zshrc
nvm --version
```

Install the latest stable release of Node.js:

```zsh
nvm install stable
```

Confirm successful Node installation:

```zsh
node --version
```

### Git

Git is a toolchain used for version control of code repositories. To install git:

```zsh
sudo apt install git
```
