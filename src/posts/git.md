---
title: Managing code repositories with git
description: Learn to version codebases for easy collaboration
date: '2022-10-25'
image: /images/macbook-code.jpg
categories:
    - Git
    - GitHub
published: true
---

## Contents

-   [Introduction](#introduction)
-   [Authentication](#authentication)
-   [Repositories](#repositories)
-   [Commits](#commits)
-   [Branches](#branches)

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

## <a id="repositories">Repositories

Often, the first step to managing a project is to create or clone a git repository. GitHub is the most common remote repository web application, allowing developers to store large code bases, track changes, and collaborate. Before creating a new repository, you may wish to change the initial branch default name to "main". This setting only needs to be changed once and, though not strictly necessary, may help to avoid extra steps when initializing future repositories. To update the default branch name:

```bash
# only needs to be executed once
git config --global init.defaultBranch main
```

To create a git repository from a local project directory:

```bash
# navigate to project directory
git init
```

In most cases, the first step may be to identify specific files or directories to ignore from tracking. The relative path names of these files and directories can be added to a special gitignore file, which is located in the project root:

```bash
# many developers choose to ignore directories that host virtual environments
echo venv >> .gitignore
```

At this point, the repository is ready to be committed:

```bash
git add -A
git commit -m "First commit message"
```

On GitHub, create a new empty repository. Then return to the console and push the code base to the remote server:

```bash
git remote add origin git@github.com:username/reponame
git push -u origin main
```

Likewise, to clone a repository from GitHub:

```bash
git clone git@github.com:username/reponame
```

## <a id="commits">Commits

In git, a commit deposits new or modified code to the repository, usually with a subject line or description of the changes.

To check the status of current changes:

```bash
git status
```

To inspect individual files:

```bash
git diff filename
```

To add changes to a commit:

```bash
# add all files with changes
git add -A
# add an individual file
git add filename
# add parts of an individual file (patch level)
git add -p filename
```

Using `commit` with the `-p` flag will start an interactive prompt that steps through each group of changes—a group being adjacent lines of code—with the option to add that group to the index. In this way, the developer can better associate changes to a commit.

In general, it is recommended to separate changes into individual commits based on topic. Once changes are staged for a commit:

```bash
# commit changes with full description
git commit
# alternatively, use a brief inline message
git commit -m "Brief description of changes"
```

Using `commit` with no parameters will open a text editor, either a console-based editor like Vim or a standalone application like Notepad, for a description of the changes. The first line is reserved for the **subject**, which briefly summarizes the commit, while all subsequent lines belong to the **body** for more detailed comments. As an example, to add a new Python file that manages a serial connection:

```text
Class to manage external devices connected via serial

Custom class inherits Serial class from pyserial. It includes a modified read method that strips whitespace, e.g., '/r/n', from incoming serial data, as well as a modified write method that adds a newline character to any command string passed as an argument.
```

> **_NOTE:_** Git uses Vim as its default text editor. Though powerful, Vim tends to be less popular among younger developers. Fortunately, git provides the ability to change the default editor in the core configuration file.

To change the default text editor:

```bash
# change to nano
git config --global core.editor "nano"
# change to vs code
git config --global core.editor "code --wait"
```

To update the default username and email used for commits:

```bash
git config --global user.name username
git config --global user.email address
```

Alternatively, to specify the username and email for an individual repository:

```bash
git config user.name username
git config user.email address
```

Or, to specify the username and email for an individual commit:

```bash
git commit --author="username email"
```

To view all global configurations:

```bash
git config --global --edit
```

If you want to edit the last commit before pushing to remote storage, i.e., GitHub:

```bash
git commit --amend
```

Committed changes can now be sent to remote storage:

```bash
git push
```

Lastly, to switch between local branches without committing changes:

```bash
git stash
```

## <a id="branches">Branches

### Creating branches

The first branch created when initializing a repository is the `main` branch. This branch serves as the project root and, though not always recommended for collaborative work, may be renamed. Developers create separate daughter branches, where specific features are developed and tested, to prevent breaking changes from entering the project root.
