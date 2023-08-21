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