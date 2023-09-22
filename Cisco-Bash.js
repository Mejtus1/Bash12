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

------------------------------------------------------------------------------
Text editors 

The vi command
- editing text files
- vi application was devised as a full screen visual interface to line-oriented text

ed@ubuntu:~$ vi MyFile.txt 
The vi application opens a  full-screen editor page.

 ~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
"MyFile.txt" [New File]                                       0,0-1         All  

- when you are in insert mode, you can begin entering text
- when you finish making edits, press Esc to exit insert mode
i: Enter Insert mode. Press Esc to exit Insert mode and return to command mode.

:w: Write your changes to the file.
:q: Quit vi. If edits are pending, you will get a warning to let you know.
:q!: Quit without saving which exits the application immediately and any pending edits are lost.
:wq: Write edits to the file and quit the application.

Nano text editor 
- Nano is a simple, easy to use text editor
- Nano's weakness is its limited feature set, it is not as powerful as vi

------------------------------------------------------------------------------
Networking 

ed@ned:~$ ifconfig -a
- –a option instructs the system to output information on all the interfaces even if they are down
- displays IP information 

Configuring ethernet interface
ed@carl:~$ sudo ifconfig ens160 192.168.7.73

ed@carl:~$ ifconfig ens160
inet addr:192.168.7.73
the ifconfig command was used to set the IP address for the ens160 interface

Viewing and Configuring Routes

ed@ned:~$ netstat -rn
Kernel IP routing table

Destination      Gateway         Genmask         Flags   MSS  Window  irtt   Iface
0.0.0.0          192.168.7.1     0.0.0.0         UG      0    0       0      ens160
192.168.7.0      0.0.0.0         255.255.255.0   U       0    0       0      ens160 

- netstat command with the –rn options as shown displays the routing table with numeric IP addresses
- first route represents the default route 
The IP address 0.0.0.0 with a netmask of 0.0.0.0 represents any IP address 
The gateway value represents where to send traffic with destinations that are not known to the device
- second route represents a static route for the local network 
So, any traffic with a destination of 192.168.7.0/24 is not sent to a gateway
Rather, it is transmitted to hosts in the local network segment

In a new installation, you may need to set the default gateway 
The syntax for doing so is as follows:

ed@ned:~$ sudo route add default gw 192.168.7.1 

- term "default" in the example represents the 0.0.0.0 IP address, 
- the gw option followed by an IP address is the gateway


Statically set a route to a network

ed@ned:~$ sudo route add -net 192.168.133.0 netmask 255.255.255.0 gw 192.168.7.200
ed@ned:~$ netstat -rn

Kernel IP routing table
Destination      Gateway         Genmask        Flags   MSS   Window  irtt   Iface
0.0.0.0          192.168.7.1     0.0.0.0        UG       0     0      0      ens160
192.168.7.0      0.0.0.0         255.255.255.0  U        0     0      0      ens160
192.168.133.0    192.168.7.200   255.255.255.0  UG       0     0      0      ens160 

Structure of the route command for entering the static route is as follows:
route: The route command
add: The option to indicate that you wish to add a route
-net: The option to indicate that the destination of the route is a network
192.168.133.0: The IP address of the destination network
netmask 255.255.255.0: The netmask value for the destination network
gw 192.168.7.200: The gateway IP address of where to send traffic that is destined for the 192.168.133.0 network

ed@ned:~$ sudo route del -net 192.168.133.0 netmask 255.255.255.0 gw 192.168.7.200 
ed@ned:~$ netstat -rn

Kernel IP routing table
Destination     Gateway         Genmask         Flags    MSS   Window  irtt  Iface
0.0.0.0         192.168.7.1     0.0.0.0         UG       0     0       0     ens160
192.168.7.0     0.0.0.0         255.255.255.0   U        0     0       0     ens160 

- in the example, the route created previously was deleted.


Testing Connectivity
"ping command" 
- test connectivity to other hosts

ed@ned:~$ ping 192.168.7.88
PING 192.168.7.88 (192.168.7.88) 56(84) bytes of data.
64 bytes from 192.168.7.88: icmp_seq=1 ttl=64 time=0.980 ms
64 bytes from 192.168.7.88: icmp_seq=2 ttl=64 time=0.737 ms
64 bytes from 192.168.7.88: icmp_seq=3 ttl=64 time=0.138 ms
^C
--- 192.168.7.88 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2000ms
rtt min/avg/max/mdev = 0.138/0.618/0.980/0.354 ms 

- this simple test confirms that the host is able to communicate over the network

------------------------------------------------------------------------------
SSH 

- here will be shown the most basic function for SSH = remote secure connection to the host 

ssh <username>@<remote host>

user@computer:~$ ssh ed@192.168.7.88

ed@192.168.7.88's password:
Welcome to Ubuntu 16.04 LTS (GNU/Linux 4.4.0-22-generic x86_64)

195 packages can be updated.
45 updates are security updates.

Last login: Sun Jun 16 16:29:04 2019 from 192.168.7.141
ed@carl:~$  

- upon issuing the ssh command, you are prompted for the password of the user account on the remote system
- if the credentials are valid, you are presented with any system messages, followed by the command shell prompt of the remote host
- after valid credentials you can issue commands on the remote machine 

ed@carl:~$ exit
logout

Connection to 192.168.7.88 closed.
- exit the session

first login to a host will present a message asking to accept the public key of the remote host 

ed@carl:~$ ssh ed2@192.168.7.141

The authenticity of host '192.168.7.141 (192.168.7.141)' can't be established
ECDSA key fingerprint is SHA256:AZ4v3ThpS/R0nPVcaa1I/614UDgM4Ir49TwCnXs/oQI
Are you sure you want to continue connecting (yes/no)? yes

Warning: Permanently added '192.168.7.141' (ECDSA) to the list of known hosts.
Password:

Last login: Sun Jun 16 06:59:05 2019
user@computer:~ ed2$ 

- if the host is trusted the remote host, enter yes 
- on the first connection to a new host, by independently verifying host key fingerprint 
- trusted network administrator could run command to view ssh key of host to verify it 

user@computer:~$ ssh-keygen -l -f /etc/ssh/ssh_host_ecdsa_key.pub
256 SHA256: AZ4v3ThpS/R0nPVcaa1I/614UDgM4Ir49TwCnXs/oQI /etc/ssh/ssh_host_edcsa_key.pub (EDCSA) 

- once the host key is comfirmed in the prompt above, 
it is saved in home folder at ~.ssh/known_hosts.  
- this file is read by SSH before asking for your username or password

------
-Assuming you previously used SSH to connect the host at the IP address 192.168.7.141, 
but the host has since been replaced by a different host under the same IP address 
- keys of the new host would be different than the original host
- warning will be displayed about possible impersonation of the original host 

ed@carl:~$ ssh ed@192.168.7.141

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.

The fingerprint for the ECDSA key sent by the remote host is
SHA256:nZUEmqin5WGn3c72jF9vRQ0Kaj33jQwjuWXCmcjiXMs.

Please contact your system administrator.
Add correct host key in /home/ed/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/ed/.ssh/known_hosts:6

remove with:
ssh-keygen -f "/home/ed/.ssh/known_hosts" -R 192.168.7.141

ECDSA host key for 192.168.7.141 has changed and you have requested strict checking.
Host key verification failed.
ed@carl:~$  

- the messsage indicates potential for malicious situaction
- if there is a change, the guide to remove old host and add new is automatically displayed


Securely Copying Files Between Hosts

scp <source path to file> <remote user>@<remote host>: <remote destination path> 
Similarly, to copy a file from a remote system to the local system, swap the parameters:
scp <remote user>@<remote host>:<remote path to file> <destination path> 

The example:
ed@ned:~$ scp Firefox_wallpaper.png ed@192.168.7.88:
------------------------------------------------------------------------------
Managing Services in SysV Environments
- “bouncing” the service =  stop and start the service so the updated configurations can be read and implemented by the operating system
- most modern implementations of Linux use systemd to manage services

ed@carl:~$ ps -ef | grep ftp
root      7929     1  0 10:50 ?        00:00:00 /usr/sbin/vsftpd /etc/vsftpd.conf
ed        7969  5288  0 10:51 pts/0    00:00:00 grep --color=auto ftp


ed@carl:~$ sudo service vsftpd stop
ed@carl:~$ ps -ef | grep ftp 
ed        8262  5288  0 10:52 pts/0    00:00:00 grep --color=auto ftp


ed@carl:~$ sudo service vsftpd start

ed@carl:~$ ps -ef | grep ftp
root      8377     1  0 10:52 ?        00:00:00 /usr/sbin/vsftpd /etc/vsftpd.conf
ed        8426  5288  0 10:52 pts/0    00:00:00 grep --color=auto ftp 

------
Systemd Service Manager
- systemd is rapidly becoming the standard for system initialization and system management
- common location for systemd unit files
/usr/lib/systemd/system 

systemctl command
- manage units

systemctl [command] [unit name] 

sudo systemctl start vsftpd       : Starts the VS FTP daemon
sudo systemctl stop vsftpd        : Stops the VS FTP daemon
sudo systemctl restart vsftpd     : Restarts the VS FTP daemon

sudo systemctl reload vsftpd      : Reloads the VS FTP daemon configuration files without stopping the service
sudo systemctl daemon-reload      : Reloads the systemd configuration and dependencies without stopping the 
                                    services that systemd is managing

------------------------------------------------------------------------------
The lsof Command in Networking 
- stands for "list open files"
- primarily concerned with open files and the processes that are using them

sudo lsof –i: List files that are associated with an internet address.
sudo lsof –i tcp: List files that are associated with an internet address using the TCP protocol.
sudo lsof –i tcp:80: List files that are associated with an internet address using the TCP protocol under port 80.
sudo lsof –i udp:53 -P: List files that are  associated with an internet address using the UDP protocol under port 53. The –P (upper case) lists the ports with their numeric values rather than symbolically. 
sudo lsof –i @192.168.222.1: List files that are associated with the specified internet address. The address could be either the source or destination address.
sudo lsof –i @192.168.222.1:21 -P: List files that are associated with the specified internet address and port. The address could be either the source or destination address. 
- the –P (upper case) lists the ports with their numeric values rather than symbolically (for example,. "443" instead of "https").

suda netstat -a46 (shows IPV4 and IPV6 -a = any connections)
sudo netstat -lt (shows listening TCP connections)
sudo netstat -lun (listen, UDP, n = Numeric format)

------------------------------------------------------------------------------
DNS in Linux 
/etc/hosts = DNS file containing DNS info (8.8.8.8. Google.com)

/etc/nsswitch.conf = defines where the OS needs to go to fetch information it needs
- first check /etc/hosts/
- second check mdns4_minimal (reslove multicast DNS if ends in .local)
If NOTFOUND returns from mdns4, come back to this list and return another message
- last resolve with configured DNS servers

----
Testing Name Resolution

nslookup 
 
ed@ubuntu:/usr/lib/systemd$ nslookup cisco.com
Server:127.0.1.1
Address:127.0.1.1#53

Non-authoritative answer:
Name:cisco.com
Address: 72.163.4.161 

- add the IP address of a different DNS server
- forwarding your request to that server

ed@ubuntu:/usr/lib/systemd$ nslookup cisco.com 8.8.8.8
Server:8.8.8.8
Address:8.8.8.8#53

Non-authoritative answer:
Name:cisco.com
Address: 72.163.4.161 

- nslookup command also allows you to perform reverse DNS lookups
ed@ubuntu:/usr/lib/systemd$ nslookup 72.163.4.161

Server:127.0.1.1
Address:127.0.1.1#53

Non-authoritative answer:
161.4.163.72.in-addr.arpaname = www1.cisco.com 


whois

ed@ubuntu:/usr/lib/systemd$ whois 72.163.4.161
#
# ARIN WHOIS data and services are subject to the Terms of Use
# available at: https://www.arin.net/whois_tou.html
#
# If you see inaccuracies in the results, please report at
# https://www.arin.net/public/whoisinaccuracy/index.xhtml
#
#
# The following results may also be obtained via:
# https://whois.arin.net/rest/nets;q=72.163.4.161?showDetails=true&showARIN=false&showNonArinTopLevelNet=false&ext=netref2
#
NetRange:       72.163.0.0 - 72.163.255.255
CIDR:           72.163.0.0/16
NetName:        CISCO-GEN-7
NetHandle:      NET-72-163-0-0-1
Parent:         NET72 (NET-72-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       
Organization:   Cisco Systems, Inc. (CISCOS-2)
RegDate:        2006-10-24
Updated:        2015-08-13
Ref:            https://whois.arin.net/rest/net/NET-72-163-0-0-1 
------------------------------------------------------------------------------
Viewving network Traffic using TCPDUMP

sudo tcpdump <options> <filters> 

- the options come in the form of command line switches to control tcpdump’s packet collection parameters
- the filters section defines the traffic to view or capture
- the absence of a filter instructs the command to act on all the network traffic that it sees

filters:

sudo tcpdump –i ens33 –Xnns 0 host 192.168.222.1 

-i: interface on which to listen 
-X (upper case): Outputs the payload in both hex and ASCII
-nn: Outputs host addresses and ports in numeric format
-s: Snap length
host 192.168.222.1: only evaluate packets to or from specified host

The output that this example would produce is as follows:

ed@ubuntu:/usr/lib/systemd$ sudo tcpdump -i ens33 -Xnns 0 host 192.168.222.1 
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on ens33, link-type EN10MB (Ethernet), capture size 262144 bytes

14:15:43.238436 IP 192.168.222.135.40678 > 192.168.222.1.21: Flags [S], seq 1428615420, win 29200, options [mss 1460,sackOK,TS val 53618902 ecr 0,nop,wscale 7], length 0
    0x0000:  4500 003c d82a 4000 4006 24b7 c0a8 de87  E..<.*@.@.$.....
    0x0010:  c0a8 de01 9ee6 0015 5526 f0fc 0000 0000  ........U&......
    0x0020:  a002 7210 3e09 0000 0204 05b4 0402 080a  ..r.>...........
    0x0030:  0332 28d6 0000 0000 0103 0307            .2(.........

14:15:43.238772 IP 192.168.222.1.21 > 192.168.222.135.40678: Flags [S.], seq 2389988806, ack 1428615421, win 65535, options [mss 1460,nop,wscale 5,nop,nop,TS val 1399261396 ecr 53618902,sackOK,eol], length 0
    0x0000:  4500 0040 9d88 4000 4006 5f55 c0a8 de01  E..@..@.@._U....
    0x0010:  c0a8 de87 0015 9ee6 8e74 55c6 5526 f0fd  .........tU.U&..
    0x0020:  b012 ffff a774 0000 0204 05b4 0103 0305  .....t..........
    0x0030:  0101 080a 5367 08d4 0332 28d6 0402 0000  ....Sg...2(.....

14:15:43.238860 IP 192.168.222.135.40678 > 192.168.222.1.21: Flags [.], ack 1, win 229, options [nop,nop,TS val 53618902 ecr 1399261396], length 0
    0x0000:  4500 0034 d82b 4000 4006 24be c0a8 de87  E..4.+@.@.$.....
    0x0010:  c0a8 de01 9ee6 0015 5526 f0fd 8e74 55c7  ........U&...tU.
    0x0020:  8010 00e5 3e01 0000 0101 080a 0332 28d6  ....>........2(.
    0x0030:  5367 08d4 

- to stop the capture, press <Ctrl-C>

You can further refine your filter by adding a port constraint as follows:
sudo tcpdump –i ens33 –Xnns 0 host 192.168.222.1 and port 21 

You can also use negation in the filter as follows:
sudo tcpdump –i ens33 –Xnns 0 host 192.168.222.1 and not port 22 

In cases where you have an SSH session to the monitored host and you may want to exclude the SSH traffic
There are times where you may want to save the data output from the tcpdump command

------------------------------------------------------------------------------

