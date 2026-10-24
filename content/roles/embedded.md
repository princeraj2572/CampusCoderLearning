# Embedded / IoT engineer

*Write the software that runs inside devices.*

## The job

You program the small computers inside things: sensors, watches, cars, routers, medical devices and smart-home gadgets. The code must work with tight memory, little power and real hardware that does not always behave. Your software touches the physical world.

### A day in the job

- Write C or C++ firmware that reads sensors and controls hardware.
- Debug with oscilloscopes, logic analysers and serial logs.
- Read datasheets and schematics to understand what a chip really does.
- Add communication over Wi-Fi, Bluetooth, or wired protocols.
- Test on real boards and measure power use and timing.

**Good if:** You like electronics and tinkering, you are patient with hardware that fails in odd ways, and you enjoy seeing code move something real.

**Main tools:** C, C++, microcontrollers (ESP32, STM32, Arduino), RTOS, I2C, SPI, UART

## Where you will work

| Type | What you do there |
| --- | --- |
| Automotive | Engine control, infotainment and driver assistance. |
| Consumer electronics | Wearables, speakers and smart-home devices. |
| Medical and industrial | Reliable devices with strict safety rules. |
| Telecom and networking | Routers and radio equipment. |

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | C, digital electronics, number systems, Git | Blink an LED and read a button on a board | A few working circuits and programs in C |
| Year 2 | Microcontrollers (Arduino, STM32), timers, interrupts, serial | A sensor project with a display | Two hardware projects with code on GitHub |
| Year 3 | Communication protocols (I2C, SPI, UART), RTOS basics, an internship | A battery-powered device that logs data | An internship offer and a documented build |
| Year 4 | Low-power design, debugging with tools, interview loops | A final product with firmware, a PCB and testing | An offer for an embedded role |

## Study plan

### C and electronics basics (Months 1–3)

- C in depth: pointers, memory, bit manipulation and structs.
- Digital electronics: voltage, current, resistors, transistors and logic levels.
- Reading a datasheet and a pinout.
- Arduino or ESP32 basics: GPIO, PWM, analogue reading.

**Build:** A blinking LED, then a button-controlled light with debouncing, then a temperature display.

### Communication and sensors (Months 4–6)

- UART, I2C and SPI, and when to use each.
- Interrupts and timers.
- Reading real sensors and filtering noisy data.
- Wi-Fi and Bluetooth, with MQTT for sending data.

**Build:** A weather station that sends readings to a dashboard over Wi-Fi.

### Real-time and professional firmware (Months 7–9)

- An RTOS such as FreeRTOS: tasks, queues, semaphores and priorities.
- State machines and clean firmware structure.
- Debugging with a hardware debugger, JTAG or SWD, and a logic analyser.
- Low-power design and watchdog timers.

**Build:** A multi-task device with a state machine, a watchdog and a low-power mode.

### Product-level skills (Months 10+)

- Bootloaders and safe over-the-air updates.
- Basic PCB design and schematics with KiCad.
- Unit testing firmware and hardware-in-the-loop testing.
- Security: secure boot, encrypted storage and safe defaults.

**Build:** A complete device with a custom board, firmware updates and a written test plan.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Smart plant monitor | A soil sensor, an LED alert and readings on a small display. | You can connect sensors to code reliably. |
| Intermediate | IoT weather or air-quality station | Several sensors, Wi-Fi, MQTT, a dashboard and sleeping between readings. | You can build a connected device that runs for weeks. |
| Advanced | RTOS-based device with updates | FreeRTOS tasks, a state machine, a bootloader and over-the-air updates, on your own PCB. | You understand how real products are built and maintained. |

## Tools

- An ESP32 or STM32 board and an Arduino
- A multimeter and a breadboard
- A logic analyser (even a cheap one)
- PlatformIO or ESP-IDF
- KiCad
- A serial terminal

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | C practice and one electronics topic with a small experiment (1 hour) |
| Tue, Thu | DSA in C or C++ (45 minutes) |
| Fri | Read one datasheet section and write a driver from it (45 minutes) |
| Weekend | Build: two hours on your hardware project |

## A senior's advice

### Do

- Read the datasheet first. The answer is almost always in it.
- Test on the real hardware early and often. Simulators hide timing problems.
- Keep interrupt handlers tiny, and do the work outside them.
- Add a watchdog and a safe state. Devices must recover on their own.
- Log over serial from the first day.

### Avoid

- Using delay() everywhere instead of timers and state machines.
- Allocating memory dynamically in a long-running device without a plan.
- Ignoring the power supply. Many 'software' bugs are electrical.
- Copying library code you cannot debug.
- Shipping without a way to update the device.

## Engineer's notes

- Read the datasheet and errata. Many bugs are in the details you skimmed.
- Measure with a scope or logic analyser. Do not guess what the signals look like.
- Memory and timing are limited. Know your stack, heap and interrupt budget.
- Build a way to update and recover devices in the field. Bricked devices are expensive.
- Write hardware-independent logic separately so you can test it on your computer.

## Mistakes juniors make

- Skipping the datasheet and copying a library.
- Doing heavy work inside an interrupt.
- Blaming the code when the wiring or power is wrong.
- Not using a watchdog.
- Forgetting that variables shared with interrupts need to be volatile.

## Questions to ask a senior

- What is the hardest bug you have debugged, and how did you find it?
- How do you test firmware without the real device?
- How do you make updates safe when the device is in the field?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Embedded means only Arduino. | Arduino is a start. Professional work uses C, RTOS and custom boards. |
| You must be an electronics graduate. | Many software people succeed, if they learn electronics basics. |
| It is a dying field. | Every connected device needs firmware, and demand keeps growing. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build the firmware, flash a board and read through the existing drivers. |
| Days 31–60 | Fix hardware-related bugs using the debugger and a logic analyser. |
| Days 61–90 | Own a small feature and test it on real hardware, including a long-running test. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Write drivers and small features, and learn to debug on real hardware. |
| Mid-level (2–5 years) | Own a subsystem, such as communication or power management. |
| Senior (5+ years) | Design firmware architecture, choose parts and lead bring-up of new boards. |
| Staff and beyond | Set the technical direction for a product line and its hardware and software together. |

## Interview preparation

- C questions: pointers, volatile, const, bit manipulation, memory layout.
- Explain interrupts, DMA, and the difference between polling and interrupts.
- Compare UART, I2C and SPI.
- Design a state machine for a simple device, such as a washing machine.
- Walk through a hardware bug you debugged and how you found it.

## Interview questions and answers

**Q: What does volatile do in C?**

It tells the compiler a variable can change outside normal flow (by hardware or an interrupt), so it must read it from memory each time and not optimise it away.

**Q: What should an interrupt handler do?**

Be very short: set a flag, copy data, then return. Do the heavy work in the main loop. Avoid blocking calls.

**Q: Compare I2C, SPI and UART.**

UART is asynchronous, two wires, point to point. I2C uses two shared wires with addresses for many devices at lower speed. SPI uses extra select lines but is faster.

**Q: How do you debug a board that does not respond?**

Check power and clock first, then reset lines, then use a debugger or serial output, and a logic analyser or scope on the signals.

**Q: Why use a watchdog timer?**

If software hangs, the watchdog resets the device so it recovers without a person, which matters for remote or safety-related devices.

## Glossary

| Term | Meaning |
| --- | --- |
| Microcontroller | A small computer on one chip with memory and input/output pins. |
| GPIO | General-purpose input/output pins you control in code. |
| Interrupt | A signal that makes the processor pause and run a handler. |
| ISR | Interrupt service routine: the handler code. |
| RTOS | A real-time operating system that schedules tasks with timing guarantees. |
| I2C / SPI / UART | Common serial protocols between chips. |
| Firmware | The software that runs on a device. |
| Watchdog timer | A timer that resets the device if the code hangs. |

## Resources

- [Arduino documentation](https://docs.arduino.cc): Tutorials for your first sensors and circuits
- [FreeRTOS documentation](https://www.freertos.org/Documentation/00-Overview): The most common real-time operating system
- [ESP-IDF programming guide](https://docs.espressif.com/projects/esp-idf/en/latest/): Professional development for the ESP32
- [KiCad](https://www.kicad.org): Free tool for schematics and circuit boards
