//This is a BASH crash course that explains commands used in bash 
//........................................................................//
//........................................................................// 
/*                          ls (list storage)
shows directory that you are logged into (usually home directory)
Mejtus@PC:~$
 Name , : , ~ = home directory , $ = normal user (not root, admin)

                                    ls -a 
            shows everything in the directory (some files are hidden with . (dot))

                                    ls -l
            shows us information about files in the directory (permissions, who created it, time)

                                    ls -la 
            shows us information about all files in the directory 

//........................................................................//
//........................................................................//
/*                  Directories in Linux 
                            root (we start out at root, it is a base of all files and directories)
                                 (all the directories are files within a files)
                                 under root directory we have:
/bin/ , /opt/ , /boot/ , /moot/ , /dev/ , /sbin/ , /etc/ , /srv/ , /home/ , /tmp/ , /lib/ , /media/ 
                                  /var/ , /mnt/ , /usr/ 
        under /var/ directory we have                       under /usr/ directory we have 
    /cache/ , /log/ , /spool/ , /tmp/                       /bin/ , /include/ , /lib/ , /sbin/ 


//........................................................................//
//........................................................................//
                    pwd (print working directory)
shows us full path of the file system, from the root to wherever we are now 
/root/home/downloads/file.txt/ 


//........................................................................//
//........................................................................//
                    Relaitve and Absolute paths 
relative path = ls /Downloads (lists downloads from our current directory)
absolute path = ls /root/home/Downloads/ (lists downloads but we dont have to be in directory containing downloads)


//........................................................................//
//........................................................................//
                        cd (Change directory)
cd /Documents - we change directory with this command, move around the system
cd .. - takes us step back 
cd ~ - takes you home 
using cd tap key fills in your directory names 


//........................................................................//
//........................................................................//
                            Push and Get 
/* Lets say we are in Downloads folder, and we need to get to another folder
that is way awaay on our file system
- we are in downloadsd and we need to get to /etc
command for that is pushd 
pushd /etc (puts us in /etc directory ) - now we are in /etc directory
now we can use command popd and it gets us back to the downloads directory


//........................................................................//
//........................................................................//
                            Understanding Files
- linux doesnt use file extensions in command line 
- when we want to know what file format are our files we use file command
file Audio = mp4 (audio)
file .config = direcrtory (containg files)
file .ssr = directory (contains files)



//........................................................................//
//........................................................................//
                            Locating files
- locates files in our system (we are looking for fstab file and have no idea
    where it is located)
locate fstab (gives us everything that has fstab in it on our file system)
- locate uses database, we need to update that database
- command for updating database
sudo updatedb

                            which command
- you know what a command is but you dont know where it is or if it is installed
which cal = /usr/bin/cal (yes it is in the system in this directory)



//........................................................................//
//........................................................................//
                                History 
- bash keeps track of all the commands that you issued to the system
up arrow on the keyboard 
history (type in) and ender



//........................................................................//
//........................................................................//
            Making a directory, creating files, copy files 
mkdir VickyDir (creates directory)
touch VickyFile (creates file)
cp /.bashrc bashrc /copyies bashrc file into our currenty directory 
(wil make a copy that you are currently into)
mv bashrc Vickydir (moves bashrc file and moves it into Vickydir)
- remove command (there is no recicble bin, the data you remove are gone)
rm * (removes all the files in our directory)
rm file* (removes all the fiels that start with the word file)
-removing directories is different than files
rm -r (remove everything in the directory including other directories)
rmdir dir1 dir2 dir3 

//........................................................................//
//........................................................................//
                        listing file contents 
cat file1 (reads everything in a file)
cat >> file2 (anathing that cat comes up with i want it to stick to file2)
- we printed what we wrote to the text in the file 
- cat >> is used to create small text files fast 
cat file1 file2 
- outputs contents of file1 and under that file2 

                            more and less 
more file1 (pages throught a bunch of text in the terminal)
less file1 (shows less text but we can move through it, search contents ...)

                            editing files 
nano is the most used linux text bash editor 
you use nano file2 (opens up a file and you can edit contents of a file)




//........................................................................//
//........................................................................//
                                sudo 
- means super user do, has a total privilages on operating system
sudo updatedb (updates databes, and needs root privilages)
- in ubuntu to act as a root user for a while you can use:
sudo -s (for a minute or two)
- instead of Dollar sign behind our name is HASHTAG
- the rm command as a root will erase anything on a system
- su command changes you to another user
su - cindy (I want to become cindy and lead her settings)
su cindy (says that you are cindy but you are in your directory still)

su (attemptes you to log as a root user)
su - (root home directory)

sudo apt update (updates your system when you log in)



//........................................................................//
//........................................................................//
                            users
users (shows users of system)
id (shows all the important information about my account)




//........................................................................//
//........................................................................//
                            File permissions 
ls -l (shows all files with permissions)
----------
drwxrwxrwx = everyone has every permission and it is a directory 
drwx-rw-rw- = 
first is - or d 
- means this is file or directory
2-3-4 are rwx 
- means user rights read-write-execute
5-6-7 are rwx
- means group rights read-write-execute
8-9-10 are rwx
- means everyone rights read-write-execute

to change permissions are 
chmod +r file1

CTRL + c kills a command 
killall firefox (turns off)

