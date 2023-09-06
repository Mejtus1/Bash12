/*
Shell scriting basics 
A script is a list of commands that can be interpreted and run by a program called scripting language. 
Commands can be entered interactively at the command line, or listed line by line in a text file. 
Scripting languages are usually not compiled. They are interpreted at runtime.
You can use scripts for nearly any computational task including: 
- application integration
- plug-in 
- web application development
Shell script is an executable text file with an interpreter directive
interpreter directive = shebang directive:
#!interpreter (optional-arg)
"interpreter" - path to an executable program 
"optional argument" - single argument string 

Shell scripts are scripts that invoke a shell command 
#!/bin/sh
#!/bin/bash

there can be also python scripts 
python script directive
#!/usr/bin/env python3

Create the shell script: 
touch hello_world.sh = we create a hello_world.sh file 
                     = .sh indicates that file is an shell scirpt 

echo "#! /bin/bash" >> hello_world.sh
= turn your text file into a bash script by echoing the bash shebang, 
= and appending that echoed text to your file using the ‘double greater than symbol

echo "echo hello world" >> hello_world.sh 
= to redirect the output to the bash script 

to make it look complete here is code together:
touch hello_world.sh
echo "#! /bin/bash" >> hello_world.sh
echo "echo hello world" >> hello_world.sh 

Now we need to make our shell script executable 
ls -l hello_world.sh (file is -r and -w but it is not executable)
chmod +x hello_world.sh

Now we can run the bash script 
./hello_world.sh = output in command line is hello world

-----------------------------------------------------------------------
What is a shell variable?
Shell variables offer a powerful way to store and later access or modify information such as numbers, character strings, and other data structures by name. Let's look at some basic examples to get the idea.

Consider the following example.
$ firstname=Jeff
$ echo $firstname
Jeff
The first line assigns the value Jeff to a new variable called firstname. 
The next line accesses and displays the value of the variable, using the echo command along 
with the special character $ in front of the variable name to extract its value, which is the string Jeff.
Thus, we have created a new shell variable called firstname for which the value is Jeff.
This is the most basic way to create a shell variable and assign it to a value all in one step.
Reading user input into a shell variable at the command line´

Here's another way to create a shell variable, using the read command.
After entering
$ read lastname
on the command line, the shell waits for you to enter some text:

$ read lastname  
Grossman  
$ 
Now we can see that the value Grossman has just been stored in the variable lastname by the read command:

$ read lastname  
Grossman  
$ echo $lastname  
Grossman  


$ echo $firstname $lastname  
Jeff Grossman  

As you will soon see, the read command is particularly useful in shell scripting. You can use it within a shell script to prompt users to input information, which is then stored in a shell variable and available for use by the shell script while it is running. You will also learn about command line arguments, which are values that can be passed to a script and automatically assigned to shell variables.

--------------------------------------------------------------------------------------------
SCRIPTING BASICS 
# This script accepts the user\'s name and prints 
# a message greeting the user

# Print the prompt message on screen
echo -n "Enter your name :"	  	

# Wait for user to enter a name, and save the entered name into the variable \'name\'
read name				

# Print the welcome message followed by the name	
echo "Welcome $name"

# The following message should print on a single line. Hence the usage of \'-n\'
echo -n "Congratulations! You just created and ran your first shell script "
echo "using Bash on IBM Skills Network"

We save this script inside file greet.sh
then run command bash greet.sh

Enter your name :Mejtus
Welcome Mejtus
Congratulations! You just created and ran your first shell script using Bash on IBM Skills Network
- this is the output of our first script 



-------
Find the path to the interpreter
The which command helps you find out the path of the command bash
which bash = returns /bin/bash

#! /bin/bash we added this line which refferences our interpreter!!!!!!!!!!!!!!!!!!!!!!!
# This script accepts the user\'s name and prints 
# a message greeting the user

# Print the prompt message on screen
echo -n "Enter your name :"	  	

# Wait for user to enter a name, and save the entered name into the variable \'name\'
read name				

# Print the welcome message followed by the name	
echo "Welcome $name"

# The following message should print on a single line. Hence the usage of \'-n\'
echo -n "Congratulations! You just created and ran your first shell script "
echo "using Bash on IBM Skills Network"

After checking adding to our script we need to check and add executable permissions to our file
chmod +x greet.sh
chmod u+x greet.sh
ls -l greet.sh

At last we execute the script ./greet.sh
--------------------------------------------------------------------------------------
Exercise

create greetnew.sh file

#! /bin/bash
echo -n "Enter a first name :"
read firstname
echo -n "Enter a last name:"
read lastname
echo "Hello $firstname $lastname" 

output:
echo -n "Congratulations! You just created and ran your first shell script "
echo "using Bash on IBM Skills Network"
Enter a first name :Vicky
Enter a last name:Sev
Hello Vicky Sev
Congratulations! You just created and ran your first shell script using Bash on IBM Skills Network

---------------------------------------------------------------------------------------------
Filters, Pipes and variables
| - pipe command
- for chaining filter commands
command1 | command2 = output of command1 is input of command2

shell variables 
- scope limited to shell 
set = list all shell variables
set | head -4 = show first 4 shell commands

Defining shell variables
var_name=value examples:
GREETINGS="Hello"
echo $GREETINGS
AUDIENCCE="World"
echo $GREETINGS $AUDIENCE

unset var_name = deletes var_name
unset AUDIENCE = deletes audience variable 

Enviromental variables
- persist in any child processes spawned by the shell in which they originate
export var_name
export GREETINGS = makes GREETINGS an enviroment variable 
env = lists all environment variables
evn | grep "GREE" = outputs: GREETINGS="Hello"

What are pipes?
Put simply, pipes are commands in Linux which allow you to use the output of one command as the input of another.
[command 1] | [command 2] | [command 3] ... | [command n]

Pipe examples
sort - sorts the lines of text in a file and displays the result
uniq - prints a text file with any consecutive, repeated lines collapsed to a single line
sort pets.txt | uniq
Since sort sorts all identical items consecutively, and uniq removes all consecutive duplicates, 
combining the commands prints only the unique lines from pets.txt

Applying a command to strings and files
Some commands such as tr only accept standard input - normally text entered from your keyboard - but not strings or filenames.
tr (translate) - replaces characters in input text
tr [OPTIONS] [target characters] [replacement characters]

In cases like this, you can use piping to apply the command to strings and file contents.
With strings, you can use echo in combination with tr to replace all the vowels in a string with underscores _:
$ echo "Linux and shell scripting are awesome\!" | tr "aeiou" "_"
L_n_x _nd sh_ll scr_pt_ng _r_ _w_s_m_!

To perform the complement of the operation from the previous example - or to replace all the consonants (any letter that is not a vowel) with an underscore - you can use the -c option:
$ echo "Linux and shell scripting are awesome\!" | tr -c "aeiou" "_"
_i_u__a_____e______i__i___a_e_a_e_o_e_

With files, you can use cat in combination with tr to change all of the text in a file to uppercase as follows:
$ cat pets.txt | tr "[a-z]" "[A-Z]"
GOLDFISH
DOG
CAT
PARROT
DOG
GOLDFISH
GOLDFISH

The possibilities are endless! For example, you could add uniq to the above pipeline to only return unique lines in the file, like so:
$ sort pets.txt | uniq | tr "[a-z]" "[A-Z]"
CAT
DOG
GOLDFISH
PARROT

Extracting information from URLs
You can also use curl in combination with the grep command to extract components of URL data by piping the output of curl to grep.
Let's see how you can use this pattern to get the current price of Bitcoin (BTC) in USD.
First, find a public URL API. In this example, you will use one provided by CoinStats.
CoinStats provides a public API with no key required at https://api.coinstats.app/public/v1/coins/bitcoin\?currency\=USD, which returns some JSON about the current BTC price in USD.
You can see what this looks like by entering the above link in your browser.
Entering the following command returns the BTC price data, displayed as a JSON object:

$ curl -s --location --request GET https://api.coinstats.app/public/v1/coins/bitcoin\?currency\=USD
{
  "coin": {
    "id": "bitcoin",
    "icon": "https://static.coinstats.app/coins/Bitcoin6l39t.png",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "price": 57907.78008618953,
    "priceBtc": 1,
    "volume": 48430621052.9856,
    "marketCap": 1093175428640.1146,
    "availableSupply": 18877868,
    "totalSupply": 21000000,
    "priceChange1h": -0.19,
    "priceChange1d": -0.4,
    "priceChange1w": -9.36,
    "websiteUrl": "http://www.bitcoin.org",
    "twitterUrl": "https://twitter.com/bitcoin",
    "exp": [
      "https://blockchair.com/bitcoin/",
      "https://btc.com/",
      "https://btc.tokenview.com/"
    ]
  }
}

Note: For the purpose of this reading, we've reformatted the output to make it easier to interpret. The actual output is a continuous stream of text.

The JSON field you want to grab here is "price": [numbers].[numbers]". To get this, you can use the following grep command to extract it from the JSON text:
grep -oE "\"price\"\s*:\s*[0-9]*?\.[0-9]*"
Let's break down the details of this statement:
-o tells grep to only return the matching portion
-E tells grep to be able to use extended regex symbols such as ?
\"price\" matches the string "price"
\s* matches any number (including 0) of whitespace (\s) characters
: matches :
[0-9]* matches any number of digits (from 0 to 9)
?\. optionally matches a .
Now that you have the grep statement that you need, you can pipe the BTC data to it using the curl command from above:

$ curl -s --location --request GET https://api.coinstats.app/public/v1/coins/bitcoin\?currency\=USD |\
    grep -oE "\"price\":\s*[0-9]*?\.[0-9]*"
"price": 57907.78008618953

Tip: The backslash \ character used here after the pipe | allows you to write the expression on multiple lines.

Finally, to get only the value in the price field and drop the "price" label, you can use chaining to pipe the same output to another grep:
$ curl -s --location --request GET https://api.coinstats.app/public/v1/coins/bitcoin\?currency\=USD |\
    grep -oE "\"price\":\s*[0-9]*?\.[0-9]*" |\
    grep -oE "[0-9]*?\.[0-9]*"
57907.78008618953

This now displays only the numerical price without the label.

Useful Features of the Bash Shell

Metacharacters
Metacharacters are characters having special meaning that the shell interprets as instructions.

Metacharacter	Meaning
#	Precedes a comment
;	Command separator
*	Filename expansion wildcard
?	Single character wildcard in filename expansion

Pound #
The pound # metacharacter is used to represent comments in shell scripts or configuration files. Any text that appears after a # on a line is treated as a comment and is ignored by the shell.
#!/bin/bash
# This is a comment
echo "Hello, world!"  # This is another comment
Comments are useful for documenting your code or configuration files, providing context, and explaining the purpose of the code to other developers who may read it. It's a best practice to include comments in your code or configuration files wherever necessary to make them more readable and maintainable.

Semicolon ;
The semicolon ; metacharacter is used to separate multiple commands on a single command line. When multiple commands are separated by a semicolon, they are executed sequentially in the order they appear on the command line.
$ echo "Hello, "; echo "world!"
Hello,
world!
As you can see from the example above, the output of each echo command is printed on separate lines and follows the same sequence in which the commands were specified.
The semicolon metacharacter is useful when you need to run multiple commands sequentially on a single command line.

Asterisk *
The asterisk * metacharacter is used as a wildcard character to represent any sequence of characters, including none.
ls *.txt
In this example, *.txt is a wildcard pattern that matches any file in the current directory with a .txt extension. The ls command lists the names of all matching files.

Question mark ?
The question mark ? metacharacter is used as a wildcard character to represent any single character.
ls file?.txt
In this example, file?.txt is a wildcard pattern that matches any file in the current directory with a name starting with file, followed by any single character, and ending with the .txt extension.


Quoting
Quoting is a mechanism that allows you to remove the special meaning of characters, spaces, or other metacharacters in a command argument or shell script. You use quoting when you want the shell to interpret characters literally.

Symbol	Meaning
\	Escape metacharacter interpretation
" "	Interpret metacharacters within string
' '	Escape all metacharacters within string

Backslash \
The backslash character is used as an escape character. It instructs the shell to preserve the literal interpretation of special characters such as space, tab, and $. For example, if you have a file with spaces in its name, you can use backslashes followed by a space to handle those spaces literally:
touch file\ with\ space.txt

Double quotes " "
When a string is enclosed in double quotes, most characters are interpreted literally, but metacharacters are interpreted according to their special meaning. For example, you can access variable values using the dollar $ character:
$ echo "Hello $USER"
Hello <username>

Single quotes ' '
When a string is enclosed in single quotes, all characters and metacharacters enclosed within the quotes are interpreted literally. Single quotes alter the above example to produce the following output:
$ echo 'Hello $USER'
Hello $USER
Notice that instead of printing the value of $USER, single quotes cause the terminal to print the string "$USER".


Input/Output redirection
Symbol	Meaning
>	Redirect output to file, overwrite
>>	Redirect output to file, append
2>	Redirect standard error to file, overwrite
2>>	Redirect standard error to file, append
<	Redirect file contents to standard input

Input/output (IO) redirection is the process of directing the flow of data between a program and its input/output sources.
By default, a program reads input from standard input, the keyboard, and writes output to standard output, the terminal. However, using IO redirection, you can redirect a program's input or output to or from a file or another program.

Redirect output >
This symbol is used to redirect the standard output of a command to a specified file.
ls > files.txt will create a file called files.txt if it doesn't exist, and write the output of the ls command to it.
Warning: When the file already exists, the output overwrites all of the file's contents!

Redirect and append output >>
This notation is used to redirect and append the output of a command to the end of a file. For example,
ls >> files.txt appends the output of the ls command to the end of file files.txt, and preserves any content that already existed in the file.

Redirect standard output 2>
This notation is used to redirect the standard error output of a command to a file. For example, if you run the ls command on a non-existing directory as follows,
ls non-existent-directory 2> error.txt the shell will create a file called error.txt if it doesn't exist, and redirect the error output of the ls command to the file.
Warning: When the file already exists, the error message overwrites all of the file's contents!

Append standard error 2>>
This symbol redirects the standard error output of a command and appends the error message to the end of a file without overwriting its contents.
ls non-existent-directory 2>> error.txt will append the error output of the ls command to the end of the error.txt file.

Redirect input <
This symbol is used to redirect the standard input of a command from a file or another command. For example,
sort < data.txt will sort the contents of the data.txt file.

Command Substitution
Command substitution allows you to run command and use its output as a component of another command's argument. 
Command substitution is denoted by enclosing a command in either backticks (`command`) or using the $() syntax. When the encapsulate command is executed, 
its output is substituted in place, and it can be used as an argument within another command. This is particularly useful for automating tasks that require the use of a command's output as input for another command.
For example, you could store the path to your current directory in a variable by applying command substitution on the pwd command, 
then move to another directory, and finally return to your original directory by invoking the cd command on the variable you stored, as follows:

$ here = $(pwd)
$ cd path_to_some_other_directory
$ cd $here
Command Line Arguments
Command line arguments are additional inputs that can be passed to a program when the program is run from a command line interface. These arguments are specified after the name of the program, and they can be used to modify the behavior of the program, provide input data, or provide output locations. Command line arguments are used to pass arguments to a shell script.
For example, the following command provides two arguments, arg1, and arg2, that can be accessed from within your Bash script:
$ ./MyBashScript.sh arg1 arg2




Introduction to Advanced Bash Scripting

Conditionals
Conditionals, or if statements, are a way of telling a script to do something only under a specific condition.
Bash script conditionals use the following if-then-else syntax:

if [ condition ]
then
    statement_block_1  
else
    statement_block_2  
fi

If the condition is true, then Bash executes the statements in statement_block_1 before exiting 
the conditional block of code. After exiting, it will continue to run any commands after the closing fi.
Alternatively, if the condition is false, Bash instead runs the statements in statement_block_2 under the else line, 
then exits the conditional block and continues to run commands after the closing fi.

In the following example, the condition is checking whether the number of command-line arguments read by some Bash script, $#, is equal to 2.
if [[ $# == 2 ]]
then
  echo "number of arguments is equal to 2"
else
  echo "number of arguments is not equal to 2"
fi
(Notice the use of the double square brackets, which is the syntax required for making integer comparisons in the condition [[ $# == 2 ]].)

You can also make string comparisons. For example, assume you have a variable called string_var that has the value "Yes" assigned to it. Then the following statement evaluates to true:
`[ $string_var == "True" ]`
Notice you only need single square brackets when making string comparisons.

You can also include multiple conditions to be satified by using the "and" operator && or the "or" operator ||. For example:
if [ condition1 ] && [ condition2 ]
then
    echo "conditions 1 and 2 are both true"
else
    echo "one or both conditions are false"
fi

if [ condition1 ] || [ condition2 ]
then
    echo "conditions 1 or 2 are true"
else
    echo "both conditions are false"
fi


Logical operators
The following logical operators can be used to compare integers within a condition in an if condition block.
==: is equal to

If a variable a has a value of 2, the following condition evaluates to true; otherwise it evalutes to false.
$a == 2

!=: is not equal to
If a variable a has a value different from 2, the following statement evaluates to true. If its value is 2, then it evalutes to false.
a != 2


<=: is less than or equal to
If a variable a has a value of 2, then the following statement evaluates to true:
a <= 3

and the following statement evalutates to false:
a <= 1

Alternatively, you can use the equivalent notation -le in place of <=:
a=1
b=2
if [ $a -le $b ]
then
   echo "a is less than or equal to b"
else
   echo "a is not less than or equal to b"
fi



Arithmetic calculations
You can perform integer addition, subtraction, multiplication, and division using the notation $(()).
For example, the following two sets of commands both display the result of adding 3 and 2.

echo $((3+2))
or
a=3
b=2
c=$(($a+$b))
echo $c

Bash natively handles integer arithmetic but does not handle floating-point arithmetic. 
As a result, it will always truncate the decimal portion of a calculation result.
For example:
echo $((3/2))
prints the truncated integer result, 1, not the floating-point number, 1.5.

The following table summarizes the basic arithmetic operators:
Symbol	Operation
+	addition
-	subtraction
*	multiplication
/	division

Arrays
The array is a Bash built-in data structure.
An array is a space-delimited list contained in parentheses.
To create an array, declare its name and contents:

my_array=(1 2 "three" "four" 5)
This statement creates and populates the array my_array with the items in the parentheses: 1, 2, "three", "four", and 5.

You can also create an empty array by using:
declare -a empty_array
If you want to add items to your array after creating it, you can add to your array by appending one element at a time:

my_array+="six"
my_array+=7
This adds elements "six" and 7 to the array my_array.

By using indexing, you can access individual or multiple elements of an array:

# print the first item of the array:
echo ${my_array[0]}
# print the third item of the array:
echo ${my_array[2]}
# print all array elements:
echo ${my_array[@]}

FOR LOOPS
You can use a construct called a for loop along with indexing to iterate over all elements of an array.
For example, the following for loops will continue to run over and over again until every element is printed:

for item in ${my_array[@]}; do
echo $item
done

or

for i in ${!my_array[@]}; do
  echo ${my_array[$i]}
done

The for loop requires a ; do component in order to cycle through the loop. Additionally, 
you need to terminate the for loop block with a done statement.

Another way to implement a for loop when you know how many iterations you want is as follows. 
For example, the following code prints the number 0 through 6.

N=6
for (( i=0; i<=$N; i++ )) ; do
  echo $i
done

You can use for loops to accomplish all sorts of things. For example, you could count the number of items in an array or sum up its elements, as the following Bash script does:

#!/usr/bin/env bash
# initialize array, count, and sum
my_array=(1 2 3)
count=0
sum=0
for i in ${!my_array[@]}; do
  # print the ith array element
  echo ${my_array[$i]}
  # increment the count by one
  count=$(($count+1))
  # add the current value of the array to the sum
  sum=$(($sum+${my_array[$i]}))
done
echo $count
echo $sum

------------------------------------------------------------------------------------
Creating bash script 

Using conditional statements and logical operators
1. Creating new bash script
echo '#!/bin/bash' > conditional_script.sh      creating bash file 
chmod u+x conditional_script.sh                 make it executable 
2.Use a conditional block to select a response for the user
#!/bin/bash

echo 'Are you enjoying this course so far?'
echo -n "Enter \"y\" for yes, \"n\" for no"
read response
if [ "$response" == "y" ]
then
    echo "I'm pleased to hear you are enjoying the course!"
    echo "Your feedback regarding what you have been enjoying would be most welcome!"
elif [ "$response" = "n" ]
then
   echo "I'm sorry to hear you are not enjoying the course."
   echo "Your feedback regarding what we can do to improve the learning experience"
   echo "for this course would be greatly appreciated!"
else
   echo "Your response must be either 'y' or 'n'."
   echo "Please re-run the script to try again."
fi

Performing basic mathematical calculations and numerical logical comparisons
1.Create a Bash script
#!/bin/bash

echo -n "Enter an integer: "
read n1
echo -n "Enter another integer: "
read n2

sum=$(($n1+$n2))
product=$(($n1*$n2))

echo "The sum of $n1 and $n2 is $sum"
echo "The product of $n1 and $n2 is $product."

2.Add logic to your script
echo "The sum of $n1 and $n2 is $sum"
echo "The product of $n1 and $n2 is $product."
if [ $sum -lt $product ]
then
   echo "The sum is less than the product."
elif [[ $sum == $product ]]
then
   echo "The sum is equal to the product."
elif [ $sum -gt $product ]
then
   echo "The sum is greater than the product."
fi

---------------------------------------------------------------------------
Crontab
Crontab is Linux based application for scheudeling jobs 
- it allows you to schedule jobs automatically at certain times
- examples: load script at midnight every night 
            Backup script to run every Sunday at 2AM 
What is Cron, Crond and Crontab? 
- Cron = service that runs jobs
- Crond interprents "crontab files" (deamon)
- Crontab = file containing jobs and schedule data

Allowed values:
minute	0-59
hour	0-23, 0 = midnight
day	1-31
month	1-12
weekday	0-6, 0 = Sunday

crontab -e (opens editor)
Job syntax
  m  h  dom  mon  dow  command
 30 15  *    *     0   date >> sundays.txt (append the current day to the file sundays.txt at 15:30 every sunday)

Example: 
30 15 * * 0 date >> path/sunday.txt
(append the current date to the file sundays.txt at 15:30 every sunday)
0 0 * * * /cron_scripts/load_data.sh
(specifies a load datashell script to run at midnight every dat)
0 2 * * 0 /cron_scripts/backup_data.sh
(run the backup data shell script at 2:00AM on sundays)
next: CTRL+X to exit the editor and enter Y = yes save

---------------------------------------------------------------------------
Exercise
theia@theia-matuschmel13:/home/project$ crontab -l
no crontab for theia

theia@theia-matuschmel13:/home/project$ crontab -e
no crontab for theia - using an empty one
crontab: installing new crontab

theia@theia-matuschmel13:/home/project$ crontab -l
# Edit this file to introduce tasks to be run by cron.
# 
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
# 
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').# 
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
# 
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
# 
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
# 
# For more information see the manual pages of crontab(5) and cron(8)
# 
# m h  dom mon dow   command
0 21    *   *   *    echo "Welcome to cron" >> /tmp/echo.txt


touch diskusage.sh
inside: 
#! /bin/bash
# print the current date time
date
# print the disk free statistics
df -h

chmod u+x diskusage.sh
theia@theia-matuschmel13:/home/project$ ./diskusage.sh
Tue Sep  5 11:41:51 EDT 2023
Filesystem      Size  Used Avail Use% Mounted on
overlay          98G   57G   37G  61% /
tmpfs            64M     0   64M   0% /dev
tmpfs            16G     0   16G   0% /sys/fs/cgroup
/dev/vda2        98G   57G   37G  61% /etc/hosts
shm              64M     0   64M   0% /dev/shm
tmpfs            28G   16K   28G   1% /run/secrets/kubernetes.io/serviceaccount
tmpfs            16G     0   16G   0% /proc/acpi
tmpfs            16G     0   16G   0% /proc/scsi
tmpfs            16G     0   16G   0% /sys/firmware

theia@theia-matuschmel13:/home/project$ crontab -e
crontab: installing new crontab

theia@theia-matuschmel13:/home/project$ crontab -l
# Edit this file to introduce tasks to be run by cron.
# 
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
# 
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').# 
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
# 
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
# 
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
# 
# For more information see the manual pages of crontab(5) and cron(8)
# 
# m h  dom mon dow   command
0 21    *   *   *    echo "Welcome to cron" >> /tmp/echo.txt
0 0 * * * /home/project/diskusage.sh >>/home/project/diskusage.log
theia@theia-matuschmel13:/home/project$ 

removes all your cron jobs
crontab -r

Create a cron job that runs the task date >> /tmp/everymin.txt every minute
crontab -e
* * * * * date >> /tmp/everymin.txt

---------------------------------------------------------------------------
Cheat Sheet

Bash shebang
#!/bin/bash

Get the path to a command
which bash

Pipes, filters, and chaining
Chain filter commands together using the pipe operator:
ls | sort -r

--
Pipe the output of manual page for ls to head to display the first 20 lines:
man ls | head -20

Use a pipeline to extract a column of names from a csv and drop duplicate names:
cut -d "," -f1 names.csv | sort | uniq

--
Working with shell and environment variables:

List all shell variables:
set

Define a shell variable called my_planet and assign value Earth to it:
my_planet=Earth

Display value of a shell variable:
echo $my_planet

Reading user input into a shell variable at the command line:
read first_name

Tip: Whatever text string you enter after running this command gets stored as the value of the variable first_name.

List all environment variables:
env

Environment vars: define/extend variable scope to child processes:
export my_planet
export my_galaxy='Milky Way'

--
Metacharacters
Comments #:
# The shell will not respond to this message

Command separator ;:
echo 'here are some files and folders'; ls

File name expansion wildcard *:
ls *.json

Single character wildcard ?:
ls file_2021-06-??.json

--
Quoting
Single quotes '' - interpret literally:
echo 'My home directory can be accessed by entering: echo $HOME'

Double quotes "" - interpret literally, but evaluate metacharacters:
echo "My home directory is $HOME"

Backslash \ - escape metacharacter interpretation:
echo "This dollar sign should render: \$"

--
I/O Redirection

Redirect output to file and overwrite any existing content:
echo 'Write this text to file x' > x

Append output to file:
echo 'Add this line to file x' >> x

Redirect standard error to file:
bad_command_1 2> error.log

Append standard error to file:
bad_command_2 2>> error.log

Redirect file contents to standard input:
$ tr “[a-z]” “[A-Z]” < a_text_file.txt

The input redirection above is equivalent to:
$cat a_text_file.txt | tr “[a-z]” “[A-Z]”

--
Command Substitution

Capture output of a command and echo its value:
THE_PRESENT=$(date)

echo "There is no time like $THE_PRESENT"
Capture output of a command and echo its value:
echo "There is no time like $(date)"

Command line arguments

./My_Bash_Script.sh arg1 arg2 arg3
Batch vs. concurrent modes

Run commands sequentially:
start=$(date); ./MyBigScript.sh ; end=$(date)

Run commands in parallel:
./ETL_chunk_one_on_these_nodes.sh  & ./ETL_chunk_two_on_those_nodes.sh

Scheduling jobs with cron
Open crontab editor:
crontab -e

Job scheduling syntax:
m  h  dom  mon  dow   command
(minute, hour, day of month, month, day of week)


Append the date/time to a file every Sunday at 6:15 pm:
15 18 * * 0 date >> sundays.txt

Run a shell script on the first minute of the first day of each month:
1  0 1 * * ./My_Shell_Script.sh

Back up your home directory every Monday at 3:00 am:
0 3 * * 1  tar -cvf my_backup_path\my_archive.tar.gz $HOME\

Deploy your cron job:
Close the crontab editor and save the file.

List all cron jobs:
crontab -l

Conditionals
if-then-else syntax:

if [[ $# == 2 ]]
then
  echo "number of arguments is equal to 2"
else
  echo "number of arguments is not equal to 2"
fi

'and' operator &&:

if [ condition1 ] && [ condition2 ]
'or' operator ||:
if [ condition1 ] || [ condition2 ]

Logical operators
==	is equal to
!=	is not equal to
<	is less than
>	is greater than
<=	is less than or equal to
>=	is greater than or equal to

Arithmetic calculations
Integer arithmetic notation:
$(())

Basic arithmetic operators:
Symbol	Operation
+	addition
-	subtraction
*	multiplication
/	division

Display the result of adding 3 and 2:
echo $((3+2))

Negate a number:
echo $((-1*-2))

Arrays
Declare an array that contains items 1, 2, "three", "four", and 5:

my_array=(1 2 "three" "four" 5)
Add an item to your array:

my_array+="six"
my_array+=7

Declare an array and load it with lines of text from a file:
my_array=($(echo $(cat column.txt)))

for loops
Use a for loop to iterate over values from 1 to 5:
for i in {0..5}; do
    echo "this is iteration number $i"
done
Use a for loop to print all items in an array:
for item in ${my_array[@]}; do
  echo $item
done

Use array indexing within a for loop, assuming the array has seven elements:
for i in {0..6}; do
    echo ${my_array[$i]}
done