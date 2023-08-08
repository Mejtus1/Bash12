/*
Useful Commands for Wrangling Text Files
sort (sort lines in a file) = sorts contents of a file alphabetically
sort pets.txt
uniq(unique) = filter out repeated lines

grep (global regular expression print) = return lines in file matching pattern
grep ch people.txt = find all lines that contain ch characters
grap -i ch people.txt = -i expands pattern search by making it case insensitive

cut - extract a field from each line 
cut -d " " -f2 people.txt (people.txt = names of people each on new line) -d
-d " " specify that character that creates a break between fields is a space
-f2 specifies the second field from each line (returns last name of each person in the file.txt)
paste - merge lines from different files
paste first.txt last.txt yob.txt
outputs: Alan Touring 1912
         Bjarne Stratoustup 1950
paste -d "," first.txt last.txt yob.txt
outputs: Alan,Touring,1912
         Bjarne,Stratoustup,1950

Networking commands 
hostname - print host name 
hostname -i = provides IP address of host device

ifconfig (interface configuration) - display or configure the system network interfaces
ifconfig eth0 (specified ethernet adapter information)

ping - send ICMP packets to URL and print response 
ping google.com (ping returs a line of info for each succesfull response to an echo request)
= after that is responds with statistics of a given command

curl (client URL) transfer data to and from URLs
curl www.google.com = returns the entire landing page contenct of www.google.com using HTTP protocol
curl www.google.com -o google.txt (we can store contents of a URL to a local file (google.txt))

wget (web get) - download files from a URL 
wget https://www.google.com/TR/PNG/iso_8859/
= while downloading it shows us the IP address of server from which we are downloading, 
HTTP request status, packet length and where is the downloading file saved



File archiving and Compression Commands 
Archiving is a process of storing information and preserving it 
it is a collection of data files and directories stored as a single file 
file compression 
reduces file size by reducing information redundancy
preserves storage space, speeds up data transfer and reduces bandwidth load

ls -r = directory tree (shows directories with all its subdirectories)
Archive
tar (tape archiver) - archive and exract files
tar -cf notes.tar notes (we have notes file with its subdirectories math and phisics)
tar -czf notes.tar.gz notes = ensures that windows based system will recognize the fille tpye 
tar -tf notes.tar = lists all archived folder with subdirectories
tar -xf notes.tar notes = -x option tells tar to extract files and folders 
tar -xzf notes.tar.gz notes = decompress the gz file 
File compression and archiving 
zip = Compress files and directories to an archive 
zip compress than bundle 
tar bundle than compress
zip -r notes,zip notes = zip notes 
unzip notes.zip 


