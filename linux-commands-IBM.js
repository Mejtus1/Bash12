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


rm - remove files and directories
rm -r example = removes all files and directories under example directory and also itself 
rmdir - remove directory if its empty 

cp: Copy files and direcotires
cp -p file1 file2 = copy file1 to file2 preserving the mode, ownership and timestamp 
cp -i file1 file2 = if file2 exists prompt for confirmation before overwriting it 

mv: Move files or directories
mv -i file1 file2 overwriting file2 or create

cat: display the content of text files and to combine several files to one 
cat file1 file2 

mkdir: Create a directory
mkdir temp
mkdir -p dir1/dir2/dir3/ = create a nested directories

ifconfig: View or configure a network interface 
ipconfig -a = view all interfaces with status
ifconfig eth0 up = start specific interface
ifconfig eth0 down = stop specific interface

locate: Quickly search for the location of a specific file
locate crontab

wget: quick and effective method to download software, music, video from the internet
wget URL 

Getting information
# return your user name
whoami 

# return your user and group id
id  

# return operating system name, username, and other info
uname -a   

# display reference manual for a command
man top  

# get help on a command
curl --help  

# return the current date and time
date  

----------------------------------------------------------
Monitoring performance and status
# list selection of or all running processes and their PIDs
ps  
ps -e 

# display resource usage
top  

# list mounted file systems and usage
df
-----------------------------------------------------------
Working with files
# copy a file

cp file.txt new_path/new_name.txt
# change file name or path
mv this_file.txt that_path/that_file.txt

# remove a file verbosely
rm this_old_file.txt -v

# create an empty file, or update existing file’s timestamp
touch a_new_file.txt  

# change/modify file permissions to ‘execute’ for all users
chmod  +x  my_script.sh

# get count of lines, words, or characters in file
wc  -l table_of_data.csv  
wc  -w my_essay.txt  
wc  -m some_document.txt 

# return lines matching a pattern from files matching a filename pattern - case insensitive and whole words only
grep  -iw hello  \*.txt 

# return file names with lines matching the pattern ‘hello’ from files matching a filename pattern
grep  -l hello  \*.txt

---------------------------------------------------------------------
Navigating and working with directories
# list files and directories by date, newest last
ls -lrt 

# find files in directory tree with suffix ‘sh’
find -name '\*.sh'

# return present working directory
pwd

# make a new directory
mkdir new_folder  

# change the current directory: up one level, home, or some other path
cd ../  
cd ~ or cd  
cd another_directory
`\# remove directory, verbosely`
rmdir temp_directory -v

-------------------------------------------------------------------------
Printing file and string contents
# print file contents
cat my_shell_script.sh 

# print file contents page-by-page
more ReadMe.txt  

# print first N lines of file
head -10 data_table.csv

# print last N lines of file
tail -10 data_table.csv

# print string or variable value
echo "I am not a robot" 
echo "I am $USERNAME"  

Compression and archiving
# archive a set of files
tar -cvf my_archive.tar.gz file1 file2 file3

# compress a set of files
zip my_zipped_files.zip file1 file2 
zip my_zipped_folders.zip directory1 directory2

# extract files from a compressed zip archive
unzip my_zipped_file.zip 
unzip my_zipped_file.zip -d extract_to_this_direcory

---------------------------------------------------------------
Performing network operations
# print hostname
hostname  

# send packets to URL and print response
ping  www.google.com

# display or configure system network interfaces
ifconfig  
ip 

# display contents of file at a URL
curl <url>

# download file from a URL
wget <url>
