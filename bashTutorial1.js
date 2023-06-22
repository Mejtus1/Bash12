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
