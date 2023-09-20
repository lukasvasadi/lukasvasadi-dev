---
title: Mastering the command line
description: Become a Linux superuser
date: '2021-10-20'
image: /images/macbook-code.jpg
categories:
    - Linux
published: false
---

![Linux Debian command line](/images/linux-debian.jpg)

<script>
    import Def from "../components/def.svelte"

    const basicCommands = [
        {command: "cat", description: "Type out a file (or combine files)"},
        {command: "head", description: "Show first few lines of file"},
        {command: "tail", description: "show last few lines of file"},
        {command: "less", description: "View contents of larger files with scroll-back"},
        {command: "man", description: "View documentation"},
        {command: "sudo", description: "Grant admin privileges"},
        {command: "|", description: "Pipe data between programs"},
        {command: "ssh", description: "Secure shell remote machine"},
        {command: "pwd", description: "Print working directory"},
        {command: "cd", description: "Change directory"},
    ]
</script>

## Contents

-   [Introduction](#introduction)
-   [Basic utilities](#basic-utilities)
-   [Command pipeline](#command-pipeline)
-   [Navigating the filesystem](#navigating-the-filesystem)
-   [Working with files](#working-with-files)
-   [Searching for files](#searching-for-files)
-   [Package managers](#package-managers)
-   [Accessing documentation](#accessing-documentation)
-   [Processes](#processes)
-   [File operations](#file-operations)
-   [Text editors](#text-editors)
-   [User environment](#user-environment)
-   [Manipulating text](#manipulating-text)
-   [Network operations](#networking-operations)
-   [Credits](#credits)

## <a id="introduction">Introduction</a>

Linux was created by Linus Torvalds in 1991 as a free alternative to Unix. Though similar, Linux is technically a Unix clone, not a direct descendant like macOS. For this reason, many of the same commands can be used interchangably on Mac and Linux systems.

## <a id="basic-utilities">Basic utilities</a>

Below is a selection of common command line utilities:

<Def array={basicCommands} />

A command is the name of the program being executed. Many commands accept arguments and options, the latter often preceded with one or two dashes, e.g., `-p` or `--print`, to be distinguishable.

Users have several options to shutdown or reboot the system from the command line:

```bash
# power off system without rebooting
sudo shutdown -h
# alternative commands that issue shutdown
sudo halt
sudo poweroff
# reboot the system
sudo shutdown -r
# reboot alternative
sudo reboot
```

## <a id="command-pipeline">Command pipeline</a>

The Unix/Linux philosophy is to combine multiple short programs to produce complex results. To achieve this coordination, data (output) from one program may be "piped" into another using the | command. A string of connected commands is called a pipeline.

```bash
command1 | command2 | command3
```

In the above example, command2 and command3 can start acting on output from previous commands in the pipeline while those commands are still being executed. This feature utilizes the multicore functionality of modern computer systems and does not require data to be written to temporary files.

## <a id="navigating-the-filesystem">Navigating the filesystem</a>

Locate programs with the `which` or `whereis` utilities, the latter of which searches across a broader range of system directories and also prints the location of the man page:

```bash
which program
whereis program
```

Use `cd` to navigate directories:

```bash
# change to home directory
cd
cd ~
# change to root directory
cd /
# change to parent directory
cd ..
# change to previous directory
cd -
```

When referencing pathnames, remember that absolute pathnames must be preceded by `/`:

```bash
cd /usr/bin
cd ../../usr/bin
```

Use the `tree` command to view the entire filesystem (note that this command may have to be installed with snap):

```bash
# the -d option displays directories while suppressing file names
tree -d
```

The `ls` command lists the contents of the working directory:

```bash
ls
# present in list view
ls -l
# include hidden files
ls -a
```

Use `pushd` to navigate the filesystem and store visited directories to a stack for later reference:

```bash
pwd
/usr
pushd bin
/usr/bin /usr
```

Similarly, use `popd` to revisit previous directories in reverse order. The `dirs` command prints a list of recent directories stacked with `pushd`.

## <a id="working-with-files">Working with files</a>

There are many command line utilities for viewing and reconfiguring files.

```bash
# print file contents in terminal window
cat filename
# print file contents with line numbers
cat -n filename
# print file contents in reverse
tac filename
```

To see one page of text at a time, use the `less` command and press the spacebar to move through the file.

```bash
# show one page of text
less filename
# show one page of text with line numbers
less -N filename
```

The `head` and `tail` commands display the first or last 10 lines of a file, respectively.

```bash
# show first 10 lines
head filename
# specify number of lines
head -20 filename
# show last 10 lines
tail filename
# specify number of lines
tail -20 filename
```

The `touch` utility is commonly used to create new files for later usage, but can also update/modify the timestamp of an existing file.

```bash
# create new file in current directory
touch filename
# update the date and timestamp of an existing file
touch filename
# modify the date and timestamp of an existing file MM DD TIME
touch -t 01011200 filename
```

Use `mkdir` and `rmdir` to manage directories.

```bash
# create new local directory
mkdir dirname
# create new directory with specific path
mkdir dirpath
# delete an empty directory
rm dirname
# delete a directory with contents
rm -rf dirname
```

The `mv` utility can both rename and relocate files.

```bash
# rename existing file
mv filename new-filename
# relocate file
mv filename new-filepath
```

## <a id="searching-for-files">Searching for files</a>

When interacting with the command line, there are always three standard file streams in operation: `stdin`, `stdout`, and `stderr`. Usually, `stdin` captures user input while `stdout` and `stderr` print feedback via the terminal, though `stderr` often targets an error logging file. The user can redirect these file streams to pipe data between various files and programs.

## <a id="package-managers">Package managers</a>

## <a id="accessing-documentation">Accessing documentation</a>

## <a id="processes">Processes</a>

## <a id="file-operations">File operations</a>

## <a id="text-editors">Text editors</a>

## <a id="user-environment">User environment</a>

## <a id="manipulating-text">Manipulating text</a>

## <a id="networking-operations">Networking operations</a>

## <a id="credits">Credits</a>
