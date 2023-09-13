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