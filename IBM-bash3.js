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
