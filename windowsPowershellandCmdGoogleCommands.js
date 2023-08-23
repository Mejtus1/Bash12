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