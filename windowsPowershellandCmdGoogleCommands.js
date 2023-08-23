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
