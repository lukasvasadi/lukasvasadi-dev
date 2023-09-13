---
title: Programming STM32 MCUs
description: Configure a development environment with CLion and learn basic MCU functions
date: '2023-8-31'
image: /images/stm32.jpg
categories:
    - STM32
    - Microcontrollers
    - Interrupts
    - Serial communication
published: true
---

<script>
    import Tag from "../components/tag.svelte"
</script>

![STM32 Nucleo board](/images/stm32.jpg)

## Contents

-   [Introduction](#introduction)
-   [Setup](#setup)
-   [Interrupts](#interrupts)

## <a id="introduction">Introduction</a>

This guide details environment setup for programming [STM32](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html) microcontrollers (MCUs). It also covers general low-level functionality, such as configuring IO-based interrupts. The ST website provides a listing of various MCUs for special use cases, e.g., "High Performance," "Ultra Low Power." However, if you are unsure about the specific project requirements, simply choose an option from the "Mainstream MCUs."

### Why use STM32?

STM32 microcontrollers are generally considered an industry standard technology, as opposed to Arduino, which, until the release of the [Pro](https://www.arduino.cc/pro/) series, has served primarily an educational purpose. Compared to conventional Arduino boards, as well as the multitude of third-party MCU boards created for the Arduino platform, STM32 often provides more performance for substantially less cost. For example, the difference in processing speeds between ST and Arduino dev boards of similar costs can be upwards of 50 MHz.

### What are the barriers to entry?

Over the years, especially with the introduction of Arduino, MCU development has become simpler and streamlined. This is due to greater abstraction, which no longer requires users to understand the build process. In the case of the Arduino and STM32Cube IDEs, the developer usually selects a board from a preconfigured list and presses "play" to build and flash the chipset.

However, while greater abstraction has certainly made STM32 development approachable, this platform still demands a greater level of understanding, both of the hardware and firmware, than Arduino. Specifically, STM32 development frequently involves configuring low-level pinout functions, clocks, and timers, as well as explicit reading and writing of registers. This can be a daunting task for inexperienced engineers and hobbyists, but with dedication and a little effort, the reward can be extraordinary.

<Tag msg='Even though the STM32 platform requires a deeper understanding of hardware development, I have found that programming more advanced features, such as interrupts, is easier than Arduino.' />

## <a id="setup">Setup</a>

This setup is suitable for Windows, Linux, and macOS. The main requirements are as follows:

-   **STM32CubeMX** Graphical tool for configuring STM32 microcontrollers
-   **ST-LINK** Software utility for flashing STM32 chips over USB
-   **GNU ARM toolchain** Cross-platform toolchain for compiling C/C++ source
-   **OpenOCD** Open-source debugger software for microcontrollers

### STM32CubeMX

STM32CubeMX is a graphical tool that guides the user through a standard project setup procedure. First, the user selects the chipset or board, e.g., the Nucleo-G431KB, and presses "Start Project" in the upper right-hand corner.

![STM32CubeMX IDE window](/images/stm32cubemx_board_selector.png)

Next, the user is directed to a graphical representation of the MCU pinout, where green highlighting indicates that the pin has an assigned function, e.g., USART, GPIO. When a function is assigned, the user can modify its behavior through various options in the left-hand pane. For example, the USART2 pins have a global interrupt that can be enabled to allow the program to interrupt the main thread and read serial input as needed.

![STM32CubeMX IDE window](/images/stm32cubemx_pin_config.png)

### GNU Arm embedded toolchain

On Windows machines, the GNU embedded toolchain for Arm microcontrollers can be installed via the executable from [armDeveloper](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads). Alternatively, install via Chocolatey:

```ps1
choco install gcc-arm-embedded
```

Linux users (Debian distros) can install the toolchain directly with the Advanced Package Tool, along with the GNU debugger:

```bash
sudo apt install gcc-arm-none-eabi gdb-multiarch
```

And macOS developers can install via Homebrew:

```zsh
brew install --cask gcc-arm-embedded
```

### ST-LINK utility

ST-LINK is a software interface for programming STM32 microcontrollers. It allows developers to read and write programs and flash the microcontroller with a full-featured GUI or CLI.

To install ST-LINK on Windows, download the executable from [st.com](https://www.st.com/en/development-tools/stsw-link004.html) (an email address is required to download the software).

For Linux:

```bash
sudo apt install st-utils
```

For macOS:

```zsh
brew install stlink
```

### JetBrains CLion IDE

ST provides an Eclipse-based IDE ([STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)) for its microcontrollers and development boards. This IDE integrates with the STM32CubeMX graphical tool for initializing MCU pin configurations. Although the ST-supported IDE has many platform-specific features, I prefer JetBrains CLion for its stronger C/C++ language support and cleaner UI. In addition, the JetBrains developers created seemless integration with STM32CubeMX. You can download the software with a free 30-day trial from [jetbrains.com/clion](https://www.jetbrains.com/clion/).

A complete guide to configuring CLion for STM32 can be found at [STM32CubeMX projects](https://www.jetbrains.com/help/clion/embedded-development.html). Once you have installed the compiler toolchain and dependencies, and configured the IDE, you are ready to begin development!

## <a id="interrupts">Interrupts</a>

The example below shows the source code for interrupting the main thread based on incoming serial data. This data is then used to determine the toggle state of two GPIO pins.

```c
/*
    Serial pin control
    Toggle GPIO pins based on serial input
*/

const uint8_t rx_data[2]

int main() {
    MX_GPIO_Init();
    MX_USART2_UART_Init();
    HAL_UART_Receive_IT(&huart2, rx_data, 2);
    HAL_GPIO_WritePin(GPIOA, GPIO_PIN_9, GPIO_PIN_RESET);
    HAL_GPIO_WritePin(GPIOA, GPIO_PIN_10, GPIO_PIN_RESET);

    while(1) {
        HAL_Delay(10);
    }
}

void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
    // Prevent unused argument(s) compilation warnings
    UNUSED(huart);

    if (huart->Instance == USART2) {
        // Receive with interrupt
        HAL_UART_Receive_IT(&huart2, rx_data, 2);

        // Toggle pin 9 based on input from data buffer at position 0
        if (rx_data[0] == 49) HAL_GPIO_WritePin(GPIOA, GPIO_PIN_9, GPIO_PIN_SET);
        else HAL_GPIO_WritePin(GPIOA, GPIO_PIN_9, GPIO_PIN_RESET);

        // Toggle pin 10 based on input from data buffer at position 1
        if (rx_data[1] == 49) HAL_GPIO_WritePin(GPIOA, GPIO_PIN_10, GPIO_PIN_SET);
        else HAL_GPIO_WritePin(GPIOA, GPIO_PIN_10, GPIO_PIN_RESET);
    }
}
```
