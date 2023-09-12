---
title: Programming STM32 microcontrollers
description: Configure a development environment with CLion and learn basic MCU functions
date: '2023-8-31'
image: /images/stm32.jpg
categories:
    - STM32
    - Microcontrollers
    - Interrupts
    - Serial communication
published: false
---

![STM32 Nucleo board](/images/stm32.jpg)

## Contents

-   [Introduction](#introduction)
-   [Setup](#setup)
-   [Interrupts](#interrupts)

## <a id="introduction">Introduction</a>

This guide details environment setup for programming STM32 microcontrollers (MCUs). The ST website provides a listing of various MCUs for special use cases, such as "High Performance" or "Ultra Low Power." However, if you are unsure about the specific project requirements, simply choose an option from the "Mainstream MCUs."

### Why use STM32?

STM32 microcontrollers are considered an industry standard technology, as opposed to Arduino, which, until the release of the Pro series, has served primarily an educational purpose. Compared to standard Arduino boards, as well as the multitude of third-party MCU boards created for the Arduino development environment, STM32 often provides more performance for substantially less cost. For example, the difference in processing speeds between ST and Arduino dev boards of similar costs can be upwards of 50 MHz.

### What are the barriers to entry?

Over the years, especially with the introduction of Arduino, MCU development has become simpler and more streamlined. This is due to greater abstraction, which no longer requires basic users to understand the source code build process. In the case of the Arduino and STM32Cube IDEs, the developer usually selects a board from a preconfigured list and presses "play" to build and flash the chipset.

However, while greater abstraction has certainly made STM32 development approachable, it still demands a greater level of understanding, both of the hardware and firmware, than Arduino. Specifically, STM32 development frequently involves configuring low-level pinout functions, clocks, and timers, as well as explicit reading and writing of registers. This can be a daunting task for inexperienced engineers and hobbyists, but with dedication and a little effort, the reward can be extraordinary.

> **_NOTE:_** Even though the STM32 platform requires a deeper understanding of hardware development, I have found that programming more advanced features, such as interrupts, is easier than Arduino.

## <a id="setup">Setup</a>

### JetBrains CLion IDE

ST provides an Eclipse-based IDE ([STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)) for its microcontrollers and development boards. This IDE integrates with the STM32CubeMX graphical tool for initializing MCU pin configurations. Although the ST-supported IDE has many platform-specific features, I prefer JetBrains CLion for its stronger C/C++ language support and cleaner UI. In addition, the JetBrains developers created seemless integration with STM32CubeMX. You can download the software with a free 30-day trial from [jetbrains.com/clion](https://www.jetbrains.com/clion/).

A guide to configuring CLion for STM32 can be found at [STM32CubeMX projects](https://www.jetbrains.com/help/clion/embedded-development.html) (summarized below). This setup is suitable for Windows, Linux, and macOS. The main requirements are as follows:

-   **STM32CubeMX** Graphical tool for configuring STM32 microcontrollers
-   **ST-LINK** Software utility for flashing STM32 chips over USB
-   **GNU ARM toolchain** Cross-platform toolchain for compiling C/C++ source
-   **OpenOCD** Open-source debugger software for microcontrollers

## <a id="interrupts">Interrupts</a>

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
