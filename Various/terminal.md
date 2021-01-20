**cat: file contents**  
`cat <filename>` prints the file contents to the terminal. It can also be used to merge two files (concatenation).  

**cd**  
`cd` go back to the home directory  
`cd ..` go up one level  
`cd ../../dir_name` goes back two levels then down one level  

**clear terminal**  
`clear` clears all the text from the terminal.  

**copy**  
`cp <current location> <destination>`  
The copy can be renamed: specify the name on the destination.  

**create folder**  
`mkdir <foldername>` creates a new directory.


**echo**  
To write in a text file: `echo "this is the text" > example-filename`  
This also creates the file *example-filename* if it does not exist already.  
It will replace any text that is already there. With `echo "this is the text" >> example-filename` the text is not replaced.  

**grep to search**  
`grep <keyword>` can be used to search for a word in a file. It can also be used with regex.  
Combine `cat <filename>` with `|` (= pipe) and `grep <keyword>`: `cat Markdown.md | grep "text`. This will print the lines of the file where 'text' is used.  

**history**  
`history` will return a full list of commands that were used recently. These commands have an index number.  
With `!` plus the index number, the command of that index will run again.  


**less**  
`less <filename>` opens a viewer and makes it easy to scroll up and down through larger files. `q` closes the viewer.  

**list**  
`ls -R` shows full tree of directories etc.  
`ls -a` shows all folders and (hidden) files in folders.  

**more**  
`more <filename>` opens a viewer and makes it easy to scroll up (not down like you can do with `less`) through larger files.  
`q` closes the viewer. 

**move/rename**  
`mv` to rename a file or directory. The example renames folder static to tests:  
`mv terminal-exercises-1/src/static terminal-exercises-1/src/tests`

**nano**  
`nano` opens up the GNU nano terminal inside the terminal.  
`nano <filename>` opens the GNU terminal and shows the file.  
All commands start with Ctrl. Example: Ctrl x for save/exit.  

**pipe: |**  
`|` is used to funnel output or results from one program to the input of another: `input | output`.  
When used with `grep` it takes what is piped into it and matches patterns.

**pwd for current folder**  
`pwd` stands for print working directory and prints the path of the folder you are currently working in.  


**remove**  
`rm <filename>` will remove the file.
NB: `rm *` will remove **all** files.  
To remove files with a specific pattern: never put a space after *, always immediately put pattern after *.  
`rmdir <foldername>` will remove the folder.  
`rm -r <foldername>` removes folder, subdirectories, and files in all of these. `-r` stands for *recursive*.

