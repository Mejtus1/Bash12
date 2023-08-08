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