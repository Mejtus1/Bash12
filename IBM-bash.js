//Introduction to linux



/*
Special paths
~	home directory
/	root directory
.	present working directory
..	parent of present working directory

----------------------------------------------------
ls
List files and directories in the current directory:

List files and directories in a directory:
ls path_to_directory

pwd
Return path to present working directory:

cd child_directory_name
Change the current directory to a subdirectory:
(Because cd looks in the current directory for child_directory_name, you don’t need to type the entire path.)
----------------------------------------------------
Change the current directory:
Up one level: cd ../
To home: cd ~ or cd
To some other directory: cd path_to_directory
Change the current directory back to the directory you were in previously: cd -
----------------------------------------------------
Upgrading and installing packages
Fetch and display up-to-date information about all upgradable packages:
sudo apt update

Upgrade to the latest supported version of nano:
sudo apt upgrade nano

Install Vim:
sudo apt install vim
----------------------------------------------------
Creating and editing files

Create a new text file and open it with nano:
nano file_name.txt
*/