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