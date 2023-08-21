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
