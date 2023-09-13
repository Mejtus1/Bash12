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