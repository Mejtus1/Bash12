/*
Bash = (cmd/powershell in Linux) 
(you need to write it properly LS / will not work only with ls /)

----------------------------------------------------------------------------------------
Text editors in Linux 
1. GNU Emacs text editor (can do almost everything) 
https://www.gnu.org/software/emacs/tour/
2. Vim text editor (mech didnt like this one that much) 
https://vim8.org
3. NANO text editor (basic text editor for normal functioning, looks very good for first timers, overall really like it) 
https://www.nano-editor.org
----------------------------------------------------------------------------------------
1. ls / (sends us to the root directory = main directory in Linux) 

2. ls /bin (Slash bin, this directory stores our essential binaries or programs. The ls command that we just used is a program,
 and it's located here in the slash bin folder.)

3. ls /etc (Slash etc, this folder stores some pretty important system configuration files.)

4. ls /home (Slash home, this is the personal directory for users. It holds user documents, pictures, and etc. 
It's also similar to our Windows users directory.)

5. ls /proc (Slash proc, this directory contains information about currently running processes.) 

6. ls /user (Slash user, the user directory doesn't actually contain our user files like our home directory. 
It's meant for user installed software.)

7. ls /var (Slash var, we store our system logs and basically any file that constantly changes in here. 
The ls command has a couple of very useful flags that we can use too.)

8. ls --help (You can actually view what options are available for a command by adding the dash, dash help flag.)

9. man ls (Another method that you can use to get information about commands is the man command from manual. 
It's used to show us manual pages, in Linux we call them man pages. 
To use this command, just run man, then the command you want to look up.
And here we get the same information as dash, dash help, but with a little more detail.)

10. ls -l / (This shows detailed information about files and folders in the format of a long list.
Now we can see additional information about our directory and the files and folders in them. 
Similar to the Windows show properties, the ls command will show us the detailed file information.)

11. ls -l -a/ ( = Dash a or all option. This shows us all the files in the directory including the hidden files.
Both work the exact same way. The order of the flag determines which order it goes in.)
- You can hide a file or directory by pre-pending a dot to it. Like the file shown here .I_am_hidden 

12. pwd (Print working directory or PWD again shows us the current path we're in)
(shows current directory we are now in) 

13. cd (change directory, same like in powershell) 
cd /home/qwerty/Desktop (or we can use shortened version) cd ../Deskotop     cd../Documents

14. mkdir folder_name (same as in windows) (Similar to Windows, you can also use quotes to encompass an entire file name. 
How do you think you would make a directory called my cool folder in Linux with spaces? mkdir my\ cool\ folder. 
There it is. Or, mkdir ' my cool folder'. Works as well. If you guessed this, you're right.)

15. clear (clears bash but commands from history stay, we can use up or down keys and cltr R to see history of commands) 

16. cp file_name ~/Desktop (In Bash, the exact same Windows command can be used for copying files.) 
(this command copies our choosen file to the desktop) 
(I have files called Pizza.png, Soda.png, Cake.png. So I can use copy *.png, then the desktop directory.)
cp *.png ~/Desktop (example: than we can look at the desktop again with command ls ~/Desktop, and see copied files there) 

17. cp -r 'file_name' ~/Desktop ( file_name may be in aposthropes to specify it) 
(The same copy rules apply in bash. If we want to copy over a directory, 
we have to recursively copy over the directory to get all the contents. The flag for recursive copy is dash r. 
If I want to copy over my cat pictures folder to the desktop, I can do something like this.

18. mv file_name new_file_name (renames document) (Mv, or move, can rename and move files in directories.)

19. mv new_file_name ~/Documents (moves new_file_name to the Documents from Desktop (which is directory we are now in)) 

20. mv *_document.txt ~/Desktop (Using wildcards, we can move multiple files at once, just like Windows.)
(moves all our documents to the desktop) 

21. rm file_name (is used to remove files) 
(Next let's try removing a directory. If you thought to yourself that we need to also recursively remove this directory, you'd be right)
rm -r folder_name

22. less file.name = shows us all cointains of the file = you are lounched into an interactive shell, most common keys - up and down, pg up and pg down, 
g moves to the beginning,capital G moves us to the end of the file, If i 
23. you time in /(word you wanna search) and you can search text file for the specific word, (like this) 
/lookinglookword
(q lets you quit of view file shell) 

24. head (file.name) -shows you first ten lines of the file 
25. tail (file.name) - shows last 10 lines of the file 

26. Nano (text editor) - you can use it in Bash = just type in Nano file.name and it will take you to the Nano program with the text file in it 
(down should be shown commands) 

27. Grep thing.we.are.searching.for file.name 
(if you want to know if the certafin file exists in a directory or a word is in the file) 
grep word.we.are.looking.for *.txt or * or *pictures
(you can use it too to search throught multiple files) 

28. > (standard out redirector operator, like in windows is used in sending output of our commands)
echo woof > file.name (sends woof to the file.name file) (overwrites every text in the file.name file) 
29. >> (functions the same like upper example but now it DOESNT overwrite the files in the folder, only adds to the existing files) 

30. < (standart in operator - you get input from the files you select)

31. cat /etc/sudoers (can be only acessed by root account) 
We can log in as root and then run this command, no problem. But it can be really dangerous to always be in root. 
Since root, like our local administrator account on Windows has unrestricted access on the machine. 
If we make even one mistake, we could delete or modify something important, and that's not good. 
So instead of logging in its root, we can tell the shell that we want to run this one command as root.

32. SUDO command (or in londer version SUPERUSERDO) runs one command as root user without being in root mode, you need to ender password
sudo cat /etc/sudoers

33. sudo su - (substitute user) - changes user if we dont specify user it changes to root user

34. cat /etc/group (You can view who has access to run sudo. This is also how you view memberships for all groups.)

35. cat/etc/passwd (The first field is the username and the second field is the user password. The password isn't actually stored in 
this file. It's encrypted and stored in a different file, just like our group ID password. The third field here is the user id or UID. 
Similar group IDS, user IDs or how our system identifies a user, not by the username. Root has a UID of zero. 
That's basically how you view users and groups in Linux.

36. passwd (linux user name) - user password change (then we enter current password and after that new password) 

37. sudo passwd -e (username) - (we want to change users password when he next time logs in) 

38 sudo useradd (user name) - (adds user to linux system) 

39. sudo userdel (user name) - (deletes user) 

40. ls -l (filename) - shows premissions and who created the file and user premissions (rwxrw) - read, write, execute

41. Modifying premissions first we ls -l (filename) 
chmod u+x (filename) (adds premission) u = owner x = executable 
chmod u-x (filename) (takes away premission) 
chmod u+rx (filename) (gives two premissions read and execute) 

42. sudo chmod (user) (filename) - (changes owner of the file) 

43. sudo chgrp (group owner) (file name) - changes group of the file 

44. sudo dpkg -i atom-amd64.deb (installing package - konkretne atom-amd64.deb - debian package) 
-i = install package 

45. sudo dpkg -r atom (removes atom from 
-r = remove package 

46. dpkg -l (lists debian packages installed on your machine) 
dpkg -l = lists 

47. 7zip -e file_name (example: my_file.tar) 
(extracts file using 7zip) 7zip = packege dependenci

48. WHEN you download program in linux and we have stored it in desktop directory 
- so use command ls to see it, yes it is in desktop (google-chrome-stable_current_amd64.deb)
to start installing it use command: 
sudo dpkg -i google-chrome-stable_current_amd64.deb
(we may get dependency dpkg problem - this means it is depended on another packege that is not currently installed on this machine) 
- it writes us what we need to download so we just download it 
Common Linux package types include: 

.deb - Debian packages
.rpm - Redhat packages
.tgz - TAR archive file 

49. INstalling GIMP
sudo apt install gimp ( then y = yes ) 

50. removing this package 
sudo apt remove gimp 
repositories are servers that act as a central storage for packages 
we can see those repositories on linux machine with:
51. cat etc/apt/sources.list 
52. sudo apt update
(If you want to get the latest package updates, you should update your package repositories with the APT update, and then, 
APT upgrade commands. The APT update command updates the list of packages in your repositories, so you get the latest software available. 
But it won't install or upgrade packages for you.)

52. sudo apt update
(If you want to get the latest package updates, you should update your package repositories with the APT update, and then, 
APT upgrade commands. The APT update command updates the list of packages in your repositories, so you get the latest software available. 
But it won't install or upgrade packages for you.)

53. ls -l dev (When a device is connected to your computer, a device file is created in the /dev directory.)

54. uname -r (If you use the dash r flag for kernel release, you'll see what kernel version you have.)

55. (To update the kernel and other packages, we use our nifty apt command with the option full dash upgrade. 
Before running this command, remember to update your application sources with APT update. Sudo apt update. 
Now, we can run sudo apt full upgrade.)

/dev/sda - First SCSI drive
/dev/sr0 - First optical disk drive 
/dev/usb - USB device
/dev/usbhid - USB mouse
/dev/usb/lp0 - USB printer
/dev/null - discard

$ ls /dev - Lists all devices in the /dev folder 
$ lscpci - Lists devices installed on the PCI bus 
$ lsusb - Lists devices installed on the USB bus
$ lsscsi - Lists SCSI devices, such as hard drives
$ lpstat -p - Lists all printers and whether they are enabled
$ dmesg - Lists devices recognized by the kernel

LINUX FTP SERVER 
On Linux, the configuration files for the installed services are located in the /etc directory.
vsftpd (ftp server, it is enabled by default when we install it, but we neet to set the premissions for it to function properly) 
56. sudo apt install vsftpd (installs the service) (the service is already running) 
57. service vsftpd status (shows us if the service is running) 
58. lftp localhost (by this command we verify that the service is running by connecting to the FTP server with an FTP client) 
Lftp is an ftp client program that allows us to connect to an ftp server. When we tell it to connect to local host, it'll try to connect 
to the ftp server running on local host. Now, let's try to run the ls command to list the contents of the current directory.
You are now in FTP service and type in ls
for exit type in exit 
(the service is failing because it needs password and we dont have them) (for it to function we need to provide anonymous connenctions) 
59. sudo vim /etc/vsftpd.conf (this opens up the ftp config file) - then we change anonymous enable from no to yes 
We've made the change but we aren't done yet. If we try to connect again, ls will still fail.
Play video starting at :3:58 and follow transcript3:58
Ls.
Play video starting at :4:3 and follow transcript4:03
It failed, and then we hit exit. This will also happen with other services because most services read their configuration when they start,
and then keep it in memory while they're running. In order for our service to re-read the configuration, we need to tell it to reload.
Reloading means that the service re-reads the configuration file without having to stop and start. That way, ongoing connections aren't
interrupted, but new connections will use a new configuration.
60. sudo service vsftpd reload 
then we can try to connect again by lftp localhost and it works 

LINUX DNSMASQ
dnsmasq; a program that provides DNS, DHCP, TFTP and PXE services in a simple package.
61. sudo apt install dnsmasq (installs DNSMASQ, it is enabled with basic functionality) - it provides cache for DNS queries, that means 
you can make DNS request to it

62. dig www.examlpe.com @localhost (we ask our DNS server which runs in local host for address for www.example.com
dig command - query DNS servers and lets us see their answers 

63. sudo parted -l (show what disks are connected to the computer) 

64. du -h(disk usage of specified directory) 

65. df (shows free disk space on entire machine) 

66. ps -ef (shows processes running with their PID) shows all processes even other users running processes 
UID = user ID who lounched the process
PID = process ID 
C = number of children processes 

67. kill 10235 (terminates the process) 

68. kill -KILL 10329 (terminates the process right away, could be dangerous, doesnt do any cleanup) it should be the last kill command 

69. kill -TSTP 10454(turns process on pause, suspends it) (CTRL Z) 
70. kill - CONT 10454 (turns process from pause to running) 

71. ps -x (snapshot of current processes running on machine) 
PID = process ID 
STAT (R = running, S = sleeping, T = stopped) 
TIME = total time the process has taken of CPU 
COMMAND = name of the command we are running 

72. ps -ef | grap Chrome(to see if the process is running, it gives us the list of processes with name Chrome in them) 

73. ls -l /proc (every process in linux has a file, to look into the files that respond to the processes we can look into /proc directory)

74. cat /proc/1805/status (tells us even more information about process state)  

75. top (shows task and how much of resources it takes) (hit q key to quit) 

76. uptime - This command shows information about the current time, how long your system's been running, how many users 
are logged on, and what the load average of your machine is.
