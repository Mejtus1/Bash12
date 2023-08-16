/*
Basic linux commands 

Internal commands:
- built into the shell program and are shell dependent. Also called build-in commands
- they are already in the system

External commands:
- Commands that the system offers, are totally shell-independent and usually can be found in any Linux distribution
- they mostly reside in /bin and /usr/bin

command tricks 
- command completion = tab key
- CTRL A = move cursor to the beginning of the file 
- CTRL E = move your cursor to the end of the line 

history - shows history of your commands, might be used to show which commands were runned 
during operation system uptime 
history -c = clears history 

-----------------------------------------------------------------------------------------
Basic Linux commands 
uname = shows operating system
uname -a = shows additional information like current Linux kernal used, hostname
cd = change directory 
pwd - print working directory = shows information about the path we are currently in 

tar: create a new tar archive
tar cvf archive_name.tar dirname/
tar xvf archive_name.tar = exract from an existing tar archive
tar tvf archive_name.tar = view an existing tar archive 

grep: Search for a given string in a file(case in-sensitive search)
grep -i "the" demo_file
grep -A 3 -i "example" demo_file = print the matched line, along with the 3 lines after it 
grep -r "ramesh" * = search for a given string in all files recursively

find: Find files using file-name ( case in-sensitive find )
find -iname "MyCProgram.c"
find -iname "MyCProgram.c" -exec md5sum = execute commands on files found by the find command
find -empty = find all emptry files in home directory

ls: lists directory contents of files and directories
ls -ltr = order files based on last modified time 

shutdown: Shutdown the system and turn the power off immediately
shutdown -h now 
shutdown -h +10 = shutdown system after 10 minutes 
shutdown -r now = reboot the system using shutdown command
shutdown -fr now = force the filesystem check during reboot 

-----------------------------------------------------------------------------------------
ftp IP/hostname = to view the file names located on the remote server before downloading
ps: used to display information about the processes running in the system

free: command used to show free memory in our system
free -g = shows free memory in gb

df: displays the file system disk space usage
df -k = displays the output in bytes
df -h = displays the output in human readable form 
df -T = displays what type of file system is being used 

kill: terminate a process
ps -ef = we need process ID we want to kill 
