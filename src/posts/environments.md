---
title: Building a developer environment
description: Configure a development environment for high productivity.
date: '2023-8-31'
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
    <!-- -   [Chocolatey](#chocolatey) -->

## <a id="introduction"></a>Introduction

This tutorial shows how to install popular developer tools, with an emphasis on Python, using system package managers. It also explains how to create and manage virtual environments for Python.

### What is a virtual environment?

If not specified, the _package installer for Python_ (`pip`) will place all external modules inside the `site-packages/` directory of the base Python installation. This can become problematic for the following reasons:

1. **System pollution:** Linux and macOS have preinstalled Python versions that each OS uses for internal tasks. Changing the versions of any system-relevant packages may have unintended effects on OS behavior. Updating the OS could also overwrite some of the package installations.

2. **Dependency conflicts:** Different projects may require different versions of the same package. If all packages are centralized, then certain projects may break unexpectedly.

Virtual environments sidestep these issues by creating sandboxed directories that store all packages for individual projects. These directories also contain symlinks to the relevant Python binaries so that the project can be run with a specific Python version. By activating a virtual environment, you tell the system to point to this directory whenever running the Python executable.

## <a id="windows"></a>Windows

### <a id="chocolatey"></a>Chocolatey

Chocolatey is a community-driven general package manager for Windows. With one command, this tool eliminates the need for installation wizards.

The developers of Chocolatey created a script to automate the installation process. As stated above, to run a script downloaded from the internet, we need to change the security permissions in PowerShell. (This will also be needed later to install the full developer toolchain. See the PowerShell tutorial for more information on security policies.) In an administrative shell, execute the following commands:

```ps1
Set-ExecutionPolicy RemoteSigned
```

Also...

```ps1
[System.Net.ServicePointManager]::SecurityProtocol = \
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072
```

More code...

```ps1
Set-ExecutionPolicy RemoteSigned
```

```bash
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

```bash
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```
