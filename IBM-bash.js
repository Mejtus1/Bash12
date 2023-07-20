//Introduction to linux

/*
Linux is a multi-user and portable operating system that supports multitasking. It originated in the 1980s when Linus Torvalds developed a free, open-source version of the Unix kernel. 
 Linux is widely used today in mobile devices, desktops, supercomputers, data centers, and cloud servers. 
  Linux distributions (also known as distros) differ by their UIs, shell applications, and how the OS is supported and built. 
The design of a distro is catered toward its specific audience and/or use case. Popular Linux distributions include Red Hat Enterprise Linux (RHEL), Debian, Ubuntu, Suse (SLES, SLED, OpenSuse), Fedora, Mint, and Arch. 
 The Linux system consists of five key layers: the UI, application, OS, kernel, and hardware. The user interface enables users to interact with applications. Applications enable users to perform tasks within the system. The operating system runs on top of the kernel and is vital for system health and stability, and the kernel is the lowest-level software that enables applications to interact with hardware. Hardware includes all the physical or electronic components of your PC. 
  The Linux filesystem is a tree-like structure consisting of all directories and files on the system. 
A Linux shell is an OS-level application that you can use to enter commands. You use a terminal to send commands to the shell, and you can use the `cd` command to navigate around your Linux filesystem. 
 You can use a variety of command-line or GUI-based text editors such as GNU nano, vim, vi, and gedit. 
  .deb and .rpm are distinct file types used by package mangers in Linux operating systems. 
   You can use GUI-based and command-line package managers to update and install software on Linux systems. */

/*
Special paths
~	home directory
/	root directory
.	present working directory
..	parent of present working directory

----------------------------------------------------
ls
List files and directories in the current directory:

List files and directories in a directory:
ls path_to_directory

pwd
Return path to present working directory:

cd child_directory_name
Change the current directory to a subdirectory:
(Because cd looks in the current directory for child_directory_name, you don’t need to type the entire path.)
----------------------------------------------------
Change the current directory:
Up one level: cd ../
To home: cd ~ or cd
To some other directory: cd path_to_directory
Change the current directory back to the directory you were in previously: cd -
----------------------------------------------------
Upgrading and installing packages
Fetch and display up-to-date information about all upgradable packages:
sudo apt update

Upgrade to the latest supported version of nano:
sudo apt upgrade nano

Install Vim:
sudo apt install vim
----------------------------------------------------
Creating and editing files

Create a new text file and open it with nano:
nano file_name.txt
*/



//Informational commands
//User informational commands
/*
User information 
whoami - returns user name 
id - identity (returns user or group ID)

System information 
uname - returns name of the operating system
uname -s -r = returns both OS name and its version 
uname -v = returns more detailed inofrmation 

Displaying disk usage
df -h ~ = displays mounted disks mounted on home directory 
        = in linux a disk can be mounted onto a specific directory
df -h = outputs all disk usage on all filesystems

Displaying current running processes
ps -e = lists all processes on system regardles of which user started them 

Monitoring system health and status
top(table of processes) - Task manager 
top -n 3 = shows a table running processes of top 3 most resource heavy processes

Printing strings and variable values
echo = returns nothing 
echo Hello = terminal returns Hello 

Getting date information 
date - displays system date and time 

Viewing the manual 
man(manual) - shows manual for any command 
man id - displays manual for ID command 