---
title: Managing code repositories with git
description: Configure a development environment for high productivity.
date: '2022-10-25'
image: /images/nvidia-gpu.jpg
categories:
    - Git
    - GitHub
published: true
---

## Contents

-   [Introduction](#introduction)

## <a id="introduction">Introduction</a>

This guide assumes that git has been installed on the local machine. For simplicity, it is also assumed that the user has Git Bash—especially for Windows—or a standard bash/zsh console with access to the git command line tools, along with a GitHub account.

## <a id="authentication">Authentication</a>

GitHub, the repository cloud storage owned by Microsoft, now requires developers to authenticate their machines with SSH keys for added security. The official [online tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) covers all steps to generate an SSH key and add it to a GitHub account. These steps have been consolidated below for convenience.

### Generating an SSH key

> **_NOTE:_** For Windows users, the following commands require a bash-like shell program, such as Git Bash, which is a separate terminal program installed alongside the Git toolchain. You can find this program in the search menu.

First, create an SSH key with the email address tied to the GitHub account:

```bash
# replace email address
ssh-keygen -t ed25519 -C "account@example.com"
```

When prompted for a filename, press enter to accept the default. Choose a security passphrase at the next prompt or, alternatively, press enter to proceed without a passphrase.

> **_NOTE:_** If you choose a security passphrase, it will be required for every future commit.

Start the background SSH agent:

```bash
eval "$(ssh-agent -s)"
```

Add the SSH private key to the agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

Copy the SSH public key to the clipboard:

```bash
clip < ~/.ssh/id_ed25519.pub
```

If you are not using Git Bash, and the `clip` utility is not installed in your toolchain, then you will probably receive the error `command not found: clip`. In this case, you may simply print the contents of `~/.ssh/id_ed25519.pub` to the console and copy the text key manually:

```bash
cat ~/.ssh/id_ed25519.pub
```

This key must be added to the authorized SSH key list in the GitHub account settings. More detailed instructions for listing authorized keys can be found at the [online tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
