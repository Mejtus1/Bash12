/*
Copying files

Full path: 
cp /home/user/Documents/http.pcapng /home/user/
pcapng has been copied from Documents folder to user directory

Relative path: 
(Copy to directory where we currently are)
cp http.pcapng http2.pcapng 

------------------------------------------------------------------------------
Changing Directories

cd <destination directory> = change directories

cd /home/<your username>/Downloads = navigate to your Downloads directory
the benefit of using a fully qualified path
- execute the command from any location in the file system 

tilde (~)
cd ~/Downloads = execute the command from any location in the file system

Copying and Moving Files
cp: Copy files
mv: Move files

cp /<source path/file name>/<destination path/file name> 

cp Downloads/test.pcap PCAPS 

------------------------------------------------------------------------------
File properties and permissions 
- Most issues with the file system can be traced to issues with file permissions and file ownership 

Display file properties
ls –l <files> 
- the –l parameter instructs the command to display the listed files with their properties
example output: 
-rw-rw-r-- 1 ed ed  289587 May 10  09:59 D-ITG-2.8.1-r1023-src.zip
-rw-rw-r-- 1 ed ed 1462172 May 10 10:11  HP_ProCurve_802.1x_Setup.pdf
-rw-rw-r-- 1 ed ed 2818992 May 16 10:10  nixnote2-2.0-beta7_amd64.deb
-rwx------
The first section describes the actions that the owner of the file is allowed to perform. 
----rwx---
The second section identifies the actions that the users in the group assigned to the file can perform. 
-------rwx
The third section indicates the actions that all other users are allowed to perform on the file. 

Three actions can be configured for a file:
r: Read
w: Write
x: Execute

The first section describes the actions that the owner of the file is allowed to perform. 
The second section identifies the actions that the users in the group assigned to the file can perform. 
The third section indicates the actions that all other users are allowed to perform on the file. 

Linux treats file permissions as a hierarchy. 
- without permissions to read the directory, you could not see a list of the files that are inside, 
and without execute permissions on the directory, you would not be able to open the files that are inside

------------------------------------------------------------------------------
Editing File Properties

chmod command has many options to modify file permissions

With the symbolic method, you can use a symbol to represent the access class and the access type you want to modify
You specify the operator to set the state of the access type by placing it in front of the access type symbol 
When the access type and access class are chosen,  the selections are affected by the command 
The exception to this rule is when you use the = operator. If you omit an access class, the a or all access class is implied.

The example that follows sets the user access class to the file called MyFile.txt to read only:
chmod u+r MyFile.txt 

This example sets the access type to read and write for both the user and the group:
chmod ug+rw MyFile.txt 

The next example sets the access type to read and removes write access to the group and others:
chmod go+r-w MyFile.txt 

The last example sets all users access type to read only:
chmod a=r MyFile.txt 

------------------------------------------------------------------------------
Displaying Processes and Process Threads

top
The top application screen is divided into two sections:
- upper portion lists general information regarding system resource utilization

The top application screen is divided into two sections:
The upper portion lists general information regarding system resource utilization as follows: 
- first row lists system up time and system load average
- second row gives you general information about the processes running on the host
- third row lists various aspects of how the CPU is being utilized
us: user space processes 
sy: system/kernel processes
id: system idle time

The lower section shows details of the top running processes:
The columns of information that is displayed by top are as follows:
PID: Process ID number. When a process is started, it is given a unique PID that identifies that process to the system. If you ever need to kill a process, you can refer to the process by its PID.
User: The user name of the process’s owner
PR: The scheduling priority of the process
NI: The process’s nice value. 
VIRT: Virtual memory
RES: Resident, non-swapped physical memory
SHR: Shared memory
S: Process status
    D: Uninterruptible sleep (stuck waiting for input or output)
    R: Running (executing normally)
    S: Sleeping (waiting internally)
    T: Stopped by job control (stopped with a signal from the kernel)
    t: Stopped by debugger (another process has full control)
    Z: Zombie (completed processes that are not yet removed from the kernel's process table)
%CPU: The estimated percentage of CPU resources being consumed by the process
%MEM: The percentage of physical memory being consumed by the process
TIME+/–: The total CPU time the process has consumed since it started   
COMMAND: The name of the process

------------------------------------------------------------------------------
The ps Command
- to extract more specific information about processes

An example of using the ps:
ed@carl:~$ ps
  PID TTY          TIME          CMD
20393 pts/1    00:00:00   bash
30251 pts/1    00:00:00   ps 

add more information about the processes:
ed@carl:~$ ps –f
UID        PID      PPID    C   STIME   TTY       TIME           CMD
ed       20393   20392   0   12:41    pts/1    00:00:00    –bash
ed       30387    20393  0   13:20    pts/1    00:00:00      ps -f 
Using the -f option added the following columns:
UID: User ID of the owner of the process
PPID: Parent Process ID
C: CPU utilization percentage
STIME: Process start time

-e lists every process and 
-f displays the output in the full format
- grep command = filter
ed@carl:~$ ps -ef | grep ssh.*
root     892           1    0 Jun04 ?        00:00:00     /usr/sbin/sshd –D
root   12698   892    0 Jun07 ?        00:00:00     sshd: ed [priv]
ed     12784  12698  0 Jun07 ?        00:00:00     sshd: ed@pts/0
root   20355   892     0 Jun07 ?        00:00:00     sshd: ed [priv]
ed     20392  20355  0 Jun07 ?         00:00:00     sshd: ed@pts/1
ed     29615  12785  0 17:55 pts/0  00:00:00     grep --color=auto ssh.*

------------------------------------------------------------------------------
Environment Variables and Shell Variables

- linux provides mechanisms for creating variables that represent text strings you can access with the variable name rather than the string itself 
- common use case for this functionality is to store file system locations that you can reference with the variable 
- in fact, one of the more important variables that you will encounter frequently as you interact with the shell is a variable that is called $PATH 
- this variable stores a list of the directories that the system searches when you execute a command

ed@carl:~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:
/bin:/usr/games:/usr/local/games:/snap/bin 

create shell variables
ed@carl:~$ MYVAR="abc123"
ed@carl:~$ echo $MYVAR
abc123 
- shell variable named MYVAR is created and assigned value abc123 
- then, the echo command displays the value of the variable

------------------------------------------------------------------------------
Shutting Down the System

shutdown --help = shows command prompts for shutdown command
shutdown -r now = shuts down the system immediately and reboots it 
shutdown +1 = schedule a shutdown of a system after 1 hour 
shutdown -c = cancel previous command
systemctl reboot = reboots the system (seccond option for shutdown, reboot for devices running systemd)

------------------------------------------------------------------------------
Displaying Open Files
- it is important from point of troubleshooting to monitor 
- linux tends to treat everything as if it is a file, including devices, 
- there is also possibility to list things such as device file references
                                                    directories
                                                    even network connections
lsof = lists every open file

ed@carl:~$ sudo lsof /var/log/syslog
COMMAND  PID   USER     FD   TYPE  DEVICE  SIZE/OFF       NODE      NAME
rsyslogd       651   syslog    5w   REG      8,1          161355    4063351  /var/log/syslog 

Some of the key features of this output include the following:
Command: The name of the process using the file
PID: The process ID of the command using the file
User: The user running the process
FD: File descriptor: a reference number that is used by the kernel to identify an open file
Type: Identifies the type of file
Device: Device number that represents the device being called to perform the I/O
Size/Off: The file size or memory offset
Node: The file’s INODE number, which is used to uniquely identify the file on the file system
Name: The path and filename

lsof can also be useful for tracking the state of network connections
ed@carl:~$ sudo lsof -i TCP -s TCP:LISTEN
COMMAND    PID   USER    FD   TYPE  DEVICE  SIZE/OFF   NODE NAME
sshd       892     root  3u   IPv4   19766      0t0    TCP *:ssh (LISTEN)
sshd       892     root  4u   IPv6   19768      0t0    TCP *:ssh (LISTEN)
vsftpd     898     root  3u   IPv6   13144      0t0    TCP *:ftp (LISTEN)
dnsmasq    992   nobody  5u   IPv4   13299      0t0    TCP carl:domain (LISTEN)
xrdp       1782    xrdp  6u   IPv4   18695      0t0    TCP *:3389 (LISTEN)
xrdp-sesm  1784    root  6u   IPv4   19622      0t0    TCP localhost:3350 (LISTEN) 

ed@carl:~$ sudo lsof -i TCP -s TCP:ESTABLISHED
COMMAND   PID    USER   FD   TYPE  DEVICE  SIZE/OFF  NODE NAME
sshd     12698   root   3u   IPv4  2710167   0t0   TCP 192.168.7.88:ssh->192.168.7.119:53743 (ESTABLISHED)
sshd     12784    ed    3u   IPv4  2710167   0t0   TCP 192.168.7.88:ssh->192.168.7.119:53743 (ESTABLISHED)
sshd     20355   root   3u   IPv4  2728447   0t0   TCP 192.168.7.88:ssh->192.168.7.119:54225 (ESTABLISHED)
sshd     20392    ed    3u   IPv4  2728447   0t0   TCP 192.168.7.88:ssh->192.168.7.119:54225 (ESTABLISHED) 

------------------------------------------------------------------------------
Monitoring I/O

iostat = get a snapshot of current I/O activity

ed@carl:~$ iostat 2
Linux 4.4.0-22-generic (carl) 06/11/2016 _x86_64_(4 CPU)
avg-cpu:  %user   %nice %system   %iowait    %steal     %idle
1.88      0.00    0.22            0.00       0.00       97.90
Device:      tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda          0.18   1.14         4.89          691475    2978716 
- upper portion of the output shows general CPU utilization statistics
- lower portion of the output lists the devices that are producing I/O

ed@carl:~$ vmstat
- outputs memory utilization relative to swap activity

Monitoring Memory Utilization

 ed@carl:~$ ps -o maj_flt 892
 MAJFL
    11 
- a major page fault happens when a process requests memory resources from the system
- those resources are not available at the time of the request, which causes the system to reach out to the swap space so that it can get the resources that it needs


------------------------------------------------------------------------------
Variables
ed@carl:~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin 

we cannot run our script if we are not in these paths, 
we are currently in /home/parrallels/ path, so to call a variable we need to ./ name of the application to run the executable 
ed@carl:~$ ./ name of the application to run the executable

nano MyTestApp
(NANO text editor opens)
#!bin/bash/
#This is test app 
echo "Hello cyber security experts"

(file name to save = MyTestApp)
chmod 755 MyTestApp (we make it an executable)
ls -l MyTestApp (rwx for owner)
If we just try to execute it at this point 
MyTestApp (ouput: no command found)

We have to use ./MyTestApp (now it executes that command for us)

------------------------------------------------------------------------------
STDIN, STDOUT, STDERR
STDIN = our input from keyboard
STDOUT = output comming back from the system, (the output can come to a file or other system)
STDERR = output that comes from the error message (either display or log file for troubleshooting)

To test STDIN, you can use the cat command. The cat command is used to display the contents of the file 
you specify as a parameter to the command. It dumps the contents of the file to STDOUT, which is the screen 
if you don’t direct the output elsewhere. If you don’t specify a file as the input source, the cat command takes 
its input from the default input device which is the keyboard. In this example, STDIN represents what you type at the keyboard:

ed@carl:~$ cat
test
test
123
123 

Directing command output 
- command’s output can be directed 
- echo command normally echoes, or copies, the value specified as the command option to the screen
ed@carl:~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
- you can direct the STDOUT to a file instead
ed@carl:~$ echo $PATH > path.txt 
- does not produce output to the screen
- created path.txt file (with output of echoed PATH variable)
ed@carl:~$ cat path.txt 
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin 

To not overwrite the data in path.txt file we use >> (double greater than symbols)
ed@carl:~$ echo "Test data" > path.txt (overwrites the old data in path.txt)
ed@carl:~$ echo "More test data" >> path.txt (adds text to path.txt)
ed@carl:~$ cat path.txt 
Test data
More test data 

- output of the command was directed to the output.txt file, a message was sent to the display 
- this message did come from STDERR 
- couple of ways that you can manage this problem
- One way is to simply discard the message if it is not important to you, as follows:
ed@carl:~$ ls –al abc123.txt > output.txt 2> /dev/null
ed@carl:~$ 

- however, messages that are produced by STDERR could be used to troubleshoot a problem. 
- following is an example of how you can configure such an outcome:
ed@carl:~$ ls –al abc123.txt > output.txt 2> errors.txt
ed@carl:~$ cat errors.txt 
ls: cannot access 'abc123.txt': No such file or directory 

ed@carl:~$ ls –al abc123.txt > output.txt 2>> errors.txt (using >> to not overwrite directed data)
ed@carl:~$ cat errors.txt 
ls: cannot access 'abc123.txt': No such file or directory
ls: cannot access 'abc123.txt': No such file or directory 

------------------------------------------------------------------------------
Piping Command Output
- send the output of one command to another command which is a process

ed@carl:~$ ps -ef | grep ssh
root      892      1     0   Jun04 ?       00:00:00    /usr/sbin/sshd –D
root     12698    892    0   Jun07 ?       00:00:00    sshd: ed [priv]
ed       12784   12698   0   Jun07 ?       00:00:00    sshd: ed@pts/0
root     20355    892    0   Jun07 ?       00:00:00    sshd: ed [priv]
ed       20392   20355   0   Jun07 ?       00:00:00    sshd: ed@pts/1
ed       32560   20393   0   16:45 pts/1   00:00:00    grep --color=auto ssh 

- the output was piped out of the ps command to the grep command
- filter lengthy output from a command through a grep filter

- there can be piped as many commands together as possible 
ed@carl:~$ ps -ef | grep ssh | sort -d
ed       12784    12698    0   Jun07 ?         00:00:00    sshd: ed@pts/0
ed       20392    20355    0   Jun07 ?         00:00:00    sshd: ed@pts/1
ed        5958     20393   0   17:08 pts/1     00:00:00    grep --color=auto ssh
root     12698    892      0   Jun07 ?         00:00:00    sshd: ed [priv]
root     20355    892      0   Jun07 ?         00:00:00    sshd: ed [priv]
root       892     1       0   Jun04 ?         00:00:00    /usr/sbin/sshd -D 
- sort the output alphabetically 

------------------------------------------------------------------------------
The awk command
- powerful text processing tool
- mostly used as a data extraction

- output of the ps command piped to a grep command filtering on the ssh string 
ed@carl:~$ ps -ef | grep ssh
root       892        1         0    Jun04 ?         00:00:00     /usr/sbin/sshd –D
root     12698    892     0    Jun07 ?         00:00:00     sshd: ed [priv]
ed       12784   12698   0    Jun07 ?         00:00:00    sshd: ed@pts/0
root     20355    892     0    Jun07 ?          00:00:00    sshd: ed [priv]
ed       20392    20355  0    Jun07 ?         00:00:00    sshd: ed@pts/1
ed       32560    20393  0   16:45 pts/1   00:00:00    grep --color=auto ssh 

- using awk to further refine the ps output 
ed@carl:~$ ps -ef | grep ssh | awk '{print $1 "\t" $2 "\t" $8}'
root   892/usr/sbin/sshd
root   12698  sshd:
ed     12784  sshd:
root   20355  sshd:
ed     20392  sshd: 
- $1 it represents the first field
- \t. This construct represents a tab
- $8 represents the eighth field


The sed Command
- sed command, like awk, is a very powerful tool that is implemented in Linux 
- it is a language unto itself, but can also be used from the command line
- sed command is a stream editing tool that performs the action you configure on lines of text that are read in from files or STDIN

ed@carl:~$ echo "left" | sed -e 's/left/right/'
right 

- echo command produced the word left
- rather than sending the output of echo to STDOUT, it was piped to the sed command, 
which is configured to look for the string left and replace it with the string right
- in the line that follows the command, the resulting string is right.

In this next example, use sed to normalize a file. The file names.txt contains the following:
ed@carl:~$ cat names.txt 
mr. Jones
mr. Smith
Mr. Rogers
mr. Mister 

The goal list is to normalize the instances of mr., so that they all appear with an upper case M
ed@carl:~$ sed -e 's/[Mm]r/Mr/' names.txt
Mr. Jones
Mr. Smith
Mr. Rogers
Mr. Mister 
- input pattern uses a regular expression to look for the letter m, in either upper or lower case
followed by the letter r
- once found, it replaces the string with Mr. 

Another way to use sed is to delete lines from an input source that match criteria that you specify.
sed –e ‘1d ; 3d’ names.txt
mr. Smith
mr. Mister 
ed@carl:~$ sed -e '1,3d' names.txt
mr. Mister

This example looks for lines that contain the string mr in lower case and deletes them
ed@carl:~$ sed -e '/mr/d' names.txt 
Mr. Rogers 

--
To remove the blank lines and make the file more consistent, use the following sed command:
ed@carl:~$ sed -e '/^$/d' names.txt 
mr. Jones
mr. Smith
Mr. Rogers
mr. Mister 

- regular expression: /^$/ is used
- caret (^) is a metacharacter that represents the beginning of the line
- dollar sign symbol ($) is a metacharacter that represents the end of the line
- there is nothing between the two, it is effectively looking for a blank line
- then follow the regular expression with the d option to delete the lines that match

