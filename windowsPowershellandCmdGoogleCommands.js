/*
Windows cmd / powershell commands 

type cmd to search on left and it opens command prompt 
type windows powershell on the left down ant it opens windows powershell 

Absolute path - starts in main directory 
Relative path - starts in actual directory 

tap completion - write . d and tap (it will give you examples in your pc with starting in d) 

Symbols 
~ (wave symbol) 
* (Asterisk symbol) 
> (greater than operator)
| (pipe operator) 
’ (quotes)
' (apostrophe) 
" (quotation marks) 

--------------------------------------------------------------------------------------------------------------------
1. Ipconfig
2. Ipconfig /all 
3. ls C:\ (shows directories in my C: drive)(priecinky v cecku disku)
4. Get-help ls
5. Get-help ls -Full
6. pwd (shows in what directory you are currently in) 
7. cd (change directory) 
BUT it needs to be written like this(to specify where we wanna go): 
cd C:\Users\Matus\documents
8. cd .. (sends us to parent directory, one above in which we currently are) so we will be in: 
C:\Users\Matus (documents are out we get back to our parent directory) 
(.. dotdot is a realative path, it takes you up one level realtive to where you are) 
9. cd .. ~\Desktop (sends us exactly right away to the C:\Desktop directory
10. mkdir + name of directory(creates directory, (quotes around name of directory(folder) when we want a space in file name) 
11. history (shows history) 
12. clear (clears output on our screen, it doesnt wipe a history

13. cp (copy file) (we need to specify what to copy and where) (for example select all .jpg files and where to copy them) 
cp *.jpgC:\Users\Matus\Documents\jpg.files 
-Recurse (takes everything inside directory (file) and copies it even if there are directories in directories, it is used with cp command) 
-Verbose (outputs one line for each directory being copied)
example: cp Bird Pictures C:\Users\Matus\Desktop -Recurse -Verbose (directory and all contetnts are copied to the desktop) 
14.mv (renames document) - mv\Document.txt \Thisisnotdocument.txt
15. rm (remove files or directories !ONCE the files are removed they cant be brought back)

File and text Manipulation 
16. cat (concatenate), example: cat .\linux.txt (.\foldername.txt) opens up contents of our shell 
17. more (is used after cat when shell is too big, you can navigate than throught file with enter - one line and space advances the file 
by one page, page is structured from size of your terminal window. When you want to leave the file hit q key. 
18. cat + -hat10 (-hat10 is used at the end of command) to view only header of the file (it shows first 10 lines of the line)
18. cat + -tail10 (-tail10 shows us last 10 lines of text in shell) 
examples: cat .\linux.txt -hat10 ......................... cat .\linux.txt -tail10
19. start + program name we want to open the file with + file name (starts program and opens folder we choose) 
example: start notepad linux.txt

Difference betweeen cmd commands and powershell commands 
Get-Help (powershell command) 
/? (cmd command) 
both mean the same thing 

Search files, documents and programs in your computer 
Ctrl f - searches words in document 
You'll see the Indexing Options in your results of the search, click on that. 
Now you want to change the settings for the user folder which is where all the home directories are stored. 
Select Users and then click Advanced.
Now select the File Types tab, and select Index Properties and File Contents.
1. Notepad++ search ( If you don't want to use the Windows Search Service, we can also use Notepad++, the editor that we 
installed in an earlier lesson. From Notepad++, press Ctrl+Shift+F to open the Find in Files dialog.
20.POWERSHELL searching sls (searches for strings (strings = text)) 
we write it like this: Select-String + word we are looking for + place where we want to look it up 
Select-String linux Linux.txt 
We can use * to search in all documents (for example .txt or ........) 
Select-String linux *

21. -FIlter (filter parameter when we want to look for example for specific file, text or 
ls C:\Users\matus\Desktop -Recurse -Filter *.exe
ls opens our users-matus-desktop, recurse looks inside of everything, filter filters our next command which is *.exe

Input, Output, Pipeline 
I/O streams = Input/Output streams 
each process in windows has 3 different streams 
a) standard in (stdin) - you provide input to the process (flows into the process) 
b) standard out (stdout) - when process creates output, it adds data to the standard out stream (flows out of the process)
c) standard error (stderr)
At the CLI, the input that you provide through the keyboard goes to the standard in stream of the process 
that you're interacting with. This happens whether that's PowerShell, a text editor, or anything else. 
The process then communicates back to you by putting data into the Standard out stream, 
which the CLI writes out on the screen that you're looking at.

> (greater than operator) operator that lets us change where we want our standard output to go. 
Instead of sending standard out to the screen, we can send a standard out to a file. 
If the file exists, it'll overwrite it for us. Otherwise, it'll make a new file.

>> (greater than, greater than operator) If we don't want to overwrite an existing file, 
there's another redirector operator we can use to append information, greater than, greater than.

22. echo (in powershell echo is alias for write output) 
echo woof > \dog.txt (overwrites what in our folder that we choose and writes there our input) 
echo woof >> \dog.txt (adds another woof to the folder that we chhose and doesnt overwrite data inside of it) 

| (pipe operator) sends the output of one command to the input of another command

Example: (taking together several simple tools and combining them together to do complex tasks)
- (we have a .txt document) words.txt - it contaings 4 words = street, tree, blast, last 
Now if we want to combine several tasks we use PIPE OPERATOR:
cat words.txt | Select-String st (this takes output of words.txt and prints it in powerschell thanks to our second command SLS - words 
containing st) 
Now what we can do is this: 
cat words.txt | Select-String st > st_words.txt 
(we add greater than operator that takes our output and sends 
it to the destination we choose, if the destination file is non existent in computer it will be created.)

1> stdout output 
2> stderr error output 

Last is stderr (standar error) 

$null special variable that contains the definition of nothing. You can think of it as a black hole for the purposes of redirection. 
So let's redirect the error messages this time to $null. We use $Null when we dant want our error messages to be sent to a file.
rm secure_file 2> $null. 
Now, our output is filtered from error messages.
When we want to delete secure files we get error messages, we can throw away these error messages or send them to other output 
rm secure_file 2> errors.txt (sending error messages to new file) 

CLI = command line interface 

23. Get-LocalUser (shows users of the computer and their place in hierarchy - administratr, user......) 
24. Get-LocalGroup (shows a list of local groups on the machine) 
25. Get-LocalGroupMember (When you want to look into specific group) 
Get-LocalGroupMember Administrators (Shows who is in the administrators group) 
26. Net User Name * (changes password for user) Name = your name on the pc as user 
27. net User Name /logonpasswordchg:yes ((You are administrator)Forces User to change their password on their next log on) 
/logonpasswordchg:yes
28. net user name * /add (adds a user to our System) practical example: 1.net user Adria * /add 2.net user Adria /logonpasswordchg:yes
(So we create in powershell adrias account for our system and then add command for her to change her password next time she logs in)
29. net user name /del (removing users from system) 
Remove-LocalUser Name (----)
30. icacls C:\Users\matus\Desktop\ (shows who has access to the desktop) 
31. icacls /? (shows and explains shortened meanings from icacls above) 
examples are: F - full access, (OI) - object inherit, (CI) - container inherit 
(If I create new files or objects inside my Desktop folder, they'll inherit this DACL.)
N - no access
F - full access
M - modify access
RX - read and execute access
R - read-only access
W - write-only access
D - delete access
32. icacls ’C:\Folder Name\’ /grant ’Everyone(OR)(CI)(R)’ (Grants specific rights to other users or system to the folder) 
example: (after we add rights we can check them with previous commands (30.)) icacls ’C:\Folder Name’ (shows who has rights to specific folder) 
33. icacls ’C:\Folder Name\’ /grant ’Authenticated Users(OR)(CI)(R)’ (grands specific rights to the specific users which are authenticated
users in this example)
34. icacls ’C:\Folder Name\’ /remove Everyone (Removes every ones rights and only one left are administrators) 
35. icacls C:\Windows\Temp  (This directory is used to hold temporary files for all users in the system.)
WD, or create files like data, AD, create folders and append data, and S for synchronize.
creator owner is a special user that represents the owner of whichever file the DACL applies to. 
In this directory, and all subdirectories, whoever owns a file or folder has full control of it. 

-------------------------------------------------------------------------------------------------------------------------------
SOFTWARE DISTRIBUTION 
Running exe files from the command line is pretty simple.
You could also just type the absolute path of the exe from wherever you are in the file system, like this:
C:\users\matus\desktop\hello.exe. 
36. Compress-archive -Path C:\users\matus\FileName ~\Desktop\NewArchiveName.zip (It takes everything from the first file and compresses
it to the archive file .zip, .rar. or tar) 
we have many archive types but typical ones are .zip, .rar. tar 
Archives help us take, send or recieve many files in one single file bundled together. 

--------------------------------------------------------------------------------------------------
Package Managers 
37. Find-Package sysinternals -IncludeDependencies (it is used for finding package installing software and its dependencies on our PC) 
38. Install-Package -name sysinternals (Install our choosen package which was in our example Chocolatey)  
39. Get-Packege -name sysinternals (shows installed packages, we can check with this command if package is in place) 
40. Uninstall-Package -name sysinternals (Uninstalls package from our system) 

------------------------------------------------------------------------------------------------
Devices Drivers and software management 
driver is used to help our hardware devices interact with our operating system. In Windows, Microsoft groups all of the devices 
and drivers on the computer together in a single Microsoft management console called the Device Manager. Most vendors or 
computer hardware manufacturers will assign a special string of characters to their devices called a hardware ID. When Windows notices 
that a new device has been connected, the first thing it'll do is ask the device that's been plugged in for its hardware ID.
Once Windows has the new device's hardware ID, the OS uses it to search for the right driver for the device.
