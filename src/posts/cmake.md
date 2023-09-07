---
title: Building C/C++ projects with CMake
description: Leverage CMake to automate the source code build process
date: '2023-09-30'
image: /images/macbook-code.jpg
categories:
    - CMake
published: true
---

## Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Basics](#basics)

## <a id="introduction">Introduction</a>

CMake is an open-source, cross-platform automation tool for generating C/C++ Makefiles, which can then be used to build the source. It has become the _de facto_ build system for the developer community as well as major companies, such as Qt and ST Microelectronics.

## <a id="installation">Installation

See below for platform-specific commands to install the CMake toolchain. The rest of the tutorial will use Unix-style commands, but these should be directly transferable to Windows systems.

**Windows (Chocolatey):**

```ps1
choco install cmake
```

**macOS (Homebrew):**

```zsh
brew install cmake
```

**Linux:**

```bash
sudo apt install cmake
```

## <a id="basics">Basics

CMake relies on a top-level file called `CMakeLists.txt`, which should be created in the same directory as the source. (Remember, it is good practice to separate source code and binary files.) To demonstrate a CMake project, we can create a `HelloCMake` directory, with `src` and `build` subdirectories, under `home`:

```bash
mkdir -p ~/HelloCMake/src ~/HelloCMake/build
```

Under the `src` directory, create a `main.cpp` file:

```cpp
#import <iostream>

int main() {
    std::cout << "Hey, CMake!" << std::endl;
    return 0;
}
```

Add a `CMakeLists.txt` file (use the CMake version output from `cmake --version`):

```cmake
cmake_minimum_required(VERSION 3.27.4)

project(hello)

add_executable(${PROJECT_NAME} main.cpp)
```

To generate the Makefile, which contains the recipe to build the source, run the `cmake` command and specify the locations of the `src` and `build` directories:

```bash
cmake -S ~/HelloCMake/src -B ~/HelloCMake/build
```

After running that command, the project folder should appear as follows:

```
├── build
│   ├── CMakeCache.txt
│   ├── CMakeFiles
│   ├── Makefile
│   └── cmake_install.cmake
└── src
    ├── CMakeLists.txt
    └── main.cpp
```

Now run the `make` command inside the build folder:

```bash
cd ~/HelloCMake/build
make
```

At this point, if the build was successful, there will be an executable called `hello`, which can be run with `./hello`.
