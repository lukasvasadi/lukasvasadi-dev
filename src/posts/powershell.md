---
title: Managing systems with PowerShell
description: Learn PowerShell for modern cross-platform IT administration
date: '2022-01-15'
image: /images/windows-surface-laptop.jpg
categories:
    - PowerShell
    - Windows
published: true
---

![Windows surface laptop](/images/windows-surface-laptop.jpg)

## Introduction

The PowerShell command line interface was originally intended to port Unix tools to Windows. However, the developers realized that the fundamental architectural differences between Unix (and Unix clones such as Linux) and Windows—namely, that Windows is an API-based operating system whereas Unix manages its entire framework through text files—were insurmountable.

As a result, the developers created an entirely new command line interface and scripting language that would become the basis of future Windows releases. In 2016, the project was made open-source and Microsoft announced officially-supported versions for macOS and select Linux distributions.

PowerShell is case insensitive and operates with cmdlets that follow a verb-noun syntax. Similar to batch files, cmdlets can be used within scripts, which may be packaged into modules, to automate more complicated administrative tasks.

### Resources

-   [PowerShell Beginner Tutorial](https://www.youtube.com/watch?v=UVUd9_k9C6A&t=10s)
-   [PowerShell Advanced Tools and Scripting](https://www.youtube.com/watch?v=K4YDHFalAK8&t=19008s)
-   [Creating and Publishing an Item](https://learn.microsoft.com/en-us/powershell/scripting/gallery/how-to/publishing-packages/publishing-a-package?view=powershell-7.2)
-   [My Ultimate PowerShell Prompt](https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal)

## Basic utilities

Sometimes it may be useful to write shell comments, e.g., during webinars or broadcasts. Similar to Unix, comments in PowerShell are preceded with `#`, however, block comments may be written between the `<#` and `#>` symbols.

```ps1
# this is a comment
<#
    this is a block comment where you can include more
    detailed information that may span multiple lines
#>
```

To measure the time required to execute a command:

```ps1
Measure-Command {Get-Process}
```

## Help

The developers of PowerShell believed that no user should memorize commands or syntax. As a result, they packaged PowerShell with an updatable, structured help utility that provides the latest information for cmdlets. With an internet connection, update help with the cmdlets below:

```ps1
Update-Help
# often recommended to force execution
Update-Help -Force
```

To get help on a cmdlet, use the `Get-Help` utility followed by the cmdlet under investigation. This will output a shortlist of helpful information and automatically scroll to the bottom.

```ps1
Get-Help cmdlet
```

## Variables

```ps1
$bits = Get-Service bits
```
