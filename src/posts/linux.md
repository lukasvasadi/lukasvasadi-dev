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

    const wildCards = [
        {cmd: "?", desc: "Match any single character"},
        {cmd: "*", desc: "Match any string of characters"},
        {cmd: "[set]", desc: "Match any character in set, e.g., [adf]"},
        {cmd: "[!set]", desc: "Match any character not in set"},
    ]

    const topOptions = [
        {cmd: "t", desc: "Show or hide summary"},
        {cmd: "m", desc: "Show or hide memory"},
        {cmd: "A", desc: "Sort list by highest resource consumers"},
        {cmd: "r", desc: "Renice specific process"},
        {cmd: "k", desc: "Kill specific process"},
        {cmd: "f", desc: "Enter configuration utility"},
    ]

    const diffOptions = [
        {cmd: "c", desc: "Provide listing of differences"},
        {cmd: "r", desc: "Recursively compare subdirectories"},
        {cmd: "i", desc: "Ignore capitalization"},
        {cmd: "w", desc: "Ignore whitespace"},
        {cmd: "q", desc: "State whether files are different without providing context"},
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

The input source and output destination of a program can be changed with the `<` and `>` symbols, respectively:

```bash
# redirect program input
do_something < input-file
# send output to file
do_something > output-file
# send stderr output to file
do_something 2> output-file
# send all output to same destination file
do_something > output-file 2>&1
# shorthand syntax
do_something >& output-file
```

To search for files and directories that contain a specific string, use the `locate` command in combination with `grep` for further filtering. Alternatively, the `find` command can be used to locate files (or directories) after specifying the search directory, where working directory is the default, and adding the `-name` parameter alongside the search string. Note: without any arguments, `-name` outputs all files in the current and nested directories.

```bash
# list all files with zip and bin in their name
locate zip | grep bin
# use find to search for a file in the current working directory
find . -name "zip"
```

With these commands, it is often useful to employ wildcards:

<Def array={wildCards} />

For example, to find a file that has "ba" followed by a third unknown character, with extension `.out`, search for `ba?.out`. Similarly, if the entire name is unknown, search for `*.out`. Putting the search criteria in quotes will expand the search beyond the working directory: `ls "*.out"`.

Using the `-exec` parameter, the `find` utility can also run other commands on the search results:

```bash
# find and remove all files with extension .swp
find -name "*.swp" -exec rm {} ';'
```

## <a id="package-managers">Package managers</a>

There are two broad families of package managers for Debian and RPM distributions. Each family has a high-level tool, e.g., `apt`, `dnf`, `zypper`, that manage low-level utilities, e.g., `dpkg`, `rpm`, which are responsible for unpacking and installing individual packages. These high-level tools also coordinate the installation of dependencies, or packages that are needed to support the current installation.

Some common package management commands for Debian-based distros include:

```bash
# list all packages on system
dpkg --list
# install (or update) package and dependencies
apt-get install foo
# remove package and dependencies
apt-get remove foo
# upgrade entire system
apt-get dist-upgrade
# search packages named foo
apt-cache search foo
```

## <a id="accessing-documentation">Accessing documentation</a>

The general philosophy of computer administration is to not memorize every single shell command along with its parameters. Instead, administrators can reference the `man` pages—short for "manual"—or utilize either the `help` command or `--help` option.

```bash
# find information about a specific topic
man topic
# list all pages on topic
man -f topic
# alternatively...
whatis topic
# list all pages that discuss a topic (yields more results)
man -k topic
# alternatively...
apropos topic
```

While `man` is a great tool for reading detailed information about specific utilities, often administrators only need a brief description. This can be accomplished using `--help` or `-h`:

```bash
# find information on the man command
man --help
```

Typing `help` at the command line will print consolidated information about built-in commands.

## <a id="processes">Processes</a>

A process represents a current task running on the computer. Single commands may launch one or more processes simultaneously. The operating system is responsible for allocating system resources to each process for optimized performance. There are several types of processes:

-   **Interactive:** started by the user via the command line or graphical interface
-   **Batch:** automated processes that require queued resource allocation on a first-in, first-out (FIFO) basis
-   **Daemons:** server processes that run continuously in the background
-   **Threads:** lightweight processes that run under a main process, sharing a designated number of resources
-   **Kernel threads:** perform housekeeping tasks such as relocating threads between CPU cores

The kernel **scheduler** allocates CPU time to queued processes. Each CPU core has a run and wait queue. When a process enters a **sleep** state, the scheduler moves it to the wait queue until the necessary feedback is received. To manage process scheduling and resource allocation, the operating system assigns each running process a unique process ID **(PID)** number, which Usually follow the order that each process was born in the system. In addition, each process has a parent process ID **(PPID)** and, if the process is multithreaded, a unique thread ID **(TID)**.

Users can terminate processes in the terminal shell:

```bash
# kill process
kill -SIGKILL pid
# alternatively...
kill -9 pid
```

Users can also specify a **nice value** for individual processes to control their execution priority. The lower the nice value, the more preference will be given this process over system resources and runtime. Linux nice values range from -20 to +19, with -20 designating the highest priority, or precedence. Note that changing the niceness of a process will also update any child processes with the same value. Increasing niceness may require superuser permissions.

```bash
# change the niceness value
renice value pid
```

The **load average** breaks down CPU resource consumption over three specified timepoints: 45, 15, and 5 min. These percentages denote the amount of CPU resources demanded by active processes. For example, a load average of 0.5 means that an average of 50% CPU resources were consumed for the specified time period.

With modern machines, each load average should be divided by the number of CPU cores, e.g., a load average of 2.0 for a dual-core system indicates 100% CPU resource consumption. It is possible for normalized load averages to exceed 1.0 for brief periods, but prolonged over-utilization may suggest problems. Load averages may be viewed in the terminal by running either `w`, `top`, or `uptime`.

Jobs, or terminal commands, may be run in the foreground or background. Foreground jobs may be suspended with `CTRL+Z` or terminated with `CTRL+C`. Suffixing a command with `&` causes it to be executed in the background. Alternatively, the `bg` and `fg` commands can push jobs to the background or foreground, respectively.

```bash
# view active background jobs
jobs
```

The `ps` command prints information about current running processes:

```bash
# display all processes running under current shell
ps
# include PPID
ps -f
# include full system detail
ps -ef
# show one line of information for every thread
ps -elf
# display as tree diagram to show process lineage
pstree
```

In addition to printing load averages, the `top` command presents a real-time system monitor of all processes, listed in order of CPU resource consumption. The list constantly updates until the user quits with `q`. Other interactive options for top include:

<Def array={topOptions} />

Various commands exist to manage future program execution and suspend currently active processes:

```bash
# schedule non-interactive process to execute in 10 minutes
at now + 10 minutes
# issue command to be executed, then press CTRL-D to exit at config
command arguments
# sleep active program for 10 seconds
sleep 10s
```

## <a id="file-operations">File operations</a>

In the Linux, the root directory, denoted by `/`, represents the beginning of the filesystem hierarchy. There are many types of filesystems, which often differ across operating systems, but the most common belong to the **journaling** variety: ext4, xfs, btrfs, jfs. It is often the case that an OS will have several different filesystems, each stored on a particular disk partition. Important programs to run the system are isolated on the **root** partition. Each partition has to be mounted on the filesystem tree to be accessible by the user. Examples of common mount points, which appear as empty directories, include `/`, `/home`, and `/var`.

Partitions can be mounted through a graphical utility, such as `gparted`, or the command line with the device node and mount point as the arguments:

```bash
# mount the filesystem at device node /dev/sda5 into the main filesystem tree at mount point /home
sudo mount /dev/sda5 /home
# unmount the partition
sudo umount /home
# show all mounted filesystems
mount
```

Filesystems and data can also be shared across machines through networks. Networks, accessible over the internet, allow grouping of lower-level filesystems into a more universal framework, e.g., the Network Filesystem (**NFS**). For all intensive purposes, NFS can be treated as an other filesystem on the client or server side.

Each user has a home directory listed under `/home`. The `/root` directory is simply the home of the root user (aka superuser or system administrator). The `/bin` directory contains executable binaries needed to boot the system as well as ubiquitous user commands, such as `cat`, `cp`, `ls`, etc. Though similar, `/sbin` stores executables for system administration, such as `ip`.

Non-essential commands are stored under `/usr/bin` and `/usr/sbin`, which was initially done to allow mounting of the user filesystem at a later stage in the OS startup. However, this practice is mostly considered obselete and, as such, most modern Linux distros symbolically link `/usr/bin` with `/bin` and `/usr/sbin` with `/sbin`, i.e., for all intensive purposes, there are no distinctions between these directory groupings.

The `/proc` filesystem contains **virtual files**—files that only exist in memory—that track dynamic kernel data, including information about mounted devices, hardware configurations, CPU, etc. This directory is considered a **pseudo filesystem** because it occupies no permanent space in storage.

The `/dev` directory becomes populated with `device nodes` as devices, e.g., printers, are connected to the computer. Similarly, `/var` is a dynamic directory of sorts as it contains files that are expected to change in size, e.g., system log files (`/var/log`), packages and database files (`/var/lib`), and temporary files (`/var/tmp`).

The `/etc` directory is home to system configuration files that can only be modified by the superuser. Likewise, the `/boot` directory contains essential files needed to boot the system, which are kernel-specific. Libraries needed for binary executables are stored in `/lib` (32-bit) and `/lib64` (64-bit). Removable media files, such as the contents of a connected USB drive, are typically accessible under the `/run/media/usrname/` directory.

There are other directories listed under `/root`, as well as an entire directory tree under `/usr` that contains a host of programs and scripts not needed to boot or manage the system.

Comparing text files can be done with the `diff` command:

```bash
# compare differences between two text files
diff [options] filename1 filename2
# compare differences between three text files, with one acting as a reference
diff3 filename1 referencefile filename2
```

This utility provides several options:

<Def array={diffOptions} />

Unlike other operating systems, Linux does not rely on file extensions to direct operations, e.g., a file with the ".txt" extension could be a binary executable. Users can employ the `file` utility to ascertain file type and other important information.

```bash
# ascertain file type
file filename
# find detailed information about all files in working directory
file *
```

Data can be backed up using the `cp` or `rsync` utilities. While the `cp` command copies files from one destination to another on a local machine, `rsync` performs recursive operations to only copy modified data, i.e., existing files may not be entirely overwritten. The `rsync` utility can also copy data across remote machines.

```bash
# copy file to new location
rsync sourcefile destinationfile
# back up project data to remote archive
rsync -r project networked-machine:archives/project
# perform a dry run to prevent unwanted overwrites
rsync -r -dry-run project networked-machine:archives/project
```

There are several Linux utilities for managing data compression: `gzip`, `bzip2` (deprecated), `xz`. Each of these utilities employ different compression algorithms and, not surprisingly, the utilities which produce smaller files require longer amounts of time. A similar program, `tar`, compresses files grouped in an archive. Lastly, `zip` is a legacy utility specifically used to decompress zipped files from a Windows machine—though it also has compression functionality.

```bash
# compress files in current directory
gzip *
# recursively compress files in specified project directory
gzip -r projectdir
# decompress file foo.gz
gzip -d foo
gunzip foo
```

## <a id="text-editors">Text editors</a>

## <a id="user-environment">User environment</a>

## <a id="manipulating-text">Manipulating text</a>

## <a id="networking-operations">Networking operations</a>

## <a id="credits">Credits</a>
